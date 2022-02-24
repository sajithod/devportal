import * as React from 'react';
import { OpenApiResponseData, SecurityDetails } from '@redocly/reference-docs';
import { ServerOverrides } from '../../helpers';
import { OperationIdentifier, OperationParameters } from '../../models';
export declare type RequestAndResponseType = {
    request: Record<string, unknown>;
    response: OpenApiResponseData;
};
export interface OpenApiTryItProps extends OperationIdentifier {
    definitionId: string;
    defaultExample?: string | false;
    onlyDefaultExample?: boolean;
    parameters?: OperationParameters | (() => OperationParameters);
    properties?: Object | (() => Object);
    options?: any;
    onResponse?: (arg: {
        request: Record<string, unknown>;
        response: OpenApiResponseData;
    }) => void;
    securityDefaults?: Record<string, SecurityDetails | string> | (() => Record<string, SecurityDetails | string>);
    id?: string;
    needs?: string[];
    placeholder?: () => React.ReactNode;
    serverVariables?: ServerOverrides | (() => ServerOverrides);
}
export declare const OpenApiTryIt: ({ definitionId, operationId, pointer, defaultExample, parameters, properties, options, onResponse, securityDefaults, id, needs, placeholder, serverVariables, }: OpenApiTryItProps) => any;
