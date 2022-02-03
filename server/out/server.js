"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */
const node_1 = require("vscode-languageserver/node");
const vscode_languageserver_textdocument_1 = require("vscode-languageserver-textdocument");
const antlr4ts_1 = require("antlr4ts");
const PLexer_1 = require("./parser/PLexer");
const PParser_1 = require("./parser/PParser");
const PVisitor_1 = require("./parser/PVisitor");
const ErrorListener_1 = require("./parser/ErrorListener");
const connection = (0, node_1.createConnection)(node_1.ProposedFeatures.all);
const documents = new node_1.TextDocuments(vscode_languageserver_textdocument_1.TextDocument);
let hasConfigurationCapability = false;
let hasWorkspaceFolderCapability = false;
let hasDiagnosticRelatedInformationCapability = false;
connection.onInitialize((params) => {
    const capabilities = params.capabilities;
    hasConfigurationCapability = !!(capabilities.workspace && !!capabilities.workspace.configuration);
    hasWorkspaceFolderCapability = !!(capabilities.workspace && !!capabilities.workspace.workspaceFolders);
    hasDiagnosticRelatedInformationCapability = !!(capabilities.textDocument &&
        capabilities.textDocument.publishDiagnostics &&
        capabilities.textDocument.publishDiagnostics.relatedInformation);
    const result = {
        capabilities: {
            textDocumentSync: node_1.TextDocumentSyncKind.Full,
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
        connection.client.register(node_1.DidChangeConfigurationNotification.type, undefined);
    }
});
documents.onDidChangeContent(change => {
    validateTextDocument(change.document);
});
async function validateTextDocument(textDocument) {
    const text = textDocument.getText();
    let inputStream = antlr4ts_1.CharStreams.fromString(text);
    let lexer = new PLexer_1.PLexer(inputStream);
    let tokenStream = new antlr4ts_1.CommonTokenStream(lexer);
    let parser = new PParser_1.PParser(tokenStream);
    parser.buildParseTree = true;
    let visitor = new PVisitor_1.PVisitor();
    let el = new ErrorListener_1.ErrorListener();
    parser.addErrorListener(el);
    let tree = parser.program();
    visitor.visit(tree);
    const diagnostics = [];
    let items = el.getErrorItems();
    for (var item of items) {
        const diagnostic = {
            severity: node_1.DiagnosticSeverity.Error,
            range: {
                start: textDocument.positionAt(item.symbol.start),
                end: textDocument.positionAt(item.symbol.stop + 1)
            },
            message: item.msg,
            source: 'p'
        };
        diagnostics.push(diagnostic);
    }
    connection.sendDiagnostics({ uri: textDocument.uri, diagnostics });
}
connection.onCompletion((_textDocumentPosition) => {
    return [
        {
            label: 'TypeScript',
            kind: node_1.CompletionItemKind.Text,
            data: 1
        },
        {
            label: 'JavaScript',
            kind: node_1.CompletionItemKind.Text,
            data: 2
        }
    ];
});
connection.onCompletionResolve((item) => {
    return item;
});
documents.listen(connection);
connection.listen();
//# sourceMappingURL=server.js.map