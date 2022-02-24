import * as React from 'react';
import { RedocProxyProps } from './OpenApiResponse';
export default class OpenApiExample extends React.Component<RedocProxyProps & {
    mimeType: string;
}> {
    render(): JSX.Element;
}
