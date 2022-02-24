import * as React from 'react';
import { OpenAPISchema } from '../../redoc-lib';
import { ProStore } from '../../services';
interface RedocSchemaProps {
    store: ProStore;
    pointer?: string;
    schema?: OpenAPISchema;
}
export declare class RedocSchema extends React.Component<RedocSchemaProps> {
    render(): JSX.Element;
}
export {};
