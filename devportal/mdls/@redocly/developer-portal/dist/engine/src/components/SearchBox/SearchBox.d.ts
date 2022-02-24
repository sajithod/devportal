import * as React from 'react';
import { Location } from 'history';
import { SearchResult } from '../../services/SearchIndex';
export interface SearchBoxState {
    isSearchShown: boolean;
    showSearchResults: boolean;
    isSearchBoxShown: boolean;
    query: string;
    results: SearchResult[];
    indexError: boolean;
    activeItemIdx: number;
    loading: boolean;
}
export declare class SearchBox extends React.Component<{
    pathPrefix: string;
    className?: string;
    location?: Location;
}, SearchBoxState> {
    private _searchIndex;
    constructor(props: any);
    componentDidMount(): void;
    render(): JSX.Element;
    querySearchResults: (query: string) => Promise<void>;
    onSearch: (evt: any) => Promise<void>;
    onClearIconClick: () => void;
    onToggleSearchResults: (value: boolean) => void;
    handleKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}
export declare function debounce<T extends (...args: any[]) => any>(fn: T, threshold: number, leading?: boolean): T;
