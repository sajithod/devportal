import type { IMenuItem } from './MenuStore';
import type { OperationModel } from './models/Operation';
import type Worker from './SearchWorker.worker';
import type { SearchResult } from './SearchWorker.worker';
export declare class SearchStore<T> {
    searchWorker: Worker;
    indexItems(groups: Array<IMenuItem | OperationModel>): void;
    add(title: string, body: string, meta?: T): void;
    dispose(): void;
    search(q: string): Promise<SearchResult<T>[]>;
    toJS(): Promise<any>;
    load(state: GenericObject): void;
    fromExternalJS(path?: string, exportName?: string): void;
}
