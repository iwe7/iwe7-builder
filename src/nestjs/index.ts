import { normalize } from '@angular-devkit/core';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { Builder, BuilderContext, BuilderConfiguration, BuildEvent } from '@angular-devkit/architect';
import { join } from 'path';
import { iwe7TsCompiler } from 'iwe7-ts-compiler';

export interface GulpSchema {
    tsConfig: string;
}

export class GulpBuilder implements Builder<GulpSchema>{
    constructor(public context: BuilderContext) { }
    run(builderConfig: BuilderConfiguration<GulpSchema>): Observable<BuildEvent> {
        const options = builderConfig.options;
        const { tsConfig } = options;
        const root = this.context.workspace.root;
        const tsFile = join(root, normalize(tsConfig));
        this.context.logger.info(`tsconfig.json:${tsFile}`);
        return iwe7TsCompiler(tsFile).pipe(
            tap(res => {
                this.context.logger.info(`info:${res}`)
            }),
            map(() => {
                return { success: true };
            })
        );
    }
}
export default GulpBuilder;
