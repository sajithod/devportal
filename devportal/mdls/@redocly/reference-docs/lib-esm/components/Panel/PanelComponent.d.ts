import React, { PropsWithChildren } from 'react';
export interface PanelHeaderProps {
    expanded?: boolean;
    toggle: (e: React.BaseSyntheticEvent) => void;
}
export interface PanelComponentProps {
    expanded?: boolean;
    renderChildrenHidden?: boolean;
    className?: string;
    'data-cy'?: string;
    header?: React.ReactNode | ((props: PanelHeaderProps) => React.ReactNode);
    onToggle?: (expanded: boolean) => void;
}
export declare function PanelComponent({ expanded, renderChildrenHidden, header, className, children, onToggle, }: PropsWithChildren<PanelComponentProps>): JSX.Element;
