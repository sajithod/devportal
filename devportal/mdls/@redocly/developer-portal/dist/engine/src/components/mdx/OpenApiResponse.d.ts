import * as React from 'react';
export interface RedocProxyProps {
    definitionId: string;
    pointer: string;
    options?: any;
}
export default class OpenApiResponse extends React.Component<RedocProxyProps & {
    hideSamples?: boolean;
}> {
    render(): JSX.Element;
}
