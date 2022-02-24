import React, { ChangeEvent } from 'react';
import { FieldContext } from 'informed';
declare type FieldValue = string[];
interface CheckboxListComponentState {
    collapsed: boolean;
}
export interface CheckboxListComponentProps {
    items: string[];
    maxDisplayedItems?: number;
    validateOnChange?: boolean;
    showControls?: boolean;
    trimItemsLength?: boolean;
}
export declare class CheckboxListComponent extends React.Component<FieldContext<FieldValue> & CheckboxListComponentProps, CheckboxListComponentState> {
    state: CheckboxListComponentState;
    onCheckBoxClick(event: ChangeEvent<Omit<HTMLInputElement, 'type'>>): void;
    private isFieldChecked;
    private toggle;
    private selectAll;
    private clearAll;
    render(): JSX.Element;
}
export declare const CheckboxList: React.ComponentType<import("informed").FieldProps<FieldValue, any> & CheckboxListComponentProps>;
export {};
