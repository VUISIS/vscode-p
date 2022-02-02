import * as vscode from 'vscode';
import * as path from 'path';
import { CharStreams, CommonTokenStream } from 'antlr4ts';
import { PLexer } from './parser/PLexer';
import { PParser } from './parser/PParser';
import { PVisitor } from './parser/PVisitor';
import { ErrorListener } from './parser/ErrorListener';

export function updateDiagnostics(collection: vscode.DiagnosticCollection) : void 
{
    if(vscode.window.activeTextEditor)
    {
        let document = vscode.window.activeTextEditor.document;
        if (document && path.basename(document.uri.fsPath).endsWith('.p')) 
        {
            let inputStream = CharStreams.fromString(document.getText());
            let lexer = new PLexer(inputStream);
            let tokenStream = new CommonTokenStream(lexer);
            let parser = new PParser(tokenStream);
            parser.buildParseTree = true;
            let visitor = new PVisitor();
            let el = new ErrorListener();
            lexer.addErrorListener(el);
            let tree = parser.program();
            visitor.visit(tree);
        }
    }
}