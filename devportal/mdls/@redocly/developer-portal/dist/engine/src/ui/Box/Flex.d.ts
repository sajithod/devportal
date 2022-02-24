import * as React from 'react';
import { FlexboxProps } from 'styled-system';
import { BoxProps } from './Box';
export interface FlexProps extends BoxProps, FlexboxProps {
}
export declare const Flex: React.ComponentType<Partial<FlexProps>>;
export declare function FlexSection(props: FlexProps & {
    children: React.ReactNode | React.ReactNode[];
}): JSX.Element;
