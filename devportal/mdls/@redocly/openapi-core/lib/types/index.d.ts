export declare type ScalarSchema = {
    name?: never;
    type?: 'string' | 'boolean' | 'number' | 'integer' | 'object' | 'array';
    items?: ScalarSchema;
    enum?: string[];
    isExample?: boolean;
    directResolveAs?: string;
    minimum?: number;
};
export declare type NormalizedScalarSchema = {
    name?: never;
    type?: 'string' | 'boolean' | 'number' | 'integer' | 'object' | 'array';
    items?: ScalarSchema;
    enum?: string[];
    directResolveAs?: NormalizedNodeType;
    resolvable: boolean;
    minimum?: number;
};
export declare type NodeType = {
    properties: Record<string, PropType | ResolveTypeFn>;
    additionalProperties?: PropType | ResolveTypeFn;
    items?: string;
    required?: string[] | ((value: any, key: string | number | undefined) => string[]);
    requiredOneOf?: string[];
};
declare type PropType = string | NodeType | ScalarSchema | undefined | null;
declare type ResolveTypeFn = (value: any, key: string) => string | PropType;
export declare type NormalizedNodeType = {
    name: string;
    properties: Record<string, NormalizedPropType | NormalizedResolveTypeFn>;
    additionalProperties?: NormalizedPropType | NormalizedResolveTypeFn;
    items?: NormalizedNodeType;
    required?: string[] | ((value: any, key: string | number | undefined) => string[]);
    requiredOneOf?: string[];
};
declare type NormalizedPropType = NormalizedNodeType | NormalizedScalarSchema | undefined | null;
declare type NormalizedResolveTypeFn = (value: any, key: string) => NormalizedNodeType | NormalizedScalarSchema | undefined | null;
export declare function listOf(typeName: string): {
    name: string;
    properties: {};
    items: string;
};
export declare function mapOf(typeName: string): {
    name: string;
    properties: {};
    additionalProperties: () => string;
};
export declare function normalizeTypes(types: Record<string, NodeType>, options?: {
    doNotResolveExamples?: boolean;
}): Record<string, NormalizedNodeType>;
export declare function isNamedType(t: NormalizedNodeType | NormalizedScalarSchema | null | undefined): t is NormalizedNodeType;
export {};
