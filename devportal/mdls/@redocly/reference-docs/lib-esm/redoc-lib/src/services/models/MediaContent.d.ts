import { OpenAPIMediaType } from '../../types';
import { MediaTypeModel } from './MediaType';
import { OpenAPIParser } from '../OpenAPIParser';
import { RedocProNormalizedOptions } from '../../../../services/ProStore';
import { OperationModel } from './Operation';
import { ResponseModel } from './Response';
/**
 * MediaContent model ready to be sued by React components
 * Contains multiple MediaTypes and keeps track of the currently active one
 */
export declare class MediaContentModel {
    isRequestType: boolean;
    mediaTypes: MediaTypeModel[];
    operation?: OperationModel;
    /**
     * @param isRequestType needed to know if skipe RO/RW fields in objects
     */
    constructor(parser: OpenAPIParser, info: Record<string, OpenAPIMediaType>, isRequestType: boolean, options: RedocProNormalizedOptions, { operation, type, response, }?: {
        operation?: OperationModel;
        type?: 'request' | 'response';
        response?: ResponseModel;
    });
    /**
     * Set active media type by name
     * @param name media type name
     */
    activate(name?: string): void;
    get active(): MediaTypeModel;
    get hasSample(): boolean;
}
