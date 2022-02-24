import { IValueDidChange } from 'mobx';
import { ContentItemModel, IMenuItem, MarkerService, OperationModel, RedocNormalizedOptions, RedocRawOptions, SearchStore, SpecStore, OpenAPIExternalDocumentation, OpenAPIDefinition } from '../redoc-lib';
import { ProMenu } from './ProMenu';
import { SearchResultMeta } from './SearchStore';
import { ThemeExtension } from './extendTheme';
import { SpecVersions, VersionedSpecStore } from './VersionedSpecStore';
import { LicenseInfo } from './check';
import { CodeSamplesConfig, Languages } from './code-samples/';
import { Events, LayoutVariant } from './store-types';
export declare type Normalized<T> = {
    [P in keyof T]-?: T[P];
};
export declare type RedocProTheme = RedocRawOptions['theme'] & ThemeExtension;
export declare type MarkdownItemsPagination = 'none' | 'section';
export declare type Pagination = 'none' | 'section' | 'item';
export declare type ExternalLink = ExternalLinkLink | ExternalLinkSeparator;
export declare type ExternalLinkLink = {
    label: string;
    link: string;
    target?: string;
    separatorLine?: boolean;
};
export declare type ExternalLinkSeparator = {
    separator?: string;
    separatorLine?: boolean;
};
export declare type RedocProUserOptionsExt = {
    licenseKey?: string;
    searchMode?: 'default' | 'path-only';
    searchOperationTitleBoost?: number | string;
    searchTagTitleBoost?: number | string;
    searchFieldLevelBoost?: number | string;
    searchAutoExpand?: boolean;
    sideNavStyle?: 'summary-only' | 'path-first';
    showConsole?: boolean;
    hideLogo?: boolean;
    whiteLabel?: boolean;
    disableErrorBoundary?: boolean;
    hideInfoSection?: boolean;
    pagination?: Pagination;
    showNextButton?: boolean;
    disableSidebar?: boolean;
    skipBundleAndConvert?: boolean;
    /** @deprecated */
    routingStrategy?: 'hash' | 'browser';
    routingBasePath?: string;
    theme?: RedocProTheme;
    downloadDefinitionUrl?: string;
    ctrlFHijack?: boolean;
    unstable_externalDescription?: string;
    linkForId?: ((id: string) => string) | null;
    generateDeepLink?: ((fieldFragment: string, operationLink: any) => string) | undefined | null;
    onDeepLinkClick?: ((link: string) => void) | undefined | null;
    requestInterceptor?: ((req: Request, operation: OperationModel) => void) | undefined | null;
    oAuth2RedirectURI?: string | null;
    corsProxyUrl?: string | null;
    authCorsProxyUrl?: string | null;
    disablePaginationLoadingAnimation?: boolean | null;
    generateCodeSamples?: CodeSamplesConfig;
    showRightPanelToggle?: boolean;
    showChangeLayoutButton?: boolean;
    layout?: LayoutVariant;
    defaultSampleLanguage?: Languages | string;
    hideRightPanel?: boolean;
    events?: Events;
    deepLinkSeparator?: string;
    deepLinkPrefix?: string;
    disableDeepLinks?: boolean;
    sidebarLinks?: {
        beforeInfo?: Array<ExternalLink>;
        end?: Array<ExternalLink>;
    };
    searchMaxDepth?: number;
};
declare type RedocProOptionsInternalExt = RedocProUserOptionsExt & {
    markdownItemsPagination?: MarkdownItemsPagination;
};
export declare type RedocProRawOptions = RedocRawOptions & RedocProUserOptionsExt;
export declare type RedocProNormalizedOptions = RedocNormalizedOptions & Normalized<RedocProOptionsInternalExt>;
export interface ProStoreState {
    menu: {
        activeItemIdx: number;
    };
    definition: {
        url?: string;
        data: GenericObject;
        activeVersionIdx?: number;
    };
    searchIndex?: number;
    tryItOperationId?: string;
    options: RedocProRawOptions;
    searchIndexPath?: string;
    searchIndexExport?: string;
}
export declare class NestingGroup implements IMenuItem {
    id: string;
    absoluteIdx?: number;
    name: string;
    description?: string;
    type: 'group';
    linkable: boolean;
    items: ContentItemModel[];
    parent?: NestingGroup;
    externalDocs?: OpenAPIExternalDocumentation;
    active: boolean;
    expanded: boolean;
    depth: number;
    level: number;
    constructor(id: string, items: ContentItemModel[], name?: string, linkable?: boolean);
    activate(): void;
    expand(): void;
    collapse(): void;
    deactivate(): void;
}
export declare class ProStore {
    rawOptions: RedocProRawOptions;
    options: RedocProNormalizedOptions;
    menu: ProMenu;
    definition: SpecStore | VersionedSpecStore;
    marker: MarkerService;
    private readonly scroll;
    private readonly disposer;
    search?: SearchStore<SearchResultMeta>;
    tryItOperation?: OperationModel;
    showRightPanel: boolean;
    layout: LayoutVariant;
    activeSampleLanguage: string;
    isLoading: boolean;
    l: Promise<LicenseInfo>;
    constructor(spec: OpenAPIDefinition | SpecVersions | Array<{
        title: string;
        url: string;
    }> | string, specUrl?: string, options?: RedocProRawOptions, createIndex?: boolean);
    initProOptions(options: RedocProRawOptions): void;
    initSearch(options: RedocProNormalizedOptions, createIndex: boolean): void;
    onDidMount(): void;
    toggleRightPanel(value?: boolean): void;
    toggleLayout(layout?: LayoutVariant): void;
    disableConsole(): void;
    enableConsole(): void;
    tryItOut(operation?: OperationModel): void;
    setActiveSampleLanguage(language: string): void;
    activateSampleLanguage(language: string): void;
    startLoader(): void;
    stopLoader(): void;
    dereferenceSpecForTryIt(operation: OperationModel): Promise<GenericObject>;
    observeAllAndRemark(): void;
    remark(change: IValueDidChange): void;
    /**
     * deserialize store
     * **SUPER HACKY AND NOT OPTIMAL IMPLEMENTATION**
     */
    static fromJS(state: ProStoreState): ProStore;
    toJS(): Promise<ProStoreState>;
    dispose(): void;
    private updateMarkOnMenu;
}
export {};
