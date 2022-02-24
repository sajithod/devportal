import type { OpenAPISchema } from '@redocly/reference-docs';
import * as React from 'react';
import { RedocProxyProps } from './OpenApiResponse';
interface JsonSchemaProps {
    schema: OpenAPISchema;
}
export default class JsonSchema extends React.Component<RedocProxyProps | JsonSchemaProps> {
    render(): JSX.Element;
}
export {};
