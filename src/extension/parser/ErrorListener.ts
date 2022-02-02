import {ANTLRErrorListener} from 'antlr4ts/ANTLRErrorListener';
import {RecognitionException, Recognizer} from 'antlr4ts';
import * as vscode from 'vscode';

// @ts-ignore
export class ErrorListener implements ANTLRErrorListener 
{
    // @ts-ignore
    syntaxError<T extends TSymbol>(recognizer: Recognizer<T, any>, offendingSymbol: T | undefined, line: number, charPositionInLine: number, msg: string, e: RecognitionException | undefined): void 
    {
      console.log(offendingSymbol);
      console.log(msg);
    }
  }