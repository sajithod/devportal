import { OpenAPIParser, OperationModel, RedocProNormalizedOptions } from '@redocly/reference-docs';
import { OperationIdentifier, OperationParameters } from '../models';
import { ServerOverrides } from './override-helpers';
export declare function getOperation(parser: OpenAPIParser, { operationId, pointer }: OperationIdentifier, options: RedocProNormalizedOptions, parametersMap?: OperationParameters, defaultSampleName?: string | false, defaultMimeType?: string, serverVariables?: ServerOverrides): OperationModel | undefined;
