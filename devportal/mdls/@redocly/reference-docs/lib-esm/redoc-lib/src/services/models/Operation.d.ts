import { IMenuItem } from '../MenuStore';
import { GroupModel } from './Group.model';
import { SecurityRequirementModel } from './SecurityRequirement';
import { OpenAPIExternalDocumentation, OpenAPIServer, OpenAPIXCodeSample, Server } from '../../types';
import { ContentItemModel, ExtendedOpenAPIOperation } from '../MenuBuilder';
import { OpenAPIParser } from '../OpenAPIParser';
import { Unstable_ExternalCodeSample } from '../RedocNormalizedOptions';
import { CallbackModel } from './Callback';
import { FieldModel } from './Field';
import { MediaContentModel } from './MediaContent';
import { RequestBodyModel } from './RequestBody';
import { ResponseModel } from './Response';
import { RedocProNormalizedOptions } from '../../../../services';
export interface Sample {
    lang: string;
    label?: string;
}
export interface XPayloadSample extends Sample {
    lang: 'payload';
    requestBodyContent: MediaContentModel;
    source: string;
}
export declare function isPayloadSample(sample: XPayloadSample | OpenAPIXCodeSample | Unstable_ExternalCodeSample): sample is XPayloadSample;
/**
 * Operation model ready to be used by components
 */
export declare class OperationModel implements IMenuItem {
    private parser;
    operationDefinition: ExtendedOpenAPIOperation;
    private options;
    id: string;
    absoluteIdx?: number;
    name: string;
    description?: string;
    href?: string;
    type: "operation";
    parent?: GroupModel;
    externalDocs?: OpenAPIExternalDocumentation;
    items: ContentItemModel[];
    depth: number;
    ready?: boolean;
    active: boolean;
    expanded: boolean;
    activeMimeName?: string;
    activeExampleName?: string | false;
    activeServer: Server;
    defaultExampleName?: string | false;
    defaultMimeType?: string;
    pointer: string;
    operationId?: string;
    httpVerb: string;
    deprecated: boolean;
    path: string;
    servers: OpenAPIServer[];
    security: SecurityRequirementModel[];
    extensions: GenericObject;
    isCallback: boolean;
    isWebhook: boolean;
    isEvent: boolean;
    constructor(parser: OpenAPIParser, operationDefinition: ExtendedOpenAPIOperation, parent: GroupModel | undefined, options: RedocProNormalizedOptions, isCallback?: boolean);
    /**
     * set operation as active (used by side menu)
     */
    activate(): void;
    /**
     * set operation as inactive (used by side menu)
     */
    deactivate(): void;
    /**
     * Toggle expansion in middle panel (for callbacks, which are operations)
     */
    toggle(): void;
    activateMimeName(name?: string): void;
    activateExampleName(name?: string): void;
    expand(): void;
    collapse(): void;
    get requestBody(): RequestBodyModel | undefined;
    get payload(): XPayloadSample | undefined;
    get hasSamples(): boolean;
    get definitionSamples(): Array<OpenAPIXCodeSample | Unstable_ExternalCodeSample>;
    get allCodeSamples(): Array<Unstable_ExternalCodeSample | OpenAPIXCodeSample>;
    get parameters(): FieldModel[];
    get responses(): ResponseModel[];
    get callbacks(): CallbackModel[];
    setActiveServer(activeServer: Server): void;
    private generateCodeSamples;
}
