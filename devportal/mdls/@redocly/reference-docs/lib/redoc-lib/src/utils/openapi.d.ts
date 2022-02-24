import { FieldModel } from '../services/models';
import { OpenAPIParser } from '../services/OpenAPIParser';
import { OpenAPIEncoding, OpenAPIMediaType, OpenAPIOperation, OpenAPIParameter, OpenAPIParameterStyle, OpenAPISchema, OpenAPIServer, Referenced, OpenAPIResponse, OpenAPIRequestBody } from '../types';
export declare function isStatusCode(statusCode: string): boolean;
export declare function getStatusCodeType(statusCode: string | number, defaultAsError?: boolean): string;
export declare function isOperationName(key: string): boolean;
export declare function getOperationSummary(operation: OpenAPIOperation): string;
export declare function detectType(schema: OpenAPISchema): string;
export declare function isPrimitiveType(schema: OpenAPISchema, type?: string | string[] | undefined): boolean;
export declare function isJsonLike(contentType: string): boolean;
export declare function isFormUrlEncoded(contentType: string): boolean;
export declare function urlFormEncodePayload(payload: GenericObject, encoding?: {
    [field: string]: OpenAPIEncoding;
}): string;
export declare function serializeQueryParameter(name: string, style: OpenAPIParameterStyle | undefined, explode: boolean, value: unknown): string;
export declare function serializeParameterValueWithMime(value: unknown, mime: string): string;
export declare function serializeParameterValue(parameter: OpenAPIParameter & {
    serializationMime?: string;
}, value: unknown): string;
export declare function langFromMime(contentType: string): string;
export declare function isNamedDefinition(pointer?: string): boolean;
export declare function getDefinitionName(pointer?: string): string | undefined;
export declare function humanizeNumberRange(schema: OpenAPISchema): string | undefined;
export declare function humanizeConstraints(schema: OpenAPISchema): string[];
export declare function sortByRequired(fields: FieldModel[], order?: string[]): Array<FieldModel>;
export declare function sortByField(fields: FieldModel[], param: keyof Pick<FieldModel, 'name' | 'description' | 'kind'>): Array<FieldModel>;
export declare function mergeParams(parser: OpenAPIParser, pathParams?: Array<Referenced<OpenAPIParameter>>, operationParams?: Array<Referenced<OpenAPIParameter>>): Array<Referenced<OpenAPIParameter>>;
export declare function mergeSimilarMediaTypes(types: Record<string, OpenAPIMediaType>): Record<string, OpenAPIMediaType>;
export declare function expandDefaultServerVariables(url: string, variables?: GenericObject): string;
export declare function normalizeServers(specUrl: string | undefined, servers: OpenAPIServer[]): OpenAPIServer[];
export declare const SECURITY_DEFINITIONS_COMPONENT_NAME = "security-definitions";
export declare const SECURITY_DEFINITIONS_JSX_NAME = "SecurityDefinitions";
export declare const SCHEMA_DEFINITION_JSX_NAME = "SchemaDefinition";
export declare let SECURITY_SCHEMES_SECTION_PREFIX: string;
export declare function setSecuritySchemePrefix(prefix: string): void;
export declare const shortenHTTPVerb: (verb: string) => string;
export declare function isRedocExtension(key: string): boolean;
export declare function extractExtensions(obj: GenericObject, showExtensions: string[] | true): GenericObject;
export declare function pluralizeType(displayType: string): string;
export declare function getContentWithLegacyExamples(info: OpenAPIRequestBody | OpenAPIResponse): {
    [mime: string]: OpenAPIMediaType;
} | undefined;
