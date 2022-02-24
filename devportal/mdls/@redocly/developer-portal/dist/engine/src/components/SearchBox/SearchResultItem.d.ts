import * as React from 'react';
import { SearchResult } from '../../services/SearchIndex';
export interface SearchResultItemProps {
    item: SearchResult;
    query: string;
    active: boolean;
}
export default class SearchResultItem extends React.Component<SearchResultItemProps> {
    ref: Element | null;
    componentDidMount(): void;
    componentDidUpdate(): void;
    scrollIntoViewIfActive(): void;
    render(): JSX.Element;
    getSearchResultText(text: string, match: string, symbolsToShow?: number): React.ReactNodeArray;
    getSurroundText(start: number, end: number, text: string, matchLength: number): string;
    getSearchItemDescription(item: SearchResult): string | JSX.Element;
}
