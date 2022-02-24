/// <reference types="react" />
import { OpenAPIParameterLocation, CodeSampleOptions } from '@redocly/reference-docs';
export interface OpenApiCodeSampleProps {
    definitionId: string;
    operationId?: string;
    pointer?: string;
    defaultExample?: string;
    onlyDefaultExample?: boolean;
    defaultLanguage?: string;
    parameters?: Record<OpenAPIParameterLocation, Object>;
    properties?: any;
    options?: CodeSampleOptions;
    defaultMimeType?: string;
    onlyDefaultMimeType?: boolean;
}
export declare const OpenApiCodeSample: ({ definitionId, operationId, pointer, defaultExample, onlyDefaultExample, defaultLanguage, parameters, properties, options, onlyDefaultMimeType, defaultMimeType, }: OpenApiCodeSampleProps) => JSX.Element;
