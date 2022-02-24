import React, { PropsWithChildren } from 'react';
export declare class ErrorBoundary extends React.Component<PropsWithChildren<unknown>, {
    error?: Error;
}> {
    constructor(props: PropsWithChildren<unknown>);
    componentDidCatch(error: Error): boolean;
    render(): JSX.Element;
}
