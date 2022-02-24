import { OpenAPIRequestBody, Referenced } from '../../types';
import { OpenAPIParser } from '../OpenAPIParser';
import { RedocProNormalizedOptions } from '../../../../services/ProStore';
import { MediaContentModel } from './MediaContent';
import { OperationModel } from './Operation';
declare type RequestBodyProps = {
    parser: OpenAPIParser;
    infoOrRef: Referenced<OpenAPIRequestBody>;
    options: RedocProNormalizedOptions;
    isEvent?: boolean;
    operation?: OperationModel;
};
export declare class RequestBodyModel {
    description: string;
    required: boolean;
    content?: MediaContentModel;
    constructor(props: RequestBodyProps);
}
export {};
