import { OpenAPIResponse, Referenced } from '../../types';
import { OpenAPIParser } from '../OpenAPIParser';
import { RedocProNormalizedOptions } from '../../../../services/ProStore';
import { FieldModel } from './Field';
import { MediaContentModel } from './MediaContent';
import { OperationModel } from './Operation';
declare type ResponseProps = {
    parser: OpenAPIParser;
    code: string;
    defaultAsError: boolean;
    infoOrRef: Referenced<OpenAPIResponse>;
    options: RedocProNormalizedOptions;
    operation?: OperationModel;
    isEvent?: boolean;
};
export declare class ResponseModel {
    expanded: boolean;
    content?: MediaContentModel;
    code: string;
    summary: string;
    description: string;
    type: string;
    headers: FieldModel[];
    constructor(props: ResponseProps);
    toggle(): void;
    expand(): void;
}
export {};
