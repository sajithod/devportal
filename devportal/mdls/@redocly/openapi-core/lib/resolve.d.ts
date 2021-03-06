import type { YAMLNode, LoadOptions } from 'yaml-ast-parser';
import { NormalizedNodeType } from './types';
import { ResolveConfig } from './config/config';
export declare type CollectedRefs = Map<string, Document>;
export declare class Source {
    absoluteRef: string;
    body: string;
    mimeType?: string | undefined;
    constructor(absoluteRef: string, body: string, mimeType?: string | undefined);
    private _ast;
    private _lines;
    getAst(safeLoad: (input: string, options?: LoadOptions | undefined) => YAMLNode): YAMLNode;
    getLines(): string[];
}
export declare class ResolveError extends Error {
    originalError: Error;
    constructor(originalError: Error);
}
export declare class YamlParseError extends Error {
    originalError: Error;
    source: Source;
    col: number;
    line: number;
    constructor(originalError: Error, source: Source);
}
export declare type Document = {
    source: Source;
    parsed: any;
};
export declare function makeDocumentFromString(sourceString: string, absoluteRef: string): {
    source: Source;
    parsed: unknown;
};
export declare class BaseResolver {
    private config;
    cache: Map<string, Promise<Document | ResolveError>>;
    constructor(config?: ResolveConfig);
    getFiles(): Set<string>;
    resolveExternalRef(base: string | null, ref: string): string;
    loadExternalRef(absoluteRef: string): Promise<Source>;
    parseDocument(source: Source, isRoot?: boolean): Document;
    resolveDocument(base: string | null, ref: string, isRoot?: boolean): Promise<Document | ResolveError | YamlParseError>;
}
export declare type ResolvedRef = {
    resolved: false;
    isRemote: boolean;
    nodePointer?: string;
    document?: Document;
    source?: Source;
    error?: ResolveError | YamlParseError;
    node?: any;
} | {
    resolved: true;
    node: any;
    document: Document;
    nodePointer: string;
    isRemote: boolean;
    error?: undefined;
};
export declare type ResolvedRefMap = Map<string, ResolvedRef>;
export declare function resolveDocument(opts: {
    rootDocument: Document;
    externalRefResolver: BaseResolver;
    rootType: NormalizedNodeType;
}): Promise<ResolvedRefMap>;
