import { OpenAPIExternalDocumentation, OpenAPIDefinition } from '../types';
import { ContentItemModel } from './MenuBuilder';
import { ApiInfoModel, SecuritySchemesModel, WebhookModel } from './models';
import { OpenAPIParser } from './OpenAPIParser';
import { RedocProNormalizedOptions } from '../../../services';
/**
 * Store that contains all the specification related information in the form of tree
 */
export declare class SpecStore {
    private options;
    parser: OpenAPIParser;
    info: ApiInfoModel;
    externalDocs?: OpenAPIExternalDocumentation;
    contentItems: ContentItemModel[];
    securitySchemes: SecuritySchemesModel;
    webhooks?: WebhookModel;
    constructor(definition: OpenAPIDefinition, specUrl: string | undefined, options: RedocProNormalizedOptions);
}
