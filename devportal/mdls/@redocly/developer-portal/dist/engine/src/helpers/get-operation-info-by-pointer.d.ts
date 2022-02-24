import { OpenAPIParser } from '@redocly/reference-docs';
import { OperationInfo } from '../models';
export declare function getOperationInfoByPointer(parser: OpenAPIParser, pointer: string): OperationInfo | undefined;
