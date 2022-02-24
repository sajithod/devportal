import * as React from 'react';
interface SelectItem {
    value: any;
    label: any;
}
export declare type SelectItems = SelectItem[];
export interface SelectProps extends React.HTMLProps<HTMLDivElement> {
    selectedValue: any | null;
    placeholder?: string;
    items: SelectItems;
    width?: string;
    position?: string;
    onChange?: (selectedValue: any) => void;
}
export interface DropdownState {
    opened: boolean;
}
export declare class Select extends React.Component<SelectProps, DropdownState> {
    private dropdown;
    constructor(props: SelectProps);
    render(): JSX.Element;
    selectItem: (selectedValue: any) => void;
    getLabel(selectedValue: any | null): any;
}
export {};
