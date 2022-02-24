import * as React from 'react';
import { TextAlign } from './styled.elements';
export interface TileProps {
    header?: string;
    icon?: string;
    children?: string;
    to?: string;
    target?: string;
    headerAlign?: TextAlign;
    textAlign?: TextAlign;
    bgColor?: string;
    bgImage?: string;
    color?: string;
    className?: string;
    style?: React.CSSProperties;
    maxWidth?: string;
}
export declare class ThinTile extends React.Component<TileProps> {
    render(): JSX.Element;
}
