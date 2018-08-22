import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { Builder, BuilderContext, BuilderConfiguration, BuildEvent } from '@angular-devkit/architect';
import { iwe7TsCompiler } from 'iwe7-ts-compiler';
export interface GulpSchema {
    tsConfig: string;
}
export class GulpBuilder implements Builder<GulpSchema>{
    constructor(public context: BuilderContext) { }
    run(builderConfig: BuilderConfiguration<GulpSchema>): Observable<BuildEvent> {
        const options = builderConfig.options;
        const { tsConfig } = options;
        return iwe7TsCompiler(tsConfig).pipe(
            tap(res => {
                this.context.logger.info(`log:${res}`)
            }),
            map(() => {
                return { success: true };
            })
        )
    }
}

export default GulpBuilder;
