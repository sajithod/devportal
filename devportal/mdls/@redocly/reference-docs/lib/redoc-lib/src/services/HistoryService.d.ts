export declare class HistoryService {
    private _emiter;
    basePath?: string;
    constructor();
    get currentId(): string;
    linkForId(id?: string): string;
    generateDeepLink(_fieldFragment: string, _pageLink?: string): Maybe<string>;
    subscribe(cb: (id: string) => void): () => void;
    emit: () => void;
    bind(): void;
    dispose(): void;
    replace(id: string | null, rewriteHistory?: boolean): void;
    replaceForField(_fieldPath: string | null, _rewriteHistory?: boolean): void;
}
export declare const history: HistoryService;
