import { OpenAPIOperation } from '@redocly/reference-docs';
export interface OperationInfo extends OpenAPIOperation {
    pathName: string;
    httpVerb: string;
}
