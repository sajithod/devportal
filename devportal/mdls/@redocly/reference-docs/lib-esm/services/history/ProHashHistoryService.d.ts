import { HistoryService } from '../../redoc-lib';
import { RedocProNormalizedOptions } from '../ProStore';
/**
 * Used for multi-version and multispec in SSR mode.
 * Allows rendering each version on separate path but keeps hash-routing for inner routes
 */
export declare class ProHashHistoryService implements Interface<HistoryService> {
    options: RedocProNormalizedOptions;
    private multiSpec;
    private _emiter;
    basePath: string;
    constructor(options: RedocProNormalizedOptions, multiSpec: boolean);
    get currentId(): string;
    makeUrl(path: string, hash: string): string;
    linkForId(id: string): string;
    generateDeepLink(fieldFragment: string, operationLink?: string): string | undefined;
    subscribe(cb: (id: string) => void): () => void;
    emit: () => void;
    bind(): void;
    dispose(): void;
    replace(id: string | null, rewriteHistory?: boolean): void;
    replaceForField(fieldPath: string | null, rewriteHistory?: boolean): void;
    replaceNow(id: string | null, rewriteHistory?: boolean): void;
    replaceDebounced(hash: string | null): void;
}
