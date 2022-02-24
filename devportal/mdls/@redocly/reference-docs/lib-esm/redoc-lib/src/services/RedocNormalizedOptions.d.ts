/// <reference types="react" />
import { OperationModel, Sample } from '.';
import { ResolvedThemeInterface, ThemeInterface } from '../theme';
import { LabelsConfigRaw } from './Labels';
import { MDXComponentMeta } from './MarkdownRenderer';
import { Server } from '../types';
import type { OAuth2 } from '../../../services/OAuth2';
import type { ProStore } from '../../../services';
export declare type Unstable_ExternalCodeSample = Sample & {
    get: (source: ExternalSource) => string;
};
export interface ExternalSource {
    sample: Unstable_ExternalCodeSample;
    operation: OperationModel;
    exampleName?: string;
    pathParams?: any;
    properties?: any;
}
export interface SecurityPanelHookProps {
    operation: OperationModel;
    server: Server;
    onChange: (securityDetails: unknown) => void;
    OAuth2: OAuth2;
}
export interface HookRawHtml {
    html: string;
}
declare type HookResult = JSX.Element | HookRawHtml | null;
export declare type HookConfig<T> = (props: T) => HookResult;
interface HooksConfig {
    BeforeOperation?: HookConfig<{
        operation: OperationModel;
    }>;
    BeforeOperationSummary?: HookConfig<{
        operation: OperationModel;
    }>;
    AfterOperationSummary?: HookConfig<{
        operation: OperationModel;
    }>;
    AfterOperation?: HookConfig<{
        operation: OperationModel;
    }>;
    ReplaceTryItSecurityPanel?: HookConfig<SecurityPanelHookProps>;
    onInit?: (args: {
        store: ProStore;
    }) => void;
    replaceSecurityLink?: (args: {
        securityRequirementId: string;
    }) => string;
    sanitize?: (raw: string) => string;
    /** @deprecated Use ReplaceTryItSecurityPanel instead */
    ReplaceTryItAuthPanel?: HookConfig<SecurityPanelHookProps>;
}
export interface RedocRawOptions {
    theme?: ThemeInterface;
    scrollYOffset?: number | string | (() => number);
    hideHostname?: boolean | string;
    hideInfoDescription?: boolean | string;
    expandResponses?: string | 'all';
    requiredPropsFirst?: boolean | string;
    sortPropsAlphabetically?: boolean | string;
    sortEnumValuesAlphabetically?: boolean | string;
    sortOperationsAlphabetically?: boolean | string;
    sortTagsAlphabetically?: boolean | string;
    noAutoAuth?: boolean | string;
    nativeScrollbars?: boolean | string;
    pathInMiddlePanel?: boolean | string;
    untrustedDefinition?: boolean | string;
    hideLoading?: boolean | string;
    hideDownloadButton?: boolean | string;
    disableSearch?: boolean | string;
    showChangeLayoutButton?: boolean | string;
    onlyRequiredInSamples?: boolean | string;
    generatedPayloadSamplesMaxDepth?: number | string;
    sendXUserAgentInTryIt?: boolean | string;
    showExtensions?: boolean | string | string[];
    hideSingleRequestSampleTab?: boolean | string;
    hideRequestPayloadSample?: boolean;
    menuToggle?: boolean | string;
    jsonSampleExpandLevel?: number | string | 'all';
    hideSchemaTitles?: boolean | string;
    simpleOneOfTypeLabel?: boolean | string;
    payloadSampleIdx?: number;
    expandSingleSchemaField?: boolean | string;
    schemaExpansionLevel?: number | string | 'all';
    samplesTabsMaxCount?: number;
    unstable_tryItButtonOverride?: {
        label: string;
        link: string;
    };
    allowedMdComponents?: Record<string, MDXComponentMeta>;
    labels?: LabelsConfigRaw;
    enumSkipQuotes?: boolean | string;
    expandDefaultServerVariables?: boolean;
    expandDefaultRequest?: boolean;
    expandDefaultResponse?: boolean;
    maxDisplayedEnumValues?: number;
    ignoreNamedSchemas?: string[] | string;
    unstable_externalCodeSamples?: Unstable_ExternalCodeSample[];
    unstable_ignoreMimeParameters?: boolean;
    hooks?: HooksConfig;
    hideSchemaPattern?: boolean;
    hideOneOfDescription?: boolean;
}
export declare function argValueToBoolean(val?: string | boolean, defaultValue?: boolean): boolean;
export declare class RedocNormalizedOptions {
    static normalizeExpandResponses(value: RedocRawOptions['expandResponses']): 'all' | {
        [code: string]: boolean;
    };
    static normalizeHideHostname(value: RedocRawOptions['hideHostname']): boolean;
    static normalizeScrollYOffset(value: RedocRawOptions['scrollYOffset']): () => number;
    static normalizeShowExtensions(value: RedocRawOptions['showExtensions']): string[] | boolean;
    static normalizePayloadSampleIdx(value: RedocRawOptions['payloadSampleIdx']): number;
    theme: ResolvedThemeInterface;
    scrollYOffset: () => number;
    hideHostname: boolean;
    hideInfoDescription: boolean;
    expandResponses: {
        [code: string]: boolean;
    } | 'all';
    requiredPropsFirst: boolean;
    sortPropsAlphabetically: boolean;
    sortEnumValuesAlphabetically: boolean;
    sortOperationsAlphabetically: boolean;
    sortTagsAlphabetically: boolean;
    noAutoAuth: boolean;
    nativeScrollbars: boolean;
    pathInMiddlePanel: boolean;
    untrustedDefinition: boolean;
    hideDownloadButton: boolean | null;
    disableSearch: boolean;
    showChangeLayoutButton?: boolean | string;
    onlyRequiredInSamples: boolean;
    showConsole: boolean;
    sendXUserAgentInTryIt: boolean;
    generatedPayloadSamplesMaxDepth: number;
    showExtensions: boolean | string[];
    hideSingleRequestSampleTab: boolean;
    hideRequestPayloadSample: boolean;
    menuToggle: boolean;
    jsonSampleExpandLevel: number;
    enumSkipQuotes: boolean;
    hideSchemaTitles: boolean;
    simpleOneOfTypeLabel: boolean;
    payloadSampleIdx: number;
    expandSingleSchemaField: boolean;
    schemaExpansionLevel: number;
    samplesTabsMaxCount: number;
    unstable_tryItButtonOverride?: {
        label: string;
        link?: string;
        onClick?: () => void;
    } | null;
    allowedMdComponents: Record<string, MDXComponentMeta>;
    expandDefaultServerVariables: boolean;
    expandDefaultRequest: boolean;
    expandDefaultResponse: boolean;
    maxDisplayedEnumValues?: number;
    ignoreNamedSchemas: Set<string>;
    unstable_ignoreMimeParameters: boolean;
    unstable_externalCodeSamples: Unstable_ExternalCodeSample[];
    hooks: HooksConfig;
    hideSchemaPattern: boolean;
    hideOneOfDescription: boolean;
    constructor(raw: RedocRawOptions, defaults?: RedocRawOptions);
}
export {};
