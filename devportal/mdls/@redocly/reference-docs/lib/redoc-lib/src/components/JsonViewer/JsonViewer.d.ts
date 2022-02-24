import * as React from 'react';
export interface JsonProps {
    data: any;
    className?: string;
}
declare class Json extends React.PureComponent<JsonProps> {
    node: HTMLDivElement | null;
    render(): JSX.Element;
    renderInner: ({ renderCopyButton }: {
        renderCopyButton: any;
    }) => JSX.Element;
    expandAll: () => void;
    collapseAll: () => void;
    collapseElement: (target: HTMLElement) => void;
    clickListener: (event: MouseEvent) => void;
    focusListener: (event: KeyboardEvent) => void;
    componentDidMount(): void;
    componentWillUnmount(): void;
}
export declare const JsonViewer: import("styled-components").StyledComponent<typeof Json, import("../../../../services/extendTheme").ProTheme, {}, never>;
export {};
