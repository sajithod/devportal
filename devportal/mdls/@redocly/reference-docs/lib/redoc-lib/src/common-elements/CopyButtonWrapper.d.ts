import * as React from 'react';
export interface CopyButtonWrapperProps {
    data: unknown;
    children: (props: {
        renderCopyButton: () => JSX.Element;
    }) => JSX.Element;
}
export declare class CopyButtonWrapper extends React.PureComponent<CopyButtonWrapperProps, {
    tooltipShown: boolean;
}> {
    constructor(props: CopyButtonWrapperProps);
    render(): JSX.Element;
    copy: () => void;
    renderCopyButton: () => JSX.Element;
    showTooltip(): void;
}
