import {ANTLRErrorListener} from 'antlr4ts/ANTLRErrorListener';
import {RecognitionException, Recognizer} from 'antlr4ts';

// @ts-ignore
export class ErrorListener implements ANTLRErrorListener 
{
    private errorItems: any[] = [];

    // @ts-ignore
    syntaxError<T extends TSymbol>(recognizer: Recognizer<T, any>, offendingSymbol: T | undefined, line: number, charPositionInLine: number, msg: string, e: RecognitionException | undefined): void 
    {
      if(offendingSymbol)
      {
        this.errorItems.push({
          msg: msg,
          symbol: offendingSymbol
        });
      }
    }

    public getErrorItems() : any[]
    {
      console.log(this.errorItems);
      return this.errorItems;
    }
  }