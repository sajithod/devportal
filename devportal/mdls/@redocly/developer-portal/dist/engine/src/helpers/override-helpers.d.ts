import { FieldModel, OpenAPIServer } from '@redocly/reference-docs';
import { OperationParameters } from '../models';
export declare type ServerOverrideValue = string | {
    default: string;
    enum: string[];
};
export declare type ServerOverrides = Record<string, ServerOverrideValue>;
export declare const overrideParamsValues: (parameters: FieldModel[], parametersMap: OperationParameters) => void;
export declare const overrideServerVariables: (operationServers: OpenAPIServer[], serverVariablesToOverride: ServerOverrides) => OpenAPIServer[];
