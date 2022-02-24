export declare type Maybe<T> = T | null;
export interface StringQueryOperatorInput {
    eq?: Maybe<string>;
    ne?: Maybe<string>;
    in?: Maybe<Maybe<string>[]>;
    nin?: Maybe<Maybe<string>[]>;
    regex?: Maybe<string>;
    glob?: Maybe<string>;
}
export interface IntQueryOperatorInput {
    eq?: Maybe<number>;
    ne?: Maybe<number>;
    gt?: Maybe<number>;
    gte?: Maybe<number>;
    lt?: Maybe<number>;
    lte?: Maybe<number>;
    in?: Maybe<Maybe<number>[]>;
    nin?: Maybe<Maybe<number>[]>;
}
export interface DateQueryOperatorInput {
    eq?: Maybe<Date>;
    ne?: Maybe<Date>;
    gt?: Maybe<Date>;
    gte?: Maybe<Date>;
    lt?: Maybe<Date>;
    lte?: Maybe<Date>;
    in?: Maybe<Maybe<Date>[]>;
    nin?: Maybe<Maybe<Date>[]>;
}
export interface FloatQueryOperatorInput {
    eq?: Maybe<number>;
    ne?: Maybe<number>;
    gt?: Maybe<number>;
    gte?: Maybe<number>;
    lt?: Maybe<number>;
    lte?: Maybe<number>;
    in?: Maybe<Maybe<number>[]>;
    nin?: Maybe<Maybe<number>[]>;
}
export interface NodeFilterInput {
    id?: Maybe<StringQueryOperatorInput>;
    parent?: Maybe<NodeFilterInput>;
    children?: Maybe<NodeFilterListInput>;
    internal?: Maybe<InternalFilterInput>;
}
export interface NodeFilterListInput {
    elemMatch?: Maybe<NodeFilterInput>;
}
export interface InternalFilterInput {
    content?: Maybe<StringQueryOperatorInput>;
    contentDigest?: Maybe<StringQueryOperatorInput>;
    description?: Maybe<StringQueryOperatorInput>;
    fieldOwners?: Maybe<StringQueryOperatorInput>;
    ignoreType?: Maybe<BooleanQueryOperatorInput>;
    mediaType?: Maybe<StringQueryOperatorInput>;
    owner?: Maybe<StringQueryOperatorInput>;
    type?: Maybe<StringQueryOperatorInput>;
}
export interface BooleanQueryOperatorInput {
    eq?: Maybe<boolean>;
    ne?: Maybe<boolean>;
    in?: Maybe<Maybe<boolean>[]>;
    nin?: Maybe<Maybe<boolean>[]>;
}
export interface ContentItemFilterListInput {
    elemMatch?: Maybe<ContentItemFilterInput>;
}
export interface ContentItemFilterInput {
    pageId?: Maybe<StringQueryOperatorInput>;
    link?: Maybe<StringQueryOperatorInput>;
    baseLink?: Maybe<StringQueryOperatorInput>;
    type?: Maybe<StringQueryOperatorInput>;
    data?: Maybe<ContentItemDataFilterInput>;
    permission?: Maybe<StringQueryOperatorInput>;
    sourcePath?: Maybe<StringQueryOperatorInput>;
    fields?: Maybe<ContentItemFieldsFilterInput>;
    id?: Maybe<StringQueryOperatorInput>;
    parent?: Maybe<NodeFilterInput>;
    children?: Maybe<NodeFilterListInput>;
    internal?: Maybe<InternalFilterInput>;
}
export interface ContentItemDataFilterInput {
    settings?: Maybe<JsonQueryOperatorInput>;
    enableToc?: Maybe<BooleanQueryOperatorInput>;
    disableLastModified?: Maybe<BooleanQueryOperatorInput>;
    tocMaxDepth?: Maybe<IntQueryOperatorInput>;
    requestLogin?: Maybe<BooleanQueryOperatorInput>;
    showPrevButton?: Maybe<BooleanQueryOperatorInput>;
    showNextButton?: Maybe<BooleanQueryOperatorInput>;
    apiVersions?: Maybe<ContentItemApiVersionFilterListInput>;
    isDefaultApiVersion?: Maybe<BooleanQueryOperatorInput>;
    apiVersionId?: Maybe<StringQueryOperatorInput>;
    label?: Maybe<StringQueryOperatorInput>;
    permission?: Maybe<StringQueryOperatorInput>;
    customData?: Maybe<ContentItemDataCustomDataFilterInput>;
    description?: Maybe<StringQueryOperatorInput>;
    title?: Maybe<StringQueryOperatorInput>;
    redocStoreStr?: Maybe<StringQueryOperatorInput>;
    redocItemId?: Maybe<StringQueryOperatorInput>;
    redocMenuItems?: Maybe<ContentItemDataRedocMenuItemsFilterListInput>;
    redocInfoPageId?: Maybe<StringQueryOperatorInput>;
    redocInfoPageLink?: Maybe<StringQueryOperatorInput>;
    redocHasInfoPage?: Maybe<BooleanQueryOperatorInput>;
    redocHasSecurityDefinitions?: Maybe<BooleanQueryOperatorInput>;
    customTemplate?: Maybe<StringQueryOperatorInput>;
    customDataString?: Maybe<StringQueryOperatorInput>;
    matchPath?: Maybe<StringQueryOperatorInput>;
    excludeFromSearch?: Maybe<BooleanQueryOperatorInput>;
    nextToButton?: Maybe<BooleanQueryOperatorInput>;
    path?: Maybe<StringQueryOperatorInput>;
    id?: Maybe<StringQueryOperatorInput>;
    date?: Maybe<DateQueryOperatorInput>;
    status?: Maybe<StringQueryOperatorInput>;
    author?: Maybe<StringQueryOperatorInput>;
    excerpt?: Maybe<StringQueryOperatorInput>;
    categories?: Maybe<StringQueryOperatorInput>;
    headerImage?: Maybe<StringQueryOperatorInput>;
    blog_id?: Maybe<IntQueryOperatorInput>;
    leadCaptureCampaign?: Maybe<StringQueryOperatorInput>;
    type?: Maybe<StringQueryOperatorInput>;
    collection?: Maybe<StringQueryOperatorInput>;
    keywords?: Maybe<StringQueryOperatorInput>;
    definitionId?: Maybe<StringQueryOperatorInput>;
    showInfo?: Maybe<BooleanQueryOperatorInput>;
    redirect?: Maybe<BooleanQueryOperatorInput>;
    parent?: Maybe<NodeFilterInput>;
    children?: Maybe<NodeFilterListInput>;
    internal?: Maybe<InternalFilterInput>;
}
export interface JsonQueryOperatorInput {
    eq?: Maybe<Json>;
    ne?: Maybe<Json>;
    in?: Maybe<Maybe<Json>[]>;
    nin?: Maybe<Maybe<Json>[]>;
    regex?: Maybe<Json>;
    glob?: Maybe<Json>;
}
export interface ContentItemApiVersionFilterListInput {
    elemMatch?: Maybe<ContentItemApiVersionFilterInput>;
}
export interface ContentItemApiVersionFilterInput {
    definitionId?: Maybe<StringQueryOperatorInput>;
    id?: Maybe<StringQueryOperatorInput>;
    title?: Maybe<StringQueryOperatorInput>;
    isDefault?: Maybe<BooleanQueryOperatorInput>;
}
export interface ContentItemDataCustomDataFilterInput {
    label?: Maybe<StringQueryOperatorInput>;
    title?: Maybe<StringQueryOperatorInput>;
    nextToButton?: Maybe<BooleanQueryOperatorInput>;
    datapoint?: Maybe<StringQueryOperatorInput>;
    items?: Maybe<StringQueryOperatorInput>;
    path?: Maybe<StringQueryOperatorInput>;
    permission?: Maybe<StringQueryOperatorInput>;
    enableToc?: Maybe<BooleanQueryOperatorInput>;
    id?: Maybe<StringQueryOperatorInput>;
    date?: Maybe<DateQueryOperatorInput>;
    status?: Maybe<StringQueryOperatorInput>;
    author?: Maybe<StringQueryOperatorInput>;
    excerpt?: Maybe<StringQueryOperatorInput>;
    categories?: Maybe<StringQueryOperatorInput>;
    headerImage?: Maybe<StringQueryOperatorInput>;
    blog_id?: Maybe<IntQueryOperatorInput>;
    leadCaptureCampaign?: Maybe<StringQueryOperatorInput>;
    type?: Maybe<StringQueryOperatorInput>;
    collection?: Maybe<StringQueryOperatorInput>;
    description?: Maybe<StringQueryOperatorInput>;
    keywords?: Maybe<StringQueryOperatorInput>;
    a?: Maybe<IntQueryOperatorInput>;
}
export interface ContentItemDataRedocMenuItemsFilterListInput {
    elemMatch?: Maybe<ContentItemDataRedocMenuItemsFilterInput>;
}
export interface ContentItemDataRedocMenuItemsFilterInput {
    label?: Maybe<StringQueryOperatorInput>;
    link?: Maybe<StringQueryOperatorInput>;
    redocFakePage?: Maybe<BooleanQueryOperatorInput>;
    pages?: Maybe<ContentItemDataRedocMenuItemsPagesFilterListInput>;
    parentPageId?: Maybe<StringQueryOperatorInput>;
    pagination?: Maybe<StringQueryOperatorInput>;
    redocInfoPageLink?: Maybe<StringQueryOperatorInput>;
    apiVersionId?: Maybe<StringQueryOperatorInput>;
    isDefaultApiVersion?: Maybe<BooleanQueryOperatorInput>;
    permission?: Maybe<StringQueryOperatorInput>;
    separator?: Maybe<StringQueryOperatorInput>;
}
export interface ContentItemDataRedocMenuItemsPagesFilterListInput {
    elemMatch?: Maybe<ContentItemDataRedocMenuItemsPagesFilterInput>;
}
export interface ContentItemDataRedocMenuItemsPagesFilterInput {
    label?: Maybe<StringQueryOperatorInput>;
    httpVerb?: Maybe<StringQueryOperatorInput>;
    redocFakePage?: Maybe<BooleanQueryOperatorInput>;
    link?: Maybe<StringQueryOperatorInput>;
    parentPageId?: Maybe<StringQueryOperatorInput>;
}
export interface ContentItemFieldsFilterInput {
    lastModified?: Maybe<DateQueryOperatorInput>;
}
export interface MarkdownRemarkFilterInput {
    id?: Maybe<StringQueryOperatorInput>;
    frontmatter?: Maybe<MarkdownRemarkFrontmatterFilterInput>;
    excerpt?: Maybe<StringQueryOperatorInput>;
    rawMarkdownBody?: Maybe<StringQueryOperatorInput>;
    fileAbsolutePath?: Maybe<StringQueryOperatorInput>;
    fields?: Maybe<MarkdownRemarkFieldsFilterInput>;
    html?: Maybe<StringQueryOperatorInput>;
    htmlAst?: Maybe<JsonQueryOperatorInput>;
    excerptAst?: Maybe<JsonQueryOperatorInput>;
    headings?: Maybe<MarkdownHeadingFilterListInput>;
    timeToRead?: Maybe<IntQueryOperatorInput>;
    tableOfContents?: Maybe<StringQueryOperatorInput>;
    wordCount?: Maybe<MarkdownWordCountFilterInput>;
    parent?: Maybe<NodeFilterInput>;
    children?: Maybe<NodeFilterListInput>;
    internal?: Maybe<InternalFilterInput>;
}
export interface MarkdownRemarkFrontmatterFilterInput {
    enableToc?: Maybe<BooleanQueryOperatorInput>;
    disableLastModified?: Maybe<BooleanQueryOperatorInput>;
    tocMaxDepth?: Maybe<IntQueryOperatorInput>;
    title?: Maybe<StringQueryOperatorInput>;
    permission?: Maybe<StringQueryOperatorInput>;
    id?: Maybe<StringQueryOperatorInput>;
    date?: Maybe<DateQueryOperatorInput>;
    status?: Maybe<StringQueryOperatorInput>;
    author?: Maybe<StringQueryOperatorInput>;
    excerpt?: Maybe<StringQueryOperatorInput>;
    categories?: Maybe<StringQueryOperatorInput>;
    headerImage?: Maybe<StringQueryOperatorInput>;
    path?: Maybe<StringQueryOperatorInput>;
    blog_id?: Maybe<IntQueryOperatorInput>;
    leadCaptureCampaign?: Maybe<StringQueryOperatorInput>;
    type?: Maybe<StringQueryOperatorInput>;
    collection?: Maybe<StringQueryOperatorInput>;
    description?: Maybe<StringQueryOperatorInput>;
    keywords?: Maybe<StringQueryOperatorInput>;
    parent?: Maybe<NodeFilterInput>;
    children?: Maybe<NodeFilterListInput>;
    internal?: Maybe<InternalFilterInput>;
}
export interface MarkdownRemarkFieldsFilterInput {
    contentId?: Maybe<StringQueryOperatorInput>;
}
export interface MarkdownHeadingFilterListInput {
    elemMatch?: Maybe<MarkdownHeadingFilterInput>;
}
export interface MarkdownHeadingFilterInput {
    id?: Maybe<StringQueryOperatorInput>;
    value?: Maybe<StringQueryOperatorInput>;
    depth?: Maybe<IntQueryOperatorInput>;
}
export interface MarkdownWordCountFilterInput {
    paragraphs?: Maybe<IntQueryOperatorInput>;
    sentences?: Maybe<IntQueryOperatorInput>;
    words?: Maybe<IntQueryOperatorInput>;
}
export interface FileFilterInput {
    sourceInstanceName?: Maybe<StringQueryOperatorInput>;
    absolutePath?: Maybe<StringQueryOperatorInput>;
    relativePath?: Maybe<StringQueryOperatorInput>;
    extension?: Maybe<StringQueryOperatorInput>;
    size?: Maybe<IntQueryOperatorInput>;
    prettySize?: Maybe<StringQueryOperatorInput>;
    modifiedTime?: Maybe<DateQueryOperatorInput>;
    accessTime?: Maybe<DateQueryOperatorInput>;
    changeTime?: Maybe<DateQueryOperatorInput>;
    birthTime?: Maybe<DateQueryOperatorInput>;
    root?: Maybe<StringQueryOperatorInput>;
    dir?: Maybe<StringQueryOperatorInput>;
    base?: Maybe<StringQueryOperatorInput>;
    ext?: Maybe<StringQueryOperatorInput>;
    name?: Maybe<StringQueryOperatorInput>;
    relativeDirectory?: Maybe<StringQueryOperatorInput>;
    dev?: Maybe<IntQueryOperatorInput>;
    mode?: Maybe<IntQueryOperatorInput>;
    nlink?: Maybe<IntQueryOperatorInput>;
    uid?: Maybe<IntQueryOperatorInput>;
    gid?: Maybe<IntQueryOperatorInput>;
    rdev?: Maybe<IntQueryOperatorInput>;
    ino?: Maybe<FloatQueryOperatorInput>;
    atimeMs?: Maybe<FloatQueryOperatorInput>;
    mtimeMs?: Maybe<FloatQueryOperatorInput>;
    ctimeMs?: Maybe<FloatQueryOperatorInput>;
    atime?: Maybe<DateQueryOperatorInput>;
    mtime?: Maybe<DateQueryOperatorInput>;
    ctime?: Maybe<DateQueryOperatorInput>;
    birthtime?: Maybe<DateQueryOperatorInput>;
    birthtimeMs?: Maybe<FloatQueryOperatorInput>;
    blksize?: Maybe<IntQueryOperatorInput>;
    blocks?: Maybe<IntQueryOperatorInput>;
    publicURL?: Maybe<StringQueryOperatorInput>;
    id?: Maybe<StringQueryOperatorInput>;
    parent?: Maybe<NodeFilterInput>;
    children?: Maybe<NodeFilterListInput>;
    internal?: Maybe<InternalFilterInput>;
    childrenContentItem?: Maybe<ContentItemFilterListInput>;
    childMarkdownRemark?: Maybe<MarkdownRemarkFilterInput>;
}
export interface FileSortInput {
    fields?: Maybe<Maybe<FileFieldsEnum>[]>;
    order?: Maybe<SortOrderEnum>[];
}
export interface DirectoryFilterInput {
    sourceInstanceName?: Maybe<StringQueryOperatorInput>;
    absolutePath?: Maybe<StringQueryOperatorInput>;
    relativePath?: Maybe<StringQueryOperatorInput>;
    extension?: Maybe<StringQueryOperatorInput>;
    size?: Maybe<IntQueryOperatorInput>;
    prettySize?: Maybe<StringQueryOperatorInput>;
    modifiedTime?: Maybe<DateQueryOperatorInput>;
    accessTime?: Maybe<DateQueryOperatorInput>;
    changeTime?: Maybe<DateQueryOperatorInput>;
    birthTime?: Maybe<DateQueryOperatorInput>;
    root?: Maybe<StringQueryOperatorInput>;
    dir?: Maybe<StringQueryOperatorInput>;
    base?: Maybe<StringQueryOperatorInput>;
    ext?: Maybe<StringQueryOperatorInput>;
    name?: Maybe<StringQueryOperatorInput>;
    relativeDirectory?: Maybe<StringQueryOperatorInput>;
    dev?: Maybe<IntQueryOperatorInput>;
    mode?: Maybe<IntQueryOperatorInput>;
    nlink?: Maybe<IntQueryOperatorInput>;
    uid?: Maybe<IntQueryOperatorInput>;
    gid?: Maybe<IntQueryOperatorInput>;
    rdev?: Maybe<IntQueryOperatorInput>;
    ino?: Maybe<FloatQueryOperatorInput>;
    atimeMs?: Maybe<FloatQueryOperatorInput>;
    mtimeMs?: Maybe<FloatQueryOperatorInput>;
    ctimeMs?: Maybe<FloatQueryOperatorInput>;
    atime?: Maybe<DateQueryOperatorInput>;
    mtime?: Maybe<DateQueryOperatorInput>;
    ctime?: Maybe<DateQueryOperatorInput>;
    birthtime?: Maybe<DateQueryOperatorInput>;
    birthtimeMs?: Maybe<FloatQueryOperatorInput>;
    blksize?: Maybe<IntQueryOperatorInput>;
    blocks?: Maybe<IntQueryOperatorInput>;
    id?: Maybe<StringQueryOperatorInput>;
    parent?: Maybe<NodeFilterInput>;
    children?: Maybe<NodeFilterListInput>;
    internal?: Maybe<InternalFilterInput>;
}
export interface DirectorySortInput {
    fields?: Maybe<Maybe<DirectoryFieldsEnum>[]>;
    order?: Maybe<SortOrderEnum>[];
}
export interface SitePageContextFilterInput {
    id?: Maybe<StringQueryOperatorInput>;
    pageId?: Maybe<StringQueryOperatorInput>;
    pageBaseUrl?: Maybe<StringQueryOperatorInput>;
    title?: Maybe<StringQueryOperatorInput>;
    description?: Maybe<StringQueryOperatorInput>;
    type?: Maybe<StringQueryOperatorInput>;
    data?: Maybe<SitePageContextDataFilterInput>;
    link?: Maybe<StringQueryOperatorInput>;
    sidebarName?: Maybe<StringQueryOperatorInput>;
    isLanding?: Maybe<BooleanQueryOperatorInput>;
    apiVersions?: Maybe<SitePageContextApiVersionsFilterListInput>;
    isDefaultApiVersion?: Maybe<BooleanQueryOperatorInput>;
}
export interface SitePageContextDataFilterInput {
    label?: Maybe<StringQueryOperatorInput>;
    title?: Maybe<StringQueryOperatorInput>;
    nextToButton?: Maybe<BooleanQueryOperatorInput>;
    datapoint?: Maybe<StringQueryOperatorInput>;
    items?: Maybe<StringQueryOperatorInput>;
    path?: Maybe<StringQueryOperatorInput>;
    permission?: Maybe<StringQueryOperatorInput>;
    enableToc?: Maybe<BooleanQueryOperatorInput>;
    id?: Maybe<StringQueryOperatorInput>;
    date?: Maybe<DateQueryOperatorInput>;
    status?: Maybe<StringQueryOperatorInput>;
    author?: Maybe<StringQueryOperatorInput>;
    excerpt?: Maybe<StringQueryOperatorInput>;
    categories?: Maybe<StringQueryOperatorInput>;
    headerImage?: Maybe<StringQueryOperatorInput>;
    blog_id?: Maybe<IntQueryOperatorInput>;
    leadCaptureCampaign?: Maybe<StringQueryOperatorInput>;
    type?: Maybe<StringQueryOperatorInput>;
    collection?: Maybe<StringQueryOperatorInput>;
    description?: Maybe<StringQueryOperatorInput>;
    keywords?: Maybe<StringQueryOperatorInput>;
    a?: Maybe<IntQueryOperatorInput>;
}
export interface SitePageContextApiVersionsFilterListInput {
    elemMatch?: Maybe<SitePageContextApiVersionsFilterInput>;
}
export interface SitePageContextApiVersionsFilterInput {
    definitionId?: Maybe<StringQueryOperatorInput>;
    id?: Maybe<StringQueryOperatorInput>;
    title?: Maybe<StringQueryOperatorInput>;
    isDefault?: Maybe<BooleanQueryOperatorInput>;
}
export interface SitePluginFilterInput {
    id?: Maybe<StringQueryOperatorInput>;
    parent?: Maybe<NodeFilterInput>;
    children?: Maybe<NodeFilterListInput>;
    internal?: Maybe<InternalFilterInput>;
    resolve?: Maybe<StringQueryOperatorInput>;
    name?: Maybe<StringQueryOperatorInput>;
    version?: Maybe<StringQueryOperatorInput>;
    pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
    nodeAPIs?: Maybe<StringQueryOperatorInput>;
    browserAPIs?: Maybe<StringQueryOperatorInput>;
    ssrAPIs?: Maybe<StringQueryOperatorInput>;
    pluginFilepath?: Maybe<StringQueryOperatorInput>;
    packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
}
export interface SitePluginPluginOptionsFilterInput {
    plugins?: Maybe<SitePluginPluginOptionsPluginsFilterListInput>;
    configPath?: Maybe<StringQueryOperatorInput>;
    name?: Maybe<StringQueryOperatorInput>;
    path?: Maybe<StringQueryOperatorInput>;
    envVariablesAllowedClientSide?: Maybe<StringQueryOperatorInput>;
    publicDir?: Maybe<StringQueryOperatorInput>;
    maxWidth?: Maybe<IntQueryOperatorInput>;
    linkImagesToOriginal?: Maybe<BooleanQueryOperatorInput>;
    logo?: Maybe<string | LogoConfigFilterInput>;
    injectHTML?: Maybe<BooleanQueryOperatorInput>;
    loadManifestWithCredentials?: Maybe<BooleanQueryOperatorInput>;
    icons?: Maybe<SitePluginPluginOptionsIconsFilterInput>;
    pathCheck?: Maybe<BooleanQueryOperatorInput>;
}
export interface SitePluginPluginOptionsPluginsFilterListInput {
    elemMatch?: Maybe<SitePluginPluginOptionsPluginsFilterInput>;
}
export interface SitePluginPluginOptionsPluginsFilterInput {
    resolve?: Maybe<StringQueryOperatorInput>;
    name?: Maybe<StringQueryOperatorInput>;
    id?: Maybe<StringQueryOperatorInput>;
    version?: Maybe<StringQueryOperatorInput>;
    pluginOptions?: Maybe<SitePluginPluginOptionsPluginsPluginOptionsFilterInput>;
    nodeAPIs?: Maybe<StringQueryOperatorInput>;
    browserAPIs?: Maybe<StringQueryOperatorInput>;
    ssrAPIs?: Maybe<StringQueryOperatorInput>;
    pluginFilepath?: Maybe<StringQueryOperatorInput>;
}
export interface SitePluginPluginOptionsPluginsPluginOptionsFilterInput {
    maxWidth?: Maybe<IntQueryOperatorInput>;
    linkImagesToOriginal?: Maybe<BooleanQueryOperatorInput>;
    envVariablesAllowedClientSide?: Maybe<StringQueryOperatorInput>;
    configPath?: Maybe<StringQueryOperatorInput>;
}
export interface SitePluginPluginOptionsIconsFilterInput {
    android?: Maybe<BooleanQueryOperatorInput>;
    appleIcon?: Maybe<BooleanQueryOperatorInput>;
    appleStartup?: Maybe<BooleanQueryOperatorInput>;
    favicons?: Maybe<BooleanQueryOperatorInput>;
    firefox?: Maybe<BooleanQueryOperatorInput>;
}
export interface SitePluginPackageJsonFilterInput {
    name?: Maybe<StringQueryOperatorInput>;
    description?: Maybe<StringQueryOperatorInput>;
    version?: Maybe<StringQueryOperatorInput>;
    main?: Maybe<StringQueryOperatorInput>;
    license?: Maybe<StringQueryOperatorInput>;
    dependencies?: Maybe<SitePluginPackageJsonDependenciesFilterListInput>;
    devDependencies?: Maybe<SitePluginPackageJsonDevDependenciesFilterListInput>;
    peerDependencies?: Maybe<SitePluginPackageJsonPeerDependenciesFilterListInput>;
    keywords?: Maybe<StringQueryOperatorInput>;
}
export interface SitePluginPackageJsonDependenciesFilterListInput {
    elemMatch?: Maybe<SitePluginPackageJsonDependenciesFilterInput>;
}
export interface SitePluginPackageJsonDependenciesFilterInput {
    name?: Maybe<StringQueryOperatorInput>;
    version?: Maybe<StringQueryOperatorInput>;
}
export interface SitePluginPackageJsonDevDependenciesFilterListInput {
    elemMatch?: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>;
}
export interface SitePluginPackageJsonDevDependenciesFilterInput {
    name?: Maybe<StringQueryOperatorInput>;
    version?: Maybe<StringQueryOperatorInput>;
}
export interface SitePluginPackageJsonPeerDependenciesFilterListInput {
    elemMatch?: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>;
}
export interface SitePluginPackageJsonPeerDependenciesFilterInput {
    name?: Maybe<StringQueryOperatorInput>;
    version?: Maybe<StringQueryOperatorInput>;
}
export interface SitePageFilterInput {
    path?: Maybe<StringQueryOperatorInput>;
    component?: Maybe<StringQueryOperatorInput>;
    internalComponentName?: Maybe<StringQueryOperatorInput>;
    componentChunkName?: Maybe<StringQueryOperatorInput>;
    matchPath?: Maybe<StringQueryOperatorInput>;
    id?: Maybe<StringQueryOperatorInput>;
    parent?: Maybe<NodeFilterInput>;
    children?: Maybe<NodeFilterListInput>;
    internal?: Maybe<InternalFilterInput>;
    isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
    context?: Maybe<SitePageContextFilterInput>;
    pluginCreator?: Maybe<SitePluginFilterInput>;
    pluginCreatorId?: Maybe<StringQueryOperatorInput>;
    componentPath?: Maybe<StringQueryOperatorInput>;
}
export interface SitePageSortInput {
    fields?: Maybe<Maybe<SitePageFieldsEnum>[]>;
    order?: Maybe<SortOrderEnum>[];
}
export interface SiteSiteMetadataFilterInput {
    image?: Maybe<StringQueryOperatorInput>;
    title?: Maybe<StringQueryOperatorInput>;
    description?: Maybe<StringQueryOperatorInput>;
    keywords?: Maybe<StringQueryOperatorInput>;
    contentDir?: Maybe<StringQueryOperatorInput>;
}
export interface SiteFilterInput {
    buildTime?: Maybe<DateQueryOperatorInput>;
    siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
    port?: Maybe<IntQueryOperatorInput>;
    host?: Maybe<StringQueryOperatorInput>;
    pathPrefix?: Maybe<StringQueryOperatorInput>;
    polyfill?: Maybe<BooleanQueryOperatorInput>;
    id?: Maybe<StringQueryOperatorInput>;
    parent?: Maybe<NodeFilterInput>;
    children?: Maybe<NodeFilterListInput>;
    internal?: Maybe<InternalFilterInput>;
}
export interface SiteSortInput {
    fields?: Maybe<Maybe<SiteFieldsEnum>[]>;
    order?: Maybe<SortOrderEnum>[];
}
export interface MarkdownRemarkSortInput {
    fields?: Maybe<Maybe<MarkdownRemarkFieldsEnum>[]>;
    order?: Maybe<SortOrderEnum>[];
}
export interface NavItemFilterListInput {
    elemMatch?: Maybe<NavItemFilterInput>;
}
export interface NavItemFilterInput {
    label?: Maybe<StringQueryOperatorInput>;
    sublabel?: Maybe<StringQueryOperatorInput>;
    icon?: Maybe<StringQueryOperatorInput>;
    link?: Maybe<StringQueryOperatorInput>;
    type?: Maybe<StringQueryOperatorInput>;
    httpVerb?: Maybe<StringQueryOperatorInput>;
    expanded?: Maybe<StringQueryOperatorInput>;
    pageId?: Maybe<StringQueryOperatorInput>;
    redocPrevLink?: Maybe<StringQueryOperatorInput>;
    redocPrevLabel?: Maybe<StringQueryOperatorInput>;
    redocNextLink?: Maybe<StringQueryOperatorInput>;
    redocNextLabel?: Maybe<StringQueryOperatorInput>;
    redocFakePage?: Maybe<BooleanQueryOperatorInput>;
    redocInfoPageId?: Maybe<StringQueryOperatorInput>;
    target?: Maybe<StringQueryOperatorInput>;
    external?: Maybe<BooleanQueryOperatorInput>;
    items?: Maybe<NavItemFilterListInput>;
    permission?: Maybe<StringQueryOperatorInput>;
    menuStyle?: Maybe<MenuStyleQueryOperatorInput>;
    separatorLine?: Maybe<BooleanQueryOperatorInput>;
    apiVersionId?: Maybe<StringQueryOperatorInput>;
    isDefaultApiVersion?: Maybe<BooleanQueryOperatorInput>;
}
export interface MenuStyleQueryOperatorInput {
    eq?: Maybe<MenuStyle>;
    ne?: Maybe<MenuStyle>;
    in?: Maybe<Maybe<MenuStyle>[]>;
    nin?: Maybe<Maybe<MenuStyle>[]>;
}
export interface SidebarPagesFilterListInput {
    elemMatch?: Maybe<SidebarPagesFilterInput>;
}
export interface SidebarPagesFilterInput {
    page?: Maybe<StringQueryOperatorInput>;
    label?: Maybe<StringQueryOperatorInput>;
    group?: Maybe<StringQueryOperatorInput>;
    expanded?: Maybe<StringQueryOperatorInput>;
    pages?: Maybe<SidebarPagesPagesFilterListInput>;
    menuStyle?: Maybe<StringQueryOperatorInput>;
    icon?: Maybe<StringQueryOperatorInput>;
    sublabel?: Maybe<StringQueryOperatorInput>;
    separatorLine?: Maybe<BooleanQueryOperatorInput>;
    external?: Maybe<BooleanQueryOperatorInput>;
    separator?: Maybe<StringQueryOperatorInput>;
}
export interface SidebarPagesPagesFilterListInput {
    elemMatch?: Maybe<SidebarPagesPagesFilterInput>;
}
export interface SidebarPagesPagesFilterInput {
    page?: Maybe<StringQueryOperatorInput>;
    label?: Maybe<StringQueryOperatorInput>;
    group?: Maybe<StringQueryOperatorInput>;
    pages?: Maybe<SidebarPagesPagesPagesFilterListInput>;
    separator?: Maybe<StringQueryOperatorInput>;
    separatorLine?: Maybe<BooleanQueryOperatorInput>;
}
export interface SidebarPagesPagesPagesFilterListInput {
    elemMatch?: Maybe<SidebarPagesPagesPagesFilterInput>;
}
export interface SidebarPagesPagesPagesFilterInput {
    group?: Maybe<StringQueryOperatorInput>;
    pages?: Maybe<SidebarPagesPagesPagesPagesFilterListInput>;
    page?: Maybe<StringQueryOperatorInput>;
}
export interface SidebarPagesPagesPagesPagesFilterListInput {
    elemMatch?: Maybe<SidebarPagesPagesPagesPagesFilterInput>;
}
export interface SidebarPagesPagesPagesPagesFilterInput {
    separator?: Maybe<StringQueryOperatorInput>;
    page?: Maybe<StringQueryOperatorInput>;
}
export interface SidebarFilterInput {
    name?: Maybe<StringQueryOperatorInput>;
    permission?: Maybe<StringQueryOperatorInput>;
    context?: Maybe<StringQueryOperatorInput>;
    items?: Maybe<NavItemFilterListInput>;
    pagesIds?: Maybe<StringQueryOperatorInput>;
    pages?: Maybe<SidebarPagesFilterListInput>;
    rating?: Maybe<IntQueryOperatorInput>;
    title?: Maybe<StringQueryOperatorInput>;
    id?: Maybe<StringQueryOperatorInput>;
    parent?: Maybe<NodeFilterInput>;
    children?: Maybe<NodeFilterListInput>;
    internal?: Maybe<InternalFilterInput>;
}
export interface SidebarSortInput {
    fields?: Maybe<Maybe<SidebarFieldsEnum>[]>;
    order?: Maybe<SortOrderEnum>[];
}
export interface FooterConfigFilterInput {
    copyrightText?: Maybe<StringQueryOperatorInput>;
    links?: Maybe<NavItemFilterListInput>;
    columns?: Maybe<FooterColumnFilterListInput>;
}
export interface FooterColumnFilterListInput {
    elemMatch?: Maybe<FooterColumnFilterInput>;
}
export interface FooterColumnFilterInput {
    label?: Maybe<StringQueryOperatorInput>;
    group?: Maybe<StringQueryOperatorInput>;
    permission?: Maybe<StringQueryOperatorInput>;
    items?: Maybe<NavItemFilterListInput>;
}
export interface SocialFilterInput {
    twitter?: Maybe<StringQueryOperatorInput>;
}
export interface MulesoftAnypointConfigFilterInput {
    appClientId?: Maybe<StringQueryOperatorInput>;
    orgId?: Maybe<StringQueryOperatorInput>;
}
export interface LogoConfigFilterInput {
    altText?: Maybe<StringQueryOperatorInput>;
    image?: Maybe<StringQueryOperatorInput>;
    href?: Maybe<StringQueryOperatorInput>;
}
export interface SiteConfigFilterInput {
    footer?: Maybe<FooterConfigFilterInput>;
    stylesheets?: Maybe<StringQueryOperatorInput>;
    logo?: Maybe<string | LogoConfigFilterInput>;
    scripts?: Maybe<StringQueryOperatorInput>;
    nav?: Maybe<NavItemFilterListInput>;
    siteVersion?: Maybe<StringQueryOperatorInput>;
    showPrevButton?: Maybe<BooleanQueryOperatorInput>;
    showNextButton?: Maybe<BooleanQueryOperatorInput>;
    enableToc?: Maybe<BooleanQueryOperatorInput>;
    tocMaxDepth?: Maybe<IntQueryOperatorInput>;
    disableLastModified?: Maybe<BooleanQueryOperatorInput>;
    loginPageUrl?: Maybe<StringQueryOperatorInput>;
    social?: Maybe<SocialFilterInput>;
    redoclyOrgId?: Maybe<StringQueryOperatorInput>;
    mulesoftAnypoint?: Maybe<MulesoftAnypointConfigFilterInput>;
    withRbac?: Maybe<BooleanQueryOperatorInput>;
    id?: Maybe<StringQueryOperatorInput>;
    parent?: Maybe<NodeFilterInput>;
    children?: Maybe<NodeFilterListInput>;
    internal?: Maybe<InternalFilterInput>;
}
export interface SiteConfigSortInput {
    fields?: Maybe<Maybe<SiteConfigFieldsEnum>[]>;
    order?: Maybe<SortOrderEnum>[];
}
export interface ContentItemSortInput {
    fields?: Maybe<Maybe<ContentItemFieldsEnum>[]>;
    order?: Maybe<SortOrderEnum>[];
}
export interface ContentItemDataSortInput {
    fields?: Maybe<Maybe<ContentItemDataFieldsEnum>[]>;
    order?: Maybe<SortOrderEnum>[];
}
export interface MarkdownRemarkFrontmatterSortInput {
    fields?: Maybe<Maybe<MarkdownRemarkFrontmatterFieldsEnum>[]>;
    order?: Maybe<SortOrderEnum>[];
}
export interface SiteBuildMetadataFilterInput {
    id?: Maybe<StringQueryOperatorInput>;
    parent?: Maybe<NodeFilterInput>;
    children?: Maybe<NodeFilterListInput>;
    internal?: Maybe<InternalFilterInput>;
    buildTime?: Maybe<DateQueryOperatorInput>;
}
export interface SiteBuildMetadataSortInput {
    fields?: Maybe<Maybe<SiteBuildMetadataFieldsEnum>[]>;
    order?: Maybe<SortOrderEnum>[];
}
export interface SitePluginSortInput {
    fields?: Maybe<Maybe<SitePluginFieldsEnum>[]>;
    order?: Maybe<SortOrderEnum>[];
}
export declare enum MarkdownExcerptFormats {
    Plain = "PLAIN",
    Html = "HTML",
    Markdown = "MARKDOWN"
}
export declare enum MarkdownHeadingLevels {
    H1 = "h1",
    H2 = "h2",
    H3 = "h3",
    H4 = "h4",
    H5 = "h5",
    H6 = "h6"
}
export declare enum FileFieldsEnum {
    SourceInstanceName = "sourceInstanceName",
    AbsolutePath = "absolutePath",
    RelativePath = "relativePath",
    Extension = "extension",
    Size = "size",
    PrettySize = "prettySize",
    ModifiedTime = "modifiedTime",
    AccessTime = "accessTime",
    ChangeTime = "changeTime",
    BirthTime = "birthTime",
    Root = "root",
    Dir = "dir",
    Base = "base",
    Ext = "ext",
    Name = "name",
    RelativeDirectory = "relativeDirectory",
    Dev = "dev",
    Mode = "mode",
    Nlink = "nlink",
    Uid = "uid",
    Gid = "gid",
    Rdev = "rdev",
    Ino = "ino",
    AtimeMs = "atimeMs",
    MtimeMs = "mtimeMs",
    CtimeMs = "ctimeMs",
    Atime = "atime",
    Mtime = "mtime",
    Ctime = "ctime",
    Birthtime = "birthtime",
    BirthtimeMs = "birthtimeMs",
    Blksize = "blksize",
    Blocks = "blocks",
    PublicUrl = "publicURL",
    Id = "id",
    ParentId = "parent___id",
    ParentParentId = "parent___parent___id",
    ParentParentParentId = "parent___parent___parent___id",
    ParentParentParentChildren = "parent___parent___parent___children",
    ParentParentChildren = "parent___parent___children",
    ParentParentChildrenId = "parent___parent___children___id",
    ParentParentChildrenChildren = "parent___parent___children___children",
    ParentParentInternalContent = "parent___parent___internal___content",
    ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
    ParentParentInternalDescription = "parent___parent___internal___description",
    ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
    ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
    ParentParentInternalMediaType = "parent___parent___internal___mediaType",
    ParentParentInternalOwner = "parent___parent___internal___owner",
    ParentParentInternalType = "parent___parent___internal___type",
    ParentChildren = "parent___children",
    ParentChildrenId = "parent___children___id",
    ParentChildrenParentId = "parent___children___parent___id",
    ParentChildrenParentChildren = "parent___children___parent___children",
    ParentChildrenChildren = "parent___children___children",
    ParentChildrenChildrenId = "parent___children___children___id",
    ParentChildrenChildrenChildren = "parent___children___children___children",
    ParentChildrenInternalContent = "parent___children___internal___content",
    ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
    ParentChildrenInternalDescription = "parent___children___internal___description",
    ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
    ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
    ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
    ParentChildrenInternalOwner = "parent___children___internal___owner",
    ParentChildrenInternalType = "parent___children___internal___type",
    ParentInternalContent = "parent___internal___content",
    ParentInternalContentDigest = "parent___internal___contentDigest",
    ParentInternalDescription = "parent___internal___description",
    ParentInternalFieldOwners = "parent___internal___fieldOwners",
    ParentInternalIgnoreType = "parent___internal___ignoreType",
    ParentInternalMediaType = "parent___internal___mediaType",
    ParentInternalOwner = "parent___internal___owner",
    ParentInternalType = "parent___internal___type",
    Children = "children",
    ChildrenId = "children___id",
    ChildrenParentId = "children___parent___id",
    ChildrenParentParentId = "children___parent___parent___id",
    ChildrenParentParentChildren = "children___parent___parent___children",
    ChildrenParentChildren = "children___parent___children",
    ChildrenParentChildrenId = "children___parent___children___id",
    ChildrenParentChildrenChildren = "children___parent___children___children",
    ChildrenParentInternalContent = "children___parent___internal___content",
    ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
    ChildrenParentInternalDescription = "children___parent___internal___description",
    ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
    ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
    ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
    ChildrenParentInternalOwner = "children___parent___internal___owner",
    ChildrenParentInternalType = "children___parent___internal___type",
    ChildrenChildren = "children___children",
    ChildrenChildrenId = "children___children___id",
    ChildrenChildrenParentId = "children___children___parent___id",
    ChildrenChildrenParentChildren = "children___children___parent___children",
    ChildrenChildrenChildren = "children___children___children",
    ChildrenChildrenChildrenId = "children___children___children___id",
    ChildrenChildrenChildrenChildren = "children___children___children___children",
    ChildrenChildrenInternalContent = "children___children___internal___content",
    ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
    ChildrenChildrenInternalDescription = "children___children___internal___description",
    ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
    ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
    ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
    ChildrenChildrenInternalOwner = "children___children___internal___owner",
    ChildrenChildrenInternalType = "children___children___internal___type",
    ChildrenInternalContent = "children___internal___content",
    ChildrenInternalContentDigest = "children___internal___contentDigest",
    ChildrenInternalDescription = "children___internal___description",
    ChildrenInternalFieldOwners = "children___internal___fieldOwners",
    ChildrenInternalIgnoreType = "children___internal___ignoreType",
    ChildrenInternalMediaType = "children___internal___mediaType",
    ChildrenInternalOwner = "children___internal___owner",
    ChildrenInternalType = "children___internal___type",
    InternalContent = "internal___content",
    InternalContentDigest = "internal___contentDigest",
    InternalDescription = "internal___description",
    InternalFieldOwners = "internal___fieldOwners",
    InternalIgnoreType = "internal___ignoreType",
    InternalMediaType = "internal___mediaType",
    InternalOwner = "internal___owner",
    InternalType = "internal___type",
    ChildrenContentItem = "childrenContentItem",
    ChildrenContentItemPageId = "childrenContentItem___pageId",
    ChildrenContentItemLink = "childrenContentItem___link",
    ChildrenContentItemBaseLink = "childrenContentItem___baseLink",
    ChildrenContentItemType = "childrenContentItem___type",
    ChildrenContentItemDataSettings = "childrenContentItem___data___settings",
    ChildrenContentItemDataEnableToc = "childrenContentItem___data___enableToc",
    ChildrenContentItemDataDisableLastModified = "childrenContentItem___data___disableLastModified",
    ChildrenContentItemDataTocMaxDepth = "childrenContentItem___data___tocMaxDepth",
    ChildrenContentItemDataRequestLogin = "childrenContentItem___data___requestLogin",
    ChildrenContentItemDataShowPrevButton = "childrenContentItem___data___showPrevButton",
    ChildrenContentItemDataShowNextButton = "childrenContentItem___data___showNextButton",
    ChildrenContentItemDataApiVersions = "childrenContentItem___data___apiVersions",
    ChildrenContentItemDataApiVersionsDefinitionId = "childrenContentItem___data___apiVersions___definitionId",
    ChildrenContentItemDataApiVersionsId = "childrenContentItem___data___apiVersions___id",
    ChildrenContentItemDataApiVersionsTitle = "childrenContentItem___data___apiVersions___title",
    ChildrenContentItemDataApiVersionsIsDefault = "childrenContentItem___data___apiVersions___isDefault",
    ChildrenContentItemDataIsDefaultApiVersion = "childrenContentItem___data___isDefaultApiVersion",
    ChildrenContentItemDataApiVersionId = "childrenContentItem___data___apiVersionId",
    ChildrenContentItemDataLabel = "childrenContentItem___data___label",
    ChildrenContentItemDataPermission = "childrenContentItem___data___permission",
    ChildrenContentItemDataCustomDataLabel = "childrenContentItem___data___customData___label",
    ChildrenContentItemDataCustomDataTitle = "childrenContentItem___data___customData___title",
    ChildrenContentItemDataCustomDataNextToButton = "childrenContentItem___data___customData___nextToButton",
    ChildrenContentItemDataCustomDataDatapoint = "childrenContentItem___data___customData___datapoint",
    ChildrenContentItemDataCustomDataItems = "childrenContentItem___data___customData___items",
    ChildrenContentItemDataCustomDataPath = "childrenContentItem___data___customData___path",
    ChildrenContentItemDataCustomDataPermission = "childrenContentItem___data___customData___permission",
    ChildrenContentItemDataCustomDataEnableToc = "childrenContentItem___data___customData___enableToc",
    ChildrenContentItemDataCustomDataId = "childrenContentItem___data___customData___id",
    ChildrenContentItemDataCustomDataDate = "childrenContentItem___data___customData___date",
    ChildrenContentItemDataCustomDataStatus = "childrenContentItem___data___customData___status",
    ChildrenContentItemDataCustomDataAuthor = "childrenContentItem___data___customData___author",
    ChildrenContentItemDataCustomDataExcerpt = "childrenContentItem___data___customData___excerpt",
    ChildrenContentItemDataCustomDataCategories = "childrenContentItem___data___customData___categories",
    ChildrenContentItemDataCustomDataHeaderImage = "childrenContentItem___data___customData___headerImage",
    ChildrenContentItemDataCustomDataBlogId = "childrenContentItem___data___customData___blog_id",
    ChildrenContentItemDataCustomDataLeadCaptureCampaign = "childrenContentItem___data___customData___leadCaptureCampaign",
    ChildrenContentItemDataCustomDataType = "childrenContentItem___data___customData___type",
    ChildrenContentItemDataCustomDataCollection = "childrenContentItem___data___customData___collection",
    ChildrenContentItemDataCustomDataDescription = "childrenContentItem___data___customData___description",
    ChildrenContentItemDataCustomDataKeywords = "childrenContentItem___data___customData___keywords",
    ChildrenContentItemDataCustomDataA = "childrenContentItem___data___customData___a",
    ChildrenContentItemDataDescription = "childrenContentItem___data___description",
    ChildrenContentItemDataTitle = "childrenContentItem___data___title",
    ChildrenContentItemDataRedocStoreStr = "childrenContentItem___data___redocStoreStr",
    ChildrenContentItemDataRedocItemId = "childrenContentItem___data___redocItemId",
    ChildrenContentItemDataRedocMenuItems = "childrenContentItem___data___redocMenuItems",
    ChildrenContentItemDataRedocMenuItemsLabel = "childrenContentItem___data___redocMenuItems___label",
    ChildrenContentItemDataRedocMenuItemsLink = "childrenContentItem___data___redocMenuItems___link",
    ChildrenContentItemDataRedocMenuItemsRedocFakePage = "childrenContentItem___data___redocMenuItems___redocFakePage",
    ChildrenContentItemDataRedocMenuItemsPages = "childrenContentItem___data___redocMenuItems___pages",
    ChildrenContentItemDataRedocMenuItemsParentPageId = "childrenContentItem___data___redocMenuItems___parentPageId",
    ChildrenContentItemDataRedocMenuItemsPagination = "childrenContentItem___data___redocMenuItems___pagination",
    ChildrenContentItemDataRedocMenuItemsRedocInfoPageLink = "childrenContentItem___data___redocMenuItems___redocInfoPageLink",
    ChildrenContentItemDataRedocMenuItemsApiVersionId = "childrenContentItem___data___redocMenuItems___apiVersionId",
    ChildrenContentItemDataRedocMenuItemsIsDefaultApiVersion = "childrenContentItem___data___redocMenuItems___isDefaultApiVersion",
    ChildrenContentItemDataRedocMenuItemsPermission = "childrenContentItem___data___redocMenuItems___permission",
    ChildrenContentItemDataRedocMenuItemsSeparator = "childrenContentItem___data___redocMenuItems___separator",
    ChildrenContentItemDataRedocInfoPageId = "childrenContentItem___data___redocInfoPageId",
    ChildrenContentItemDataRedocInfoPageLink = "childrenContentItem___data___redocInfoPageLink",
    ChildrenContentItemDataRedocHasInfoPage = "childrenContentItem___data___redocHasInfoPage",
    ChildrenContentItemDataRedocHasSecurityDefinitions = "childrenContentItem___data___redocHasSecurityDefinitions",
    ChildrenContentItemDataCustomTemplate = "childrenContentItem___data___customTemplate",
    ChildrenContentItemDataCustomDataString = "childrenContentItem___data___customDataString",
    ChildrenContentItemDataMatchPath = "childrenContentItem___data___matchPath",
    ChildrenContentItemDataExcludeFromSearch = "childrenContentItem___data___excludeFromSearch",
    ChildrenContentItemDataNextToButton = "childrenContentItem___data___nextToButton",
    ChildrenContentItemDataPath = "childrenContentItem___data___path",
    ChildrenContentItemDataId = "childrenContentItem___data___id",
    ChildrenContentItemDataDate = "childrenContentItem___data___date",
    ChildrenContentItemDataStatus = "childrenContentItem___data___status",
    ChildrenContentItemDataAuthor = "childrenContentItem___data___author",
    ChildrenContentItemDataExcerpt = "childrenContentItem___data___excerpt",
    ChildrenContentItemDataCategories = "childrenContentItem___data___categories",
    ChildrenContentItemDataHeaderImage = "childrenContentItem___data___headerImage",
    ChildrenContentItemDataBlogId = "childrenContentItem___data___blog_id",
    ChildrenContentItemDataLeadCaptureCampaign = "childrenContentItem___data___leadCaptureCampaign",
    ChildrenContentItemDataType = "childrenContentItem___data___type",
    ChildrenContentItemDataCollection = "childrenContentItem___data___collection",
    ChildrenContentItemDataKeywords = "childrenContentItem___data___keywords",
    ChildrenContentItemDataDefinitionId = "childrenContentItem___data___definitionId",
    ChildrenContentItemDataShowInfo = "childrenContentItem___data___showInfo",
    ChildrenContentItemDataRedirect = "childrenContentItem___data___redirect",
    ChildrenContentItemDataParentId = "childrenContentItem___data___parent___id",
    ChildrenContentItemDataParentChildren = "childrenContentItem___data___parent___children",
    ChildrenContentItemDataChildren = "childrenContentItem___data___children",
    ChildrenContentItemDataChildrenId = "childrenContentItem___data___children___id",
    ChildrenContentItemDataChildrenChildren = "childrenContentItem___data___children___children",
    ChildrenContentItemDataInternalContent = "childrenContentItem___data___internal___content",
    ChildrenContentItemDataInternalContentDigest = "childrenContentItem___data___internal___contentDigest",
    ChildrenContentItemDataInternalDescription = "childrenContentItem___data___internal___description",
    ChildrenContentItemDataInternalFieldOwners = "childrenContentItem___data___internal___fieldOwners",
    ChildrenContentItemDataInternalIgnoreType = "childrenContentItem___data___internal___ignoreType",
    ChildrenContentItemDataInternalMediaType = "childrenContentItem___data___internal___mediaType",
    ChildrenContentItemDataInternalOwner = "childrenContentItem___data___internal___owner",
    ChildrenContentItemDataInternalType = "childrenContentItem___data___internal___type",
    ChildrenContentItemPermission = "childrenContentItem___permission",
    ChildrenContentItemSourcePath = "childrenContentItem___sourcePath",
    ChildrenContentItemFieldsLastModified = "childrenContentItem___fields___lastModified",
    ChildrenContentItemId = "childrenContentItem___id",
    ChildrenContentItemParentId = "childrenContentItem___parent___id",
    ChildrenContentItemParentParentId = "childrenContentItem___parent___parent___id",
    ChildrenContentItemParentParentChildren = "childrenContentItem___parent___parent___children",
    ChildrenContentItemParentChildren = "childrenContentItem___parent___children",
    ChildrenContentItemParentChildrenId = "childrenContentItem___parent___children___id",
    ChildrenContentItemParentChildrenChildren = "childrenContentItem___parent___children___children",
    ChildrenContentItemParentInternalContent = "childrenContentItem___parent___internal___content",
    ChildrenContentItemParentInternalContentDigest = "childrenContentItem___parent___internal___contentDigest",
    ChildrenContentItemParentInternalDescription = "childrenContentItem___parent___internal___description",
    ChildrenContentItemParentInternalFieldOwners = "childrenContentItem___parent___internal___fieldOwners",
    ChildrenContentItemParentInternalIgnoreType = "childrenContentItem___parent___internal___ignoreType",
    ChildrenContentItemParentInternalMediaType = "childrenContentItem___parent___internal___mediaType",
    ChildrenContentItemParentInternalOwner = "childrenContentItem___parent___internal___owner",
    ChildrenContentItemParentInternalType = "childrenContentItem___parent___internal___type",
    ChildrenContentItemChildren = "childrenContentItem___children",
    ChildrenContentItemChildrenId = "childrenContentItem___children___id",
    ChildrenContentItemChildrenParentId = "childrenContentItem___children___parent___id",
    ChildrenContentItemChildrenParentChildren = "childrenContentItem___children___parent___children",
    ChildrenContentItemChildrenChildren = "childrenContentItem___children___children",
    ChildrenContentItemChildrenChildrenId = "childrenContentItem___children___children___id",
    ChildrenContentItemChildrenChildrenChildren = "childrenContentItem___children___children___children",
    ChildrenContentItemChildrenInternalContent = "childrenContentItem___children___internal___content",
    ChildrenContentItemChildrenInternalContentDigest = "childrenContentItem___children___internal___contentDigest",
    ChildrenContentItemChildrenInternalDescription = "childrenContentItem___children___internal___description",
    ChildrenContentItemChildrenInternalFieldOwners = "childrenContentItem___children___internal___fieldOwners",
    ChildrenContentItemChildrenInternalIgnoreType = "childrenContentItem___children___internal___ignoreType",
    ChildrenContentItemChildrenInternalMediaType = "childrenContentItem___children___internal___mediaType",
    ChildrenContentItemChildrenInternalOwner = "childrenContentItem___children___internal___owner",
    ChildrenContentItemChildrenInternalType = "childrenContentItem___children___internal___type",
    ChildrenContentItemInternalContent = "childrenContentItem___internal___content",
    ChildrenContentItemInternalContentDigest = "childrenContentItem___internal___contentDigest",
    ChildrenContentItemInternalDescription = "childrenContentItem___internal___description",
    ChildrenContentItemInternalFieldOwners = "childrenContentItem___internal___fieldOwners",
    ChildrenContentItemInternalIgnoreType = "childrenContentItem___internal___ignoreType",
    ChildrenContentItemInternalMediaType = "childrenContentItem___internal___mediaType",
    ChildrenContentItemInternalOwner = "childrenContentItem___internal___owner",
    ChildrenContentItemInternalType = "childrenContentItem___internal___type",
    ChildMarkdownRemarkId = "childMarkdownRemark___id",
    ChildMarkdownRemarkFrontmatterEnableToc = "childMarkdownRemark___frontmatter___enableToc",
    ChildMarkdownRemarkFrontmatterDisableLastModified = "childMarkdownRemark___frontmatter___disableLastModified",
    ChildMarkdownRemarkFrontmatterTocMaxDepth = "childMarkdownRemark___frontmatter___tocMaxDepth",
    ChildMarkdownRemarkFrontmatterTitle = "childMarkdownRemark___frontmatter___title",
    ChildMarkdownRemarkFrontmatterPermission = "childMarkdownRemark___frontmatter___permission",
    ChildMarkdownRemarkFrontmatterId = "childMarkdownRemark___frontmatter___id",
    ChildMarkdownRemarkFrontmatterDate = "childMarkdownRemark___frontmatter___date",
    ChildMarkdownRemarkFrontmatterStatus = "childMarkdownRemark___frontmatter___status",
    ChildMarkdownRemarkFrontmatterAuthor = "childMarkdownRemark___frontmatter___author",
    ChildMarkdownRemarkFrontmatterExcerpt = "childMarkdownRemark___frontmatter___excerpt",
    ChildMarkdownRemarkFrontmatterCategories = "childMarkdownRemark___frontmatter___categories",
    ChildMarkdownRemarkFrontmatterHeaderImage = "childMarkdownRemark___frontmatter___headerImage",
    ChildMarkdownRemarkFrontmatterPath = "childMarkdownRemark___frontmatter___path",
    ChildMarkdownRemarkFrontmatterBlogId = "childMarkdownRemark___frontmatter___blog_id",
    ChildMarkdownRemarkFrontmatterLeadCaptureCampaign = "childMarkdownRemark___frontmatter___leadCaptureCampaign",
    ChildMarkdownRemarkFrontmatterType = "childMarkdownRemark___frontmatter___type",
    ChildMarkdownRemarkFrontmatterCollection = "childMarkdownRemark___frontmatter___collection",
    ChildMarkdownRemarkFrontmatterDescription = "childMarkdownRemark___frontmatter___description",
    ChildMarkdownRemarkFrontmatterKeywords = "childMarkdownRemark___frontmatter___keywords",
    ChildMarkdownRemarkFrontmatterParentId = "childMarkdownRemark___frontmatter___parent___id",
    ChildMarkdownRemarkFrontmatterParentChildren = "childMarkdownRemark___frontmatter___parent___children",
    ChildMarkdownRemarkFrontmatterChildren = "childMarkdownRemark___frontmatter___children",
    ChildMarkdownRemarkFrontmatterChildrenId = "childMarkdownRemark___frontmatter___children___id",
    ChildMarkdownRemarkFrontmatterChildrenChildren = "childMarkdownRemark___frontmatter___children___children",
    ChildMarkdownRemarkFrontmatterInternalContent = "childMarkdownRemark___frontmatter___internal___content",
    ChildMarkdownRemarkFrontmatterInternalContentDigest = "childMarkdownRemark___frontmatter___internal___contentDigest",
    ChildMarkdownRemarkFrontmatterInternalDescription = "childMarkdownRemark___frontmatter___internal___description",
    ChildMarkdownRemarkFrontmatterInternalFieldOwners = "childMarkdownRemark___frontmatter___internal___fieldOwners",
    ChildMarkdownRemarkFrontmatterInternalIgnoreType = "childMarkdownRemark___frontmatter___internal___ignoreType",
    ChildMarkdownRemarkFrontmatterInternalMediaType = "childMarkdownRemark___frontmatter___internal___mediaType",
    ChildMarkdownRemarkFrontmatterInternalOwner = "childMarkdownRemark___frontmatter___internal___owner",
    ChildMarkdownRemarkFrontmatterInternalType = "childMarkdownRemark___frontmatter___internal___type",
    ChildMarkdownRemarkExcerpt = "childMarkdownRemark___excerpt",
    ChildMarkdownRemarkRawMarkdownBody = "childMarkdownRemark___rawMarkdownBody",
    ChildMarkdownRemarkFileAbsolutePath = "childMarkdownRemark___fileAbsolutePath",
    ChildMarkdownRemarkFieldsContentId = "childMarkdownRemark___fields___contentId",
    ChildMarkdownRemarkHtml = "childMarkdownRemark___html",
    ChildMarkdownRemarkHtmlAst = "childMarkdownRemark___htmlAst",
    ChildMarkdownRemarkExcerptAst = "childMarkdownRemark___excerptAst",
    ChildMarkdownRemarkHeadings = "childMarkdownRemark___headings",
    ChildMarkdownRemarkHeadingsId = "childMarkdownRemark___headings___id",
    ChildMarkdownRemarkHeadingsValue = "childMarkdownRemark___headings___value",
    ChildMarkdownRemarkHeadingsDepth = "childMarkdownRemark___headings___depth",
    ChildMarkdownRemarkTimeToRead = "childMarkdownRemark___timeToRead",
    ChildMarkdownRemarkTableOfContents = "childMarkdownRemark___tableOfContents",
    ChildMarkdownRemarkWordCountParagraphs = "childMarkdownRemark___wordCount___paragraphs",
    ChildMarkdownRemarkWordCountSentences = "childMarkdownRemark___wordCount___sentences",
    ChildMarkdownRemarkWordCountWords = "childMarkdownRemark___wordCount___words",
    ChildMarkdownRemarkParentId = "childMarkdownRemark___parent___id",
    ChildMarkdownRemarkParentParentId = "childMarkdownRemark___parent___parent___id",
    ChildMarkdownRemarkParentParentChildren = "childMarkdownRemark___parent___parent___children",
    ChildMarkdownRemarkParentChildren = "childMarkdownRemark___parent___children",
    ChildMarkdownRemarkParentChildrenId = "childMarkdownRemark___parent___children___id",
    ChildMarkdownRemarkParentChildrenChildren = "childMarkdownRemark___parent___children___children",
    ChildMarkdownRemarkParentInternalContent = "childMarkdownRemark___parent___internal___content",
    ChildMarkdownRemarkParentInternalContentDigest = "childMarkdownRemark___parent___internal___contentDigest",
    ChildMarkdownRemarkParentInternalDescription = "childMarkdownRemark___parent___internal___description",
    ChildMarkdownRemarkParentInternalFieldOwners = "childMarkdownRemark___parent___internal___fieldOwners",
    ChildMarkdownRemarkParentInternalIgnoreType = "childMarkdownRemark___parent___internal___ignoreType",
    ChildMarkdownRemarkParentInternalMediaType = "childMarkdownRemark___parent___internal___mediaType",
    ChildMarkdownRemarkParentInternalOwner = "childMarkdownRemark___parent___internal___owner",
    ChildMarkdownRemarkParentInternalType = "childMarkdownRemark___parent___internal___type",
    ChildMarkdownRemarkChildren = "childMarkdownRemark___children",
    ChildMarkdownRemarkChildrenId = "childMarkdownRemark___children___id",
    ChildMarkdownRemarkChildrenParentId = "childMarkdownRemark___children___parent___id",
    ChildMarkdownRemarkChildrenParentChildren = "childMarkdownRemark___children___parent___children",
    ChildMarkdownRemarkChildrenChildren = "childMarkdownRemark___children___children",
    ChildMarkdownRemarkChildrenChildrenId = "childMarkdownRemark___children___children___id",
    ChildMarkdownRemarkChildrenChildrenChildren = "childMarkdownRemark___children___children___children",
    ChildMarkdownRemarkChildrenInternalContent = "childMarkdownRemark___children___internal___content",
    ChildMarkdownRemarkChildrenInternalContentDigest = "childMarkdownRemark___children___internal___contentDigest",
    ChildMarkdownRemarkChildrenInternalDescription = "childMarkdownRemark___children___internal___description",
    ChildMarkdownRemarkChildrenInternalFieldOwners = "childMarkdownRemark___children___internal___fieldOwners",
    ChildMarkdownRemarkChildrenInternalIgnoreType = "childMarkdownRemark___children___internal___ignoreType",
    ChildMarkdownRemarkChildrenInternalMediaType = "childMarkdownRemark___children___internal___mediaType",
    ChildMarkdownRemarkChildrenInternalOwner = "childMarkdownRemark___children___internal___owner",
    ChildMarkdownRemarkChildrenInternalType = "childMarkdownRemark___children___internal___type",
    ChildMarkdownRemarkInternalContent = "childMarkdownRemark___internal___content",
    ChildMarkdownRemarkInternalContentDigest = "childMarkdownRemark___internal___contentDigest",
    ChildMarkdownRemarkInternalDescription = "childMarkdownRemark___internal___description",
    ChildMarkdownRemarkInternalFieldOwners = "childMarkdownRemark___internal___fieldOwners",
    ChildMarkdownRemarkInternalIgnoreType = "childMarkdownRemark___internal___ignoreType",
    ChildMarkdownRemarkInternalMediaType = "childMarkdownRemark___internal___mediaType",
    ChildMarkdownRemarkInternalOwner = "childMarkdownRemark___internal___owner",
    ChildMarkdownRemarkInternalType = "childMarkdownRemark___internal___type"
}
export declare enum SortOrderEnum {
    Asc = "ASC",
    Desc = "DESC"
}
export declare enum DirectoryFieldsEnum {
    SourceInstanceName = "sourceInstanceName",
    AbsolutePath = "absolutePath",
    RelativePath = "relativePath",
    Extension = "extension",
    Size = "size",
    PrettySize = "prettySize",
    ModifiedTime = "modifiedTime",
    AccessTime = "accessTime",
    ChangeTime = "changeTime",
    BirthTime = "birthTime",
    Root = "root",
    Dir = "dir",
    Base = "base",
    Ext = "ext",
    Name = "name",
    RelativeDirectory = "relativeDirectory",
    Dev = "dev",
    Mode = "mode",
    Nlink = "nlink",
    Uid = "uid",
    Gid = "gid",
    Rdev = "rdev",
    Ino = "ino",
    AtimeMs = "atimeMs",
    MtimeMs = "mtimeMs",
    CtimeMs = "ctimeMs",
    Atime = "atime",
    Mtime = "mtime",
    Ctime = "ctime",
    Birthtime = "birthtime",
    BirthtimeMs = "birthtimeMs",
    Blksize = "blksize",
    Blocks = "blocks",
    Id = "id",
    ParentId = "parent___id",
    ParentParentId = "parent___parent___id",
    ParentParentParentId = "parent___parent___parent___id",
    ParentParentParentChildren = "parent___parent___parent___children",
    ParentParentChildren = "parent___parent___children",
    ParentParentChildrenId = "parent___parent___children___id",
    ParentParentChildrenChildren = "parent___parent___children___children",
    ParentParentInternalContent = "parent___parent___internal___content",
    ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
    ParentParentInternalDescription = "parent___parent___internal___description",
    ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
    ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
    ParentParentInternalMediaType = "parent___parent___internal___mediaType",
    ParentParentInternalOwner = "parent___parent___internal___owner",
    ParentParentInternalType = "parent___parent___internal___type",
    ParentChildren = "parent___children",
    ParentChildrenId = "parent___children___id",
    ParentChildrenParentId = "parent___children___parent___id",
    ParentChildrenParentChildren = "parent___children___parent___children",
    ParentChildrenChildren = "parent___children___children",
    ParentChildrenChildrenId = "parent___children___children___id",
    ParentChildrenChildrenChildren = "parent___children___children___children",
    ParentChildrenInternalContent = "parent___children___internal___content",
    ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
    ParentChildrenInternalDescription = "parent___children___internal___description",
    ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
    ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
    ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
    ParentChildrenInternalOwner = "parent___children___internal___owner",
    ParentChildrenInternalType = "parent___children___internal___type",
    ParentInternalContent = "parent___internal___content",
    ParentInternalContentDigest = "parent___internal___contentDigest",
    ParentInternalDescription = "parent___internal___description",
    ParentInternalFieldOwners = "parent___internal___fieldOwners",
    ParentInternalIgnoreType = "parent___internal___ignoreType",
    ParentInternalMediaType = "parent___internal___mediaType",
    ParentInternalOwner = "parent___internal___owner",
    ParentInternalType = "parent___internal___type",
    Children = "children",
    ChildrenId = "children___id",
    ChildrenParentId = "children___parent___id",
    ChildrenParentParentId = "children___parent___parent___id",
    ChildrenParentParentChildren = "children___parent___parent___children",
    ChildrenParentChildren = "children___parent___children",
    ChildrenParentChildrenId = "children___parent___children___id",
    ChildrenParentChildrenChildren = "children___parent___children___children",
    ChildrenParentInternalContent = "children___parent___internal___content",
    ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
    ChildrenParentInternalDescription = "children___parent___internal___description",
    ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
    ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
    ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
    ChildrenParentInternalOwner = "children___parent___internal___owner",
    ChildrenParentInternalType = "children___parent___internal___type",
    ChildrenChildren = "children___children",
    ChildrenChildrenId = "children___children___id",
    ChildrenChildrenParentId = "children___children___parent___id",
    ChildrenChildrenParentChildren = "children___children___parent___children",
    ChildrenChildrenChildren = "children___children___children",
    ChildrenChildrenChildrenId = "children___children___children___id",
    ChildrenChildrenChildrenChildren = "children___children___children___children",
    ChildrenChildrenInternalContent = "children___children___internal___content",
    ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
    ChildrenChildrenInternalDescription = "children___children___internal___description",
    ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
    ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
    ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
    ChildrenChildrenInternalOwner = "children___children___internal___owner",
    ChildrenChildrenInternalType = "children___children___internal___type",
    ChildrenInternalContent = "children___internal___content",
    ChildrenInternalContentDigest = "children___internal___contentDigest",
    ChildrenInternalDescription = "children___internal___description",
    ChildrenInternalFieldOwners = "children___internal___fieldOwners",
    ChildrenInternalIgnoreType = "children___internal___ignoreType",
    ChildrenInternalMediaType = "children___internal___mediaType",
    ChildrenInternalOwner = "children___internal___owner",
    ChildrenInternalType = "children___internal___type",
    InternalContent = "internal___content",
    InternalContentDigest = "internal___contentDigest",
    InternalDescription = "internal___description",
    InternalFieldOwners = "internal___fieldOwners",
    InternalIgnoreType = "internal___ignoreType",
    InternalMediaType = "internal___mediaType",
    InternalOwner = "internal___owner",
    InternalType = "internal___type"
}
export declare enum SitePageFieldsEnum {
    Path = "path",
    Component = "component",
    InternalComponentName = "internalComponentName",
    ComponentChunkName = "componentChunkName",
    MatchPath = "matchPath",
    Id = "id",
    ParentId = "parent___id",
    ParentParentId = "parent___parent___id",
    ParentParentParentId = "parent___parent___parent___id",
    ParentParentParentChildren = "parent___parent___parent___children",
    ParentParentChildren = "parent___parent___children",
    ParentParentChildrenId = "parent___parent___children___id",
    ParentParentChildrenChildren = "parent___parent___children___children",
    ParentParentInternalContent = "parent___parent___internal___content",
    ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
    ParentParentInternalDescription = "parent___parent___internal___description",
    ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
    ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
    ParentParentInternalMediaType = "parent___parent___internal___mediaType",
    ParentParentInternalOwner = "parent___parent___internal___owner",
    ParentParentInternalType = "parent___parent___internal___type",
    ParentChildren = "parent___children",
    ParentChildrenId = "parent___children___id",
    ParentChildrenParentId = "parent___children___parent___id",
    ParentChildrenParentChildren = "parent___children___parent___children",
    ParentChildrenChildren = "parent___children___children",
    ParentChildrenChildrenId = "parent___children___children___id",
    ParentChildrenChildrenChildren = "parent___children___children___children",
    ParentChildrenInternalContent = "parent___children___internal___content",
    ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
    ParentChildrenInternalDescription = "parent___children___internal___description",
    ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
    ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
    ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
    ParentChildrenInternalOwner = "parent___children___internal___owner",
    ParentChildrenInternalType = "parent___children___internal___type",
    ParentInternalContent = "parent___internal___content",
    ParentInternalContentDigest = "parent___internal___contentDigest",
    ParentInternalDescription = "parent___internal___description",
    ParentInternalFieldOwners = "parent___internal___fieldOwners",
    ParentInternalIgnoreType = "parent___internal___ignoreType",
    ParentInternalMediaType = "parent___internal___mediaType",
    ParentInternalOwner = "parent___internal___owner",
    ParentInternalType = "parent___internal___type",
    Children = "children",
    ChildrenId = "children___id",
    ChildrenParentId = "children___parent___id",
    ChildrenParentParentId = "children___parent___parent___id",
    ChildrenParentParentChildren = "children___parent___parent___children",
    ChildrenParentChildren = "children___parent___children",
    ChildrenParentChildrenId = "children___parent___children___id",
    ChildrenParentChildrenChildren = "children___parent___children___children",
    ChildrenParentInternalContent = "children___parent___internal___content",
    ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
    ChildrenParentInternalDescription = "children___parent___internal___description",
    ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
    ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
    ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
    ChildrenParentInternalOwner = "children___parent___internal___owner",
    ChildrenParentInternalType = "children___parent___internal___type",
    ChildrenChildren = "children___children",
    ChildrenChildrenId = "children___children___id",
    ChildrenChildrenParentId = "children___children___parent___id",
    ChildrenChildrenParentChildren = "children___children___parent___children",
    ChildrenChildrenChildren = "children___children___children",
    ChildrenChildrenChildrenId = "children___children___children___id",
    ChildrenChildrenChildrenChildren = "children___children___children___children",
    ChildrenChildrenInternalContent = "children___children___internal___content",
    ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
    ChildrenChildrenInternalDescription = "children___children___internal___description",
    ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
    ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
    ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
    ChildrenChildrenInternalOwner = "children___children___internal___owner",
    ChildrenChildrenInternalType = "children___children___internal___type",
    ChildrenInternalContent = "children___internal___content",
    ChildrenInternalContentDigest = "children___internal___contentDigest",
    ChildrenInternalDescription = "children___internal___description",
    ChildrenInternalFieldOwners = "children___internal___fieldOwners",
    ChildrenInternalIgnoreType = "children___internal___ignoreType",
    ChildrenInternalMediaType = "children___internal___mediaType",
    ChildrenInternalOwner = "children___internal___owner",
    ChildrenInternalType = "children___internal___type",
    InternalContent = "internal___content",
    InternalContentDigest = "internal___contentDigest",
    InternalDescription = "internal___description",
    InternalFieldOwners = "internal___fieldOwners",
    InternalIgnoreType = "internal___ignoreType",
    InternalMediaType = "internal___mediaType",
    InternalOwner = "internal___owner",
    InternalType = "internal___type",
    IsCreatedByStatefulCreatePages = "isCreatedByStatefulCreatePages",
    ContextId = "context___id",
    ContextPageId = "context___pageId",
    ContextPageBaseUrl = "context___pageBaseUrl",
    ContextTitle = "context___title",
    ContextDescription = "context___description",
    ContextType = "context___type",
    ContextDataLabel = "context___data___label",
    ContextDataTitle = "context___data___title",
    ContextDataNextToButton = "context___data___nextToButton",
    ContextDataDatapoint = "context___data___datapoint",
    ContextDataItems = "context___data___items",
    ContextDataPath = "context___data___path",
    ContextDataPermission = "context___data___permission",
    ContextDataEnableToc = "context___data___enableToc",
    ContextDataId = "context___data___id",
    ContextDataDate = "context___data___date",
    ContextDataStatus = "context___data___status",
    ContextDataAuthor = "context___data___author",
    ContextDataExcerpt = "context___data___excerpt",
    ContextDataCategories = "context___data___categories",
    ContextDataHeaderImage = "context___data___headerImage",
    ContextDataBlogId = "context___data___blog_id",
    ContextDataLeadCaptureCampaign = "context___data___leadCaptureCampaign",
    ContextDataType = "context___data___type",
    ContextDataCollection = "context___data___collection",
    ContextDataDescription = "context___data___description",
    ContextDataKeywords = "context___data___keywords",
    ContextDataA = "context___data___a",
    ContextLink = "context___link",
    ContextSidebarName = "context___sidebarName",
    ContextIsLanding = "context___isLanding",
    ContextApiVersions = "context___apiVersions",
    ContextApiVersionsDefinitionId = "context___apiVersions___definitionId",
    ContextApiVersionsId = "context___apiVersions___id",
    ContextApiVersionsTitle = "context___apiVersions___title",
    ContextApiVersionsIsDefault = "context___apiVersions___isDefault",
    ContextIsDefaultApiVersion = "context___isDefaultApiVersion",
    PluginCreatorId = "pluginCreator___id",
    PluginCreatorParentId = "pluginCreator___parent___id",
    PluginCreatorParentParentId = "pluginCreator___parent___parent___id",
    PluginCreatorParentParentChildren = "pluginCreator___parent___parent___children",
    PluginCreatorParentChildren = "pluginCreator___parent___children",
    PluginCreatorParentChildrenId = "pluginCreator___parent___children___id",
    PluginCreatorParentChildrenChildren = "pluginCreator___parent___children___children",
    PluginCreatorParentInternalContent = "pluginCreator___parent___internal___content",
    PluginCreatorParentInternalContentDigest = "pluginCreator___parent___internal___contentDigest",
    PluginCreatorParentInternalDescription = "pluginCreator___parent___internal___description",
    PluginCreatorParentInternalFieldOwners = "pluginCreator___parent___internal___fieldOwners",
    PluginCreatorParentInternalIgnoreType = "pluginCreator___parent___internal___ignoreType",
    PluginCreatorParentInternalMediaType = "pluginCreator___parent___internal___mediaType",
    PluginCreatorParentInternalOwner = "pluginCreator___parent___internal___owner",
    PluginCreatorParentInternalType = "pluginCreator___parent___internal___type",
    PluginCreatorChildren = "pluginCreator___children",
    PluginCreatorChildrenId = "pluginCreator___children___id",
    PluginCreatorChildrenParentId = "pluginCreator___children___parent___id",
    PluginCreatorChildrenParentChildren = "pluginCreator___children___parent___children",
    PluginCreatorChildrenChildren = "pluginCreator___children___children",
    PluginCreatorChildrenChildrenId = "pluginCreator___children___children___id",
    PluginCreatorChildrenChildrenChildren = "pluginCreator___children___children___children",
    PluginCreatorChildrenInternalContent = "pluginCreator___children___internal___content",
    PluginCreatorChildrenInternalContentDigest = "pluginCreator___children___internal___contentDigest",
    PluginCreatorChildrenInternalDescription = "pluginCreator___children___internal___description",
    PluginCreatorChildrenInternalFieldOwners = "pluginCreator___children___internal___fieldOwners",
    PluginCreatorChildrenInternalIgnoreType = "pluginCreator___children___internal___ignoreType",
    PluginCreatorChildrenInternalMediaType = "pluginCreator___children___internal___mediaType",
    PluginCreatorChildrenInternalOwner = "pluginCreator___children___internal___owner",
    PluginCreatorChildrenInternalType = "pluginCreator___children___internal___type",
    PluginCreatorInternalContent = "pluginCreator___internal___content",
    PluginCreatorInternalContentDigest = "pluginCreator___internal___contentDigest",
    PluginCreatorInternalDescription = "pluginCreator___internal___description",
    PluginCreatorInternalFieldOwners = "pluginCreator___internal___fieldOwners",
    PluginCreatorInternalIgnoreType = "pluginCreator___internal___ignoreType",
    PluginCreatorInternalMediaType = "pluginCreator___internal___mediaType",
    PluginCreatorInternalOwner = "pluginCreator___internal___owner",
    PluginCreatorInternalType = "pluginCreator___internal___type",
    PluginCreatorResolve = "pluginCreator___resolve",
    PluginCreatorName = "pluginCreator___name",
    PluginCreatorVersion = "pluginCreator___version",
    PluginCreatorPluginOptionsPlugins = "pluginCreator___pluginOptions___plugins",
    PluginCreatorPluginOptionsPluginsResolve = "pluginCreator___pluginOptions___plugins___resolve",
    PluginCreatorPluginOptionsPluginsName = "pluginCreator___pluginOptions___plugins___name",
    PluginCreatorPluginOptionsPluginsId = "pluginCreator___pluginOptions___plugins___id",
    PluginCreatorPluginOptionsPluginsVersion = "pluginCreator___pluginOptions___plugins___version",
    PluginCreatorPluginOptionsPluginsNodeApIs = "pluginCreator___pluginOptions___plugins___nodeAPIs",
    PluginCreatorPluginOptionsPluginsBrowserApIs = "pluginCreator___pluginOptions___plugins___browserAPIs",
    PluginCreatorPluginOptionsPluginsSsrApIs = "pluginCreator___pluginOptions___plugins___ssrAPIs",
    PluginCreatorPluginOptionsPluginsPluginFilepath = "pluginCreator___pluginOptions___plugins___pluginFilepath",
    PluginCreatorPluginOptionsConfigPath = "pluginCreator___pluginOptions___configPath",
    PluginCreatorPluginOptionsName = "pluginCreator___pluginOptions___name",
    PluginCreatorPluginOptionsPath = "pluginCreator___pluginOptions___path",
    PluginCreatorPluginOptionsEnvVariablesAllowedClientSide = "pluginCreator___pluginOptions___envVariablesAllowedClientSide",
    PluginCreatorPluginOptionsPublicDir = "pluginCreator___pluginOptions___publicDir",
    PluginCreatorPluginOptionsMaxWidth = "pluginCreator___pluginOptions___maxWidth",
    PluginCreatorPluginOptionsLinkImagesToOriginal = "pluginCreator___pluginOptions___linkImagesToOriginal",
    PluginCreatorPluginOptionsLogo = "pluginCreator___pluginOptions___logo",
    PluginCreatorPluginOptionsInjectHtml = "pluginCreator___pluginOptions___injectHTML",
    PluginCreatorPluginOptionsLoadManifestWithCredentials = "pluginCreator___pluginOptions___loadManifestWithCredentials",
    PluginCreatorPluginOptionsIconsAndroid = "pluginCreator___pluginOptions___icons___android",
    PluginCreatorPluginOptionsIconsAppleIcon = "pluginCreator___pluginOptions___icons___appleIcon",
    PluginCreatorPluginOptionsIconsAppleStartup = "pluginCreator___pluginOptions___icons___appleStartup",
    PluginCreatorPluginOptionsIconsFavicons = "pluginCreator___pluginOptions___icons___favicons",
    PluginCreatorPluginOptionsIconsFirefox = "pluginCreator___pluginOptions___icons___firefox",
    PluginCreatorPluginOptionsPathCheck = "pluginCreator___pluginOptions___pathCheck",
    PluginCreatorNodeApIs = "pluginCreator___nodeAPIs",
    PluginCreatorBrowserApIs = "pluginCreator___browserAPIs",
    PluginCreatorSsrApIs = "pluginCreator___ssrAPIs",
    PluginCreatorPluginFilepath = "pluginCreator___pluginFilepath",
    PluginCreatorPackageJsonName = "pluginCreator___packageJson___name",
    PluginCreatorPackageJsonDescription = "pluginCreator___packageJson___description",
    PluginCreatorPackageJsonVersion = "pluginCreator___packageJson___version",
    PluginCreatorPackageJsonMain = "pluginCreator___packageJson___main",
    PluginCreatorPackageJsonLicense = "pluginCreator___packageJson___license",
    PluginCreatorPackageJsonDependencies = "pluginCreator___packageJson___dependencies",
    PluginCreatorPackageJsonDependenciesName = "pluginCreator___packageJson___dependencies___name",
    PluginCreatorPackageJsonDependenciesVersion = "pluginCreator___packageJson___dependencies___version",
    PluginCreatorPackageJsonDevDependencies = "pluginCreator___packageJson___devDependencies",
    PluginCreatorPackageJsonDevDependenciesName = "pluginCreator___packageJson___devDependencies___name",
    PluginCreatorPackageJsonDevDependenciesVersion = "pluginCreator___packageJson___devDependencies___version",
    PluginCreatorPackageJsonPeerDependencies = "pluginCreator___packageJson___peerDependencies",
    PluginCreatorPackageJsonPeerDependenciesName = "pluginCreator___packageJson___peerDependencies___name",
    PluginCreatorPackageJsonPeerDependenciesVersion = "pluginCreator___packageJson___peerDependencies___version",
    PluginCreatorPackageJsonKeywords = "pluginCreator___packageJson___keywords",
    ComponentPath = "componentPath"
}
export declare enum SiteFieldsEnum {
    BuildTime = "buildTime",
    SiteMetadataImage = "siteMetadata___image",
    SiteMetadataTitle = "siteMetadata___title",
    SiteMetadataDescription = "siteMetadata___description",
    SiteMetadataKeywords = "siteMetadata___keywords",
    SiteMetadataContentDir = "siteMetadata___contentDir",
    Port = "port",
    Host = "host",
    PathPrefix = "pathPrefix",
    Polyfill = "polyfill",
    Id = "id",
    ParentId = "parent___id",
    ParentParentId = "parent___parent___id",
    ParentParentParentId = "parent___parent___parent___id",
    ParentParentParentChildren = "parent___parent___parent___children",
    ParentParentChildren = "parent___parent___children",
    ParentParentChildrenId = "parent___parent___children___id",
    ParentParentChildrenChildren = "parent___parent___children___children",
    ParentParentInternalContent = "parent___parent___internal___content",
    ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
    ParentParentInternalDescription = "parent___parent___internal___description",
    ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
    ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
    ParentParentInternalMediaType = "parent___parent___internal___mediaType",
    ParentParentInternalOwner = "parent___parent___internal___owner",
    ParentParentInternalType = "parent___parent___internal___type",
    ParentChildren = "parent___children",
    ParentChildrenId = "parent___children___id",
    ParentChildrenParentId = "parent___children___parent___id",
    ParentChildrenParentChildren = "parent___children___parent___children",
    ParentChildrenChildren = "parent___children___children",
    ParentChildrenChildrenId = "parent___children___children___id",
    ParentChildrenChildrenChildren = "parent___children___children___children",
    ParentChildrenInternalContent = "parent___children___internal___content",
    ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
    ParentChildrenInternalDescription = "parent___children___internal___description",
    ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
    ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
    ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
    ParentChildrenInternalOwner = "parent___children___internal___owner",
    ParentChildrenInternalType = "parent___children___internal___type",
    ParentInternalContent = "parent___internal___content",
    ParentInternalContentDigest = "parent___internal___contentDigest",
    ParentInternalDescription = "parent___internal___description",
    ParentInternalFieldOwners = "parent___internal___fieldOwners",
    ParentInternalIgnoreType = "parent___internal___ignoreType",
    ParentInternalMediaType = "parent___internal___mediaType",
    ParentInternalOwner = "parent___internal___owner",
    ParentInternalType = "parent___internal___type",
    Children = "children",
    ChildrenId = "children___id",
    ChildrenParentId = "children___parent___id",
    ChildrenParentParentId = "children___parent___parent___id",
    ChildrenParentParentChildren = "children___parent___parent___children",
    ChildrenParentChildren = "children___parent___children",
    ChildrenParentChildrenId = "children___parent___children___id",
    ChildrenParentChildrenChildren = "children___parent___children___children",
    ChildrenParentInternalContent = "children___parent___internal___content",
    ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
    ChildrenParentInternalDescription = "children___parent___internal___description",
    ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
    ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
    ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
    ChildrenParentInternalOwner = "children___parent___internal___owner",
    ChildrenParentInternalType = "children___parent___internal___type",
    ChildrenChildren = "children___children",
    ChildrenChildrenId = "children___children___id",
    ChildrenChildrenParentId = "children___children___parent___id",
    ChildrenChildrenParentChildren = "children___children___parent___children",
    ChildrenChildrenChildren = "children___children___children",
    ChildrenChildrenChildrenId = "children___children___children___id",
    ChildrenChildrenChildrenChildren = "children___children___children___children",
    ChildrenChildrenInternalContent = "children___children___internal___content",
    ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
    ChildrenChildrenInternalDescription = "children___children___internal___description",
    ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
    ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
    ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
    ChildrenChildrenInternalOwner = "children___children___internal___owner",
    ChildrenChildrenInternalType = "children___children___internal___type",
    ChildrenInternalContent = "children___internal___content",
    ChildrenInternalContentDigest = "children___internal___contentDigest",
    ChildrenInternalDescription = "children___internal___description",
    ChildrenInternalFieldOwners = "children___internal___fieldOwners",
    ChildrenInternalIgnoreType = "children___internal___ignoreType",
    ChildrenInternalMediaType = "children___internal___mediaType",
    ChildrenInternalOwner = "children___internal___owner",
    ChildrenInternalType = "children___internal___type",
    InternalContent = "internal___content",
    InternalContentDigest = "internal___contentDigest",
    InternalDescription = "internal___description",
    InternalFieldOwners = "internal___fieldOwners",
    InternalIgnoreType = "internal___ignoreType",
    InternalMediaType = "internal___mediaType",
    InternalOwner = "internal___owner",
    InternalType = "internal___type"
}
export declare enum MarkdownRemarkFieldsEnum {
    Id = "id",
    FrontmatterEnableToc = "frontmatter___enableToc",
    FrontmatterDisableLastModified = "frontmatter___disableLastModified",
    FrontmatterTocMaxDepth = "frontmatter___tocMaxDepth",
    FrontmatterTitle = "frontmatter___title",
    FrontmatterPermission = "frontmatter___permission",
    FrontmatterId = "frontmatter___id",
    FrontmatterDate = "frontmatter___date",
    FrontmatterStatus = "frontmatter___status",
    FrontmatterAuthor = "frontmatter___author",
    FrontmatterExcerpt = "frontmatter___excerpt",
    FrontmatterCategories = "frontmatter___categories",
    FrontmatterHeaderImage = "frontmatter___headerImage",
    FrontmatterPath = "frontmatter___path",
    FrontmatterBlogId = "frontmatter___blog_id",
    FrontmatterLeadCaptureCampaign = "frontmatter___leadCaptureCampaign",
    FrontmatterType = "frontmatter___type",
    FrontmatterCollection = "frontmatter___collection",
    FrontmatterDescription = "frontmatter___description",
    FrontmatterKeywords = "frontmatter___keywords",
    FrontmatterParentId = "frontmatter___parent___id",
    FrontmatterParentParentId = "frontmatter___parent___parent___id",
    FrontmatterParentParentChildren = "frontmatter___parent___parent___children",
    FrontmatterParentChildren = "frontmatter___parent___children",
    FrontmatterParentChildrenId = "frontmatter___parent___children___id",
    FrontmatterParentChildrenChildren = "frontmatter___parent___children___children",
    FrontmatterParentInternalContent = "frontmatter___parent___internal___content",
    FrontmatterParentInternalContentDigest = "frontmatter___parent___internal___contentDigest",
    FrontmatterParentInternalDescription = "frontmatter___parent___internal___description",
    FrontmatterParentInternalFieldOwners = "frontmatter___parent___internal___fieldOwners",
    FrontmatterParentInternalIgnoreType = "frontmatter___parent___internal___ignoreType",
    FrontmatterParentInternalMediaType = "frontmatter___parent___internal___mediaType",
    FrontmatterParentInternalOwner = "frontmatter___parent___internal___owner",
    FrontmatterParentInternalType = "frontmatter___parent___internal___type",
    FrontmatterChildren = "frontmatter___children",
    FrontmatterChildrenId = "frontmatter___children___id",
    FrontmatterChildrenParentId = "frontmatter___children___parent___id",
    FrontmatterChildrenParentChildren = "frontmatter___children___parent___children",
    FrontmatterChildrenChildren = "frontmatter___children___children",
    FrontmatterChildrenChildrenId = "frontmatter___children___children___id",
    FrontmatterChildrenChildrenChildren = "frontmatter___children___children___children",
    FrontmatterChildrenInternalContent = "frontmatter___children___internal___content",
    FrontmatterChildrenInternalContentDigest = "frontmatter___children___internal___contentDigest",
    FrontmatterChildrenInternalDescription = "frontmatter___children___internal___description",
    FrontmatterChildrenInternalFieldOwners = "frontmatter___children___internal___fieldOwners",
    FrontmatterChildrenInternalIgnoreType = "frontmatter___children___internal___ignoreType",
    FrontmatterChildrenInternalMediaType = "frontmatter___children___internal___mediaType",
    FrontmatterChildrenInternalOwner = "frontmatter___children___internal___owner",
    FrontmatterChildrenInternalType = "frontmatter___children___internal___type",
    FrontmatterInternalContent = "frontmatter___internal___content",
    FrontmatterInternalContentDigest = "frontmatter___internal___contentDigest",
    FrontmatterInternalDescription = "frontmatter___internal___description",
    FrontmatterInternalFieldOwners = "frontmatter___internal___fieldOwners",
    FrontmatterInternalIgnoreType = "frontmatter___internal___ignoreType",
    FrontmatterInternalMediaType = "frontmatter___internal___mediaType",
    FrontmatterInternalOwner = "frontmatter___internal___owner",
    FrontmatterInternalType = "frontmatter___internal___type",
    Excerpt = "excerpt",
    RawMarkdownBody = "rawMarkdownBody",
    FileAbsolutePath = "fileAbsolutePath",
    FieldsContentId = "fields___contentId",
    Html = "html",
    HtmlAst = "htmlAst",
    ExcerptAst = "excerptAst",
    Headings = "headings",
    HeadingsId = "headings___id",
    HeadingsValue = "headings___value",
    HeadingsDepth = "headings___depth",
    TimeToRead = "timeToRead",
    TableOfContents = "tableOfContents",
    WordCountParagraphs = "wordCount___paragraphs",
    WordCountSentences = "wordCount___sentences",
    WordCountWords = "wordCount___words",
    ParentId = "parent___id",
    ParentParentId = "parent___parent___id",
    ParentParentParentId = "parent___parent___parent___id",
    ParentParentParentChildren = "parent___parent___parent___children",
    ParentParentChildren = "parent___parent___children",
    ParentParentChildrenId = "parent___parent___children___id",
    ParentParentChildrenChildren = "parent___parent___children___children",
    ParentParentInternalContent = "parent___parent___internal___content",
    ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
    ParentParentInternalDescription = "parent___parent___internal___description",
    ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
    ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
    ParentParentInternalMediaType = "parent___parent___internal___mediaType",
    ParentParentInternalOwner = "parent___parent___internal___owner",
    ParentParentInternalType = "parent___parent___internal___type",
    ParentChildren = "parent___children",
    ParentChildrenId = "parent___children___id",
    ParentChildrenParentId = "parent___children___parent___id",
    ParentChildrenParentChildren = "parent___children___parent___children",
    ParentChildrenChildren = "parent___children___children",
    ParentChildrenChildrenId = "parent___children___children___id",
    ParentChildrenChildrenChildren = "parent___children___children___children",
    ParentChildrenInternalContent = "parent___children___internal___content",
    ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
    ParentChildrenInternalDescription = "parent___children___internal___description",
    ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
    ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
    ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
    ParentChildrenInternalOwner = "parent___children___internal___owner",
    ParentChildrenInternalType = "parent___children___internal___type",
    ParentInternalContent = "parent___internal___content",
    ParentInternalContentDigest = "parent___internal___contentDigest",
    ParentInternalDescription = "parent___internal___description",
    ParentInternalFieldOwners = "parent___internal___fieldOwners",
    ParentInternalIgnoreType = "parent___internal___ignoreType",
    ParentInternalMediaType = "parent___internal___mediaType",
    ParentInternalOwner = "parent___internal___owner",
    ParentInternalType = "parent___internal___type",
    Children = "children",
    ChildrenId = "children___id",
    ChildrenParentId = "children___parent___id",
    ChildrenParentParentId = "children___parent___parent___id",
    ChildrenParentParentChildren = "children___parent___parent___children",
    ChildrenParentChildren = "children___parent___children",
    ChildrenParentChildrenId = "children___parent___children___id",
    ChildrenParentChildrenChildren = "children___parent___children___children",
    ChildrenParentInternalContent = "children___parent___internal___content",
    ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
    ChildrenParentInternalDescription = "children___parent___internal___description",
    ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
    ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
    ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
    ChildrenParentInternalOwner = "children___parent___internal___owner",
    ChildrenParentInternalType = "children___parent___internal___type",
    ChildrenChildren = "children___children",
    ChildrenChildrenId = "children___children___id",
    ChildrenChildrenParentId = "children___children___parent___id",
    ChildrenChildrenParentChildren = "children___children___parent___children",
    ChildrenChildrenChildren = "children___children___children",
    ChildrenChildrenChildrenId = "children___children___children___id",
    ChildrenChildrenChildrenChildren = "children___children___children___children",
    ChildrenChildrenInternalContent = "children___children___internal___content",
    ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
    ChildrenChildrenInternalDescription = "children___children___internal___description",
    ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
    ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
    ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
    ChildrenChildrenInternalOwner = "children___children___internal___owner",
    ChildrenChildrenInternalType = "children___children___internal___type",
    ChildrenInternalContent = "children___internal___content",
    ChildrenInternalContentDigest = "children___internal___contentDigest",
    ChildrenInternalDescription = "children___internal___description",
    ChildrenInternalFieldOwners = "children___internal___fieldOwners",
    ChildrenInternalIgnoreType = "children___internal___ignoreType",
    ChildrenInternalMediaType = "children___internal___mediaType",
    ChildrenInternalOwner = "children___internal___owner",
    ChildrenInternalType = "children___internal___type",
    InternalContent = "internal___content",
    InternalContentDigest = "internal___contentDigest",
    InternalDescription = "internal___description",
    InternalFieldOwners = "internal___fieldOwners",
    InternalIgnoreType = "internal___ignoreType",
    InternalMediaType = "internal___mediaType",
    InternalOwner = "internal___owner",
    InternalType = "internal___type"
}
export declare enum MenuStyle {
    Drilldown = "drilldown"
}
export declare enum SidebarFieldsEnum {
    Name = "name",
    Permission = "permission",
    Context = "context",
    Items = "items",
    ItemsLabel = "items___label",
    ItemsSublabel = "items___sublabel",
    ItemsIcon = "items___icon",
    ItemsLink = "items___link",
    ItemsType = "items___type",
    ItemsHttpVerb = "items___httpVerb",
    ItemsExpanded = "items___expanded",
    ItemsPageId = "items___pageId",
    ItemsRedocPrevLink = "items___redocPrevLink",
    ItemsRedocPrevLabel = "items___redocPrevLabel",
    ItemsRedocNextLink = "items___redocNextLink",
    ItemsRedocNextLabel = "items___redocNextLabel",
    ItemsRedocFakePage = "items___redocFakePage",
    ItemsRedocInfoPageId = "items___redocInfoPageId",
    ItemsTarget = "items___target",
    ItemsExternal = "items___external",
    ItemsItems = "items___items",
    ItemsItemsLabel = "items___items___label",
    ItemsItemsSublabel = "items___items___sublabel",
    ItemsItemsIcon = "items___items___icon",
    ItemsItemsLink = "items___items___link",
    ItemsItemsType = "items___items___type",
    ItemsItemsHttpVerb = "items___items___httpVerb",
    ItemsItemsExpanded = "items___items___expanded",
    ItemsItemsPageId = "items___items___pageId",
    ItemsItemsRedocPrevLink = "items___items___redocPrevLink",
    ItemsItemsRedocPrevLabel = "items___items___redocPrevLabel",
    ItemsItemsRedocNextLink = "items___items___redocNextLink",
    ItemsItemsRedocNextLabel = "items___items___redocNextLabel",
    ItemsItemsRedocFakePage = "items___items___redocFakePage",
    ItemsItemsRedocInfoPageId = "items___items___redocInfoPageId",
    ItemsItemsTarget = "items___items___target",
    ItemsItemsExternal = "items___items___external",
    ItemsItemsItems = "items___items___items",
    ItemsItemsItemsLabel = "items___items___items___label",
    ItemsItemsItemsSublabel = "items___items___items___sublabel",
    ItemsItemsItemsIcon = "items___items___items___icon",
    ItemsItemsItemsLink = "items___items___items___link",
    ItemsItemsItemsType = "items___items___items___type",
    ItemsItemsItemsHttpVerb = "items___items___items___httpVerb",
    ItemsItemsItemsExpanded = "items___items___items___expanded",
    ItemsItemsItemsPageId = "items___items___items___pageId",
    ItemsItemsItemsRedocPrevLink = "items___items___items___redocPrevLink",
    ItemsItemsItemsRedocPrevLabel = "items___items___items___redocPrevLabel",
    ItemsItemsItemsRedocNextLink = "items___items___items___redocNextLink",
    ItemsItemsItemsRedocNextLabel = "items___items___items___redocNextLabel",
    ItemsItemsItemsRedocFakePage = "items___items___items___redocFakePage",
    ItemsItemsItemsRedocInfoPageId = "items___items___items___redocInfoPageId",
    ItemsItemsItemsTarget = "items___items___items___target",
    ItemsItemsItemsExternal = "items___items___items___external",
    ItemsItemsItemsItems = "items___items___items___items",
    ItemsItemsItemsPermission = "items___items___items___permission",
    ItemsItemsItemsMenuStyle = "items___items___items___menuStyle",
    ItemsItemsItemsSeparatorLine = "items___items___items___separatorLine",
    ItemsItemsItemsApiVersionId = "items___items___items___apiVersionId",
    ItemsItemsItemsIsDefaultApiVersion = "items___items___items___isDefaultApiVersion",
    ItemsItemsPermission = "items___items___permission",
    ItemsItemsMenuStyle = "items___items___menuStyle",
    ItemsItemsSeparatorLine = "items___items___separatorLine",
    ItemsItemsApiVersionId = "items___items___apiVersionId",
    ItemsItemsIsDefaultApiVersion = "items___items___isDefaultApiVersion",
    ItemsPermission = "items___permission",
    ItemsMenuStyle = "items___menuStyle",
    ItemsSeparatorLine = "items___separatorLine",
    ItemsApiVersionId = "items___apiVersionId",
    ItemsIsDefaultApiVersion = "items___isDefaultApiVersion",
    PagesIds = "pagesIds",
    Pages = "pages",
    PagesPage = "pages___page",
    PagesLabel = "pages___label",
    PagesGroup = "pages___group",
    PagesExpanded = "pages___expanded",
    PagesPages = "pages___pages",
    PagesPagesPage = "pages___pages___page",
    PagesPagesLabel = "pages___pages___label",
    PagesPagesGroup = "pages___pages___group",
    PagesPagesPages = "pages___pages___pages",
    PagesPagesPagesGroup = "pages___pages___pages___group",
    PagesPagesPagesPages = "pages___pages___pages___pages",
    PagesPagesPagesPage = "pages___pages___pages___page",
    PagesPagesSeparator = "pages___pages___separator",
    PagesPagesSeparatorLine = "pages___pages___separatorLine",
    PagesMenuStyle = "pages___menuStyle",
    PagesIcon = "pages___icon",
    PagesSublabel = "pages___sublabel",
    PagesSeparatorLine = "pages___separatorLine",
    PagesExternal = "pages___external",
    PagesSeparator = "pages___separator",
    Rating = "rating",
    Title = "title",
    Id = "id",
    ParentId = "parent___id",
    ParentParentId = "parent___parent___id",
    ParentParentParentId = "parent___parent___parent___id",
    ParentParentParentChildren = "parent___parent___parent___children",
    ParentParentChildren = "parent___parent___children",
    ParentParentChildrenId = "parent___parent___children___id",
    ParentParentChildrenChildren = "parent___parent___children___children",
    ParentParentInternalContent = "parent___parent___internal___content",
    ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
    ParentParentInternalDescription = "parent___parent___internal___description",
    ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
    ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
    ParentParentInternalMediaType = "parent___parent___internal___mediaType",
    ParentParentInternalOwner = "parent___parent___internal___owner",
    ParentParentInternalType = "parent___parent___internal___type",
    ParentChildren = "parent___children",
    ParentChildrenId = "parent___children___id",
    ParentChildrenParentId = "parent___children___parent___id",
    ParentChildrenParentChildren = "parent___children___parent___children",
    ParentChildrenChildren = "parent___children___children",
    ParentChildrenChildrenId = "parent___children___children___id",
    ParentChildrenChildrenChildren = "parent___children___children___children",
    ParentChildrenInternalContent = "parent___children___internal___content",
    ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
    ParentChildrenInternalDescription = "parent___children___internal___description",
    ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
    ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
    ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
    ParentChildrenInternalOwner = "parent___children___internal___owner",
    ParentChildrenInternalType = "parent___children___internal___type",
    ParentInternalContent = "parent___internal___content",
    ParentInternalContentDigest = "parent___internal___contentDigest",
    ParentInternalDescription = "parent___internal___description",
    ParentInternalFieldOwners = "parent___internal___fieldOwners",
    ParentInternalIgnoreType = "parent___internal___ignoreType",
    ParentInternalMediaType = "parent___internal___mediaType",
    ParentInternalOwner = "parent___internal___owner",
    ParentInternalType = "parent___internal___type",
    Children = "children",
    ChildrenId = "children___id",
    ChildrenParentId = "children___parent___id",
    ChildrenParentParentId = "children___parent___parent___id",
    ChildrenParentParentChildren = "children___parent___parent___children",
    ChildrenParentChildren = "children___parent___children",
    ChildrenParentChildrenId = "children___parent___children___id",
    ChildrenParentChildrenChildren = "children___parent___children___children",
    ChildrenParentInternalContent = "children___parent___internal___content",
    ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
    ChildrenParentInternalDescription = "children___parent___internal___description",
    ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
    ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
    ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
    ChildrenParentInternalOwner = "children___parent___internal___owner",
    ChildrenParentInternalType = "children___parent___internal___type",
    ChildrenChildren = "children___children",
    ChildrenChildrenId = "children___children___id",
    ChildrenChildrenParentId = "children___children___parent___id",
    ChildrenChildrenParentChildren = "children___children___parent___children",
    ChildrenChildrenChildren = "children___children___children",
    ChildrenChildrenChildrenId = "children___children___children___id",
    ChildrenChildrenChildrenChildren = "children___children___children___children",
    ChildrenChildrenInternalContent = "children___children___internal___content",
    ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
    ChildrenChildrenInternalDescription = "children___children___internal___description",
    ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
    ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
    ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
    ChildrenChildrenInternalOwner = "children___children___internal___owner",
    ChildrenChildrenInternalType = "children___children___internal___type",
    ChildrenInternalContent = "children___internal___content",
    ChildrenInternalContentDigest = "children___internal___contentDigest",
    ChildrenInternalDescription = "children___internal___description",
    ChildrenInternalFieldOwners = "children___internal___fieldOwners",
    ChildrenInternalIgnoreType = "children___internal___ignoreType",
    ChildrenInternalMediaType = "children___internal___mediaType",
    ChildrenInternalOwner = "children___internal___owner",
    ChildrenInternalType = "children___internal___type",
    InternalContent = "internal___content",
    InternalContentDigest = "internal___contentDigest",
    InternalDescription = "internal___description",
    InternalFieldOwners = "internal___fieldOwners",
    InternalIgnoreType = "internal___ignoreType",
    InternalMediaType = "internal___mediaType",
    InternalOwner = "internal___owner",
    InternalType = "internal___type"
}
export declare enum SiteConfigFieldsEnum {
    FooterCopyrightText = "footer___copyrightText",
    FooterLinks = "footer___links",
    FooterLinksLabel = "footer___links___label",
    FooterLinksSublabel = "footer___links___sublabel",
    FooterLinksIcon = "footer___links___icon",
    FooterLinksLink = "footer___links___link",
    FooterLinksType = "footer___links___type",
    FooterLinksHttpVerb = "footer___links___httpVerb",
    FooterLinksExpanded = "footer___links___expanded",
    FooterLinksPageId = "footer___links___pageId",
    FooterLinksRedocPrevLink = "footer___links___redocPrevLink",
    FooterLinksRedocPrevLabel = "footer___links___redocPrevLabel",
    FooterLinksRedocNextLink = "footer___links___redocNextLink",
    FooterLinksRedocNextLabel = "footer___links___redocNextLabel",
    FooterLinksRedocFakePage = "footer___links___redocFakePage",
    FooterLinksRedocInfoPageId = "footer___links___redocInfoPageId",
    FooterLinksTarget = "footer___links___target",
    FooterLinksExternal = "footer___links___external",
    FooterLinksItems = "footer___links___items",
    FooterLinksItemsLabel = "footer___links___items___label",
    FooterLinksItemsSublabel = "footer___links___items___sublabel",
    FooterLinksItemsIcon = "footer___links___items___icon",
    FooterLinksItemsLink = "footer___links___items___link",
    FooterLinksItemsType = "footer___links___items___type",
    FooterLinksItemsHttpVerb = "footer___links___items___httpVerb",
    FooterLinksItemsExpanded = "footer___links___items___expanded",
    FooterLinksItemsPageId = "footer___links___items___pageId",
    FooterLinksItemsRedocPrevLink = "footer___links___items___redocPrevLink",
    FooterLinksItemsRedocPrevLabel = "footer___links___items___redocPrevLabel",
    FooterLinksItemsRedocNextLink = "footer___links___items___redocNextLink",
    FooterLinksItemsRedocNextLabel = "footer___links___items___redocNextLabel",
    FooterLinksItemsRedocFakePage = "footer___links___items___redocFakePage",
    FooterLinksItemsRedocInfoPageId = "footer___links___items___redocInfoPageId",
    FooterLinksItemsTarget = "footer___links___items___target",
    FooterLinksItemsExternal = "footer___links___items___external",
    FooterLinksItemsItems = "footer___links___items___items",
    FooterLinksItemsPermission = "footer___links___items___permission",
    FooterLinksItemsMenuStyle = "footer___links___items___menuStyle",
    FooterLinksItemsSeparatorLine = "footer___links___items___separatorLine",
    FooterLinksItemsApiVersionId = "footer___links___items___apiVersionId",
    FooterLinksItemsIsDefaultApiVersion = "footer___links___items___isDefaultApiVersion",
    FooterLinksPermission = "footer___links___permission",
    FooterLinksMenuStyle = "footer___links___menuStyle",
    FooterLinksSeparatorLine = "footer___links___separatorLine",
    FooterLinksApiVersionId = "footer___links___apiVersionId",
    FooterLinksIsDefaultApiVersion = "footer___links___isDefaultApiVersion",
    FooterColumns = "footer___columns",
    FooterColumnsLabel = "footer___columns___label",
    FooterColumnsGroup = "footer___columns___group",
    FooterColumnsPermission = "footer___columns___permission",
    FooterColumnsItems = "footer___columns___items",
    FooterColumnsItemsLabel = "footer___columns___items___label",
    FooterColumnsItemsSublabel = "footer___columns___items___sublabel",
    FooterColumnsItemsIcon = "footer___columns___items___icon",
    FooterColumnsItemsLink = "footer___columns___items___link",
    FooterColumnsItemsType = "footer___columns___items___type",
    FooterColumnsItemsHttpVerb = "footer___columns___items___httpVerb",
    FooterColumnsItemsExpanded = "footer___columns___items___expanded",
    FooterColumnsItemsPageId = "footer___columns___items___pageId",
    FooterColumnsItemsRedocPrevLink = "footer___columns___items___redocPrevLink",
    FooterColumnsItemsRedocPrevLabel = "footer___columns___items___redocPrevLabel",
    FooterColumnsItemsRedocNextLink = "footer___columns___items___redocNextLink",
    FooterColumnsItemsRedocNextLabel = "footer___columns___items___redocNextLabel",
    FooterColumnsItemsRedocFakePage = "footer___columns___items___redocFakePage",
    FooterColumnsItemsRedocInfoPageId = "footer___columns___items___redocInfoPageId",
    FooterColumnsItemsTarget = "footer___columns___items___target",
    FooterColumnsItemsExternal = "footer___columns___items___external",
    FooterColumnsItemsItems = "footer___columns___items___items",
    FooterColumnsItemsPermission = "footer___columns___items___permission",
    FooterColumnsItemsMenuStyle = "footer___columns___items___menuStyle",
    FooterColumnsItemsSeparatorLine = "footer___columns___items___separatorLine",
    FooterColumnsItemsApiVersionId = "footer___columns___items___apiVersionId",
    FooterColumnsItemsIsDefaultApiVersion = "footer___columns___items___isDefaultApiVersion",
    Stylesheets = "stylesheets",
    Logo = "logo",
    Scripts = "scripts",
    Nav = "nav",
    NavLabel = "nav___label",
    NavSublabel = "nav___sublabel",
    NavIcon = "nav___icon",
    NavLink = "nav___link",
    NavType = "nav___type",
    NavHttpVerb = "nav___httpVerb",
    NavExpanded = "nav___expanded",
    NavPageId = "nav___pageId",
    NavRedocPrevLink = "nav___redocPrevLink",
    NavRedocPrevLabel = "nav___redocPrevLabel",
    NavRedocNextLink = "nav___redocNextLink",
    NavRedocNextLabel = "nav___redocNextLabel",
    NavRedocFakePage = "nav___redocFakePage",
    NavRedocInfoPageId = "nav___redocInfoPageId",
    NavTarget = "nav___target",
    NavExternal = "nav___external",
    NavItems = "nav___items",
    NavItemsLabel = "nav___items___label",
    NavItemsSublabel = "nav___items___sublabel",
    NavItemsIcon = "nav___items___icon",
    NavItemsLink = "nav___items___link",
    NavItemsType = "nav___items___type",
    NavItemsHttpVerb = "nav___items___httpVerb",
    NavItemsExpanded = "nav___items___expanded",
    NavItemsPageId = "nav___items___pageId",
    NavItemsRedocPrevLink = "nav___items___redocPrevLink",
    NavItemsRedocPrevLabel = "nav___items___redocPrevLabel",
    NavItemsRedocNextLink = "nav___items___redocNextLink",
    NavItemsRedocNextLabel = "nav___items___redocNextLabel",
    NavItemsRedocFakePage = "nav___items___redocFakePage",
    NavItemsRedocInfoPageId = "nav___items___redocInfoPageId",
    NavItemsTarget = "nav___items___target",
    NavItemsExternal = "nav___items___external",
    NavItemsItems = "nav___items___items",
    NavItemsItemsLabel = "nav___items___items___label",
    NavItemsItemsSublabel = "nav___items___items___sublabel",
    NavItemsItemsIcon = "nav___items___items___icon",
    NavItemsItemsLink = "nav___items___items___link",
    NavItemsItemsType = "nav___items___items___type",
    NavItemsItemsHttpVerb = "nav___items___items___httpVerb",
    NavItemsItemsExpanded = "nav___items___items___expanded",
    NavItemsItemsPageId = "nav___items___items___pageId",
    NavItemsItemsRedocPrevLink = "nav___items___items___redocPrevLink",
    NavItemsItemsRedocPrevLabel = "nav___items___items___redocPrevLabel",
    NavItemsItemsRedocNextLink = "nav___items___items___redocNextLink",
    NavItemsItemsRedocNextLabel = "nav___items___items___redocNextLabel",
    NavItemsItemsRedocFakePage = "nav___items___items___redocFakePage",
    NavItemsItemsRedocInfoPageId = "nav___items___items___redocInfoPageId",
    NavItemsItemsTarget = "nav___items___items___target",
    NavItemsItemsExternal = "nav___items___items___external",
    NavItemsItemsItems = "nav___items___items___items",
    NavItemsItemsPermission = "nav___items___items___permission",
    NavItemsItemsMenuStyle = "nav___items___items___menuStyle",
    NavItemsItemsSeparatorLine = "nav___items___items___separatorLine",
    NavItemsItemsApiVersionId = "nav___items___items___apiVersionId",
    NavItemsItemsIsDefaultApiVersion = "nav___items___items___isDefaultApiVersion",
    NavItemsPermission = "nav___items___permission",
    NavItemsMenuStyle = "nav___items___menuStyle",
    NavItemsSeparatorLine = "nav___items___separatorLine",
    NavItemsApiVersionId = "nav___items___apiVersionId",
    NavItemsIsDefaultApiVersion = "nav___items___isDefaultApiVersion",
    NavPermission = "nav___permission",
    NavMenuStyle = "nav___menuStyle",
    NavSeparatorLine = "nav___separatorLine",
    NavApiVersionId = "nav___apiVersionId",
    NavIsDefaultApiVersion = "nav___isDefaultApiVersion",
    SiteVersion = "siteVersion",
    ShowPrevButton = "showPrevButton",
    ShowNextButton = "showNextButton",
    EnableToc = "enableToc",
    TocMaxDepth = "tocMaxDepth",
    DisableLastModified = "disableLastModified",
    LoginPageUrl = "loginPageUrl",
    SocialTwitter = "social___twitter",
    RedoclyOrgId = "redoclyOrgId",
    MulesoftAnypointAppClientId = "mulesoftAnypoint___appClientId",
    MulesoftAnypointOrgId = "mulesoftAnypoint___orgId",
    WithRbac = "withRbac",
    Id = "id",
    ParentId = "parent___id",
    ParentParentId = "parent___parent___id",
    ParentParentParentId = "parent___parent___parent___id",
    ParentParentParentChildren = "parent___parent___parent___children",
    ParentParentChildren = "parent___parent___children",
    ParentParentChildrenId = "parent___parent___children___id",
    ParentParentChildrenChildren = "parent___parent___children___children",
    ParentParentInternalContent = "parent___parent___internal___content",
    ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
    ParentParentInternalDescription = "parent___parent___internal___description",
    ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
    ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
    ParentParentInternalMediaType = "parent___parent___internal___mediaType",
    ParentParentInternalOwner = "parent___parent___internal___owner",
    ParentParentInternalType = "parent___parent___internal___type",
    ParentChildren = "parent___children",
    ParentChildrenId = "parent___children___id",
    ParentChildrenParentId = "parent___children___parent___id",
    ParentChildrenParentChildren = "parent___children___parent___children",
    ParentChildrenChildren = "parent___children___children",
    ParentChildrenChildrenId = "parent___children___children___id",
    ParentChildrenChildrenChildren = "parent___children___children___children",
    ParentChildrenInternalContent = "parent___children___internal___content",
    ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
    ParentChildrenInternalDescription = "parent___children___internal___description",
    ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
    ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
    ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
    ParentChildrenInternalOwner = "parent___children___internal___owner",
    ParentChildrenInternalType = "parent___children___internal___type",
    ParentInternalContent = "parent___internal___content",
    ParentInternalContentDigest = "parent___internal___contentDigest",
    ParentInternalDescription = "parent___internal___description",
    ParentInternalFieldOwners = "parent___internal___fieldOwners",
    ParentInternalIgnoreType = "parent___internal___ignoreType",
    ParentInternalMediaType = "parent___internal___mediaType",
    ParentInternalOwner = "parent___internal___owner",
    ParentInternalType = "parent___internal___type",
    Children = "children",
    ChildrenId = "children___id",
    ChildrenParentId = "children___parent___id",
    ChildrenParentParentId = "children___parent___parent___id",
    ChildrenParentParentChildren = "children___parent___parent___children",
    ChildrenParentChildren = "children___parent___children",
    ChildrenParentChildrenId = "children___parent___children___id",
    ChildrenParentChildrenChildren = "children___parent___children___children",
    ChildrenParentInternalContent = "children___parent___internal___content",
    ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
    ChildrenParentInternalDescription = "children___parent___internal___description",
    ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
    ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
    ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
    ChildrenParentInternalOwner = "children___parent___internal___owner",
    ChildrenParentInternalType = "children___parent___internal___type",
    ChildrenChildren = "children___children",
    ChildrenChildrenId = "children___children___id",
    ChildrenChildrenParentId = "children___children___parent___id",
    ChildrenChildrenParentChildren = "children___children___parent___children",
    ChildrenChildrenChildren = "children___children___children",
    ChildrenChildrenChildrenId = "children___children___children___id",
    ChildrenChildrenChildrenChildren = "children___children___children___children",
    ChildrenChildrenInternalContent = "children___children___internal___content",
    ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
    ChildrenChildrenInternalDescription = "children___children___internal___description",
    ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
    ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
    ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
    ChildrenChildrenInternalOwner = "children___children___internal___owner",
    ChildrenChildrenInternalType = "children___children___internal___type",
    ChildrenInternalContent = "children___internal___content",
    ChildrenInternalContentDigest = "children___internal___contentDigest",
    ChildrenInternalDescription = "children___internal___description",
    ChildrenInternalFieldOwners = "children___internal___fieldOwners",
    ChildrenInternalIgnoreType = "children___internal___ignoreType",
    ChildrenInternalMediaType = "children___internal___mediaType",
    ChildrenInternalOwner = "children___internal___owner",
    ChildrenInternalType = "children___internal___type",
    InternalContent = "internal___content",
    InternalContentDigest = "internal___contentDigest",
    InternalDescription = "internal___description",
    InternalFieldOwners = "internal___fieldOwners",
    InternalIgnoreType = "internal___ignoreType",
    InternalMediaType = "internal___mediaType",
    InternalOwner = "internal___owner",
    InternalType = "internal___type"
}
export declare enum ContentItemFieldsEnum {
    PageId = "pageId",
    Link = "link",
    BaseLink = "baseLink",
    Type = "type",
    DataSettings = "data___settings",
    DataEnableToc = "data___enableToc",
    DataDisableLastModified = "data___disableLastModified",
    DataTocMaxDepth = "data___tocMaxDepth",
    DataRequestLogin = "data___requestLogin",
    DataShowPrevButton = "data___showPrevButton",
    DataShowNextButton = "data___showNextButton",
    DataApiVersions = "data___apiVersions",
    DataApiVersionsDefinitionId = "data___apiVersions___definitionId",
    DataApiVersionsId = "data___apiVersions___id",
    DataApiVersionsTitle = "data___apiVersions___title",
    DataApiVersionsIsDefault = "data___apiVersions___isDefault",
    DataIsDefaultApiVersion = "data___isDefaultApiVersion",
    DataApiVersionId = "data___apiVersionId",
    DataLabel = "data___label",
    DataPermission = "data___permission",
    DataCustomDataLabel = "data___customData___label",
    DataCustomDataTitle = "data___customData___title",
    DataCustomDataNextToButton = "data___customData___nextToButton",
    DataCustomDataDatapoint = "data___customData___datapoint",
    DataCustomDataItems = "data___customData___items",
    DataCustomDataPath = "data___customData___path",
    DataCustomDataPermission = "data___customData___permission",
    DataCustomDataEnableToc = "data___customData___enableToc",
    DataCustomDataId = "data___customData___id",
    DataCustomDataDate = "data___customData___date",
    DataCustomDataStatus = "data___customData___status",
    DataCustomDataAuthor = "data___customData___author",
    DataCustomDataExcerpt = "data___customData___excerpt",
    DataCustomDataCategories = "data___customData___categories",
    DataCustomDataHeaderImage = "data___customData___headerImage",
    DataCustomDataBlogId = "data___customData___blog_id",
    DataCustomDataLeadCaptureCampaign = "data___customData___leadCaptureCampaign",
    DataCustomDataType = "data___customData___type",
    DataCustomDataCollection = "data___customData___collection",
    DataCustomDataDescription = "data___customData___description",
    DataCustomDataKeywords = "data___customData___keywords",
    DataCustomDataA = "data___customData___a",
    DataDescription = "data___description",
    DataTitle = "data___title",
    DataRedocStoreStr = "data___redocStoreStr",
    DataRedocItemId = "data___redocItemId",
    DataRedocMenuItems = "data___redocMenuItems",
    DataRedocMenuItemsLabel = "data___redocMenuItems___label",
    DataRedocMenuItemsLink = "data___redocMenuItems___link",
    DataRedocMenuItemsRedocFakePage = "data___redocMenuItems___redocFakePage",
    DataRedocMenuItemsPages = "data___redocMenuItems___pages",
    DataRedocMenuItemsPagesLabel = "data___redocMenuItems___pages___label",
    DataRedocMenuItemsPagesHttpVerb = "data___redocMenuItems___pages___httpVerb",
    DataRedocMenuItemsPagesRedocFakePage = "data___redocMenuItems___pages___redocFakePage",
    DataRedocMenuItemsPagesLink = "data___redocMenuItems___pages___link",
    DataRedocMenuItemsPagesParentPageId = "data___redocMenuItems___pages___parentPageId",
    DataRedocMenuItemsParentPageId = "data___redocMenuItems___parentPageId",
    DataRedocMenuItemsPagination = "data___redocMenuItems___pagination",
    DataRedocMenuItemsRedocInfoPageLink = "data___redocMenuItems___redocInfoPageLink",
    DataRedocMenuItemsApiVersionId = "data___redocMenuItems___apiVersionId",
    DataRedocMenuItemsIsDefaultApiVersion = "data___redocMenuItems___isDefaultApiVersion",
    DataRedocMenuItemsPermission = "data___redocMenuItems___permission",
    DataRedocMenuItemsSeparator = "data___redocMenuItems___separator",
    DataRedocInfoPageId = "data___redocInfoPageId",
    DataRedocInfoPageLink = "data___redocInfoPageLink",
    DataRedocHasInfoPage = "data___redocHasInfoPage",
    DataRedocHasSecurityDefinitions = "data___redocHasSecurityDefinitions",
    DataCustomTemplate = "data___customTemplate",
    DataCustomDataString = "data___customDataString",
    DataMatchPath = "data___matchPath",
    DataExcludeFromSearch = "data___excludeFromSearch",
    DataNextToButton = "data___nextToButton",
    DataPath = "data___path",
    DataId = "data___id",
    DataDate = "data___date",
    DataStatus = "data___status",
    DataAuthor = "data___author",
    DataExcerpt = "data___excerpt",
    DataCategories = "data___categories",
    DataHeaderImage = "data___headerImage",
    DataBlogId = "data___blog_id",
    DataLeadCaptureCampaign = "data___leadCaptureCampaign",
    DataType = "data___type",
    DataCollection = "data___collection",
    DataKeywords = "data___keywords",
    DataDefinitionId = "data___definitionId",
    DataShowInfo = "data___showInfo",
    DataRedirect = "data___redirect",
    DataParentId = "data___parent___id",
    DataParentParentId = "data___parent___parent___id",
    DataParentParentChildren = "data___parent___parent___children",
    DataParentChildren = "data___parent___children",
    DataParentChildrenId = "data___parent___children___id",
    DataParentChildrenChildren = "data___parent___children___children",
    DataParentInternalContent = "data___parent___internal___content",
    DataParentInternalContentDigest = "data___parent___internal___contentDigest",
    DataParentInternalDescription = "data___parent___internal___description",
    DataParentInternalFieldOwners = "data___parent___internal___fieldOwners",
    DataParentInternalIgnoreType = "data___parent___internal___ignoreType",
    DataParentInternalMediaType = "data___parent___internal___mediaType",
    DataParentInternalOwner = "data___parent___internal___owner",
    DataParentInternalType = "data___parent___internal___type",
    DataChildren = "data___children",
    DataChildrenId = "data___children___id",
    DataChildrenParentId = "data___children___parent___id",
    DataChildrenParentChildren = "data___children___parent___children",
    DataChildrenChildren = "data___children___children",
    DataChildrenChildrenId = "data___children___children___id",
    DataChildrenChildrenChildren = "data___children___children___children",
    DataChildrenInternalContent = "data___children___internal___content",
    DataChildrenInternalContentDigest = "data___children___internal___contentDigest",
    DataChildrenInternalDescription = "data___children___internal___description",
    DataChildrenInternalFieldOwners = "data___children___internal___fieldOwners",
    DataChildrenInternalIgnoreType = "data___children___internal___ignoreType",
    DataChildrenInternalMediaType = "data___children___internal___mediaType",
    DataChildrenInternalOwner = "data___children___internal___owner",
    DataChildrenInternalType = "data___children___internal___type",
    DataInternalContent = "data___internal___content",
    DataInternalContentDigest = "data___internal___contentDigest",
    DataInternalDescription = "data___internal___description",
    DataInternalFieldOwners = "data___internal___fieldOwners",
    DataInternalIgnoreType = "data___internal___ignoreType",
    DataInternalMediaType = "data___internal___mediaType",
    DataInternalOwner = "data___internal___owner",
    DataInternalType = "data___internal___type",
    Permission = "permission",
    SourcePath = "sourcePath",
    FieldsLastModified = "fields___lastModified",
    Id = "id",
    ParentId = "parent___id",
    ParentParentId = "parent___parent___id",
    ParentParentParentId = "parent___parent___parent___id",
    ParentParentParentChildren = "parent___parent___parent___children",
    ParentParentChildren = "parent___parent___children",
    ParentParentChildrenId = "parent___parent___children___id",
    ParentParentChildrenChildren = "parent___parent___children___children",
    ParentParentInternalContent = "parent___parent___internal___content",
    ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
    ParentParentInternalDescription = "parent___parent___internal___description",
    ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
    ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
    ParentParentInternalMediaType = "parent___parent___internal___mediaType",
    ParentParentInternalOwner = "parent___parent___internal___owner",
    ParentParentInternalType = "parent___parent___internal___type",
    ParentChildren = "parent___children",
    ParentChildrenId = "parent___children___id",
    ParentChildrenParentId = "parent___children___parent___id",
    ParentChildrenParentChildren = "parent___children___parent___children",
    ParentChildrenChildren = "parent___children___children",
    ParentChildrenChildrenId = "parent___children___children___id",
    ParentChildrenChildrenChildren = "parent___children___children___children",
    ParentChildrenInternalContent = "parent___children___internal___content",
    ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
    ParentChildrenInternalDescription = "parent___children___internal___description",
    ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
    ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
    ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
    ParentChildrenInternalOwner = "parent___children___internal___owner",
    ParentChildrenInternalType = "parent___children___internal___type",
    ParentInternalContent = "parent___internal___content",
    ParentInternalContentDigest = "parent___internal___contentDigest",
    ParentInternalDescription = "parent___internal___description",
    ParentInternalFieldOwners = "parent___internal___fieldOwners",
    ParentInternalIgnoreType = "parent___internal___ignoreType",
    ParentInternalMediaType = "parent___internal___mediaType",
    ParentInternalOwner = "parent___internal___owner",
    ParentInternalType = "parent___internal___type",
    Children = "children",
    ChildrenId = "children___id",
    ChildrenParentId = "children___parent___id",
    ChildrenParentParentId = "children___parent___parent___id",
    ChildrenParentParentChildren = "children___parent___parent___children",
    ChildrenParentChildren = "children___parent___children",
    ChildrenParentChildrenId = "children___parent___children___id",
    ChildrenParentChildrenChildren = "children___parent___children___children",
    ChildrenParentInternalContent = "children___parent___internal___content",
    ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
    ChildrenParentInternalDescription = "children___parent___internal___description",
    ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
    ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
    ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
    ChildrenParentInternalOwner = "children___parent___internal___owner",
    ChildrenParentInternalType = "children___parent___internal___type",
    ChildrenChildren = "children___children",
    ChildrenChildrenId = "children___children___id",
    ChildrenChildrenParentId = "children___children___parent___id",
    ChildrenChildrenParentChildren = "children___children___parent___children",
    ChildrenChildrenChildren = "children___children___children",
    ChildrenChildrenChildrenId = "children___children___children___id",
    ChildrenChildrenChildrenChildren = "children___children___children___children",
    ChildrenChildrenInternalContent = "children___children___internal___content",
    ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
    ChildrenChildrenInternalDescription = "children___children___internal___description",
    ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
    ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
    ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
    ChildrenChildrenInternalOwner = "children___children___internal___owner",
    ChildrenChildrenInternalType = "children___children___internal___type",
    ChildrenInternalContent = "children___internal___content",
    ChildrenInternalContentDigest = "children___internal___contentDigest",
    ChildrenInternalDescription = "children___internal___description",
    ChildrenInternalFieldOwners = "children___internal___fieldOwners",
    ChildrenInternalIgnoreType = "children___internal___ignoreType",
    ChildrenInternalMediaType = "children___internal___mediaType",
    ChildrenInternalOwner = "children___internal___owner",
    ChildrenInternalType = "children___internal___type",
    InternalContent = "internal___content",
    InternalContentDigest = "internal___contentDigest",
    InternalDescription = "internal___description",
    InternalFieldOwners = "internal___fieldOwners",
    InternalIgnoreType = "internal___ignoreType",
    InternalMediaType = "internal___mediaType",
    InternalOwner = "internal___owner",
    InternalType = "internal___type"
}
export declare enum ContentItemDataFieldsEnum {
    Settings = "settings",
    EnableToc = "enableToc",
    DisableLastModified = "disableLastModified",
    TocMaxDepth = "tocMaxDepth",
    RequestLogin = "requestLogin",
    ShowPrevButton = "showPrevButton",
    ShowNextButton = "showNextButton",
    ApiVersions = "apiVersions",
    ApiVersionsDefinitionId = "apiVersions___definitionId",
    ApiVersionsId = "apiVersions___id",
    ApiVersionsTitle = "apiVersions___title",
    ApiVersionsIsDefault = "apiVersions___isDefault",
    IsDefaultApiVersion = "isDefaultApiVersion",
    ApiVersionId = "apiVersionId",
    Label = "label",
    Permission = "permission",
    CustomDataLabel = "customData___label",
    CustomDataTitle = "customData___title",
    CustomDataNextToButton = "customData___nextToButton",
    CustomDataDatapoint = "customData___datapoint",
    CustomDataItems = "customData___items",
    CustomDataPath = "customData___path",
    CustomDataPermission = "customData___permission",
    CustomDataEnableToc = "customData___enableToc",
    CustomDataId = "customData___id",
    CustomDataDate = "customData___date",
    CustomDataStatus = "customData___status",
    CustomDataAuthor = "customData___author",
    CustomDataExcerpt = "customData___excerpt",
    CustomDataCategories = "customData___categories",
    CustomDataHeaderImage = "customData___headerImage",
    CustomDataBlogId = "customData___blog_id",
    CustomDataLeadCaptureCampaign = "customData___leadCaptureCampaign",
    CustomDataType = "customData___type",
    CustomDataCollection = "customData___collection",
    CustomDataDescription = "customData___description",
    CustomDataKeywords = "customData___keywords",
    CustomDataA = "customData___a",
    Description = "description",
    Title = "title",
    RedocStoreStr = "redocStoreStr",
    RedocItemId = "redocItemId",
    RedocMenuItems = "redocMenuItems",
    RedocMenuItemsLabel = "redocMenuItems___label",
    RedocMenuItemsLink = "redocMenuItems___link",
    RedocMenuItemsRedocFakePage = "redocMenuItems___redocFakePage",
    RedocMenuItemsPages = "redocMenuItems___pages",
    RedocMenuItemsPagesLabel = "redocMenuItems___pages___label",
    RedocMenuItemsPagesHttpVerb = "redocMenuItems___pages___httpVerb",
    RedocMenuItemsPagesRedocFakePage = "redocMenuItems___pages___redocFakePage",
    RedocMenuItemsPagesLink = "redocMenuItems___pages___link",
    RedocMenuItemsPagesParentPageId = "redocMenuItems___pages___parentPageId",
    RedocMenuItemsParentPageId = "redocMenuItems___parentPageId",
    RedocMenuItemsPagination = "redocMenuItems___pagination",
    RedocMenuItemsRedocInfoPageLink = "redocMenuItems___redocInfoPageLink",
    RedocMenuItemsApiVersionId = "redocMenuItems___apiVersionId",
    RedocMenuItemsIsDefaultApiVersion = "redocMenuItems___isDefaultApiVersion",
    RedocMenuItemsPermission = "redocMenuItems___permission",
    RedocMenuItemsSeparator = "redocMenuItems___separator",
    RedocInfoPageId = "redocInfoPageId",
    RedocInfoPageLink = "redocInfoPageLink",
    RedocHasInfoPage = "redocHasInfoPage",
    RedocHasSecurityDefinitions = "redocHasSecurityDefinitions",
    CustomTemplate = "customTemplate",
    CustomDataString = "customDataString",
    MatchPath = "matchPath",
    ExcludeFromSearch = "excludeFromSearch",
    NextToButton = "nextToButton",
    Path = "path",
    Id = "id",
    Date = "date",
    Status = "status",
    Author = "author",
    Excerpt = "excerpt",
    Categories = "categories",
    HeaderImage = "headerImage",
    BlogId = "blog_id",
    LeadCaptureCampaign = "leadCaptureCampaign",
    Type = "type",
    Collection = "collection",
    Keywords = "keywords",
    DefinitionId = "definitionId",
    ShowInfo = "showInfo",
    Redirect = "redirect",
    ParentId = "parent___id",
    ParentParentId = "parent___parent___id",
    ParentParentParentId = "parent___parent___parent___id",
    ParentParentParentChildren = "parent___parent___parent___children",
    ParentParentChildren = "parent___parent___children",
    ParentParentChildrenId = "parent___parent___children___id",
    ParentParentChildrenChildren = "parent___parent___children___children",
    ParentParentInternalContent = "parent___parent___internal___content",
    ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
    ParentParentInternalDescription = "parent___parent___internal___description",
    ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
    ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
    ParentParentInternalMediaType = "parent___parent___internal___mediaType",
    ParentParentInternalOwner = "parent___parent___internal___owner",
    ParentParentInternalType = "parent___parent___internal___type",
    ParentChildren = "parent___children",
    ParentChildrenId = "parent___children___id",
    ParentChildrenParentId = "parent___children___parent___id",
    ParentChildrenParentChildren = "parent___children___parent___children",
    ParentChildrenChildren = "parent___children___children",
    ParentChildrenChildrenId = "parent___children___children___id",
    ParentChildrenChildrenChildren = "parent___children___children___children",
    ParentChildrenInternalContent = "parent___children___internal___content",
    ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
    ParentChildrenInternalDescription = "parent___children___internal___description",
    ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
    ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
    ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
    ParentChildrenInternalOwner = "parent___children___internal___owner",
    ParentChildrenInternalType = "parent___children___internal___type",
    ParentInternalContent = "parent___internal___content",
    ParentInternalContentDigest = "parent___internal___contentDigest",
    ParentInternalDescription = "parent___internal___description",
    ParentInternalFieldOwners = "parent___internal___fieldOwners",
    ParentInternalIgnoreType = "parent___internal___ignoreType",
    ParentInternalMediaType = "parent___internal___mediaType",
    ParentInternalOwner = "parent___internal___owner",
    ParentInternalType = "parent___internal___type",
    Children = "children",
    ChildrenId = "children___id",
    ChildrenParentId = "children___parent___id",
    ChildrenParentParentId = "children___parent___parent___id",
    ChildrenParentParentChildren = "children___parent___parent___children",
    ChildrenParentChildren = "children___parent___children",
    ChildrenParentChildrenId = "children___parent___children___id",
    ChildrenParentChildrenChildren = "children___parent___children___children",
    ChildrenParentInternalContent = "children___parent___internal___content",
    ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
    ChildrenParentInternalDescription = "children___parent___internal___description",
    ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
    ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
    ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
    ChildrenParentInternalOwner = "children___parent___internal___owner",
    ChildrenParentInternalType = "children___parent___internal___type",
    ChildrenChildren = "children___children",
    ChildrenChildrenId = "children___children___id",
    ChildrenChildrenParentId = "children___children___parent___id",
    ChildrenChildrenParentChildren = "children___children___parent___children",
    ChildrenChildrenChildren = "children___children___children",
    ChildrenChildrenChildrenId = "children___children___children___id",
    ChildrenChildrenChildrenChildren = "children___children___children___children",
    ChildrenChildrenInternalContent = "children___children___internal___content",
    ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
    ChildrenChildrenInternalDescription = "children___children___internal___description",
    ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
    ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
    ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
    ChildrenChildrenInternalOwner = "children___children___internal___owner",
    ChildrenChildrenInternalType = "children___children___internal___type",
    ChildrenInternalContent = "children___internal___content",
    ChildrenInternalContentDigest = "children___internal___contentDigest",
    ChildrenInternalDescription = "children___internal___description",
    ChildrenInternalFieldOwners = "children___internal___fieldOwners",
    ChildrenInternalIgnoreType = "children___internal___ignoreType",
    ChildrenInternalMediaType = "children___internal___mediaType",
    ChildrenInternalOwner = "children___internal___owner",
    ChildrenInternalType = "children___internal___type",
    InternalContent = "internal___content",
    InternalContentDigest = "internal___contentDigest",
    InternalDescription = "internal___description",
    InternalFieldOwners = "internal___fieldOwners",
    InternalIgnoreType = "internal___ignoreType",
    InternalMediaType = "internal___mediaType",
    InternalOwner = "internal___owner",
    InternalType = "internal___type"
}
export declare enum MarkdownRemarkFrontmatterFieldsEnum {
    EnableToc = "enableToc",
    DisableLastModified = "disableLastModified",
    TocMaxDepth = "tocMaxDepth",
    Title = "title",
    Permission = "permission",
    Id = "id",
    Date = "date",
    Status = "status",
    Author = "author",
    Excerpt = "excerpt",
    Categories = "categories",
    HeaderImage = "headerImage",
    Path = "path",
    BlogId = "blog_id",
    LeadCaptureCampaign = "leadCaptureCampaign",
    Type = "type",
    Collection = "collection",
    Description = "description",
    Keywords = "keywords",
    ParentId = "parent___id",
    ParentParentId = "parent___parent___id",
    ParentParentParentId = "parent___parent___parent___id",
    ParentParentParentChildren = "parent___parent___parent___children",
    ParentParentChildren = "parent___parent___children",
    ParentParentChildrenId = "parent___parent___children___id",
    ParentParentChildrenChildren = "parent___parent___children___children",
    ParentParentInternalContent = "parent___parent___internal___content",
    ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
    ParentParentInternalDescription = "parent___parent___internal___description",
    ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
    ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
    ParentParentInternalMediaType = "parent___parent___internal___mediaType",
    ParentParentInternalOwner = "parent___parent___internal___owner",
    ParentParentInternalType = "parent___parent___internal___type",
    ParentChildren = "parent___children",
    ParentChildrenId = "parent___children___id",
    ParentChildrenParentId = "parent___children___parent___id",
    ParentChildrenParentChildren = "parent___children___parent___children",
    ParentChildrenChildren = "parent___children___children",
    ParentChildrenChildrenId = "parent___children___children___id",
    ParentChildrenChildrenChildren = "parent___children___children___children",
    ParentChildrenInternalContent = "parent___children___internal___content",
    ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
    ParentChildrenInternalDescription = "parent___children___internal___description",
    ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
    ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
    ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
    ParentChildrenInternalOwner = "parent___children___internal___owner",
    ParentChildrenInternalType = "parent___children___internal___type",
    ParentInternalContent = "parent___internal___content",
    ParentInternalContentDigest = "parent___internal___contentDigest",
    ParentInternalDescription = "parent___internal___description",
    ParentInternalFieldOwners = "parent___internal___fieldOwners",
    ParentInternalIgnoreType = "parent___internal___ignoreType",
    ParentInternalMediaType = "parent___internal___mediaType",
    ParentInternalOwner = "parent___internal___owner",
    ParentInternalType = "parent___internal___type",
    Children = "children",
    ChildrenId = "children___id",
    ChildrenParentId = "children___parent___id",
    ChildrenParentParentId = "children___parent___parent___id",
    ChildrenParentParentChildren = "children___parent___parent___children",
    ChildrenParentChildren = "children___parent___children",
    ChildrenParentChildrenId = "children___parent___children___id",
    ChildrenParentChildrenChildren = "children___parent___children___children",
    ChildrenParentInternalContent = "children___parent___internal___content",
    ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
    ChildrenParentInternalDescription = "children___parent___internal___description",
    ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
    ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
    ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
    ChildrenParentInternalOwner = "children___parent___internal___owner",
    ChildrenParentInternalType = "children___parent___internal___type",
    ChildrenChildren = "children___children",
    ChildrenChildrenId = "children___children___id",
    ChildrenChildrenParentId = "children___children___parent___id",
    ChildrenChildrenParentChildren = "children___children___parent___children",
    ChildrenChildrenChildren = "children___children___children",
    ChildrenChildrenChildrenId = "children___children___children___id",
    ChildrenChildrenChildrenChildren = "children___children___children___children",
    ChildrenChildrenInternalContent = "children___children___internal___content",
    ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
    ChildrenChildrenInternalDescription = "children___children___internal___description",
    ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
    ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
    ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
    ChildrenChildrenInternalOwner = "children___children___internal___owner",
    ChildrenChildrenInternalType = "children___children___internal___type",
    ChildrenInternalContent = "children___internal___content",
    ChildrenInternalContentDigest = "children___internal___contentDigest",
    ChildrenInternalDescription = "children___internal___description",
    ChildrenInternalFieldOwners = "children___internal___fieldOwners",
    ChildrenInternalIgnoreType = "children___internal___ignoreType",
    ChildrenInternalMediaType = "children___internal___mediaType",
    ChildrenInternalOwner = "children___internal___owner",
    ChildrenInternalType = "children___internal___type",
    InternalContent = "internal___content",
    InternalContentDigest = "internal___contentDigest",
    InternalDescription = "internal___description",
    InternalFieldOwners = "internal___fieldOwners",
    InternalIgnoreType = "internal___ignoreType",
    InternalMediaType = "internal___mediaType",
    InternalOwner = "internal___owner",
    InternalType = "internal___type"
}
export declare enum SiteBuildMetadataFieldsEnum {
    Id = "id",
    ParentId = "parent___id",
    ParentParentId = "parent___parent___id",
    ParentParentParentId = "parent___parent___parent___id",
    ParentParentParentChildren = "parent___parent___parent___children",
    ParentParentChildren = "parent___parent___children",
    ParentParentChildrenId = "parent___parent___children___id",
    ParentParentChildrenChildren = "parent___parent___children___children",
    ParentParentInternalContent = "parent___parent___internal___content",
    ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
    ParentParentInternalDescription = "parent___parent___internal___description",
    ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
    ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
    ParentParentInternalMediaType = "parent___parent___internal___mediaType",
    ParentParentInternalOwner = "parent___parent___internal___owner",
    ParentParentInternalType = "parent___parent___internal___type",
    ParentChildren = "parent___children",
    ParentChildrenId = "parent___children___id",
    ParentChildrenParentId = "parent___children___parent___id",
    ParentChildrenParentChildren = "parent___children___parent___children",
    ParentChildrenChildren = "parent___children___children",
    ParentChildrenChildrenId = "parent___children___children___id",
    ParentChildrenChildrenChildren = "parent___children___children___children",
    ParentChildrenInternalContent = "parent___children___internal___content",
    ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
    ParentChildrenInternalDescription = "parent___children___internal___description",
    ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
    ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
    ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
    ParentChildrenInternalOwner = "parent___children___internal___owner",
    ParentChildrenInternalType = "parent___children___internal___type",
    ParentInternalContent = "parent___internal___content",
    ParentInternalContentDigest = "parent___internal___contentDigest",
    ParentInternalDescription = "parent___internal___description",
    ParentInternalFieldOwners = "parent___internal___fieldOwners",
    ParentInternalIgnoreType = "parent___internal___ignoreType",
    ParentInternalMediaType = "parent___internal___mediaType",
    ParentInternalOwner = "parent___internal___owner",
    ParentInternalType = "parent___internal___type",
    Children = "children",
    ChildrenId = "children___id",
    ChildrenParentId = "children___parent___id",
    ChildrenParentParentId = "children___parent___parent___id",
    ChildrenParentParentChildren = "children___parent___parent___children",
    ChildrenParentChildren = "children___parent___children",
    ChildrenParentChildrenId = "children___parent___children___id",
    ChildrenParentChildrenChildren = "children___parent___children___children",
    ChildrenParentInternalContent = "children___parent___internal___content",
    ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
    ChildrenParentInternalDescription = "children___parent___internal___description",
    ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
    ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
    ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
    ChildrenParentInternalOwner = "children___parent___internal___owner",
    ChildrenParentInternalType = "children___parent___internal___type",
    ChildrenChildren = "children___children",
    ChildrenChildrenId = "children___children___id",
    ChildrenChildrenParentId = "children___children___parent___id",
    ChildrenChildrenParentChildren = "children___children___parent___children",
    ChildrenChildrenChildren = "children___children___children",
    ChildrenChildrenChildrenId = "children___children___children___id",
    ChildrenChildrenChildrenChildren = "children___children___children___children",
    ChildrenChildrenInternalContent = "children___children___internal___content",
    ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
    ChildrenChildrenInternalDescription = "children___children___internal___description",
    ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
    ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
    ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
    ChildrenChildrenInternalOwner = "children___children___internal___owner",
    ChildrenChildrenInternalType = "children___children___internal___type",
    ChildrenInternalContent = "children___internal___content",
    ChildrenInternalContentDigest = "children___internal___contentDigest",
    ChildrenInternalDescription = "children___internal___description",
    ChildrenInternalFieldOwners = "children___internal___fieldOwners",
    ChildrenInternalIgnoreType = "children___internal___ignoreType",
    ChildrenInternalMediaType = "children___internal___mediaType",
    ChildrenInternalOwner = "children___internal___owner",
    ChildrenInternalType = "children___internal___type",
    InternalContent = "internal___content",
    InternalContentDigest = "internal___contentDigest",
    InternalDescription = "internal___description",
    InternalFieldOwners = "internal___fieldOwners",
    InternalIgnoreType = "internal___ignoreType",
    InternalMediaType = "internal___mediaType",
    InternalOwner = "internal___owner",
    InternalType = "internal___type",
    BuildTime = "buildTime"
}
export declare enum SitePluginFieldsEnum {
    Id = "id",
    ParentId = "parent___id",
    ParentParentId = "parent___parent___id",
    ParentParentParentId = "parent___parent___parent___id",
    ParentParentParentChildren = "parent___parent___parent___children",
    ParentParentChildren = "parent___parent___children",
    ParentParentChildrenId = "parent___parent___children___id",
    ParentParentChildrenChildren = "parent___parent___children___children",
    ParentParentInternalContent = "parent___parent___internal___content",
    ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
    ParentParentInternalDescription = "parent___parent___internal___description",
    ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
    ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
    ParentParentInternalMediaType = "parent___parent___internal___mediaType",
    ParentParentInternalOwner = "parent___parent___internal___owner",
    ParentParentInternalType = "parent___parent___internal___type",
    ParentChildren = "parent___children",
    ParentChildrenId = "parent___children___id",
    ParentChildrenParentId = "parent___children___parent___id",
    ParentChildrenParentChildren = "parent___children___parent___children",
    ParentChildrenChildren = "parent___children___children",
    ParentChildrenChildrenId = "parent___children___children___id",
    ParentChildrenChildrenChildren = "parent___children___children___children",
    ParentChildrenInternalContent = "parent___children___internal___content",
    ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
    ParentChildrenInternalDescription = "parent___children___internal___description",
    ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
    ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
    ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
    ParentChildrenInternalOwner = "parent___children___internal___owner",
    ParentChildrenInternalType = "parent___children___internal___type",
    ParentInternalContent = "parent___internal___content",
    ParentInternalContentDigest = "parent___internal___contentDigest",
    ParentInternalDescription = "parent___internal___description",
    ParentInternalFieldOwners = "parent___internal___fieldOwners",
    ParentInternalIgnoreType = "parent___internal___ignoreType",
    ParentInternalMediaType = "parent___internal___mediaType",
    ParentInternalOwner = "parent___internal___owner",
    ParentInternalType = "parent___internal___type",
    Children = "children",
    ChildrenId = "children___id",
    ChildrenParentId = "children___parent___id",
    ChildrenParentParentId = "children___parent___parent___id",
    ChildrenParentParentChildren = "children___parent___parent___children",
    ChildrenParentChildren = "children___parent___children",
    ChildrenParentChildrenId = "children___parent___children___id",
    ChildrenParentChildrenChildren = "children___parent___children___children",
    ChildrenParentInternalContent = "children___parent___internal___content",
    ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
    ChildrenParentInternalDescription = "children___parent___internal___description",
    ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
    ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
    ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
    ChildrenParentInternalOwner = "children___parent___internal___owner",
    ChildrenParentInternalType = "children___parent___internal___type",
    ChildrenChildren = "children___children",
    ChildrenChildrenId = "children___children___id",
    ChildrenChildrenParentId = "children___children___parent___id",
    ChildrenChildrenParentChildren = "children___children___parent___children",
    ChildrenChildrenChildren = "children___children___children",
    ChildrenChildrenChildrenId = "children___children___children___id",
    ChildrenChildrenChildrenChildren = "children___children___children___children",
    ChildrenChildrenInternalContent = "children___children___internal___content",
    ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
    ChildrenChildrenInternalDescription = "children___children___internal___description",
    ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
    ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
    ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
    ChildrenChildrenInternalOwner = "children___children___internal___owner",
    ChildrenChildrenInternalType = "children___children___internal___type",
    ChildrenInternalContent = "children___internal___content",
    ChildrenInternalContentDigest = "children___internal___contentDigest",
    ChildrenInternalDescription = "children___internal___description",
    ChildrenInternalFieldOwners = "children___internal___fieldOwners",
    ChildrenInternalIgnoreType = "children___internal___ignoreType",
    ChildrenInternalMediaType = "children___internal___mediaType",
    ChildrenInternalOwner = "children___internal___owner",
    ChildrenInternalType = "children___internal___type",
    InternalContent = "internal___content",
    InternalContentDigest = "internal___contentDigest",
    InternalDescription = "internal___description",
    InternalFieldOwners = "internal___fieldOwners",
    InternalIgnoreType = "internal___ignoreType",
    InternalMediaType = "internal___mediaType",
    InternalOwner = "internal___owner",
    InternalType = "internal___type",
    Resolve = "resolve",
    Name = "name",
    Version = "version",
    PluginOptionsPlugins = "pluginOptions___plugins",
    PluginOptionsPluginsResolve = "pluginOptions___plugins___resolve",
    PluginOptionsPluginsName = "pluginOptions___plugins___name",
    PluginOptionsPluginsId = "pluginOptions___plugins___id",
    PluginOptionsPluginsVersion = "pluginOptions___plugins___version",
    PluginOptionsPluginsPluginOptionsMaxWidth = "pluginOptions___plugins___pluginOptions___maxWidth",
    PluginOptionsPluginsPluginOptionsLinkImagesToOriginal = "pluginOptions___plugins___pluginOptions___linkImagesToOriginal",
    PluginOptionsPluginsPluginOptionsEnvVariablesAllowedClientSide = "pluginOptions___plugins___pluginOptions___envVariablesAllowedClientSide",
    PluginOptionsPluginsPluginOptionsConfigPath = "pluginOptions___plugins___pluginOptions___configPath",
    PluginOptionsPluginsNodeApIs = "pluginOptions___plugins___nodeAPIs",
    PluginOptionsPluginsBrowserApIs = "pluginOptions___plugins___browserAPIs",
    PluginOptionsPluginsSsrApIs = "pluginOptions___plugins___ssrAPIs",
    PluginOptionsPluginsPluginFilepath = "pluginOptions___plugins___pluginFilepath",
    PluginOptionsConfigPath = "pluginOptions___configPath",
    PluginOptionsName = "pluginOptions___name",
    PluginOptionsPath = "pluginOptions___path",
    PluginOptionsEnvVariablesAllowedClientSide = "pluginOptions___envVariablesAllowedClientSide",
    PluginOptionsPublicDir = "pluginOptions___publicDir",
    PluginOptionsMaxWidth = "pluginOptions___maxWidth",
    PluginOptionsLinkImagesToOriginal = "pluginOptions___linkImagesToOriginal",
    PluginOptionsLogo = "pluginOptions___logo",
    PluginOptionsInjectHtml = "pluginOptions___injectHTML",
    PluginOptionsLoadManifestWithCredentials = "pluginOptions___loadManifestWithCredentials",
    PluginOptionsIconsAndroid = "pluginOptions___icons___android",
    PluginOptionsIconsAppleIcon = "pluginOptions___icons___appleIcon",
    PluginOptionsIconsAppleStartup = "pluginOptions___icons___appleStartup",
    PluginOptionsIconsFavicons = "pluginOptions___icons___favicons",
    PluginOptionsIconsFirefox = "pluginOptions___icons___firefox",
    PluginOptionsPathCheck = "pluginOptions___pathCheck",
    NodeApIs = "nodeAPIs",
    BrowserApIs = "browserAPIs",
    SsrApIs = "ssrAPIs",
    PluginFilepath = "pluginFilepath",
    PackageJsonName = "packageJson___name",
    PackageJsonDescription = "packageJson___description",
    PackageJsonVersion = "packageJson___version",
    PackageJsonMain = "packageJson___main",
    PackageJsonLicense = "packageJson___license",
    PackageJsonDependencies = "packageJson___dependencies",
    PackageJsonDependenciesName = "packageJson___dependencies___name",
    PackageJsonDependenciesVersion = "packageJson___dependencies___version",
    PackageJsonDevDependencies = "packageJson___devDependencies",
    PackageJsonDevDependenciesName = "packageJson___devDependencies___name",
    PackageJsonDevDependenciesVersion = "packageJson___devDependencies___version",
    PackageJsonPeerDependencies = "packageJson___peerDependencies",
    PackageJsonPeerDependenciesName = "packageJson___peerDependencies___name",
    PackageJsonPeerDependenciesVersion = "packageJson___peerDependencies___version",
    PackageJsonKeywords = "packageJson___keywords"
}
/** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
export declare type Json = any;
/** A date string, such as 2007-12-03, compliant with the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
export declare type Date = any;
/** Node Interface */
export interface Node {
    id: string;
    parent?: Maybe<Node>;
    children: Node[];
    internal: Internal;
}
export interface Query {
    oasDefinition?: Maybe<OasDefinition>;
    apis: OasDefinitionInfo[];
    file?: Maybe<File>;
    allFile: FileConnection;
    directory?: Maybe<Directory>;
    allDirectory: DirectoryConnection;
    sitePage?: Maybe<SitePage>;
    allSitePage: SitePageConnection;
    site?: Maybe<Site>;
    allSite: SiteConnection;
    markdownRemark?: Maybe<MarkdownRemark>;
    allMarkdownRemark: MarkdownRemarkConnection;
    sidebar?: Maybe<Sidebar>;
    allSidebar: SidebarConnection;
    siteConfig?: Maybe<SiteConfig>;
    allSiteConfig: SiteConfigConnection;
    contentItem?: Maybe<ContentItem>;
    allContentItem: ContentItemConnection;
    contentItemData?: Maybe<ContentItemData>;
    allContentItemData: ContentItemDataConnection;
    markdownRemarkFrontmatter?: Maybe<MarkdownRemarkFrontmatter>;
    allMarkdownRemarkFrontmatter: MarkdownRemarkFrontmatterConnection;
    siteBuildMetadata?: Maybe<SiteBuildMetadata>;
    allSiteBuildMetadata: SiteBuildMetadataConnection;
    sitePlugin?: Maybe<SitePlugin>;
    allSitePlugin: SitePluginConnection;
}
export interface OasDefinition {
    redocStoreStr?: Maybe<string>;
    id?: Maybe<string>;
    absolutePath?: Maybe<string>;
}
export interface OasDefinitionInfo {
    id?: Maybe<string>;
    definitionId: string;
    link?: Maybe<string>;
    label?: Maybe<string>;
    permission?: Maybe<string>;
    sourcePath?: Maybe<string>;
    data?: Maybe<Json>;
    info?: Maybe<Json>;
    definitionProperties?: Maybe<Json>;
    versions?: Maybe<OasDefinitionVersionInfo[]>;
}
export interface OasDefinitionVersionInfo {
    definitionId: string;
    isDefault?: Maybe<boolean>;
    id?: Maybe<string>;
    title?: Maybe<string>;
    link?: Maybe<string>;
}
export interface File extends Node {
    sourceInstanceName: string;
    absolutePath: string;
    relativePath: string;
    extension: string;
    size: number;
    prettySize: string;
    modifiedTime: Date;
    accessTime: Date;
    changeTime: Date;
    birthTime: Date;
    root: string;
    dir: string;
    base: string;
    ext: string;
    name: string;
    relativeDirectory: string;
    dev: number;
    mode: number;
    nlink: number;
    uid: number;
    gid: number;
    rdev: number;
    ino: number;
    atimeMs: number;
    mtimeMs: number;
    ctimeMs: number;
    atime: Date;
    mtime: Date;
    ctime: Date;
    birthtime?: Maybe<Date>;
    birthtimeMs?: Maybe<number>;
    blksize?: Maybe<number>;
    blocks?: Maybe<number>;
    /** Copy file to static directory and return public url to it */
    publicURL?: Maybe<string>;
    id: string;
    parent?: Maybe<Node>;
    children: Node[];
    internal: Internal;
    childrenContentItem?: Maybe<Maybe<ContentItem>[]>;
    childMarkdownRemark?: Maybe<MarkdownRemark>;
}
export interface Internal {
    content?: Maybe<string>;
    contentDigest: string;
    description?: Maybe<string>;
    fieldOwners?: Maybe<Maybe<string>[]>;
    ignoreType?: Maybe<boolean>;
    mediaType?: Maybe<string>;
    owner: string;
    type: string;
}
export interface ContentItem extends Node {
    pageId: string;
    link?: Maybe<string>;
    baseLink?: Maybe<string>;
    type?: Maybe<string>;
    data?: Maybe<ContentItemData>;
    permission?: Maybe<string>;
    sourcePath?: Maybe<string>;
    fields?: Maybe<ContentItemFields>;
    id: string;
    parent?: Maybe<Node>;
    children: Node[];
    internal: Internal;
}
export interface ContentItemData extends Node {
    settings?: Maybe<Json>;
    enableToc?: Maybe<boolean>;
    disableLastModified?: Maybe<boolean>;
    tocMaxDepth?: Maybe<number>;
    requestLogin?: Maybe<boolean>;
    showPrevButton?: Maybe<boolean>;
    showNextButton?: Maybe<boolean>;
    apiVersions?: Maybe<ContentItemApiVersion[]>;
    isDefaultApiVersion?: Maybe<boolean>;
    apiVersionId?: Maybe<string>;
    label?: Maybe<string>;
    permission?: Maybe<string>;
    customData?: Maybe<ContentItemDataCustomData>;
    description?: Maybe<string>;
    title?: Maybe<string>;
    redocStoreStr?: Maybe<string>;
    redocItemId?: Maybe<string>;
    redocMenuItems?: Maybe<Maybe<ContentItemDataRedocMenuItems>[]>;
    redocInfoPageId?: Maybe<string>;
    redocInfoPageLink?: Maybe<string>;
    redocHasInfoPage?: Maybe<boolean>;
    redocHasSecurityDefinitions?: Maybe<boolean>;
    customTemplate?: Maybe<string>;
    customDataString?: Maybe<string>;
    matchPath?: Maybe<string>;
    excludeFromSearch?: Maybe<boolean>;
    nextToButton?: Maybe<boolean>;
    path?: Maybe<string>;
    id: string;
    date?: Maybe<Date>;
    status?: Maybe<string>;
    author?: Maybe<string>;
    excerpt?: Maybe<string>;
    categories?: Maybe<Maybe<string>[]>;
    headerImage?: Maybe<string>;
    blog_id?: Maybe<number>;
    leadCaptureCampaign?: Maybe<string>;
    type?: Maybe<string>;
    collection?: Maybe<string>;
    keywords?: Maybe<string>;
    definitionId?: Maybe<string>;
    showInfo?: Maybe<boolean>;
    redirect?: Maybe<boolean>;
    parent?: Maybe<Node>;
    children: Node[];
    internal: Internal;
}
export interface ContentItemApiVersion {
    definitionId: string;
    id?: Maybe<string>;
    title?: Maybe<string>;
    isDefault?: Maybe<boolean>;
}
export interface ContentItemDataCustomData {
    label?: Maybe<string>;
    title?: Maybe<string>;
    nextToButton?: Maybe<boolean>;
    datapoint?: Maybe<string>;
    items?: Maybe<Maybe<string>[]>;
    path?: Maybe<string>;
    permission?: Maybe<string>;
    enableToc?: Maybe<boolean>;
    id?: Maybe<string>;
    date?: Maybe<Date>;
    status?: Maybe<string>;
    author?: Maybe<string>;
    excerpt?: Maybe<string>;
    categories?: Maybe<Maybe<string>[]>;
    headerImage?: Maybe<string>;
    blog_id?: Maybe<number>;
    leadCaptureCampaign?: Maybe<string>;
    type?: Maybe<string>;
    collection?: Maybe<string>;
    description?: Maybe<string>;
    keywords?: Maybe<string>;
    a?: Maybe<number>;
}
export interface ContentItemDataRedocMenuItems {
    label?: Maybe<string>;
    link?: Maybe<string>;
    redocFakePage?: Maybe<boolean>;
    pages?: Maybe<Maybe<ContentItemDataRedocMenuItemsPages>[]>;
    parentPageId?: Maybe<string>;
    pagination?: Maybe<string>;
    redocInfoPageLink?: Maybe<string>;
    apiVersionId?: Maybe<string>;
    isDefaultApiVersion?: Maybe<boolean>;
    permission?: Maybe<string>;
    separator?: Maybe<string>;
}
export interface ContentItemDataRedocMenuItemsPages {
    label?: Maybe<string>;
    httpVerb?: Maybe<string>;
    redocFakePage?: Maybe<boolean>;
    link?: Maybe<string>;
    parentPageId?: Maybe<string>;
}
export interface ContentItemFields {
    lastModified?: Maybe<Date>;
}
export interface MarkdownRemark extends Node {
    id: string;
    frontmatter?: Maybe<MarkdownRemarkFrontmatter>;
    excerpt?: Maybe<string>;
    rawMarkdownBody?: Maybe<string>;
    fileAbsolutePath?: Maybe<string>;
    fields?: Maybe<MarkdownRemarkFields>;
    html?: Maybe<string>;
    htmlAst?: Maybe<Json>;
    excerptAst?: Maybe<Json>;
    headings?: Maybe<Maybe<MarkdownHeading>[]>;
    timeToRead?: Maybe<number>;
    tableOfContents?: Maybe<string>;
    wordCount?: Maybe<MarkdownWordCount>;
    parent?: Maybe<Node>;
    children: Node[];
    internal: Internal;
}
export interface MarkdownRemarkFrontmatter extends Node {
    enableToc?: Maybe<boolean>;
    disableLastModified?: Maybe<boolean>;
    tocMaxDepth?: Maybe<number>;
    title?: Maybe<string>;
    permission?: Maybe<string>;
    id: string;
    date?: Maybe<Date>;
    status?: Maybe<string>;
    author?: Maybe<string>;
    excerpt?: Maybe<string>;
    categories?: Maybe<Maybe<string>[]>;
    headerImage?: Maybe<string>;
    path?: Maybe<string>;
    blog_id?: Maybe<number>;
    leadCaptureCampaign?: Maybe<string>;
    type?: Maybe<string>;
    collection?: Maybe<string>;
    description?: Maybe<string>;
    keywords?: Maybe<string>;
    parent?: Maybe<Node>;
    children: Node[];
    internal: Internal;
}
export interface MarkdownRemarkFields {
    contentId?: Maybe<string>;
}
export interface MarkdownHeading {
    id?: Maybe<string>;
    value?: Maybe<string>;
    depth?: Maybe<number>;
}
export interface MarkdownWordCount {
    paragraphs?: Maybe<number>;
    sentences?: Maybe<number>;
    words?: Maybe<number>;
}
export interface FileConnection {
    totalCount: number;
    edges: FileEdge[];
    nodes: File[];
    pageInfo: PageInfo;
    distinct: string[];
    group: FileGroupConnection[];
}
export interface FileEdge {
    next?: Maybe<File>;
    node: File;
    previous?: Maybe<File>;
}
export interface PageInfo {
    currentPage: number;
    hasPreviousPage: boolean;
    hasNextPage: boolean;
    itemCount: number;
    pageCount: number;
    perPage?: Maybe<number>;
    totalCount: number;
}
export interface FileGroupConnection {
    totalCount: number;
    edges: FileEdge[];
    nodes: File[];
    pageInfo: PageInfo;
    field: string;
    fieldValue?: Maybe<string>;
}
export interface Directory extends Node {
    sourceInstanceName: string;
    absolutePath: string;
    relativePath: string;
    extension: string;
    size: number;
    prettySize: string;
    modifiedTime: Date;
    accessTime: Date;
    changeTime: Date;
    birthTime: Date;
    root: string;
    dir: string;
    base: string;
    ext: string;
    name: string;
    relativeDirectory: string;
    dev: number;
    mode: number;
    nlink: number;
    uid: number;
    gid: number;
    rdev: number;
    ino: number;
    atimeMs: number;
    mtimeMs: number;
    ctimeMs: number;
    atime: Date;
    mtime: Date;
    ctime: Date;
    birthtime?: Maybe<Date>;
    birthtimeMs?: Maybe<number>;
    blksize?: Maybe<number>;
    blocks?: Maybe<number>;
    id: string;
    parent?: Maybe<Node>;
    children: Node[];
    internal: Internal;
}
export interface DirectoryConnection {
    totalCount: number;
    edges: DirectoryEdge[];
    nodes: Directory[];
    pageInfo: PageInfo;
    distinct: string[];
    group: DirectoryGroupConnection[];
}
export interface DirectoryEdge {
    next?: Maybe<Directory>;
    node: Directory;
    previous?: Maybe<Directory>;
}
export interface DirectoryGroupConnection {
    totalCount: number;
    edges: DirectoryEdge[];
    nodes: Directory[];
    pageInfo: PageInfo;
    field: string;
    fieldValue?: Maybe<string>;
}
export interface SitePage extends Node {
    path: string;
    component: string;
    internalComponentName: string;
    componentChunkName: string;
    matchPath?: Maybe<string>;
    id: string;
    parent?: Maybe<Node>;
    children: Node[];
    internal: Internal;
    isCreatedByStatefulCreatePages?: Maybe<boolean>;
    context?: Maybe<SitePageContext>;
    pluginCreator?: Maybe<SitePlugin>;
    pluginCreatorId?: Maybe<string>;
    componentPath?: Maybe<string>;
}
export interface SitePageContext {
    id?: Maybe<string>;
    pageId?: Maybe<string>;
    pageBaseUrl?: Maybe<string>;
    title?: Maybe<string>;
    description?: Maybe<string>;
    type?: Maybe<string>;
    data?: Maybe<SitePageContextData>;
    link?: Maybe<string>;
    sidebarName?: Maybe<string>;
    isLanding?: Maybe<boolean>;
    apiVersions?: Maybe<Maybe<SitePageContextApiVersions>[]>;
    isDefaultApiVersion?: Maybe<boolean>;
}
export interface SitePageContextData {
    label?: Maybe<string>;
    title?: Maybe<string>;
    nextToButton?: Maybe<boolean>;
    datapoint?: Maybe<string>;
    items?: Maybe<Maybe<string>[]>;
    path?: Maybe<string>;
    permission?: Maybe<string>;
    enableToc?: Maybe<boolean>;
    id?: Maybe<string>;
    date?: Maybe<Date>;
    status?: Maybe<string>;
    author?: Maybe<string>;
    excerpt?: Maybe<string>;
    categories?: Maybe<Maybe<string>[]>;
    headerImage?: Maybe<string>;
    blog_id?: Maybe<number>;
    leadCaptureCampaign?: Maybe<string>;
    type?: Maybe<string>;
    collection?: Maybe<string>;
    description?: Maybe<string>;
    keywords?: Maybe<string>;
    a?: Maybe<number>;
}
export interface SitePageContextApiVersions {
    definitionId?: Maybe<string>;
    id?: Maybe<string>;
    title?: Maybe<string>;
    isDefault?: Maybe<boolean>;
}
export interface SitePlugin extends Node {
    id: string;
    parent?: Maybe<Node>;
    children: Node[];
    internal: Internal;
    resolve?: Maybe<string>;
    name?: Maybe<string>;
    version?: Maybe<string>;
    pluginOptions?: Maybe<SitePluginPluginOptions>;
    nodeAPIs?: Maybe<Maybe<string>[]>;
    browserAPIs?: Maybe<Maybe<string>[]>;
    ssrAPIs?: Maybe<Maybe<string>[]>;
    pluginFilepath?: Maybe<string>;
    packageJson?: Maybe<SitePluginPackageJson>;
}
export interface SitePluginPluginOptions {
    plugins?: Maybe<Maybe<SitePluginPluginOptionsPlugins>[]>;
    configPath?: Maybe<string>;
    name?: Maybe<string>;
    path?: Maybe<string>;
    envVariablesAllowedClientSide?: Maybe<Maybe<string>[]>;
    publicDir?: Maybe<string>;
    maxWidth?: Maybe<number>;
    linkImagesToOriginal?: Maybe<boolean>;
    logo?: Maybe<string | LogoConfigFilterInput>;
    injectHTML?: Maybe<boolean>;
    loadManifestWithCredentials?: Maybe<boolean>;
    icons?: Maybe<SitePluginPluginOptionsIcons>;
    pathCheck?: Maybe<boolean>;
}
export interface SitePluginPluginOptionsPlugins {
    resolve?: Maybe<string>;
    name?: Maybe<string>;
    id?: Maybe<string>;
    version?: Maybe<string>;
    pluginOptions?: Maybe<SitePluginPluginOptionsPluginsPluginOptions>;
    nodeAPIs?: Maybe<Maybe<string>[]>;
    browserAPIs?: Maybe<Maybe<string>[]>;
    ssrAPIs?: Maybe<Maybe<string>[]>;
    pluginFilepath?: Maybe<string>;
}
export interface SitePluginPluginOptionsPluginsPluginOptions {
    maxWidth?: Maybe<number>;
    linkImagesToOriginal?: Maybe<boolean>;
    envVariablesAllowedClientSide?: Maybe<Maybe<string>[]>;
    configPath?: Maybe<string>;
}
export interface SitePluginPluginOptionsIcons {
    android?: Maybe<boolean>;
    appleIcon?: Maybe<boolean>;
    appleStartup?: Maybe<boolean>;
    favicons?: Maybe<boolean>;
    firefox?: Maybe<boolean>;
}
export interface SitePluginPackageJson {
    name?: Maybe<string>;
    description?: Maybe<string>;
    version?: Maybe<string>;
    main?: Maybe<string>;
    license?: Maybe<string>;
    dependencies?: Maybe<Maybe<SitePluginPackageJsonDependencies>[]>;
    devDependencies?: Maybe<Maybe<SitePluginPackageJsonDevDependencies>[]>;
    peerDependencies?: Maybe<Maybe<SitePluginPackageJsonPeerDependencies>[]>;
    keywords?: Maybe<Maybe<string>[]>;
}
export interface SitePluginPackageJsonDependencies {
    name?: Maybe<string>;
    version?: Maybe<string>;
}
export interface SitePluginPackageJsonDevDependencies {
    name?: Maybe<string>;
    version?: Maybe<string>;
}
export interface SitePluginPackageJsonPeerDependencies {
    name?: Maybe<string>;
    version?: Maybe<string>;
}
export interface SitePageConnection {
    totalCount: number;
    edges: SitePageEdge[];
    nodes: SitePage[];
    pageInfo: PageInfo;
    distinct: string[];
    group: SitePageGroupConnection[];
}
export interface SitePageEdge {
    next?: Maybe<SitePage>;
    node: SitePage;
    previous?: Maybe<SitePage>;
}
export interface SitePageGroupConnection {
    totalCount: number;
    edges: SitePageEdge[];
    nodes: SitePage[];
    pageInfo: PageInfo;
    field: string;
    fieldValue?: Maybe<string>;
}
export interface Site extends Node {
    buildTime?: Maybe<Date>;
    siteMetadata?: Maybe<SiteSiteMetadata>;
    port?: Maybe<number>;
    host?: Maybe<string>;
    pathPrefix?: Maybe<string>;
    polyfill?: Maybe<boolean>;
    id: string;
    parent?: Maybe<Node>;
    children: Node[];
    internal: Internal;
}
export interface SiteSiteMetadata {
    image: string;
    title: string;
    description: string;
    keywords: string;
    contentDir?: Maybe<string>;
}
export interface SiteConnection {
    totalCount: number;
    edges: SiteEdge[];
    nodes: Site[];
    pageInfo: PageInfo;
    distinct: string[];
    group: SiteGroupConnection[];
}
export interface SiteEdge {
    next?: Maybe<Site>;
    node: Site;
    previous?: Maybe<Site>;
}
export interface SiteGroupConnection {
    totalCount: number;
    edges: SiteEdge[];
    nodes: Site[];
    pageInfo: PageInfo;
    field: string;
    fieldValue?: Maybe<string>;
}
export interface MarkdownRemarkConnection {
    totalCount: number;
    edges: MarkdownRemarkEdge[];
    nodes: MarkdownRemark[];
    pageInfo: PageInfo;
    distinct: string[];
    group: MarkdownRemarkGroupConnection[];
}
export interface MarkdownRemarkEdge {
    next?: Maybe<MarkdownRemark>;
    node: MarkdownRemark;
    previous?: Maybe<MarkdownRemark>;
}
export interface MarkdownRemarkGroupConnection {
    totalCount: number;
    edges: MarkdownRemarkEdge[];
    nodes: MarkdownRemark[];
    pageInfo: PageInfo;
    field: string;
    fieldValue?: Maybe<string>;
}
export interface Sidebar extends Node {
    name: string;
    permission?: Maybe<string>;
    context?: Maybe<string>;
    items: NavItem[];
    pagesIds: string[];
    pages?: Maybe<Maybe<SidebarPages>[]>;
    rating?: Maybe<number>;
    title?: Maybe<string>;
    id: string;
    parent?: Maybe<Node>;
    children: Node[];
    internal: Internal;
}
export interface NavItem {
    label?: Maybe<string>;
    sublabel?: Maybe<string>;
    icon?: Maybe<string>;
    link?: Maybe<string>;
    type?: Maybe<string>;
    httpVerb?: Maybe<string>;
    expanded?: Maybe<string>;
    selectFirstItemOnExpand?: Maybe<boolean>;
    pageId?: Maybe<string>;
    redocPrevLink?: Maybe<string>;
    redocPrevLabel?: Maybe<string>;
    redocNextLink?: Maybe<string>;
    redocNextLabel?: Maybe<string>;
    redocFakePage?: Maybe<boolean>;
    redocInfoPageId?: Maybe<string>;
    target?: Maybe<string>;
    external?: Maybe<boolean>;
    items?: Maybe<NavItem[]>;
    permission?: Maybe<string>;
    menuStyle?: Maybe<MenuStyle>;
    separatorLine?: Maybe<boolean>;
    apiVersionId?: Maybe<string>;
    isDefaultApiVersion?: Maybe<boolean>;
}
export interface SidebarPages {
    page?: Maybe<string>;
    label?: Maybe<string>;
    group?: Maybe<string>;
    expanded?: Maybe<string>;
    pages?: Maybe<Maybe<SidebarPagesPages>[]>;
    menuStyle?: Maybe<string>;
    icon?: Maybe<string>;
    sublabel?: Maybe<string>;
    separatorLine?: Maybe<boolean>;
    external?: Maybe<boolean>;
    separator?: Maybe<string>;
}
export interface SidebarPagesPages {
    page?: Maybe<string>;
    label?: Maybe<string>;
    group?: Maybe<string>;
    pages?: Maybe<Maybe<SidebarPagesPagesPages>[]>;
    separator?: Maybe<string>;
    separatorLine?: Maybe<boolean>;
}
export interface SidebarPagesPagesPages {
    group?: Maybe<string>;
    pages?: Maybe<Maybe<SidebarPagesPagesPagesPages>[]>;
    page?: Maybe<string>;
}
export interface SidebarPagesPagesPagesPages {
    separator?: Maybe<string>;
    page?: Maybe<string>;
}
export interface SidebarConnection {
    totalCount: number;
    edges: SidebarEdge[];
    nodes: Sidebar[];
    pageInfo: PageInfo;
    distinct: string[];
    group: SidebarGroupConnection[];
}
export interface SidebarEdge {
    next?: Maybe<Sidebar>;
    node: Sidebar;
    previous?: Maybe<Sidebar>;
}
export interface SidebarGroupConnection {
    totalCount: number;
    edges: SidebarEdge[];
    nodes: Sidebar[];
    pageInfo: PageInfo;
    field: string;
    fieldValue?: Maybe<string>;
}
export interface SiteConfig extends Node {
    footer?: Maybe<FooterConfig>;
    stylesheets: string[];
    logo?: Maybe<string | LogoConfigFilterInput>;
    scripts: string[];
    nav: NavItem[];
    siteVersion?: Maybe<string>;
    showPrevButton: boolean;
    showNextButton: boolean;
    enableToc?: Maybe<boolean>;
    tocMaxDepth?: Maybe<number>;
    disableLastModified?: Maybe<boolean>;
    loginPageUrl?: Maybe<string>;
    social?: Maybe<Social>;
    redoclyOrgId?: Maybe<string>;
    mulesoftAnypoint?: Maybe<MulesoftAnypointConfig>;
    withRbac?: Maybe<boolean>;
    id: string;
    parent?: Maybe<Node>;
    children: Node[];
    internal: Internal;
}
export interface FooterConfig {
    copyrightText?: Maybe<string>;
    links?: Maybe<NavItem[]>;
    columns: FooterColumn[];
}
export interface FooterColumn {
    label?: Maybe<string>;
    group?: Maybe<string>;
    permission?: Maybe<string>;
    items: NavItem[];
}
export interface Social {
    twitter?: Maybe<string>;
}
export interface MulesoftAnypointConfig {
    appClientId?: Maybe<string>;
    orgId?: Maybe<string>;
}
export interface SiteConfigConnection {
    totalCount: number;
    edges: SiteConfigEdge[];
    nodes: SiteConfig[];
    pageInfo: PageInfo;
    distinct: string[];
    group: SiteConfigGroupConnection[];
}
export interface SiteConfigEdge {
    next?: Maybe<SiteConfig>;
    node: SiteConfig;
    previous?: Maybe<SiteConfig>;
}
export interface SiteConfigGroupConnection {
    totalCount: number;
    edges: SiteConfigEdge[];
    nodes: SiteConfig[];
    pageInfo: PageInfo;
    field: string;
    fieldValue?: Maybe<string>;
}
export interface ContentItemConnection {
    totalCount: number;
    edges: ContentItemEdge[];
    nodes: ContentItem[];
    pageInfo: PageInfo;
    distinct: string[];
    group: ContentItemGroupConnection[];
}
export interface ContentItemEdge {
    next?: Maybe<ContentItem>;
    node: ContentItem;
    previous?: Maybe<ContentItem>;
}
export interface ContentItemGroupConnection {
    totalCount: number;
    edges: ContentItemEdge[];
    nodes: ContentItem[];
    pageInfo: PageInfo;
    field: string;
    fieldValue?: Maybe<string>;
}
export interface ContentItemDataConnection {
    totalCount: number;
    edges: ContentItemDataEdge[];
    nodes: ContentItemData[];
    pageInfo: PageInfo;
    distinct: string[];
    group: ContentItemDataGroupConnection[];
}
export interface ContentItemDataEdge {
    next?: Maybe<ContentItemData>;
    node: ContentItemData;
    previous?: Maybe<ContentItemData>;
}
export interface ContentItemDataGroupConnection {
    totalCount: number;
    edges: ContentItemDataEdge[];
    nodes: ContentItemData[];
    pageInfo: PageInfo;
    field: string;
    fieldValue?: Maybe<string>;
}
export interface MarkdownRemarkFrontmatterConnection {
    totalCount: number;
    edges: MarkdownRemarkFrontmatterEdge[];
    nodes: MarkdownRemarkFrontmatter[];
    pageInfo: PageInfo;
    distinct: string[];
    group: MarkdownRemarkFrontmatterGroupConnection[];
}
export interface MarkdownRemarkFrontmatterEdge {
    next?: Maybe<MarkdownRemarkFrontmatter>;
    node: MarkdownRemarkFrontmatter;
    previous?: Maybe<MarkdownRemarkFrontmatter>;
}
export interface MarkdownRemarkFrontmatterGroupConnection {
    totalCount: number;
    edges: MarkdownRemarkFrontmatterEdge[];
    nodes: MarkdownRemarkFrontmatter[];
    pageInfo: PageInfo;
    field: string;
    fieldValue?: Maybe<string>;
}
export interface SiteBuildMetadata extends Node {
    id: string;
    parent?: Maybe<Node>;
    children: Node[];
    internal: Internal;
    buildTime?: Maybe<Date>;
}
export interface SiteBuildMetadataConnection {
    totalCount: number;
    edges: SiteBuildMetadataEdge[];
    nodes: SiteBuildMetadata[];
    pageInfo: PageInfo;
    distinct: string[];
    group: SiteBuildMetadataGroupConnection[];
}
export interface SiteBuildMetadataEdge {
    next?: Maybe<SiteBuildMetadata>;
    node: SiteBuildMetadata;
    previous?: Maybe<SiteBuildMetadata>;
}
export interface SiteBuildMetadataGroupConnection {
    totalCount: number;
    edges: SiteBuildMetadataEdge[];
    nodes: SiteBuildMetadata[];
    pageInfo: PageInfo;
    field: string;
    fieldValue?: Maybe<string>;
}
export interface SitePluginConnection {
    totalCount: number;
    edges: SitePluginEdge[];
    nodes: SitePlugin[];
    pageInfo: PageInfo;
    distinct: string[];
    group: SitePluginGroupConnection[];
}
export interface SitePluginEdge {
    next?: Maybe<SitePlugin>;
    node: SitePlugin;
    previous?: Maybe<SitePlugin>;
}
export interface SitePluginGroupConnection {
    totalCount: number;
    edges: SitePluginEdge[];
    nodes: SitePlugin[];
    pageInfo: PageInfo;
    field: string;
    fieldValue?: Maybe<string>;
}
export interface OasDefinitionQueryArgs {
    id?: Maybe<string>;
}
export interface ApisQueryArgs {
    definitionProperties?: Maybe<string[]>;
    ignoreRBAC?: Maybe<boolean>;
}
export interface FileQueryArgs {
    sourceInstanceName?: Maybe<StringQueryOperatorInput>;
    absolutePath?: Maybe<StringQueryOperatorInput>;
    relativePath?: Maybe<StringQueryOperatorInput>;
    extension?: Maybe<StringQueryOperatorInput>;
    size?: Maybe<IntQueryOperatorInput>;
    prettySize?: Maybe<StringQueryOperatorInput>;
    modifiedTime?: Maybe<DateQueryOperatorInput>;
    accessTime?: Maybe<DateQueryOperatorInput>;
    changeTime?: Maybe<DateQueryOperatorInput>;
    birthTime?: Maybe<DateQueryOperatorInput>;
    root?: Maybe<StringQueryOperatorInput>;
    dir?: Maybe<StringQueryOperatorInput>;
    base?: Maybe<StringQueryOperatorInput>;
    ext?: Maybe<StringQueryOperatorInput>;
    name?: Maybe<StringQueryOperatorInput>;
    relativeDirectory?: Maybe<StringQueryOperatorInput>;
    dev?: Maybe<IntQueryOperatorInput>;
    mode?: Maybe<IntQueryOperatorInput>;
    nlink?: Maybe<IntQueryOperatorInput>;
    uid?: Maybe<IntQueryOperatorInput>;
    gid?: Maybe<IntQueryOperatorInput>;
    rdev?: Maybe<IntQueryOperatorInput>;
    ino?: Maybe<FloatQueryOperatorInput>;
    atimeMs?: Maybe<FloatQueryOperatorInput>;
    mtimeMs?: Maybe<FloatQueryOperatorInput>;
    ctimeMs?: Maybe<FloatQueryOperatorInput>;
    atime?: Maybe<DateQueryOperatorInput>;
    mtime?: Maybe<DateQueryOperatorInput>;
    ctime?: Maybe<DateQueryOperatorInput>;
    birthtime?: Maybe<DateQueryOperatorInput>;
    birthtimeMs?: Maybe<FloatQueryOperatorInput>;
    blksize?: Maybe<IntQueryOperatorInput>;
    blocks?: Maybe<IntQueryOperatorInput>;
    publicURL?: Maybe<StringQueryOperatorInput>;
    id?: Maybe<StringQueryOperatorInput>;
    parent?: Maybe<NodeFilterInput>;
    children?: Maybe<NodeFilterListInput>;
    internal?: Maybe<InternalFilterInput>;
    childrenContentItem?: Maybe<ContentItemFilterListInput>;
    childMarkdownRemark?: Maybe<MarkdownRemarkFilterInput>;
}
export interface AllFileQueryArgs {
    filter?: Maybe<FileFilterInput>;
    sort?: Maybe<FileSortInput>;
    skip?: Maybe<number>;
    limit?: Maybe<number>;
}
export interface DirectoryQueryArgs {
    sourceInstanceName?: Maybe<StringQueryOperatorInput>;
    absolutePath?: Maybe<StringQueryOperatorInput>;
    relativePath?: Maybe<StringQueryOperatorInput>;
    extension?: Maybe<StringQueryOperatorInput>;
    size?: Maybe<IntQueryOperatorInput>;
    prettySize?: Maybe<StringQueryOperatorInput>;
    modifiedTime?: Maybe<DateQueryOperatorInput>;
    accessTime?: Maybe<DateQueryOperatorInput>;
    changeTime?: Maybe<DateQueryOperatorInput>;
    birthTime?: Maybe<DateQueryOperatorInput>;
    root?: Maybe<StringQueryOperatorInput>;
    dir?: Maybe<StringQueryOperatorInput>;
    base?: Maybe<StringQueryOperatorInput>;
    ext?: Maybe<StringQueryOperatorInput>;
    name?: Maybe<StringQueryOperatorInput>;
    relativeDirectory?: Maybe<StringQueryOperatorInput>;
    dev?: Maybe<IntQueryOperatorInput>;
    mode?: Maybe<IntQueryOperatorInput>;
    nlink?: Maybe<IntQueryOperatorInput>;
    uid?: Maybe<IntQueryOperatorInput>;
    gid?: Maybe<IntQueryOperatorInput>;
    rdev?: Maybe<IntQueryOperatorInput>;
    ino?: Maybe<FloatQueryOperatorInput>;
    atimeMs?: Maybe<FloatQueryOperatorInput>;
    mtimeMs?: Maybe<FloatQueryOperatorInput>;
    ctimeMs?: Maybe<FloatQueryOperatorInput>;
    atime?: Maybe<DateQueryOperatorInput>;
    mtime?: Maybe<DateQueryOperatorInput>;
    ctime?: Maybe<DateQueryOperatorInput>;
    birthtime?: Maybe<DateQueryOperatorInput>;
    birthtimeMs?: Maybe<FloatQueryOperatorInput>;
    blksize?: Maybe<IntQueryOperatorInput>;
    blocks?: Maybe<IntQueryOperatorInput>;
    id?: Maybe<StringQueryOperatorInput>;
    parent?: Maybe<NodeFilterInput>;
    children?: Maybe<NodeFilterListInput>;
    internal?: Maybe<InternalFilterInput>;
}
export interface AllDirectoryQueryArgs {
    filter?: Maybe<DirectoryFilterInput>;
    sort?: Maybe<DirectorySortInput>;
    skip?: Maybe<number>;
    limit?: Maybe<number>;
}
export interface SitePageQueryArgs {
    path?: Maybe<StringQueryOperatorInput>;
    component?: Maybe<StringQueryOperatorInput>;
    internalComponentName?: Maybe<StringQueryOperatorInput>;
    componentChunkName?: Maybe<StringQueryOperatorInput>;
    matchPath?: Maybe<StringQueryOperatorInput>;
    id?: Maybe<StringQueryOperatorInput>;
    parent?: Maybe<NodeFilterInput>;
    children?: Maybe<NodeFilterListInput>;
    internal?: Maybe<InternalFilterInput>;
    isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
    context?: Maybe<SitePageContextFilterInput>;
    pluginCreator?: Maybe<SitePluginFilterInput>;
    pluginCreatorId?: Maybe<StringQueryOperatorInput>;
    componentPath?: Maybe<StringQueryOperatorInput>;
}
export interface AllSitePageQueryArgs {
    filter?: Maybe<SitePageFilterInput>;
    sort?: Maybe<SitePageSortInput>;
    skip?: Maybe<number>;
    limit?: Maybe<number>;
}
export interface SiteQueryArgs {
    buildTime?: Maybe<DateQueryOperatorInput>;
    siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
    port?: Maybe<IntQueryOperatorInput>;
    host?: Maybe<StringQueryOperatorInput>;
    pathPrefix?: Maybe<StringQueryOperatorInput>;
    polyfill?: Maybe<BooleanQueryOperatorInput>;
    id?: Maybe<StringQueryOperatorInput>;
    parent?: Maybe<NodeFilterInput>;
    children?: Maybe<NodeFilterListInput>;
    internal?: Maybe<InternalFilterInput>;
}
export interface AllSiteQueryArgs {
    filter?: Maybe<SiteFilterInput>;
    sort?: Maybe<SiteSortInput>;
    skip?: Maybe<number>;
    limit?: Maybe<number>;
}
export interface MarkdownRemarkQueryArgs {
    id?: Maybe<StringQueryOperatorInput>;
    frontmatter?: Maybe<MarkdownRemarkFrontmatterFilterInput>;
    excerpt?: Maybe<StringQueryOperatorInput>;
    rawMarkdownBody?: Maybe<StringQueryOperatorInput>;
    fileAbsolutePath?: Maybe<StringQueryOperatorInput>;
    fields?: Maybe<MarkdownRemarkFieldsFilterInput>;
    html?: Maybe<StringQueryOperatorInput>;
    htmlAst?: Maybe<JsonQueryOperatorInput>;
    excerptAst?: Maybe<JsonQueryOperatorInput>;
    headings?: Maybe<MarkdownHeadingFilterListInput>;
    timeToRead?: Maybe<IntQueryOperatorInput>;
    tableOfContents?: Maybe<StringQueryOperatorInput>;
    wordCount?: Maybe<MarkdownWordCountFilterInput>;
    parent?: Maybe<NodeFilterInput>;
    children?: Maybe<NodeFilterListInput>;
    internal?: Maybe<InternalFilterInput>;
}
export interface AllMarkdownRemarkQueryArgs {
    filter?: Maybe<MarkdownRemarkFilterInput>;
    sort?: Maybe<MarkdownRemarkSortInput>;
    skip?: Maybe<number>;
    limit?: Maybe<number>;
}
export interface SidebarQueryArgs {
    name?: Maybe<StringQueryOperatorInput>;
    permission?: Maybe<StringQueryOperatorInput>;
    context?: Maybe<StringQueryOperatorInput>;
    items?: Maybe<NavItemFilterListInput>;
    pagesIds?: Maybe<StringQueryOperatorInput>;
    pages?: Maybe<SidebarPagesFilterListInput>;
    rating?: Maybe<IntQueryOperatorInput>;
    title?: Maybe<StringQueryOperatorInput>;
    id?: Maybe<StringQueryOperatorInput>;
    parent?: Maybe<NodeFilterInput>;
    children?: Maybe<NodeFilterListInput>;
    internal?: Maybe<InternalFilterInput>;
}
export interface AllSidebarQueryArgs {
    filter?: Maybe<SidebarFilterInput>;
    sort?: Maybe<SidebarSortInput>;
    skip?: Maybe<number>;
    limit?: Maybe<number>;
}
export interface SiteConfigQueryArgs {
    footer?: Maybe<FooterConfigFilterInput>;
    stylesheets?: Maybe<StringQueryOperatorInput>;
    logo?: Maybe<string | LogoConfigFilterInput>;
    scripts?: Maybe<StringQueryOperatorInput>;
    nav?: Maybe<NavItemFilterListInput>;
    siteVersion?: Maybe<StringQueryOperatorInput>;
    showPrevButton?: Maybe<BooleanQueryOperatorInput>;
    showNextButton?: Maybe<BooleanQueryOperatorInput>;
    enableToc?: Maybe<BooleanQueryOperatorInput>;
    tocMaxDepth?: Maybe<IntQueryOperatorInput>;
    disableLastModified?: Maybe<BooleanQueryOperatorInput>;
    loginPageUrl?: Maybe<StringQueryOperatorInput>;
    social?: Maybe<SocialFilterInput>;
    redoclyOrgId?: Maybe<StringQueryOperatorInput>;
    mulesoftAnypoint?: Maybe<MulesoftAnypointConfigFilterInput>;
    withRbac?: Maybe<BooleanQueryOperatorInput>;
    id?: Maybe<StringQueryOperatorInput>;
    parent?: Maybe<NodeFilterInput>;
    children?: Maybe<NodeFilterListInput>;
    internal?: Maybe<InternalFilterInput>;
}
export interface AllSiteConfigQueryArgs {
    filter?: Maybe<SiteConfigFilterInput>;
    sort?: Maybe<SiteConfigSortInput>;
    skip?: Maybe<number>;
    limit?: Maybe<number>;
}
export interface ContentItemQueryArgs {
    pageId?: Maybe<StringQueryOperatorInput>;
    link?: Maybe<StringQueryOperatorInput>;
    baseLink?: Maybe<StringQueryOperatorInput>;
    type?: Maybe<StringQueryOperatorInput>;
    data?: Maybe<ContentItemDataFilterInput>;
    permission?: Maybe<StringQueryOperatorInput>;
    sourcePath?: Maybe<StringQueryOperatorInput>;
    fields?: Maybe<ContentItemFieldsFilterInput>;
    id?: Maybe<StringQueryOperatorInput>;
    parent?: Maybe<NodeFilterInput>;
    children?: Maybe<NodeFilterListInput>;
    internal?: Maybe<InternalFilterInput>;
}
export interface AllContentItemQueryArgs {
    filter?: Maybe<ContentItemFilterInput>;
    sort?: Maybe<ContentItemSortInput>;
    skip?: Maybe<number>;
    limit?: Maybe<number>;
}
export interface ContentItemDataQueryArgs {
    settings?: Maybe<JsonQueryOperatorInput>;
    enableToc?: Maybe<BooleanQueryOperatorInput>;
    disableLastModified?: Maybe<BooleanQueryOperatorInput>;
    tocMaxDepth?: Maybe<IntQueryOperatorInput>;
    requestLogin?: Maybe<BooleanQueryOperatorInput>;
    showPrevButton?: Maybe<BooleanQueryOperatorInput>;
    showNextButton?: Maybe<BooleanQueryOperatorInput>;
    apiVersions?: Maybe<ContentItemApiVersionFilterListInput>;
    isDefaultApiVersion?: Maybe<BooleanQueryOperatorInput>;
    apiVersionId?: Maybe<StringQueryOperatorInput>;
    label?: Maybe<StringQueryOperatorInput>;
    permission?: Maybe<StringQueryOperatorInput>;
    customData?: Maybe<ContentItemDataCustomDataFilterInput>;
    description?: Maybe<StringQueryOperatorInput>;
    title?: Maybe<StringQueryOperatorInput>;
    redocStoreStr?: Maybe<StringQueryOperatorInput>;
    redocItemId?: Maybe<StringQueryOperatorInput>;
    redocMenuItems?: Maybe<ContentItemDataRedocMenuItemsFilterListInput>;
    redocInfoPageId?: Maybe<StringQueryOperatorInput>;
    redocInfoPageLink?: Maybe<StringQueryOperatorInput>;
    redocHasInfoPage?: Maybe<BooleanQueryOperatorInput>;
    redocHasSecurityDefinitions?: Maybe<BooleanQueryOperatorInput>;
    customTemplate?: Maybe<StringQueryOperatorInput>;
    customDataString?: Maybe<StringQueryOperatorInput>;
    matchPath?: Maybe<StringQueryOperatorInput>;
    excludeFromSearch?: Maybe<BooleanQueryOperatorInput>;
    nextToButton?: Maybe<BooleanQueryOperatorInput>;
    path?: Maybe<StringQueryOperatorInput>;
    id?: Maybe<StringQueryOperatorInput>;
    date?: Maybe<DateQueryOperatorInput>;
    status?: Maybe<StringQueryOperatorInput>;
    author?: Maybe<StringQueryOperatorInput>;
    excerpt?: Maybe<StringQueryOperatorInput>;
    categories?: Maybe<StringQueryOperatorInput>;
    headerImage?: Maybe<StringQueryOperatorInput>;
    blog_id?: Maybe<IntQueryOperatorInput>;
    leadCaptureCampaign?: Maybe<StringQueryOperatorInput>;
    type?: Maybe<StringQueryOperatorInput>;
    collection?: Maybe<StringQueryOperatorInput>;
    keywords?: Maybe<StringQueryOperatorInput>;
    definitionId?: Maybe<StringQueryOperatorInput>;
    showInfo?: Maybe<BooleanQueryOperatorInput>;
    redirect?: Maybe<BooleanQueryOperatorInput>;
    parent?: Maybe<NodeFilterInput>;
    children?: Maybe<NodeFilterListInput>;
    internal?: Maybe<InternalFilterInput>;
}
export interface AllContentItemDataQueryArgs {
    filter?: Maybe<ContentItemDataFilterInput>;
    sort?: Maybe<ContentItemDataSortInput>;
    skip?: Maybe<number>;
    limit?: Maybe<number>;
}
export interface MarkdownRemarkFrontmatterQueryArgs {
    enableToc?: Maybe<BooleanQueryOperatorInput>;
    disableLastModified?: Maybe<BooleanQueryOperatorInput>;
    tocMaxDepth?: Maybe<IntQueryOperatorInput>;
    title?: Maybe<StringQueryOperatorInput>;
    permission?: Maybe<StringQueryOperatorInput>;
    id?: Maybe<StringQueryOperatorInput>;
    date?: Maybe<DateQueryOperatorInput>;
    status?: Maybe<StringQueryOperatorInput>;
    author?: Maybe<StringQueryOperatorInput>;
    excerpt?: Maybe<StringQueryOperatorInput>;
    categories?: Maybe<StringQueryOperatorInput>;
    headerImage?: Maybe<StringQueryOperatorInput>;
    path?: Maybe<StringQueryOperatorInput>;
    blog_id?: Maybe<IntQueryOperatorInput>;
    leadCaptureCampaign?: Maybe<StringQueryOperatorInput>;
    type?: Maybe<StringQueryOperatorInput>;
    collection?: Maybe<StringQueryOperatorInput>;
    description?: Maybe<StringQueryOperatorInput>;
    keywords?: Maybe<StringQueryOperatorInput>;
    parent?: Maybe<NodeFilterInput>;
    children?: Maybe<NodeFilterListInput>;
    internal?: Maybe<InternalFilterInput>;
}
export interface AllMarkdownRemarkFrontmatterQueryArgs {
    filter?: Maybe<MarkdownRemarkFrontmatterFilterInput>;
    sort?: Maybe<MarkdownRemarkFrontmatterSortInput>;
    skip?: Maybe<number>;
    limit?: Maybe<number>;
}
export interface SiteBuildMetadataQueryArgs {
    id?: Maybe<StringQueryOperatorInput>;
    parent?: Maybe<NodeFilterInput>;
    children?: Maybe<NodeFilterListInput>;
    internal?: Maybe<InternalFilterInput>;
    buildTime?: Maybe<DateQueryOperatorInput>;
}
export interface AllSiteBuildMetadataQueryArgs {
    filter?: Maybe<SiteBuildMetadataFilterInput>;
    sort?: Maybe<SiteBuildMetadataSortInput>;
    skip?: Maybe<number>;
    limit?: Maybe<number>;
}
export interface SitePluginQueryArgs {
    id?: Maybe<StringQueryOperatorInput>;
    parent?: Maybe<NodeFilterInput>;
    children?: Maybe<NodeFilterListInput>;
    internal?: Maybe<InternalFilterInput>;
    resolve?: Maybe<StringQueryOperatorInput>;
    name?: Maybe<StringQueryOperatorInput>;
    version?: Maybe<StringQueryOperatorInput>;
    pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
    nodeAPIs?: Maybe<StringQueryOperatorInput>;
    browserAPIs?: Maybe<StringQueryOperatorInput>;
    ssrAPIs?: Maybe<StringQueryOperatorInput>;
    pluginFilepath?: Maybe<StringQueryOperatorInput>;
    packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
}
export interface AllSitePluginQueryArgs {
    filter?: Maybe<SitePluginFilterInput>;
    sort?: Maybe<SitePluginSortInput>;
    skip?: Maybe<number>;
    limit?: Maybe<number>;
}
export interface ModifiedTimeFileArgs {
    /** Format the date using Moment.js' date tokens, e.g. `date(formatString: "YYYY MMMM DD")`. See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens. */
    formatString?: Maybe<string>;
    /** Returns a string generated with Moment.js' `fromNow` function */
    fromNow?: Maybe<boolean>;
    /** Returns the difference between this date and the current time. Defaults to "milliseconds" but you can also pass in as the measurement "years", "months", "weeks", "days", "hours", "minutes", and "seconds". */
    difference?: Maybe<string>;
    /** Configures the locale Moment.js will use to format the date. */
    locale?: Maybe<string>;
}
export interface AccessTimeFileArgs {
    /** Format the date using Moment.js' date tokens, e.g. `date(formatString: "YYYY MMMM DD")`. See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens. */
    formatString?: Maybe<string>;
    /** Returns a string generated with Moment.js' `fromNow` function */
    fromNow?: Maybe<boolean>;
    /** Returns the difference between this date and the current time. Defaults to "milliseconds" but you can also pass in as the measurement "years", "months", "weeks", "days", "hours", "minutes", and "seconds". */
    difference?: Maybe<string>;
    /** Configures the locale Moment.js will use to format the date. */
    locale?: Maybe<string>;
}
export interface ChangeTimeFileArgs {
    /** Format the date using Moment.js' date tokens, e.g. `date(formatString: "YYYY MMMM DD")`. See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens. */
    formatString?: Maybe<string>;
    /** Returns a string generated with Moment.js' `fromNow` function */
    fromNow?: Maybe<boolean>;
    /** Returns the difference between this date and the current time. Defaults to "milliseconds" but you can also pass in as the measurement "years", "months", "weeks", "days", "hours", "minutes", and "seconds". */
    difference?: Maybe<string>;
    /** Configures the locale Moment.js will use to format the date. */
    locale?: Maybe<string>;
}
export interface BirthTimeFileArgs {
    /** Format the date using Moment.js' date tokens, e.g. `date(formatString: "YYYY MMMM DD")`. See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens. */
    formatString?: Maybe<string>;
    /** Returns a string generated with Moment.js' `fromNow` function */
    fromNow?: Maybe<boolean>;
    /** Returns the difference between this date and the current time. Defaults to "milliseconds" but you can also pass in as the measurement "years", "months", "weeks", "days", "hours", "minutes", and "seconds". */
    difference?: Maybe<string>;
    /** Configures the locale Moment.js will use to format the date. */
    locale?: Maybe<string>;
}
export interface AtimeFileArgs {
    /** Format the date using Moment.js' date tokens, e.g. `date(formatString: "YYYY MMMM DD")`. See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens. */
    formatString?: Maybe<string>;
    /** Returns a string generated with Moment.js' `fromNow` function */
    fromNow?: Maybe<boolean>;
    /** Returns the difference between this date and the current time. Defaults to "milliseconds" but you can also pass in as the measurement "years", "months", "weeks", "days", "hours", "minutes", and "seconds". */
    difference?: Maybe<string>;
    /** Configures the locale Moment.js will use to format the date. */
    locale?: Maybe<string>;
}
export interface MtimeFileArgs {
    /** Format the date using Moment.js' date tokens, e.g. `date(formatString: "YYYY MMMM DD")`. See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens. */
    formatString?: Maybe<string>;
    /** Returns a string generated with Moment.js' `fromNow` function */
    fromNow?: Maybe<boolean>;
    /** Returns the difference between this date and the current time. Defaults to "milliseconds" but you can also pass in as the measurement "years", "months", "weeks", "days", "hours", "minutes", and "seconds". */
    difference?: Maybe<string>;
    /** Configures the locale Moment.js will use to format the date. */
    locale?: Maybe<string>;
}
export interface CtimeFileArgs {
    /** Format the date using Moment.js' date tokens, e.g. `date(formatString: "YYYY MMMM DD")`. See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens. */
    formatString?: Maybe<string>;
    /** Returns a string generated with Moment.js' `fromNow` function */
    fromNow?: Maybe<boolean>;
    /** Returns the difference between this date and the current time. Defaults to "milliseconds" but you can also pass in as the measurement "years", "months", "weeks", "days", "hours", "minutes", and "seconds". */
    difference?: Maybe<string>;
    /** Configures the locale Moment.js will use to format the date. */
    locale?: Maybe<string>;
}
export interface DateContentItemDataArgs {
    /** Format the date using Moment.js' date tokens, e.g. `date(formatString: "YYYY MMMM DD")`. See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens. */
    formatString?: Maybe<string>;
    /** Returns a string generated with Moment.js' `fromNow` function */
    fromNow?: Maybe<boolean>;
    /** Returns the difference between this date and the current time. Defaults to "milliseconds" but you can also pass in as the measurement "years", "months", "weeks", "days", "hours", "minutes", and "seconds". */
    difference?: Maybe<string>;
    /** Configures the locale Moment.js will use to format the date. */
    locale?: Maybe<string>;
}
export interface DateContentItemDataCustomDataArgs {
    /** Format the date using Moment.js' date tokens, e.g. `date(formatString: "YYYY MMMM DD")`. See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens. */
    formatString?: Maybe<string>;
    /** Returns a string generated with Moment.js' `fromNow` function */
    fromNow?: Maybe<boolean>;
    /** Returns the difference between this date and the current time. Defaults to "milliseconds" but you can also pass in as the measurement "years", "months", "weeks", "days", "hours", "minutes", and "seconds". */
    difference?: Maybe<string>;
    /** Configures the locale Moment.js will use to format the date. */
    locale?: Maybe<string>;
}
export interface LastModifiedContentItemFieldsArgs {
    /** Format the date using Moment.js' date tokens, e.g. `date(formatString: "YYYY MMMM DD")`. See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens. */
    formatString?: Maybe<string>;
    /** Returns a string generated with Moment.js' `fromNow` function */
    fromNow?: Maybe<boolean>;
    /** Returns the difference between this date and the current time. Defaults to "milliseconds" but you can also pass in as the measurement "years", "months", "weeks", "days", "hours", "minutes", and "seconds". */
    difference?: Maybe<string>;
    /** Configures the locale Moment.js will use to format the date. */
    locale?: Maybe<string>;
}
export interface ExcerptMarkdownRemarkArgs {
    pruneLength?: number;
    truncate?: boolean;
    format?: MarkdownExcerptFormats;
}
export interface ExcerptAstMarkdownRemarkArgs {
    pruneLength?: number;
    truncate?: boolean;
}
export interface HeadingsMarkdownRemarkArgs {
    depth?: Maybe<MarkdownHeadingLevels>;
}
export interface TableOfContentsMarkdownRemarkArgs {
    absolute?: boolean;
    pathToSlugField?: string;
    maxDepth?: Maybe<number>;
    heading?: Maybe<string>;
}
export interface DateMarkdownRemarkFrontmatterArgs {
    /** Format the date using Moment.js' date tokens, e.g. `date(formatString: "YYYY MMMM DD")`. See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens. */
    formatString?: Maybe<string>;
    /** Returns a string generated with Moment.js' `fromNow` function */
    fromNow?: Maybe<boolean>;
    /** Returns the difference between this date and the current time. Defaults to "milliseconds" but you can also pass in as the measurement "years", "months", "weeks", "days", "hours", "minutes", and "seconds". */
    difference?: Maybe<string>;
    /** Configures the locale Moment.js will use to format the date. */
    locale?: Maybe<string>;
}
export interface DistinctFileConnectionArgs {
    field: FileFieldsEnum;
}
export interface GroupFileConnectionArgs {
    skip?: Maybe<number>;
    limit?: Maybe<number>;
    field: FileFieldsEnum;
}
export interface ModifiedTimeDirectoryArgs {
    /** Format the date using Moment.js' date tokens, e.g. `date(formatString: "YYYY MMMM DD")`. See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens. */
    formatString?: Maybe<string>;
    /** Returns a string generated with Moment.js' `fromNow` function */
    fromNow?: Maybe<boolean>;
    /** Returns the difference between this date and the current time. Defaults to "milliseconds" but you can also pass in as the measurement "years", "months", "weeks", "days", "hours", "minutes", and "seconds". */
    difference?: Maybe<string>;
    /** Configures the locale Moment.js will use to format the date. */
    locale?: Maybe<string>;
}
export interface AccessTimeDirectoryArgs {
    /** Format the date using Moment.js' date tokens, e.g. `date(formatString: "YYYY MMMM DD")`. See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens. */
    formatString?: Maybe<string>;
    /** Returns a string generated with Moment.js' `fromNow` function */
    fromNow?: Maybe<boolean>;
    /** Returns the difference between this date and the current time. Defaults to "milliseconds" but you can also pass in as the measurement "years", "months", "weeks", "days", "hours", "minutes", and "seconds". */
    difference?: Maybe<string>;
    /** Configures the locale Moment.js will use to format the date. */
    locale?: Maybe<string>;
}
export interface ChangeTimeDirectoryArgs {
    /** Format the date using Moment.js' date tokens, e.g. `date(formatString: "YYYY MMMM DD")`. See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens. */
    formatString?: Maybe<string>;
    /** Returns a string generated with Moment.js' `fromNow` function */
    fromNow?: Maybe<boolean>;
    /** Returns the difference between this date and the current time. Defaults to "milliseconds" but you can also pass in as the measurement "years", "months", "weeks", "days", "hours", "minutes", and "seconds". */
    difference?: Maybe<string>;
    /** Configures the locale Moment.js will use to format the date. */
    locale?: Maybe<string>;
}
export interface BirthTimeDirectoryArgs {
    /** Format the date using Moment.js' date tokens, e.g. `date(formatString: "YYYY MMMM DD")`. See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens. */
    formatString?: Maybe<string>;
    /** Returns a string generated with Moment.js' `fromNow` function */
    fromNow?: Maybe<boolean>;
    /** Returns the difference between this date and the current time. Defaults to "milliseconds" but you can also pass in as the measurement "years", "months", "weeks", "days", "hours", "minutes", and "seconds". */
    difference?: Maybe<string>;
    /** Configures the locale Moment.js will use to format the date. */
    locale?: Maybe<string>;
}
export interface AtimeDirectoryArgs {
    /** Format the date using Moment.js' date tokens, e.g. `date(formatString: "YYYY MMMM DD")`. See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens. */
    formatString?: Maybe<string>;
    /** Returns a string generated with Moment.js' `fromNow` function */
    fromNow?: Maybe<boolean>;
    /** Returns the difference between this date and the current time. Defaults to "milliseconds" but you can also pass in as the measurement "years", "months", "weeks", "days", "hours", "minutes", and "seconds". */
    difference?: Maybe<string>;
    /** Configures the locale Moment.js will use to format the date. */
    locale?: Maybe<string>;
}
export interface MtimeDirectoryArgs {
    /** Format the date using Moment.js' date tokens, e.g. `date(formatString: "YYYY MMMM DD")`. See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens. */
    formatString?: Maybe<string>;
    /** Returns a string generated with Moment.js' `fromNow` function */
    fromNow?: Maybe<boolean>;
    /** Returns the difference between this date and the current time. Defaults to "milliseconds" but you can also pass in as the measurement "years", "months", "weeks", "days", "hours", "minutes", and "seconds". */
    difference?: Maybe<string>;
    /** Configures the locale Moment.js will use to format the date. */
    locale?: Maybe<string>;
}
export interface CtimeDirectoryArgs {
    /** Format the date using Moment.js' date tokens, e.g. `date(formatString: "YYYY MMMM DD")`. See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens. */
    formatString?: Maybe<string>;
    /** Returns a string generated with Moment.js' `fromNow` function */
    fromNow?: Maybe<boolean>;
    /** Returns the difference between this date and the current time. Defaults to "milliseconds" but you can also pass in as the measurement "years", "months", "weeks", "days", "hours", "minutes", and "seconds". */
    difference?: Maybe<string>;
    /** Configures the locale Moment.js will use to format the date. */
    locale?: Maybe<string>;
}
export interface DistinctDirectoryConnectionArgs {
    field: DirectoryFieldsEnum;
}
export interface GroupDirectoryConnectionArgs {
    skip?: Maybe<number>;
    limit?: Maybe<number>;
    field: DirectoryFieldsEnum;
}
export interface DistinctSitePageConnectionArgs {
    field: SitePageFieldsEnum;
}
export interface GroupSitePageConnectionArgs {
    skip?: Maybe<number>;
    limit?: Maybe<number>;
    field: SitePageFieldsEnum;
}
export interface BuildTimeSiteArgs {
    /** Format the date using Moment.js' date tokens, e.g. `date(formatString: "YYYY MMMM DD")`. See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens. */
    formatString?: Maybe<string>;
    /** Returns a string generated with Moment.js' `fromNow` function */
    fromNow?: Maybe<boolean>;
    /** Returns the difference between this date and the current time. Defaults to "milliseconds" but you can also pass in as the measurement "years", "months", "weeks", "days", "hours", "minutes", and "seconds". */
    difference?: Maybe<string>;
    /** Configures the locale Moment.js will use to format the date. */
    locale?: Maybe<string>;
}
export interface DistinctSiteConnectionArgs {
    field: SiteFieldsEnum;
}
export interface GroupSiteConnectionArgs {
    skip?: Maybe<number>;
    limit?: Maybe<number>;
    field: SiteFieldsEnum;
}
export interface DistinctMarkdownRemarkConnectionArgs {
    field: MarkdownRemarkFieldsEnum;
}
export interface GroupMarkdownRemarkConnectionArgs {
    skip?: Maybe<number>;
    limit?: Maybe<number>;
    field: MarkdownRemarkFieldsEnum;
}
export interface ItemsSidebarArgs {
    ignoreRBAC?: Maybe<boolean>;
}
export interface ItemsNavItemArgs {
    ignoreRBAC?: Maybe<boolean>;
}
export interface DistinctSidebarConnectionArgs {
    field: SidebarFieldsEnum;
}
export interface GroupSidebarConnectionArgs {
    skip?: Maybe<number>;
    limit?: Maybe<number>;
    field: SidebarFieldsEnum;
}
export interface NavSiteConfigArgs {
    ignoreRBAC?: Maybe<boolean>;
}
export interface ColumnsFooterConfigArgs {
    ignoreRBAC?: Maybe<boolean>;
}
export interface ItemsFooterColumnArgs {
    ignoreRBAC?: Maybe<boolean>;
}
export interface DistinctSiteConfigConnectionArgs {
    field: SiteConfigFieldsEnum;
}
export interface GroupSiteConfigConnectionArgs {
    skip?: Maybe<number>;
    limit?: Maybe<number>;
    field: SiteConfigFieldsEnum;
}
export interface DistinctContentItemConnectionArgs {
    field: ContentItemFieldsEnum;
}
export interface GroupContentItemConnectionArgs {
    skip?: Maybe<number>;
    limit?: Maybe<number>;
    field: ContentItemFieldsEnum;
}
export interface DistinctContentItemDataConnectionArgs {
    field: ContentItemDataFieldsEnum;
}
export interface GroupContentItemDataConnectionArgs {
    skip?: Maybe<number>;
    limit?: Maybe<number>;
    field: ContentItemDataFieldsEnum;
}
export interface DistinctMarkdownRemarkFrontmatterConnectionArgs {
    field: MarkdownRemarkFrontmatterFieldsEnum;
}
export interface GroupMarkdownRemarkFrontmatterConnectionArgs {
    skip?: Maybe<number>;
    limit?: Maybe<number>;
    field: MarkdownRemarkFrontmatterFieldsEnum;
}
export interface BuildTimeSiteBuildMetadataArgs {
    /** Format the date using Moment.js' date tokens, e.g. `date(formatString: "YYYY MMMM DD")`. See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens. */
    formatString?: Maybe<string>;
    /** Returns a string generated with Moment.js' `fromNow` function */
    fromNow?: Maybe<boolean>;
    /** Returns the difference between this date and the current time. Defaults to "milliseconds" but you can also pass in as the measurement "years", "months", "weeks", "days", "hours", "minutes", and "seconds". */
    difference?: Maybe<string>;
    /** Configures the locale Moment.js will use to format the date. */
    locale?: Maybe<string>;
}
export interface DistinctSiteBuildMetadataConnectionArgs {
    field: SiteBuildMetadataFieldsEnum;
}
export interface GroupSiteBuildMetadataConnectionArgs {
    skip?: Maybe<number>;
    limit?: Maybe<number>;
    field: SiteBuildMetadataFieldsEnum;
}
export interface DistinctSitePluginConnectionArgs {
    field: SitePluginFieldsEnum;
}
export interface GroupSitePluginConnectionArgs {
    skip?: Maybe<number>;
    limit?: Maybe<number>;
    field: SitePluginFieldsEnum;
}
export declare namespace FooterQuery {
    type Variables = {};
    type Query = {
        __typename?: 'Query';
        siteConfig: Maybe<SiteConfig>;
        site: Maybe<Site>;
    } & FooterFragment.Fragment;
    type SiteConfig = {
        __typename?: 'SiteConfig';
        withRbac: Maybe<boolean>;
    };
    type Site = {
        __typename?: 'Site';
        pathPrefix: Maybe<string>;
    };
}
export declare namespace NavQuery {
    type Variables = {};
    type Query = {
        __typename?: 'Query';
        site: Maybe<Site>;
        siteConfig: Maybe<SiteConfig>;
    } & HeaderNavFragment.Fragment;
    type Site = {
        __typename?: 'Site';
        pathPrefix: Maybe<string>;
    };
    type SiteConfig = {
        __typename?: 'SiteConfig';
        withRbac: Maybe<boolean>;
    };
}
export declare namespace AnonymousQuery_1 {
    type Variables = {};
    type Query = {
        __typename?: 'Query';
        site: Maybe<Site>;
        siteConfig: Maybe<SiteConfig>;
    };
    type Site = {
        __typename?: 'Site';
        siteMetadata: Maybe<SiteMetadata>;
    };
    type SiteMetadata = {
        __typename?: 'SiteSiteMetadata';
        title: string;
        description: string;
        image: string;
    };
    type SiteConfig = {
        __typename?: 'SiteConfig';
        stylesheets: string[];
        scripts: string[];
        social: Maybe<Social>;
    };
    type Social = {
        __typename?: 'Social';
        twitter: Maybe<string>;
    };
}
export declare namespace RedirectToLoginQuery {
    type Variables = {};
    type Query = {
        __typename?: 'Query';
        siteConfig: Maybe<SiteConfig>;
        site: Maybe<Site>;
    };
    type SiteConfig = {
        __typename?: 'SiteConfig';
        loginPageUrl: Maybe<string>;
    };
    type Site = {
        __typename?: 'Site';
        pathPrefix: Maybe<string>;
    };
}
export declare namespace AnonymousQuery_2 {
    type Variables = {};
    type Query = {
        __typename?: 'Query';
        site: Maybe<Site>;
        siteConfig: Maybe<SiteConfig>;
        allSidebar: AllSidebar;
    };
    type Site = {
        __typename?: 'Site';
        pathPrefix: Maybe<string>;
    };
    type SiteConfig = {
        __typename?: 'SiteConfig';
        withRbac: Maybe<boolean>;
        showPrevButton: boolean;
        showNextButton: boolean;
    };
    type AllSidebar = {
        __typename?: 'SidebarConnection';
        nodes: Nodes[];
    };
    type Nodes = {
        __typename?: 'Sidebar';
        name: string;
        context: Maybe<string>;
        items: Items[];
    };
    type Items = SidebarFragment.Fragment;
}
export declare namespace RedocOpQuery {
    type Variables = {
        pageId: string;
    };
    type Query = {
        __typename?: 'Query';
        contentItem: Maybe<ContentItem>;
    };
    type ContentItem = {
        __typename?: 'ContentItem';
        type: Maybe<string>;
        link: Maybe<string>;
        data: Maybe<Data>;
    };
    type Data = {
        __typename?: 'ContentItemData';
        redocStoreStr: Maybe<string>;
        redocHasSecurityDefinitions: Maybe<boolean>;
        redocInfoPageLink: Maybe<string>;
        redocItemId: Maybe<string>;
        redocHasInfoPage: Maybe<boolean>;
        settings: Maybe<Json>;
        title: Maybe<string>;
        requestLogin: Maybe<boolean>;
    };
}
export declare namespace RedocStoreQuery {
    type Variables = {
        pageId: string;
    };
    type Query = {
        __typename?: 'Query';
        contentItem: Maybe<ContentItem>;
    };
    type ContentItem = {
        __typename?: 'ContentItem';
        data: Maybe<Data>;
    };
    type Data = {
        __typename?: 'ContentItemData';
        redocStoreStr: Maybe<string>;
        settings: Maybe<Json>;
        requestLogin: Maybe<boolean>;
    };
}
export declare namespace MarkdownQuery {
    type Variables = {
        pageId: string;
        id: string;
    };
    type Query = {
        __typename?: 'Query';
        markdownRemark: Maybe<MarkdownRemark>;
        contentItem: Maybe<ContentItem>;
        siteConfig: Maybe<SiteConfig>;
    };
    type MarkdownRemark = {
        __typename?: 'MarkdownRemark';
        html: Maybe<string>;
        headings: Maybe<Maybe<Headings>[]>;
    };
    type Headings = {
        __typename?: 'MarkdownHeading';
        value: Maybe<string>;
        depth: Maybe<number>;
    };
    type ContentItem = {
        __typename?: 'ContentItem';
        fields: Maybe<Fields>;
        data: Maybe<Data>;
    };
    type Fields = {
        __typename?: 'ContentItemFields';
        lastModified: Maybe<Date>;
    };
    type Data = {
        __typename?: 'ContentItemData';
        enableToc: Maybe<boolean>;
        disableLastModified: Maybe<boolean>;
        tocMaxDepth: Maybe<number>;
        requestLogin: Maybe<boolean>;
    };
    type SiteConfig = {
        __typename?: 'SiteConfig';
        enableToc: Maybe<boolean>;
        disableLastModified: Maybe<boolean>;
        tocMaxDepth: Maybe<number>;
    };
}
export declare namespace AnonymousQuery_3 {
    type Variables = {};
    type Query = {
        __typename?: 'Query';
        siteConfig: Maybe<SiteConfig>;
        apis: Apis[];
    };
    type SiteConfig = {
        __typename?: 'SiteConfig';
        withRbac: Maybe<boolean>;
    };
    type Apis = {
        __typename?: 'OASDefinitionInfo';
        id: Maybe<string>;
        definitionId: string;
        link: Maybe<string>;
        sourcePath: Maybe<string>;
        info: Maybe<Json>;
        data: Maybe<Json>;
        definitionProperties: Maybe<Json>;
        permission: Maybe<string>;
        versions: Maybe<Versions[]>;
    };
    type Versions = {
        __typename?: 'OASDefinitionVersionInfo';
        definitionId: string;
        isDefault: Maybe<boolean>;
        id: Maybe<string>;
        title: Maybe<string>;
        link: Maybe<string>;
    };
}
export declare namespace AnonymousQuery_4 {
    type Variables = {};
    type Query = {
        __typename?: 'Query';
        config: Maybe<Config>;
    };
    type Config = {
        __typename?: 'SiteConfig';
        redoclyOrgId: Maybe<string>;
        mulesoftAnypoint: Maybe<MulesoftAnypoint>;
    };
    type MulesoftAnypoint = {
        __typename?: 'MulesoftAnypointConfig';
        appClientId: Maybe<string>;
        orgId: Maybe<string>;
    };
}
export declare namespace HeaderNavFragment {
    type Fragment = {
        __typename?: 'Query';
        siteConfig: Maybe<SiteConfig>;
    };
    type SiteConfig = {
        __typename?: 'SiteConfig';
        logo: Maybe<string | LogoConfigFilterInput>;
        nav: Nav[];
    };
    type Nav = {
        __typename?: 'NavItem';
        type: Maybe<string>;
        label: Maybe<string>;
        link: Maybe<string>;
        external: Maybe<boolean>;
        target: Maybe<string>;
        icon: Maybe<string>;
        items: Maybe<Items[]>;
    };
    type Items = {
        __typename?: 'NavItem';
        type: Maybe<string>;
        label: Maybe<string>;
        link: Maybe<string>;
        external: Maybe<boolean>;
        target: Maybe<string>;
        icon: Maybe<string>;
        items: Maybe<_Items[]>;
    };
    type _Items = {
        __typename?: 'NavItem';
        type: Maybe<string>;
        label: Maybe<string>;
        link: Maybe<string>;
        icon: Maybe<string>;
        external: Maybe<boolean>;
        target: Maybe<string>;
    };
}
export declare namespace SidebarItemFragment {
    type Fragment = {
        __typename?: 'NavItem';
        label: Maybe<string>;
        link: Maybe<string>;
        httpVerb: Maybe<string>;
        type: Maybe<string>;
        expanded: Maybe<string>;
        pageId: Maybe<string>;
        redocPrevLink: Maybe<string>;
        redocPrevLabel: Maybe<string>;
        redocNextLink: Maybe<string>;
        redocNextLabel: Maybe<string>;
        redocFakePage: Maybe<boolean>;
        external: Maybe<boolean>;
        target: Maybe<string>;
        menuStyle: Maybe<MenuStyle>;
        sublabel: Maybe<string>;
        icon: Maybe<string>;
        separatorLine: Maybe<boolean>;
        apiVersionId: Maybe<string>;
        isDefaultApiVersion: Maybe<boolean>;
    };
}
export declare namespace SidebarFragment {
    type Fragment = {
        __typename?: 'NavItem';
        items: Maybe<Items[]>;
    } & SidebarItemFragment.Fragment;
    type Items = {
        __typename?: 'NavItem';
        items: Maybe<_Items[]>;
    } & SidebarItemFragment.Fragment;
    type _Items = {
        __typename?: 'NavItem';
        items: Maybe<__Items[]>;
    } & SidebarItemFragment.Fragment;
    type __Items = {
        __typename?: 'NavItem';
        items: Maybe<___Items[]>;
    } & SidebarItemFragment.Fragment;
    type ___Items = {
        __typename?: 'NavItem';
        items: Maybe<____Items[]>;
    } & SidebarItemFragment.Fragment;
    type ____Items = {
        __typename?: 'NavItem';
        items: Maybe<_____Items[]>;
    } & SidebarItemFragment.Fragment;
    type _____Items = {
        __typename?: 'NavItem';
        items: Maybe<______Items[]>;
    } & SidebarItemFragment.Fragment;
    type ______Items = SidebarItemFragment.Fragment;
}
export declare namespace FooterFragment {
    type Fragment = {
        __typename?: 'Query';
        siteConfig: Maybe<SiteConfig>;
    };
    type SiteConfig = {
        __typename?: 'SiteConfig';
        footer: Maybe<Footer>;
        siteVersion: Maybe<string>;
    };
    type Footer = {
        __typename?: 'FooterConfig';
        copyrightText: Maybe<string>;
        links: Maybe<Links[]>;
        columns: Columns[];
    };
    type Links = SidebarItemFragment.Fragment;
    type Columns = {
        __typename?: 'FooterColumn';
        label: Maybe<string>;
        group: Maybe<string>;
        items: Items[];
    };
    type Items = SidebarItemFragment.Fragment;
}
