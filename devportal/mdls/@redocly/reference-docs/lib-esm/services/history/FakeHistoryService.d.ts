import EventEmitter from 'eventemitter3';
import { HistoryService } from '../../redoc-lib';
import { RedocProNormalizedOptions } from '../ProStore';
export declare class FakeHistoryService implements Interface<HistoryService> {
    options: RedocProNormalizedOptions;
    _emitter: EventEmitter<string | symbol, any>;
    basePath?: string;
    constructor(options: RedocProNormalizedOptions);
    currentId: string;
    linkForId(id: string): string;
    generateDeepLink(fieldFragment: string, operationLink?: string): string | null;
    subscribe(cb: (id: string) => void): () => void;
    emit: () => void;
    bind(): void;
    dispose(): void;
    replace(_id: string | null, _rewriteHistory?: boolean): void;
    replaceForField(_fieldPath: string | null, _rewriteHistory?: boolean): void;
    replaceNow(_id: string | null, _rewriteHistory?: boolean): void;
    replaceDebounced(_hash: string | null): void;
}
