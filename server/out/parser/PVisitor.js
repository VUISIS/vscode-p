"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PVisitor = void 0;
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
class PVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    defaultResult() {
        return 0;
    }
    visitMachineBody(ctx) {
        return super.visitChildren(ctx);
    }
}
exports.PVisitor = PVisitor;
//# sourceMappingURL=PVisitor.js.map