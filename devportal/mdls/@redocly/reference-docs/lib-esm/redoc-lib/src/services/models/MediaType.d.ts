import { OpenAPIMediaType } from '../../types';
import { RedocProNormalizedOptions } from '../../../../services/ProStore';
import { SchemaModel } from './Schema';
import { OpenAPIParser } from '../OpenAPIParser';
import { ExampleModel } from './Example';
import { OperationModel } from './Operation';
import { ResponseModel } from './Response';
export declare class MediaTypeModel {
    options: RedocProNormalizedOptions;
    examples?: {
        [name: string]: ExampleModel;
    };
    schema?: SchemaModel;
    name: string;
    isRequestType: boolean;
    onlyRequiredInSamples: boolean;
    operation?: OperationModel;
    /**
     * @param isRequestType needed to know if skipe RO/RW fields in objects
     */
    constructor(parser: OpenAPIParser, name: string, isRequestType: boolean, info: OpenAPIMediaType, options: RedocProNormalizedOptions, { operation, type, response, }?: {
        operation?: OperationModel;
        type?: 'request' | 'response';
        response?: ResponseModel;
    });
    generateExample(parser: OpenAPIParser, info: OpenAPIMediaType): void;
}
