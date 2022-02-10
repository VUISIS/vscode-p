import { PParserVisitor } from "./PParserVisitor";
import { AbstractParseTreeVisitor } from "antlr4ts/tree/AbstractParseTreeVisitor";
import { MachineBodyContext } from './PParser';

export class PVisitor extends AbstractParseTreeVisitor<number> implements PParserVisitor<number>
{
    defaultResult() 
    {
        return 0;
    }

    visitMachineBody(ctx: MachineBodyContext)
    {
        return super.visitChildren(ctx);
    }
}