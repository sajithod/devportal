/// <reference types="react" />
import { NavItem, MenuStyle } from '../../../auto-graphql';
import { Location } from 'history';
export interface ItemState extends NavItem {
    items: ItemState[];
    active: boolean;
    hasActiveSubItem: boolean;
    menuStyle?: MenuStyle | null;
}
export interface MenuProps<T = any> extends React.HTMLProps<HTMLDivElement> {
    items: NavItem[];
    location: Location;
    context: T;
    pageId: string;
    className?: string;
    apiVersions?: {
        id?: string;
        definitionId: string;
        title?: string;
        isDefault?: boolean;
    }[];
    apiVersionId?: string;
}
export interface MenuItemProps {
    item: ItemState;
    depth: number;
    activeItem?: ItemState;
    firstSiblingItem?: ItemState;
    isLast?: boolean;
    isExpanded?: boolean;
    isAlwaysExpanded?: boolean;
    onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
    className?: string;
}
export declare type UserMenuProps<T = any> = Omit<MenuProps<T>, 'items' | 'pageId'> & {
    items: ItemState[];
    navbarHeight: number;
    onVersionChange?: (item: {
        label: string;
        value: string;
    }) => void;
};
