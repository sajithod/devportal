import * as React from 'react';
interface AlertProps {
    variant?: 'warning' | 'success' | 'danger' | 'attention';
    header?: string;
    content: string;
    className?: string;
    style?: React.CSSProperties;
    children?: string | JSX.Element | JSX.Element[];
}
export declare function Alert(props: AlertProps): JSX.Element;
export {};
