"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular-devkit/core");
const operators_1 = require("rxjs/operators");
const path_1 = require("path");
const iwe7_ts_compiler_1 = require("iwe7-ts-compiler");
class GulpBuilder {
    constructor(context) {
        this.context = context;
    }
    run(builderConfig) {
        const options = builderConfig.options;
        const { tsConfig } = options;
        const root = this.context.workspace.root;
        const tsFile = path_1.join(root, core_1.normalize(tsConfig));
        this.context.logger.info(`tsconfig.json:${tsFile}`);
        return iwe7_ts_compiler_1.iwe7TsCompiler(tsFile).pipe(operators_1.tap(res => {
            this.context.logger.info(`info:${res}`);
        }), operators_1.map(() => {
            return { success: true };
        }));
    }
}
exports.GulpBuilder = GulpBuilder;
exports.default = GulpBuilder;
//# sourceMappingURL=index.js.map