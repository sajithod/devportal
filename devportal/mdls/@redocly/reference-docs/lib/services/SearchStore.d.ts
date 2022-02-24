import { IMenuItem, OperationModel, RedocNormalizedOptions, SearchResult, SearchStore } from '../redoc-lib';
import { RedocProUserOptionsExt } from './ProStore';
export declare type SearchResultMeta = {
    place?: string;
    path?: string[];
    menuId: string;
    boost?: number;
};
export declare const DEFAULT_SEARCH_MAX_DEPTH = 1;
export declare class DeepSearchStore extends SearchStore<SearchResultMeta> {
    operationTitleBoost: number;
    tagTitleBoost: number;
    fieldLevelBoost: number;
    pathOnly: boolean;
    searchMaxDepth: number;
    constructor(options: RedocProUserOptionsExt & RedocNormalizedOptions);
    indexItems(groups: Array<IMenuItem | OperationModel>): void;
    private indexSchema;
    add(title: string, body: string, meta?: SearchResultMeta): void;
    search<T = SearchResultMeta>(q: string): Promise<Array<SearchResult<T>>>;
    toJS(): Promise<void>;
    dispose(): void;
}
export declare class RemoteSearch extends SearchStore<SearchResultMeta> {
    private url;
    operationTitleBoost: number;
    tagTitleBoost: number;
    fieldLevelBoost: number;
    constructor(url: string);
    indexItems(_groups: Array<IMenuItem | OperationModel>): void;
    add(_title: string, _body: string, _meta?: SearchResultMeta): void;
    search(q: string): Promise<SearchResult<SearchResultMeta>[]>;
    dispose(): void;
    load(): void;
    toJS(): Promise<void>;
}
