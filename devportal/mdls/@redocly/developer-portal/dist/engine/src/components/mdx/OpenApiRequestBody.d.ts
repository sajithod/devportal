import * as React from 'react';
import { RedocProxyProps } from './OpenApiResponse';
export default class OpenApiRequestBody extends React.Component<RedocProxyProps & {
    hideSamples?: boolean;
}> {
    render(): JSX.Element;
}
