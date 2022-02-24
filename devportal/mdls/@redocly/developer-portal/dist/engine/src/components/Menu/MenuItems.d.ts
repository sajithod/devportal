import * as React from 'react';
import type { ItemState } from './types';
export interface MenuListProps {
    items: ItemState[];
    depth: number;
    className?: string;
}
export declare class MenuItems extends React.PureComponent<MenuListProps> {
    render(): JSX.Element;
}
