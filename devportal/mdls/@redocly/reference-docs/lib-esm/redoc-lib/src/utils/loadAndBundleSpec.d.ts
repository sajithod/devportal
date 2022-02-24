import { Document } from '@redocly/openapi-core';
import type { OpenAPIDefinition } from '../types';
export declare function loadAndBundleDefinition(specUrlOrObject: GenericObject | string): Promise<OpenAPIDefinition>;
export declare function createParsedDocument(specUrlOrObject: GenericObject | string): Document;
export declare function convertSwagger2OpenAPI(spec: GenericObject): Promise<OpenAPIDefinition>;
