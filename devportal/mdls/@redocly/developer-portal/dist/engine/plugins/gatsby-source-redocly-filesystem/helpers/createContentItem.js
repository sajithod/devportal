const path=require("path"),{slash}=require("gatsby-core-utils"),{replaceEnvDeep}=require("../../../utils/utils"),RBAC=require("../rbac"),{PAGE_TYPES}=require("../../../constants"),{createPath,contentDigest,normalizeGatsbyPage}=require("../utils");exports.createContentItem=(a,b={},c,d="",e)=>{b=replaceEnvDeep(b);let f={};b.seo&&(f=b.seo,delete b.seo),b.label=b.label||f.title||"",b.redocStoreStr=b.redocStoreStr||"",b.redocItemId=b.redocItemId||"",b.redocMenuItems=b.redocMenuItems||[],b.redocInfoPageId=b.redocInfoPageId||"",b.redocInfoPageLink=b.redocInfoPageLink||"",b.redocHasInfoPage=!!b.redocHasInfoPage,b.redocHasSecurityDefinitions=!!b.redocHasSecurityDefinitions,b.redocPagination=b.redocPagination||"",b.httpVerb=b.httpVerb||null,b.requestLogin=b.requestLogin||!1,b.showNextButton=b.showNextButton;const g=b.permission||RBAC.GUEST_PERMISSION;b.customTemplate=b.customTemplate||"",b.customDataString=b.customData?JSON.stringify(b.customData):"",b.matchPath=b.matchPath||"",b.excludeFromSearch=!!b.excludeFromSearch,b.sourcePath=c&&c.absolutePath,b.hasOwnProperty("enableToc")&&(e.warn(`
      "enableToc" property is deprecated, please change it to
      toc: {
        enable: Boolean
      }
      (path: ${b.sourcePath}) 
    `),b.toc.enable=b.enableToc),b.tocMaxDepth&&(e.warn(`
      "tocMaxDepth" property is deprecated, please change it to 
      toc: {
        maxDepth: Integer
      }
      (path: ${b.sourcePath}) 
    `),b.toc.maxDepth=b.tocMaxDepth);let h,i,j;if(c){const a=b.isDefaultApiVersion?"":null==b.apiVersionId?"":"@"+b.apiVersionId;j=b.path?slash(normalizeGatsbyPage(b.path)):slash(createPath(c.relativePath)),h=slash(path.join(j,null==b.apiVersionId?"":"/"+b.apiVersionId,d)),i=slash(c.relativePath+(d?"#"+d:"")+a),h.endsWith("/index")&&(h=h.substring(0,h.length-6),""===h&&(h="/")),h=h.endsWith("/")?h:h+"/"}else h=b.path,i="custom-page_"+h;return h&&(h=h.replace(/\+/g,"_")),{id:(c&&c.id||"custom_page")+d+"__redocly content"+(b.redirect?" redirect":"")+h,pageId:i,link:h,baseLink:j,type:a,data:b,seo:f,permission:g,sourcePath:c&&c.absolutePath,parent:c&&c.id||null,internal:{type:"ContentItem",owner:"",contentDigest:contentDigest({type:a,data:b,suffix:d})},children:[]}};