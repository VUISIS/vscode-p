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

async function validateTextDocument(textDocument: TextDocument): Promise<void> {

	const text = textDocument.getText();
	let inputStream = CharStreams.fromString(text);
	let lexer = new PLexer(inputStream);
	let tokenStream = new CommonTokenStream(lexer);
	let parser = new PParser(tokenStream);
	parser.buildParseTree = true;
	let visitor = new PVisitor();
	
	let tree = parser.program();
	visitor.visit(tree);

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
	}*/

	connection.sendDiagnostics({ uri: textDocument.uri, diagnostics });
}

connection.onCompletion(
	(_textDocumentPosition: TextDocumentPositionParams): CompletionItem[] => {
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
