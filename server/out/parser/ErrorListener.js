"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorListener = void 0;
// @ts-ignore
class ErrorListener {
    constructor() {
        this.errorItems = [];
    }
    // @ts-ignore
    syntaxError(recognizer, offendingSymbol, line, charPositionInLine, msg, e) {
        if (offendingSymbol) {
            this.errorItems.push({
                msg: msg,
                symbol: offendingSymbol
            });
        }
    }
    getErrorItems() {
        console.log(this.errorItems);
        return this.errorItems;
    }
}
exports.ErrorListener = ErrorListener;
//# sourceMappingURL=ErrorListener.js.map