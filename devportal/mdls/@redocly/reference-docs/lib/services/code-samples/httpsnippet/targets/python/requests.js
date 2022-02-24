"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var tslib_1=require("tslib"),util_1=require("util"),code_builder_1=require("../../helpers/code-builder"),utils_1=require("../../../../utils"),code_helpers_1=require("../../helpers/code-helpers"),__1=require("../.."),constants_1=require("../../helpers/constants"),handler=function(e,t,a){var s,r,o,n=a.target,i=a.client,l=Object.assign({indent:"  "},t),u=new code_builder_1.CodeBuilder({indentation:l.indent,variablesPrefix:l.variablesPrefix,lang:constants_1.Lang.PYTHON});l.withComments&&addComments(u),l.withImports&&u.push("import requests").blank();var p,d,h=!1,_=e.allHeaders;if(null===(s=e.securityOAuth2ExtraCalls)||void 0===s?void 0:s.length){var c=new __1.HTTPSnippet(null===(r=e.securityOAuth2ExtraCalls)||void 0===r?void 0:r[0]).convert(n,i,(0,tslib_1.__assign)((0,tslib_1.__assign)({},l),{withImports:!1,withComments:!1,variablesPrefix:"oauth2_"}));u.push(c),u.blank(),(_=_||{}).Authorization='"Bearer " + oauth2_data["access_token"]',h=!0}((0,code_helpers_1.printUrlVariablesDeclarations)(e,u),u.push(u.var("url").toLowerCase()+" = %s",(0,code_helpers_1.buildUrlExpression)(e,u)).blank(),Object.keys(e.queryObj||{}).length)&&(p="query = "+jsObjectToPythonDict(e.queryObj,l.indent),u.push(p).blank());var b,v=(0,utils_1.normalizeMimeType)(null===(o=e.postData)||void 0===o?void 0:o.mimeType);if(e.postData)switch(v){case"application/x-www-form-urlencoded":d=e.postData.paramsObj?""+(0,code_helpers_1.addIndentation)(jsObjectToPythonDict(e.postData.paramsObj,l.indent),{level:0,firstLine:!1}):e.postData.text;break;case"application/json":e.postData.jsonObj&&(d=(0,code_helpers_1.addIndentation)(jsObjectToPythonDict(e.postData.jsonObj,l.indent),{level:0,firstLine:!1}));break;case"multipart/form-data":u.unshift("# multipart/form-data is not supported yet\n");break;default:e.postData.text&&(console.log(e.postData.text),d="'''\n"+(0,code_helpers_1.addIndentation)(e.postData.text.trim(),{level:1,indent:l.indent,firstLine:!0})+"\n'''")}d&&u.push(u.var("payload").toLowerCase()+" = %s",d).blank();var f=Object.keys(_).length,m=function(e,t){return"Authorization"===e&&h?t:'"'+t+'"'};if(1===f)for(b in _)u.push(u.var("headers").toLowerCase()+' = {"'+b+'": '+m(b,_[b])+"}").blank();else if(f>1){var j=1;for(b in u.push(u.var("headers").toLowerCase()+" = {"),_)j++!==f?u.push(1,'"'+b+'": '+m(b,_[b])+","):u.push(1,'"'+b+'": '+m(b,_[b]));u.push(0,"}").blank()}var w=e.method.toLowerCase(),C=(0,util_1.format)(u.var("response").toLowerCase()+" = requests."+w+"("+u.var("url").toLowerCase());d&&(C+=", "+("application/json"===v?"json":"data")+"="+u.var("payload").toLowerCase());return f>0&&(C+=", headers="+u.var("headers").toLowerCase()),p&&(C+=", params="+u.var("query").toLowerCase()),e.basicAuth&&(C+=", auth=('"+e.basicAuth.username+"','"+e.basicAuth.password+"')"),C+=")",u.push(C).blank().push(u.var("data").toLowerCase()+" = "+u.var("response").toLowerCase()+".json()").push("print("+u.var("data").toLowerCase()+")"),u.join()};function addComments(e){e.push('"""'),e.push("Requires python >= 3"),e.blank(),e.push('Requires module "requests" >= 2.25.1'),e.push("See here for installation details:"),e.push("  https://requests.readthedocs.io/"),e.push('"""'),e.blank()}function jsObjectToPythonDict(e,t){return JSON.stringify(e,(function(e,t){return e&&"boolean"==typeof t?t?"__REDOCLY_<True>__":"__REDOCLY_<False>__":null===t?"__REDOCLY_<None>__":t}),t).replace(/"__REDOCLY_<(\w+)>__"/g,"$1")}exports.default=handler;
//# sourceMappingURL=requests.js.map