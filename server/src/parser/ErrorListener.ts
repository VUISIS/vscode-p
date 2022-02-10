import {ANTLRErrorListener} from 'antlr4ts/ANTLRErrorListener';
import {RecognitionException, Recognizer} from 'antlr4ts';

// @ts-ignore
export class ErrorListener implements ANTLRErrorListener 
{
    private errorItems : Array<any> = new Array();

    // @ts-ignore
    syntaxError<T extends TSymbol>(recognizer: Recognizer<T, any>, offendingSymbol: T | undefined, line: number, charPositionInLine: number, msg: string, e: RecognitionException | undefined): void 
    {
      if(offendingSymbol)
      {
        this.errorItems.push([msg, offendingSymbol]);
      }
    }

    public getErrorItems() : any[]
    {
      console.log(this.errorItems);
      return this.errorItems;
    }
  }