import { SpecStore, OpenAPIDefinition, ApiInfoModel, OpenAPIParser, OpenAPIExternalDocumentation, SecuritySchemesModel, ContentItemModel } from '../redoc-lib';
import { RedocProNormalizedOptions } from './ProStore';
interface VersionInfo {
    id: string;
    title: string;
    url?: string;
    spec?: OpenAPIDefinition;
    isDefault?: boolean;
    _searchIndexName?: string;
}
export interface SpecVersions {
    versions?: Array<VersionInfo>;
}
export interface SpecInfo {
    id?: string;
    title?: string;
    spec?: OpenAPIDefinition;
    url?: string;
    items?: SpecInfo[];
}
export declare class VersionedSpecStore {
    config: SpecVersions;
    options: RedocProNormalizedOptions;
    versions: (SpecStore & {
        _searchIndexName?: string;
    })[];
    activeVersionIdx: number;
    constructor(config: SpecVersions, options: RedocProNormalizedOptions, currentId: string);
    get versionsInfo(): Array<VersionInfo>;
    get currentVersionId(): string;
    get contentItems(): ContentItemModel[];
    get securitySchemes(): SecuritySchemesModel;
    get externalDocs(): OpenAPIExternalDocumentation | undefined;
    get parser(): OpenAPIParser;
    get info(): ApiInfoModel;
    changeVersion(idx: number): void;
    toJS(): SpecVersions;
}
export {};
