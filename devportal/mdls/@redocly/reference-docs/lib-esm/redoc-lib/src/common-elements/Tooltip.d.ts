import { PropsWithChildren } from 'react';
export interface TooltipProps {
    tip: string;
    open?: boolean;
    placement?: 'top' | 'bottom' | 'left' | 'right';
    variant?: 'light' | 'dark';
    width?: string;
}
export declare function Tooltip(props: PropsWithChildren<TooltipProps>): JSX.Element;
