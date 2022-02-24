import { OpenAPIParser } from '@redocly/reference-docs';
import { OperationInfo } from '../models';
export declare function getOperationInfoById(parser: OpenAPIParser, operationId?: string): OperationInfo | undefined;
