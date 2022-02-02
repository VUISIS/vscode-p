import * as vscode from 'vscode';
import { updateDiagnostics } from './diagnostics';

export function activate(context: vscode.ExtensionContext) 
{
    const collection = vscode.languages.createDiagnosticCollection('period');

    context.subscriptions.push(collection);

	context.subscriptions.push(vscode.workspace.onDidChangeTextDocument(event => {
		updateDiagnostics(collection);
	}));
    context.subscriptions.push(vscode.window.onDidChangeActiveTextEditor(event => {
		updateDiagnostics(collection);
	}));
}

