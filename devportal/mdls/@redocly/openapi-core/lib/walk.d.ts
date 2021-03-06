import { Referenced } from './typings/openapi';
import { Location } from './ref-utils';
import { NormalizedOasVisitors } from './visitors';
import { ResolvedRefMap, Document, ResolveError, YamlParseError, Source } from './resolve';
import { OasVersion } from './oas-types';
import { NormalizedNodeType } from './types';
declare type NonUndefined = string | number | boolean | symbol | bigint | object | Record<string, any>;
export declare type ResolveResult<T extends NonUndefined> = {
    node: T;
    location: Location;
    error?: ResolveError | YamlParseError;
} | {
    node: undefined;
    location: undefined;
    error?: ResolveError | YamlParseError;
};
export declare type ResolveFn<T> = (node: Referenced<T>, from?: string) => {
    location: Location;
    node: T;
} | {
    location: undefined;
    node: undefined;
};
export declare type UserContext = {
    report(problem: Problem): void;
    location: Location;
    resolve<T>(node: Referenced<T>): {
        location: Location;
        node: T;
    } | {
        location: undefined;
        node: undefined;
    };
    parentLocations: Record<string, Location>;
    type: NormalizedNodeType;
    key: string | number;
    parent: any;
    oasVersion: OasVersion;
};
export declare type Loc = {
    line: number;
    col: number;
};
export declare type PointerLocationObject = {
    source: Source;
    reportOnKey?: boolean;
    pointer: string;
};
export declare type LineColLocationObject = Omit<PointerLocationObject, 'pointer'> & {
    pointer: undefined;
    start: Loc;
    end?: Loc;
};
export declare type LocationObject = LineColLocationObject | PointerLocationObject;
export declare type ProblemSeverity = 'error' | 'warn';
export declare type Problem = {
    message: string;
    suggest?: string[];
    location?: Partial<LocationObject> | Array<Partial<LocationObject>>;
    from?: LocationObject;
    forceSeverity?: ProblemSeverity;
};
export declare type NormalizedProblem = {
    message: string;
    ruleId: string;
    severity: ProblemSeverity;
    location: LocationObject[];
    from?: LocationObject;
    suggest: string[];
    ignored?: boolean;
};
export declare type WalkContext = {
    problems: NormalizedProblem[];
    oasVersion: OasVersion;
    refTypes?: Map<string, NormalizedNodeType>;
};
export declare function walkDocument<T>(opts: {
    document: Document;
    rootType: NormalizedNodeType;
    normalizedVisitors: NormalizedOasVisitors<T>;
    resolvedRefMap: ResolvedRefMap;
    ctx: WalkContext;
}): void;
export {};
