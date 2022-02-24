import React, { PropsWithChildren } from 'react';
import { FlattenSimpleInterpolation } from 'styled-components';
export declare function userIsForcingNavigation(event: React.MouseEvent): boolean;
export declare const linkifyMixin: (className: string, size: string) => FlattenSimpleInterpolation;
export declare function Link(props: PropsWithChildren<{
    to: string;
    className?: string;
}>): JSX.Element | null;
export declare function ShareLink(props: {
    to: string;
}): JSX.Element;
