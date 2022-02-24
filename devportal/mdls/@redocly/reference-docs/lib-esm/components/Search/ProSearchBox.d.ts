import * as React from 'react';
import { SearchResultMeta } from '../../services/SearchStore';
import { ProMenu } from '../../services/ProMenu';
import { RedocProNormalizedOptions } from '../../services/ProStore';
import { IMenuItem, SearchStore, MenuItem, MarkerService } from '../../redoc-lib';
import { SearchResultExtended } from './MenuItemProSearch';
declare type SearchResult<T = GenericObject | undefined> = {
    score: number;
    meta: T;
};
export interface ProSearchBoxProps {
    search: SearchStore<SearchResultMeta>;
    menu: ProMenu;
    marker: MarkerService;
    onActivate: (item: IMenuItem) => void;
    className?: string;
    options: RedocProNormalizedOptions;
    shown: boolean;
    hidePopUp: () => void;
    showPopUp: () => void;
    setSearchValue: (value: string) => void;
    searchValue: string;
}
export interface SearchBoxState {
    results: SearchResultExtended[] | null;
    term: string;
    activeItemIdx: number;
    loading: boolean;
}
export declare class ProSearchBox extends React.PureComponent<ProSearchBoxProps, SearchBoxState> {
    activeItemRef: typeof MenuItem | null;
    prevCancel: (() => void) | null;
    loadingTimer: any;
    inputRef: React.RefObject<HTMLInputElement>;
    constructor(props: ProSearchBoxProps);
    componentDidUpdate(prevProps: ProSearchBoxProps): void;
    clearResults(term: string): void;
    clear: () => void;
    handleKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void;
    setResults(results: SearchResult<SearchResultMeta>[]): void;
    updateSearchTerm(q: string): void;
    _queryWorker: (...args: (string | ((res: any) => void))[]) => void;
    queryWorker(q: string): () => void;
    search: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onActivate: (res: SearchResultExtended) => void;
    closeByWrapper: (e: React.BaseSyntheticEvent) => void;
    closeByButton: () => void;
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): JSX.Element | null;
}
export {};
