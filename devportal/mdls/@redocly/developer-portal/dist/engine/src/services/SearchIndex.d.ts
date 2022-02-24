export interface SearchResult {
    label: string;
    link: string;
    content?: string;
    score: number;
    httpVerb?: string;
    meta: {
        place: string;
        path: string[];
        boost?: number;
    }[];
}
export interface SearchError {
    message: string;
}
export declare class SearchIndex {
    private _index;
    constructor(index: any);
    search(query: string, limit?: number): Promise<SearchResult[]>;
}
export declare class RemoteSearchIndex {
    private endpoint;
    private pathPrefix;
    constructor(endpoint: string, pathPrefix: string);
    search(query: string, limit?: number): Promise<SearchResult[]>;
}
export declare class SearchService {
    _searchIndex: Promise<SearchIndex | RemoteSearchIndex | null> | null;
    _indexLoadError: boolean;
    search: (query: string, limit?: number) => Promise<SearchResult[] | SearchError>;
    init(pathPrefix?: string, assetPrefix?: string, fileName?: string): void;
}
