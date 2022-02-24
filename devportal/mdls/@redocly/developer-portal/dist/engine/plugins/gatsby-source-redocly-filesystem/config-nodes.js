const path=require("path"),{existsSync}=require("fs"),chalk=require("chalk"),isRelativeUrl=require(`is-relative-url`),{slash}=require("gatsby-core-utils"),{replaceEnv}=require("../../utils/utils"),RBAC=require("./rbac"),{contentDigest,readYaml,createRootSidebarConfig}=require("./utils"),{updateDefinitionsCache}=require("./oas/cache"),pages=require("./pages/cache"),defaultLoginConfig={label:"Sign in",userAvatar:{claim:"picture",fallbackLettersClaim:"fullName"},userLabel:{claim:"email",fallback:"<unknown user>"},menu:[{label:"Sign out",logout:!0}]};async function createConfigNode(a,b){const{actions:c,createNodeId:d,reporter:e,getNodesByType:f,getSiteConfig:g}=b,{createNode:h}=c,i=g();i.nav||e.warn(chalk.yellow("Config does not have \"nav\" section")),i.specs&&e.warn(chalk.yellow("\"specs\" in siteConfig.yaml is deprecated. Rename it to \"oasDefinitions\""));const j=(i.stylesheets||[]).filter(a=>!isRelativeUrl(a));j.length||j.push(""),pages.cleanPagesCache(),pages.updatePagesInfoCache({getNodesByType:f});const k=path.dirname(a),l={id:d("redocly_config"),siteVersion:i.siteVersion,stylesheets:j,social:i.social,withRbac:existsSync(path.join(k,RBAC.ROLES_FILE_NAME)),showPrevButton:!0===i.showPrevButton,showNextButton:!1!==i.showNextButton,customLoginPagePath:i.customLoginPagePath,login:i.login&&{...defaultLoginConfig,...i.login,userAvatar:!1===i.login.userAvatar?null:i.login.userAvatar||defaultLoginConfig.userAvatar,userLabel:!1===i.login.userLabel?null:i.login.userLabel||defaultLoginConfig.userLabel},raw:i,redoclyOrgId:i.redoclyOrgId,mulesoftAnypoint:i.mulesoftAnypoint,contentDir:k,internal:{type:"SiteConfig"},generationDate:Date.now()};h({...l,internal:{...l.internal,contentDigest:contentDigest(l)}}),await updateDefinitionsCache(i.oasDefinitions,path.dirname(a),b)}let sideBarTypesCreated=!1;async function createSidebarNodes(a,b,c){const{actions:d,getNodesByType:e}=c,{createNode:f,createTypes:g}=d;let h={};try{h=await createRootSidebarConfig(a,readYaml)}catch(a){console.warn(chalk.yellow(`Can't read sidebar config: ${a.message}`))}for(const d of b.values())if(d!==a)try{const b=await readYaml(d,replaceEnv),c=path.relative(path.dirname(a),path.dirname(d));prefixAllPagesRecursively(b,c),h["__alternative-sidebar__"+d.replace(/[\/\\]/g,"-")]=b}catch(a){console.warn(chalk.yellow(`Can't read sidebar config at ${d}: ${a.message}`))}sideBarTypesCreated||(g(`
      enum MenuStyle {
        drilldown
      }

      # hack, some bug in graphql gatsby
      type SitePageContextData {
        foobar: String
      }

      type NavItem @dontInfer {
        label: String
        sublabel: String
        icon: String
        link: String
        type: String
        httpVerb: String
        expanded: String
        pageId: String
        redocPrevLink: String
        redocPrevLabel: String
        redocNextLink: String
        redocNextLabel: String
        redocFakePage: Boolean
        redocInfoPageId: String
        target: String
        external: Boolean
        items(ignoreRBAC: Boolean): [NavItem!]
        permission: String
        menuStyle: MenuStyle
        selectFirstItemOnExpand: Boolean
        separatorLine: Boolean
        apiVersionId: String
        isDefaultApiVersion: Boolean
        activateWithSidebar: String
      }

      type Sidebar implements Node @infer {
        name: String!
        permission: String
        context: String
        items(ignoreRBAC: Boolean): [NavItem!]!
        pagesIds: [String!]!
      }

      type FooterColumn {
        label: String
        group: String
        permission: String
        items(ignoreRBAC: Boolean): [NavItem!]!
      }

      type FooterConfig {
        copyrightText: String
        links: [NavItem!]
        columns(ignoreRBAC: Boolean): [FooterColumn!]!
      }

      type OASDefinition {
        redocStoreStr: String
        id: String
        absolutePath: String
      }

      type Social {
        twitter: String
      }

      type MulesoftAnypointConfig {
        appClientId: String
        orgId: String
      }

      type LoginSettingsUserAvatar {
        claim: String!
        fallbackLettersClaim: String
      }

      type LoginSettingsUserLabel {
        claim: String!
        fallback: String
      }

      type LoginSettings {
        label: String!
        userAvatar: LoginSettingsUserAvatar
        userLabel: LoginSettingsUserLabel
        menu: [NavItem!]!
      }

      type TocHeading {
        id: String
        depth: Int
        value: String
      }

      type TocInfo {
        enable: Boolean
        maxDepth: Int
        headings: [TocHeading]
      }
      type LogoConfig {
        altText: String
        image: String
        href: String
      }

      type SiteConfig implements Node @dontInfer {
        footer: FooterConfig
        stylesheets: [String!]!
        logo: LogoConfig
        scripts: [String!]!
        nav(ignoreRBAC: Boolean): [NavItem!]!
        login: LoginSettings
        siteVersion: String
        showPrevButton: Boolean!
        showNextButton: Boolean!

        enableToc: Boolean
        tocMaxDepth: Int
        disableLastModified: Boolean
        customLoginPagePath: String

        social: Social

        redoclyOrgId: String
        mulesoftAnypoint: MulesoftAnypointConfig

        withRbac: Boolean
        contentDir: String!
        toc: TocInfo
        seo: ContentItemSeo
      }

      type SiteSiteMetadata @infer {
        image: String!
        title: String!
        description: String!
        keywords: String!
        logoAltText: String
        logoHref: String
        lang: String
      }

      type ContentItem implements Node @infer {
        link: String!
        data: ContentItemData
        seo: ContentItemSeo
        pageId: String!
        markdown: MarkdownRemark @link
      }

      type ContentItemApiVersion {
        definitionId: String!
        id: String
        title: String
        isDefault: Boolean
      }

      type Sitemap {
        changefreq: String
        priority: Float
        lastmod: Date
      }

      type ContentItemSeo implements Node @infer {
        title: String
        description: String
        image: String
        keywords: String
        lang: String
        sitemap: Sitemap
        jsonLd: JSON
      }

      type ContentItemData implements Node @infer {
        settings: JSON
        enableToc: Boolean
        disableLastModified: Boolean
        toc: TocInfo
        tocMaxDepth: Int
        requestLogin: Boolean
        showPrevButton: Boolean
        showNextButton: Boolean
        customDataString: String
        image: String
        keywords: String
        lang: String

        lastModified: String

        apiVersions: [ContentItemApiVersion!]
        isDefaultApiVersion: Boolean
        apiVersionId: String
        redirectFrom: [String!]
        sitemap: Sitemap
      }

      type OASDefinitionVersionInfo {
        definitionId: String!
        isDefault: Boolean
        id: String
        title: String
        link: String
      }

      type OASDefinitionInfo {
        id: String
        definitionId: String!
        link: String
        label: String
        permission: String
        sourcePath: String
        data: JSON
        info: JSON
        definitionProperties: JSON

        versions: [OASDefinitionVersionInfo!]
      }

      type Query {
        oasDefinition(id: String): OASDefinition
        apis(definitionProperties: [String!], ignoreRBAC: Boolean): [OASDefinitionInfo!]!
      }

      type MarkdownRemarkFrontmatter implements Node @infer {
        enableToc: Boolean
        disableLastModified: Boolean
        tocMaxDepth: Int
      }
    `),sideBarTypesCreated=!0),pages.cleanPagesCache(),pages.updatePagesInfoCache({getNodesByType:e});for(const[d,e]of Object.entries(h)){const a=e.context||{},b=Array.isArray(e)?{pages:e}:e,c={...b,...a,permission:e.permission||null,context:JSON.stringify(e.context),id:"Sidebar_"+d,name:d,generationDate:Date.now()};f({...c,internal:{type:"Sidebar",contentDigest:contentDigest(c)}})}}function prefixAllPagesRecursively(a,b){for(const c of Object.keys(a))a[c]&&(Array.isArray(a[c])||"object"==typeof a[c])&&("page"in a[c]&&(a[c].page=slash(path.join(b,a[c].page))),("pages"in a[c]||Array.isArray(a[c]))&&prefixAllPagesRecursively(a[c],b))}exports.createSidebarNodes=createSidebarNodes,exports.createConfigNode=createConfigNode;