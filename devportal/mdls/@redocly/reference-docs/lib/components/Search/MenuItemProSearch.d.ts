/// <reference types="react" />
import { IMenuItem, HistoryService } from '../../redoc-lib';
import { SearchResultMeta } from '../../services/SearchStore';
export interface MenuItemProProps {
    result: SearchResultExtended;
    active: boolean;
    onActivate: (res: SearchResultExtended) => void;
    term: string;
    history: HistoryService;
}
export declare type SearchResultExtended = {
    item: IMenuItem;
    score: number;
} & Omit<SearchResultMeta, 'menuId' | 'place' | 'path'> & {
    places: {
        place: string;
        paths: Array<string[] | undefined>;
    }[];
    count: number;
};
export declare const MenuItemPro: ({ result, active, term, onActivate, history, }: MenuItemProProps) => JSX.Element;
