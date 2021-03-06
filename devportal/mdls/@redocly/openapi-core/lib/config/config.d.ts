import { OasVersion, Oas3PreprocessorsSet, OasMajorVersion, Oas3DecoratorsSet, Oas2RuleSet, Oas2PreprocessorsSet, Oas2DecoratorsSet, Oas3RuleSet } from '../oas-types';
import { ProblemSeverity, NormalizedProblem } from '../walk';
import { NodeType } from '../types';
export declare const IGNORE_FILE = ".redocly.lint-ignore.yaml";
export declare type RuleConfig = ProblemSeverity | 'off' | ({
    severity?: ProblemSeverity;
} & Record<string, any>);
export declare type PreprocessorConfig = ProblemSeverity | 'off' | 'on' | {
    severity?: ProblemSeverity;
    options?: Record<string, any>;
};
export declare type DecoratorConfig = PreprocessorConfig;
export declare type LintRawConfig = {
    plugins?: (string | Plugin)[];
    extends?: string[];
    doNotResolveExamples?: boolean;
    rules?: Record<string, RuleConfig>;
    oas2Rules?: Record<string, RuleConfig>;
    oas3_0Rules?: Record<string, RuleConfig>;
    oas3_1Rules?: Record<string, RuleConfig>;
    preprocessors?: Record<string, PreprocessorConfig>;
    oas2Preprocessors?: Record<string, PreprocessorConfig>;
    oas3_0Preprocessors?: Record<string, PreprocessorConfig>;
    oas3_1Preprocessors?: Record<string, PreprocessorConfig>;
    decorators?: Record<string, DecoratorConfig>;
    oas2Decorators?: Record<string, DecoratorConfig>;
    oas3_0Decorators?: Record<string, DecoratorConfig>;
    oas3_1Decorators?: Record<string, DecoratorConfig>;
};
export declare type PreprocessorsConfig = {
    oas3?: Oas3PreprocessorsSet;
    oas2?: Oas2PreprocessorsSet;
};
export declare type DecoratorsConfig = {
    oas3?: Oas3DecoratorsSet;
    oas2?: Oas2DecoratorsSet;
};
export declare type TypesExtensionFn = (types: Record<string, NodeType>, oasVersion: OasVersion) => Record<string, NodeType>;
export declare type TypeExtensionsConfig = Partial<Record<OasMajorVersion, TypesExtensionFn>>;
export declare type CustomRulesConfig = {
    oas3?: Oas3RuleSet;
    oas2?: Oas2RuleSet;
};
export declare type Plugin = {
    id: string;
    configs?: Record<string, LintRawConfig>;
    rules?: CustomRulesConfig;
    preprocessors?: PreprocessorsConfig;
    decorators?: DecoratorsConfig;
    typeExtension?: TypeExtensionsConfig;
};
export declare type ResolveHeader = {
    name: string;
    envVariable?: undefined;
    value: string;
    matches: string;
} | {
    name: string;
    value?: undefined;
    envVariable: string;
    matches: string;
};
export declare type RawResolveConfig = {
    http?: Partial<HttpResolveConfig>;
};
export declare type HttpResolveConfig = {
    headers: ResolveHeader[];
    customFetch?: Function;
};
export declare type ResolveConfig = {
    http: HttpResolveConfig;
};
export declare type RawConfig = {
    referenceDocs?: any;
    apiDefinitions?: Record<string, string>;
    lint?: LintRawConfig;
    resolve?: RawResolveConfig;
};
export declare class LintConfig {
    rawConfig: LintRawConfig;
    configFile?: string | undefined;
    plugins: Plugin[];
    ignore: Record<string, Record<string, Set<string>>>;
    doNotResolveExamples: boolean;
    rules: Record<OasVersion, Record<string, RuleConfig>>;
    preprocessors: Record<OasVersion, Record<string, PreprocessorConfig>>;
    decorators: Record<OasVersion, Record<string, DecoratorConfig>>;
    private _usedRules;
    private _usedVersions;
    recommendedFallback: boolean;
    constructor(rawConfig: LintRawConfig, configFile?: string | undefined);
    saveIgnore(): void;
    addIgnore(problem: NormalizedProblem): void;
    addProblemToIgnore(problem: NormalizedProblem): NormalizedProblem;
    extendTypes(types: Record<string, NodeType>, version: OasVersion): Record<string, NodeType>;
    getRuleSettings(ruleId: string, oasVersion: OasVersion): {
        severity: ProblemSeverity | "off";
    };
    getPreprocessorSettings(ruleId: string, oasVersion: OasVersion): {
        severity: ProblemSeverity | "off";
    } | {
        severity: ProblemSeverity;
        options?: Record<string, any> | undefined;
    };
    getDecoratorSettings(ruleId: string, oasVersion: OasVersion): {
        severity: ProblemSeverity | "off";
    } | {
        severity: ProblemSeverity;
        options?: Record<string, any> | undefined;
    };
    getUnusedRules(): {
        rules: string[];
        preprocessors: string[];
        decorators: string[];
    };
    getRulesForOasVersion(version: OasMajorVersion): Oas3RuleSet[] | Oas2RuleSet[];
    skipRules(rules?: string[]): void;
    skipPreprocessors(preprocessors?: string[]): void;
    skipDecorators(decorators?: string[]): void;
}
export declare class Config {
    rawConfig: RawConfig;
    configFile?: string | undefined;
    referenceDocs: any;
    apiDefinitions: Record<string, string>;
    lint: LintConfig;
    resolve: ResolveConfig;
    licenseKey?: string;
    constructor(rawConfig: RawConfig, configFile?: string | undefined);
}
