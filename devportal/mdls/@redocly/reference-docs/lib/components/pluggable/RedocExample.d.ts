import * as React from 'react';
import { OpenAPIEncoding } from '../../redoc-lib';
import { ProStore } from '../../services/ProStore';
interface RedocExampleProps {
    store: ProStore;
    pointer: string;
    mimeType: string;
    encoding?: {
        [field: string]: OpenAPIEncoding;
    };
}
export declare class RedocExample extends React.Component<RedocExampleProps> {
    render(): JSX.Element;
}
export {};
