const path=require("path"),fs=require("fs-extra"),{writeFileSync}=require("fs"),chalk=require("chalk"),grayMatter=require("gray-matter"),isRelativeUrl=require(`is-relative-url`),{slash}=require("gatsby-core-utils"),{parseYaml}=require("@redocly/openapi-core"),chokidar=require(`chokidar`),{sanitizeDefinitionId}=require("../../utils/utils"),{monkeyPatchReporter}=require("../../../cli/reporter"),RBAC=require("./rbac"),{getClientRoutes,saveClientSideRoutesInBuild}=require("./client-only-routes"),{onCreateWebpackConfig}=require("./webpack/config"),{createResolvers}=require("./resolvers"),{createContentItem}=require("./helpers/createContentItem"),{remapMetaToSeoData}=require("./helpers/remapMetaToSeoData"),{REDOCLY_CONFIG_DIR}=require("../../../engine/constants"),{isYamlBasedPage,isAllowedMdxFile,isAllowedDataFile,CONFIG_FILE_NAME,SIDEBARS_FILE_NAME,readYaml,normalizeGatsbyPage,isAllowedFileName,extractTocHeadings,extractFirstMdHeading}=require("./utils"),{getOrCreateRedocStoreById:getRedocStoreById,definitionFileToId,updateSpecCacheByIdAndPath}=require("./oas/cache"),{updatePagesInfo,updatePagesInfoCache,sidebarsFiles}=require("./pages/cache"),{createConfigNode,createSidebarNodes}=require("./config-nodes"),{REDOC_OVERVIEW_ITEM_ID,PAGE_TYPES}=require("../../constants"),{getLastModifiedForFile,getLastModifiedForFileNode}=require("./utils"),{createMDXNode}=require("./webpack/mdx/ast"),{definitionsWatcher}=require("./watcher");exports.onCreateWebpackConfig=onCreateWebpackConfig,exports.createResolvers=createResolvers;let RBACConfig=RBAC.RBACConfig,configWatcher=null;exports.onCreateNode=async(a,{getSiteConfig:b,configPath:c})=>{async function d(a){const b=l(a.parent),{relativePath:d}=b,e=remapMetaToSeoData(a.frontmatter,d);if(e&&!0===e.exclude)return;const f=RBAC.getDirectoryPermission(c,path.dirname(path.resolve(c,d))),g=e&&e.permission?e.permission:void 0,h={...e.seo,title:e.seo.title||extractFirstMdHeading(a.rawMarkdownBody)},i=createContentItem(PAGE_TYPES.markdown,{...e,lastModified:await getLastModifiedForFileNode(b,c),permission:g||f||r,customData:a.frontmatter,toc:{...e.toc},seo:h},b,"",m);return i.markdown=a.id,await q(i),o(i),n({node:a,name:"contentId",value:i.id}),void p({parent:b,child:i})}function e(a,b){if(!a)return a;const c=a.split("/");return"item"===b&&"operation"===c[2]?a.split("/").slice(2).join("/"):a}async function f(d,f,h){const i=h.definitionId,j=s[i],k=h.id;if(!j)return void m.panicOnBuild(`Invalid definitionId "${i}" at ${t}`);const l=isRelativeUrl(j),n=l?path.resolve(c,j):j,u=f.settings&&f.settings.pagination||"item";if(!["item","section","none"].includes(u))throw new Error(`Wrong pagination value "${u}": should be "item" or "section" or "none"`);const{redocStoreStr:v,redocStore:w}=await getRedocStoreById(i,n,{...a,getSiteConfig:b,configPath:c},{...(f.settings||{}),pagination:u});if(!w)return void m.panicOnBuild(`Failed to load definition "${i}" at ${t}`);const x=RBAC.getDirectoryPermission(c,path.dirname(path.resolve(c,d.relativePath))),y=f.permission||x||r;f={...f,apiVersionId:1<f.apiVersions.length?k:void 0,isDefaultApiVersion:h.isDefault,redocStoreStr:v,permission:y,lastModified:l?await getLastModifiedForFile(n,c):await getLastModifiedForFileNode(d,c)};const z=w.menu.flatItems,A=[],B=f.settings||{};let C;const D=!B.hideInfoDescription||!B.hideInfoSection||"none"===u,E=!B.hideInfoSection;if(D){const a=f.label||w.definition.info&&w.definition.info.title||"Overview",b=f.title||a;if(C=createContentItem(PAGE_TYPES.referenceDocsOverview,{...f,seo:{title:b},label:a,redocItemId:REDOC_OVERVIEW_ITEM_ID,redocHasInfoPage:E,redocHasSecurityDefinitions:w.definition.parser.hasSecurityDefinitions,redocPagination:u},d,REDOC_OVERVIEW_ITEM_ID,m),"none"===u){const a=new RegExp(`\\/${REDOC_OVERVIEW_ITEM_ID}\\/?`);C.link=C.link.replace(a,"/")}f.path?C.link=slash(normalizeGatsbyPage(f.path)):"index.page.yaml"===d.relativePath&&(C.link="/"),A.push(C),await q(C)}if("none"!==u)for(let a of z){if(a.operationDefinition&&a.operationDefinition["x-private"])continue;if("group"===a.type||"section"===a.type)continue;if("tag"===a.type&&!a.description&&"item"===u)continue;if("operation"===a.type&&"section"===u)continue;const b="operation"===a.type?a.operationDefinition["x-meta"]||{}:{},c=remapMetaToSeoData(b,d.relativePath),g={label:a.name,customData:b,httpVerb:a.isWebhook?"hook":a.httpVerb,redocItemId:a.id,redocInfoPageLink:C&&C.link,redocHasSecurityDefinitions:w.definition.parser.hasSecurityDefinitions,redocPagination:u},h={...c.seo,title:c.seo.title||a.name,description:c.seo.description||a.description},i=createContentItem(PAGE_TYPES.referenceDocsPage,{...f,...g,...c,seo:h},d,e(a.id,u),m);A.push(i)}f.path?A[0].link=slash(normalizeGatsbyPage(f.path)):"index.page.yaml"===d.relativePath&&(A[0].link="/");for(let a=0;a<A.length;a++){const b=A[a].data;b.redocPrevLink=A[a-1]&&A[a-1].link,b.redocPrevLabel=A[a-1]&&A[a-1].data.label,b.redocNextLink=A[a+1]&&A[a+1].link,b.redocNextLabel=A[a+1]&&A[a+1].data.label,o(A[a]),await q(A[a]),p({parent:d,child:A[a]})}const F=h.isDefault?"":null==h.id?"":"@"+h.id,G=d.relativePath+F,H=g(w.menu.items,A,{pagination:u,parentPageId:A[0].pageId,redocInfoPageLink:A[0].link,apiVersionId:h.id,isDefaultApiVersion:h.isDefault,permission:y}),I=createContentItem(PAGE_TYPES.referenceDocsContainerPage,{redirect:!0,...f,label:f.nav_label||C&&C.seo.title||w.definition.info.title,redocMenuItems:H,redocInfoPageId:E?C&&C.pageId:void 0,redocPagination:u,seo:{title:C&&C.data.title||w.definition.info.title}},d,e(A[0].data.redocItemId,u),m);return I.pageId=G,I.link=A[0].link,o(I),await q(I),void p({parent:d,child:I})}function g(a,b,c){const{pagination:d,parentPageId:e,redocInfoPageLink:f}=c;return a.flatMap(a=>{const h=a.id;if("group"===a.type)return[{separator:a.name,...c,parentPageId:void 0},...(a.items&&a.items.length?g(a.items,b,c):void 0)];if("section"===a.type){const d=b.find(a=>a.data.redocItemId===h);return{label:a.name,link:f+"#"+h,redocFakePage:!(d&&d.pageId),pages:a.items&&a.items.length?g(a.items,b,c):void 0,parentPageId:e,...c}}if("tag"===a.type){const i=b.find(a=>a.data.redocItemId===h);return{label:a.name,page:i&&i.pageId,link:i||"item"===d&&!a.description?void 0:f+"#"+a.id,pages:a.items&&a.items.length?g(a.items,b,{...c,parentPageId:i&&i.pageId||e,redocInfoPageLink:i&&i.link||f}):void 0,parentPageId:e,redocFakePage:!(i&&i.pageId),...c}}if("operation"===a.type){const d=b.find(a=>a.data.redocItemId===h);return{label:a.name,httpVerb:a.isWebhook?"hook":a.httpVerb,page:d&&d.pageId,redocFakePage:!(d&&d.pageId),link:d?void 0:f+"#"+h,parentPageId:e,...c}}return{label:a.name}})}async function h(b){const d=fs.readFileSync(b.absolutePath).toString(),{data:e,content:f}=grayMatter(d),g=remapMetaToSeoData(e,b.relativePath);if(g&&!0===g.exclude)return;const h=createMDXNode({node:b,content:f}),i=await extractTocHeadings({...a,mdxNode:h}),j=RBAC.getDirectoryPermission(c,path.dirname(path.resolve(c,b.relativePath))),k=g&&g.permission?g.permission:void 0,l={...{title:g.title||i[0]&&i[0].value},...g.seo},n=createContentItem(PAGE_TYPES.mdx,{...g,seo:l,permission:k||j||r,customData:e,toc:{...(g.toc&&g.toc),headings:i},lastModified:await getLastModifiedForFileNode(b,c)},b,"",m);return await q(n),o(n),void p({parent:b,child:n})}async function i(a){const{onDataFile:b}=getCustomCreators({configPath:c,reporter:m});if(!b)return;const d=RBAC.getDirectoryPermission(c,path.dirname(path.resolve(c,a.absolutePath)));b(a,{reporter:m,createTemplatePage:async({meta:b,data:e,template:f,path:g})=>{const h=createContentItem(PAGE_TYPES.dataTemplate,{...remapMetaToSeoData(b),customTemplate:path.resolve(path.join(c,EXTENSIONS_FOLDER),f),customData:e,path:g,permission:d||r},a,"",m);await q(h),o(h),p({parent:a,child:h})}})}const{node:j,actions:k,getNode:l,reporter:m}=a,{createNodeField:n,createNode:o,createParentChildLink:p}=k,q=async d=>updatePagesInfo(d,a,{getSiteConfig:b,configPath:c}),{defaultRbacPermission:r,oasDefinitions:s}=b(),t=chalk.blue(j.relativePath);switch(j.internal.type){case"MarkdownRemark":const a=l(j.parent||"");if(!a||!isAllowedFileName(a.relativePath))return!1;await d(j);break;case"File":if(!isAllowedFileName(j.absolutePath))return!1;if(isYamlBasedPage(j.absolutePath)){let a=await readYaml(j.absolutePath);if("redoc"===a.type&&m.warn(`type: "redoc" is deprecated, update it to type: "reference-docs" at ${chalk.blue(j.relativePath)}`),"redoc"!==a.type&&"reference-docs"!==a.type)return void m.panicOnBuild(`Unknown page "type" for ${t}: "${a.type}. You should specify\n`+chalk.blue(`  type: reference-docs`));const b=a.definitionId,c=a.versions;if(!b&&!c)return void m.panicOnBuild(`You must specify "definitionId" or "versions" when using type: "${a.type}" at ${t}`);if(b&&c)return void m.panicOnBuild(`"definitionId" and "versions" are mutually exclusive at ${t}`);if(c&&!Array.isArray(c))return void m.panicOnBuild(`"versions" must be an array at ${t}`);const d=b?[{definitionId:b,isDefault:!0,title:b,id:b}]:c.filter(a=>!!a.definitionId||(m.panicOnBuild(`"definitionId" is not specified for every version at ${t}`),!1)).map(a=>({id:a.id||a.definitionId,title:a.title||a.id||a.definitionId,...a}));d.some(a=>a.isDefault)||(d[0].isDefault=!0);for(const b of d)await f(j,{...a,version:void 0,apiVersions:d},b)}isAllowedMdxFile(j.absolutePath)&&(await h(j)),isAllowedDataFile(j.absolutePath)&&(await i(j));}};const EXTENSIONS_FOLDER="_extensions";function getCustomCreators({configPath:a,reporter:b}){if(fs.existsSync(path.join(a,EXTENSIONS_FOLDER,"custom-pages.js"))){const c=require(path.join(a,EXTENSIONS_FOLDER,"custom-pages.js")),d="function"==typeof c.onDataFile?c.onDataFile:null,e="function"==typeof c.createPages?c.createPages:null;return d||e||b.panicOnBuild("Creator function must export \"onDataFile\" or \"createPages\" function"),{onDataFile:d,createPages:e,configFile:path.join(a,EXTENSIONS_FOLDER,"custom-pages.js")}}return{onDataFile:null,createPages:null,configFile:null}}exports.onPostBootstrap=({getNodesByType:a})=>{updatePagesInfoCache({getNodesByType:a})},exports.createPages=({getNodesByType:a})=>{updatePagesInfoCache({getNodesByType:a})};let configNodesReadyPromise;exports.sourceNodes=async(a,b)=>{async function c(){return await createConfigNode(j,h),await createSidebarNodes(k,sidebarsFiles,a),!0}monkeyPatchReporter(a.reporter);const{configPath:d,getSiteConfig:e}=b,{reporter:f,actions:{createNode:g}}=a,h={...a,...b};let i=!1;const j=path.join(d,CONFIG_FILE_NAME),k=path.join(d,SIDEBARS_FILE_NAME);configWatcher=configWatcher||chokidar.watch([j,k,path.join(d,`**/${SIDEBARS_FILE_NAME}`)],{ignored:a=>a.includes("node_modules")||a.includes(".git")}),configNodesReadyPromise=new Promise(a=>{configWatcher.on("ready",async()=>{i=!0,await c(),a()})}),configWatcher.on("add",b=>{b.endsWith(SIDEBARS_FILE_NAME)&&(sidebarsFiles.add(b),f.info(`Detected new sidebars.yaml at ${chalk.blue(path.relative(d,b))}`),i&&createSidebarNodes(k,sidebarsFiles,a))}),configWatcher.on("unlink",b=>{b.endsWith(SIDEBARS_FILE_NAME)&&(sidebarsFiles.delete(b),i&&(f.info(`Removed sidebars.yaml at ${chalk.blue(path.relative(d,b))}`),createSidebarNodes(k,sidebarsFiles,a)))}),await configNodesReadyPromise,configWatcher.on(`change`,b=>b===j?void createConfigNode(j,h):b.endsWith(SIDEBARS_FILE_NAME)?(sidebarsFiles.add(b),void(i&&(f.info(`Updated sidebars.yaml at ${chalk.blue(path.relative(d,b))}`),createSidebarNodes(k,sidebarsFiles,a)))):void 0),definitionsWatcher.on(`change`,a=>{let b=definitionFileToId[a];b||(a=Object.keys(definitionFileToId).find(b=>a.startsWith(b))||"",b=definitionFileToId[a]),b&&updateSpecCacheByIdAndPath(b,a,h)});const l=async b=>updatePagesInfo(b,a,{getSiteConfig:e,configPath:d}),{createPages:m,configFile:n}=getCustomCreators({configPath:d,reporter:f});m&&(await m({reporter:f,createTemplatePage:async({meta:a,data:b,template:c,path:e})=>{e||f.panicOnBuild(`path argument is required in "createTemplatePage" at "${n}"`);const h=createContentItem(PAGE_TYPES.dataTemplate,{...remapMetaToSeoData(a),customTemplate:path.resolve(path.join(d,EXTENSIONS_FOLDER),c),customData:b,path:e},void 0,"",f);await l(h),g(h)}}))},exports.onCreateBabelConfig=({actions:a})=>{a.setBabelPlugin({name:`@babel/plugin-proposal-object-rest-spread`}),a.setBabelPlugin({name:`babel-plugin-react-html-attrs`}),a.setBabelPreset({name:`@babel/preset-react`,options:{throwIfNamespace:!1}}),a.setBabelPreset({name:`babel-preset-gatsby`,options:{targets:{browsers:[">0.25%","not dead"]}}})};let patchFs;try{patchFs=require("gatsby/node_modules/fs-extra")}catch(a){patchFs=require("fs-extra")}const origReadFile=patchFs.readFile;patchFs.readFile=async function(a,...b){if(a.endsWith(".mdx")){const c=await origReadFile(a,...b);return c+"\n\n<!-- graphql -->"}return origReadFile(a,...b)};function extractDefinitionIds(a){if(1===a.indexOf("definitionId"))return[];const b=/<\w[a-z0-9_]*[\s\n][^>]*?definitionId\s*=\s*(?:"([^"\n]*)"|{[\s\n]*"([^"\n]*)"[\s\n]*})/gim;let c,d=[];for(;null!==(c=b.exec(a));)d.push(c[1]||c[2]);return b.lastIndex===-Infinity&&console.log("Workaround to prevent regex inlining by babel-minify"),d}exports.onPostBuild=async({reporter:a,graphql:b},{publicDir:c,getSiteConfig:d,configPath:e})=>{const f=d(),g=path.join(e,RBAC.ROLES_FILE_NAME),h=fs.existsSync(g);if(f.auth||h){const d={auth:f.auth};let i;if(h){const a=parseYaml(fs.readFileSync(g,{encoding:"utf-8"})),d=await RBAC.queryData(b),h=d.sidebars.nodes.reduce((a,b)=>(a[b.name]=b,a),{}),{footer:j,nav:k}=d.siteConfig,l=d.pages.nodes,m=a&&a.defaultPermission?a.defaultPermission:f.defaultRbacPermission,n=RBAC.getDirectoriesPermissions(e,path.join(e,"static"),m),o={};for(const{link:a,permission:b}of l)o[`${a.slice(1)}index.html`]=b,o[`page-data${a}page-data.json`]=b;i={rbac:a,nav:k,footer:j,sidebars:h,apis:d.apis&&d.apis.map(a=>({...a,data:{...a.data,redocStoreStr:void 0}})),pages:{...n,...RBACConfig,...o}},RBAC.copyClaimsPreprocessor({config:f,configPath:e,publicDir:c})}const j=path.join(c,RBAC.AUTH_CONFIG_FILENAME);RBAC.saveSettings(j,{...d,...i},a),a.info(`Saved ${j}`),writeFileSync(path.join(__dirname,"../../.cache","rbacConfig.json"),JSON.stringify(RBACConfig))}const i=await getClientRoutes(b,a);a.info(`Client-only routes: ${JSON.stringify(i)}`);const j=path.join(c,path.join(REDOCLY_CONFIG_DIR,"client-only-routes.json"));await saveClientSideRoutesInBuild(j,i,a)},exports.preprocessSource=async function({filename:a,contents:b}){const c=path.extname(a),d=extractDefinitionIds(b),e=d.length&&d.map(a=>`__oasDef_${sanitizeDefinitionId(a)}:  oasDefinition(id: "${a}") { redocStoreStr }`).join("\n")||"";if(".mdx"===c){let a=b.match(/export (?:const|let) [a-zA-Z0-9_]+\s+=\s+graphql`((?:.|\r?\n)+?)`/);return a&&a[1]?`import { graphql } from 'gatsby';\nexport const pageQuery = graphql\`${a[1]}\`;`:`import {graphql} from 'gatsby';
export const pageQuery = graphql\`
  query ($pageId: String!) {
    contentItem(pageId: { eq: $pageId }) {
      data {
        disableLastModified
        enableToc
        tocMaxDepth
        requestLogin
        lastModified
      }
    }
    siteConfig {
      enableToc
      disableLastModified
      tocMaxDepth
    }
    ${e}
  }
\`;`}return null};