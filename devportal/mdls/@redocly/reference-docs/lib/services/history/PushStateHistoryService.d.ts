import { HistoryService } from '../../redoc-lib';
import { MarkdownItemsPagination, Pagination, RedocProNormalizedOptions } from '../ProStore';
export declare class PushStateHistoryService implements Interface<HistoryService> {
    options: RedocProNormalizedOptions;
    private multispec;
    private _emiter;
    basePath: string;
    markdownItemsPagination: MarkdownItemsPagination;
    pagination: Pagination;
    constructor(options: RedocProNormalizedOptions, multispec: boolean);
    get currentId(): string;
    makeUrl(path: string, hash: string): string;
    generateDeepLink(fieldFragment: string, operationLink?: string): string | null;
    linkForId(id?: string): string;
    subscribe(cb: (id: string) => void): () => void;
    emit: () => void;
    bind(): void;
    dispose(): void;
    replace(hash: string | null, rewriteHistory?: boolean): void;
    replaceForField(fieldPath: string | null, rewriteHistory?: boolean): void;
    replaceNow(id: string | null, rewriteHistory?: boolean): void;
    replaceDebounced(hash: string | null): void;
}
