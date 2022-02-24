/// <reference types="react" />
import { Location } from 'history';
import { SearchResult } from '../../services/SearchIndex';
export interface UserSearchResultsProps {
    show: boolean;
    results: SearchResult[];
    indexError: boolean;
    activeItemIdx: number;
    loading: boolean;
    query: string;
    location?: Location;
}
export interface UserSearchInputProps {
    query: string;
    loading: boolean;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onToggleSearchResults: (value: boolean) => void;
    onKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void;
    onClear: () => void;
    location?: Location;
}
