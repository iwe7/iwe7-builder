"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const operators_1 = require("rxjs/operators");
const iwe7_ts_compiler_1 = require("iwe7-ts-compiler");
class GulpBuilder {
    constructor(context) {
        this.context = context;
    }
    run(builderConfig) {
        const options = builderConfig.options;
        const { tsConfig } = options;
        return iwe7_ts_compiler_1.iwe7TsCompiler(tsConfig).pipe(operators_1.tap(res => {
            this.context.logger.info(`log:${res}`);
        }), operators_1.map(() => {
            return { success: true };
        }));
    }
}
exports.GulpBuilder = GulpBuilder;
exports.default = GulpBuilder;
//# sourceMappingURL=index.js.map