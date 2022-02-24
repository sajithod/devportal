import * as React from 'react';
import type { ItemState, MenuItemProps } from './types';
interface MenuItemState {
    isExpanded: boolean;
    prevActiveItem?: ItemState;
}
export declare class MenuItem extends React.PureComponent<MenuItemProps, MenuItemState> {
    constructor(props: any);
    componentDidUpdate(prevProps: MenuItemProps): void;
    handleChange: () => void;
    handleBack: () => void;
    render(): JSX.Element;
}
export {};
