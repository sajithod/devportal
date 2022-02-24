import { TabProps as ReactTabProps } from 'react-tabs';
import * as React from 'react';
import { OperationModel } from '../../../redoc-lib';
export interface TabProps extends ReactTabProps {
    title: string;
}
export interface TabsProps {
    tabs: TabProps[];
    hidden?: boolean;
    children: React.ReactNode;
    operation: OperationModel;
}
interface CollapsingTabsComponentProps extends TabsProps {
    activeIndex: number;
    onChange: (idx: number) => void;
}
export declare const CollapsingTabsBase: ({ tabs, children, hidden, activeIndex, onChange, }: CollapsingTabsComponentProps) => JSX.Element;
export {};
