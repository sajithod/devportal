import * as React from 'react';
import type { ExternalLink } from '../../../../services';
import type { IMenuItem } from '../../services';
export interface MenuItemsProps {
    items: IMenuItem[];
    expanded?: boolean;
    onActivate?: (item: IMenuItem, evt: React.MouseEvent<HTMLElement>) => void;
    style?: React.CSSProperties;
    root?: boolean;
    className?: string;
    linksBefore?: ExternalLink[];
    linksAfter?: ExternalLink[];
}
export declare class MenuItems extends React.Component<MenuItemsProps> {
    render(): JSX.Element;
}
