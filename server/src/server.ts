/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */
import {
	createConnection,
	TextDocuments,
	Diagnostic,
	DiagnosticSeverity,
	ProposedFeatures,
	InitializeParams,
	DidChangeConfigurationNotification,
	CompletionItem,
	CompletionItemKind,
	TextDocumentPositionParams,
	TextDocumentSyncKind,
	InitializeResult,
	createServerPipeTransport
} from 'vscode-languageserver/node';

import {
	TextDocument,
	Position
} from 'vscode-languageserver-textdocument';

import { CharStreams, CommonTokenStream } from 'antlr4ts';
import { PLexer } from './parser/PLexer';
import { PParser } from './parser/PParser';
import { PVisitor } from './parser/PVisitor';
import { ErrorListener } from './parser/ErrorListener';
import {CodeCompletionCore, ScopedSymbol, SymbolTable, VariableSymbol} from "antlr4-c3";
import { count } from 'console';

const connection = createConnection(ProposedFeatures.all);

const documents: TextDocuments<TextDocument> = new TextDocuments(TextDocument);

let hasConfigurationCapability = false;
let hasWorkspaceFolderCapability = false;
let hasDiagnosticRelatedInformationCapability = false;

connection.onInitialize((params: InitializeParams) => 
{
	const capabilities = params.capabilities;

	hasConfigurationCapability = !!(
		capabilities.workspace && !!capabilities.workspace.configuration
	);
	hasWorkspaceFolderCapability = !!(
		capabilities.workspace && !!capabilities.workspace.workspaceFolders
	);
	hasDiagnosticRelatedInformationCapability = !!(
		capabilities.textDocument &&
		capabilities.textDocument.publishDiagnostics &&
		capabilities.textDocument.publishDiagnostics.relatedInformation
	);

	const result: InitializeResult = {
		capabilities: {
			textDocumentSync: TextDocumentSyncKind.Full,
			completionProvider: {
				resolveProvider: true
			}
		}
	};
	if (hasWorkspaceFolderCapability) {
		result.capabilities.workspace = {
			workspaceFolders: {
				supported: true
			}
		};
	}
	return result;
});

connection.onInitialized(() => {
	if (hasConfigurationCapability) {
		connection.client.register(DidChangeConfigurationNotification.type, undefined);
	}
});

documents.onDidChangeContent(change => {
	validateTextDocument(change.document);
});

documents.onDidSave(change => {
	validateTextDocument(change.document);
});
const possibleIdentifierPrefix = /[\w]$/;
const lineSeparator = /\n|\r|\r\n/g;

function findCursorTokenIndex(tokenStream: CommonTokenStream, line: number, column: number): number | undefined {
	// NOTE: cursor position is 1-based, while token's charPositionInLine is 0-based
	const cursorCol = column - 1;
	for (let i = 0; i < tokenStream.size; i++) {
	  const t = tokenStream.get(i);
  
	  const tokenStartCol = t.charPositionInLine;
	  const tokenEndCol = tokenStartCol + (t.text as string).length;
	  const tokenStartLine = t.line;
	  const tokenEndLine =
		t.type !== PLexer.Whitespace || !t.text ? tokenStartLine : tokenStartLine + (t.text.match(lineSeparator)?.length || 0);
  
	  // NOTE: tokenEndCol makes sense only of tokenStartLine === tokenEndLine
	  if (tokenEndLine > line || (tokenStartLine === line && tokenEndCol > cursorCol)) {
		if (
		  i > 0 &&
		  tokenStartLine === line &&
		  tokenStartCol === cursorCol &&
		  possibleIdentifierPrefix.test(tokenStream.get(i - 1).text as string)
		) {
		  return i - 1;
		} else if (tokenStream.get(i).type === PLexer.Whitespace) {
		  return i + 1;
		} else return i;
	  }
	}
	return undefined;
  }

async function validateTextDocument(textDocument: TextDocument): Promise<void> {
	/*const diagnostics: Diagnostic[] = [];
	let items = el.getErrorItems();
	for(var item of items)
	{
		const diagnostic: Diagnostic = 
		{
			severity: DiagnosticSeverity.Error,
			range: {
				start: textDocument.positionAt(item[1].start),
				end: textDocument.positionAt(item[1].stop+1)
			},
			message: item[0],
			source: 'p'
		};

		diagnostics.push(diagnostic);
	}

	connection.sendDiagnostics({ uri: textDocument.uri, diagnostics });*/
}

connection.onCompletion(
	(_textDocumentPosition: TextDocumentPositionParams): CompletionItem[] => {
		const text = _textDocumentPosition.textDocument.uri;
		const document = documents.get(text);
		
		if(document)
		{
			let inputStream = CharStreams.fromString(document.getText());
			let lexer = new PLexer(inputStream);
			let tokenStream = new CommonTokenStream(lexer);
			let parser = new PParser(tokenStream);
			parser.buildParseTree = true;
			let visitor = new PVisitor();
			
			let tree = parser.program();
			visitor.visit(tree);
			let el = new ErrorListener();
			parser.removeErrorListeners();
			parser.addErrorListener(el);

			let tokenPos = findCursorTokenIndex(tokenStream, _textDocumentPosition.position.line, _textDocumentPosition.position.character);
			let core = new CodeCompletionCore(parser);
			let compl : any[] = [];
			if(tokenPos)
			{
				let candidates = core.collectCandidates(tokenPos);
				candidates.tokens.forEach((_, k) => {
					const symbolicName = parser.vocabulary.getSymbolicName(k);
					compl.push({
						label: symbolicName?.toLocaleLowerCase(),
						kind: CompletionItemKind.Keyword
					});
				});
				return compl;
			}
		}
		
		return [{label:'', kind: CompletionItemKind.Text, data: 0}];
	}
);

connection.onCompletionResolve(
	(item: CompletionItem): CompletionItem => {
		return item;
	}
);

documents.listen(connection);

connection.listen();
