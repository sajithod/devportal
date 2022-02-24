"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.info=void 0;var tslib_1=require("tslib"),stringify_object_1=(0,tslib_1.__importDefault)(require("stringify-object")),code_builder_1=require("../../helpers/code-builder"),code_helpers_1=require("../../helpers/code-helpers"),constants_1=require("../../helpers/constants"),utils_1=require("../../../../utils"),__1=require("../.."),handler=function(e,t,a){var r,i,n,s,o,l=a.target,d=a.client,p=Object.assign({indent:"  ",showBoilerplate:!0,level:1},t),h=p.level,c=!1,u=new code_builder_1.CodeBuilder({indentation:p.indent,variablesPrefix:p.variablesPrefix,capitalize:!0,lang:constants_1.Lang.NODEJS});p.withComments&&addComments(u),p.withImports&&(u.push("import fetch from 'node-fetch';"),u.blank()),p.showBoilerplate&&u.push("async function run() {");var m={method:e.method.toUpperCase()};Object.keys(e.headersObj).length&&(m.headers=e.headersObj);var f=!1;if(null===(r=e.securityOAuth2ExtraCalls)||void 0===r?void 0:r.length){var _=new __1.HTTPSnippet(null===(i=e.securityOAuth2ExtraCalls)||void 0===i?void 0:i[0]).convert(l,d,(0,tslib_1.__assign)((0,tslib_1.__assign)({},p),{withImports:!1,withComments:!1,variablesPrefix:"oAuth2",showBoilerplate:!1,level:1}));u.push(_),u.blank(),m.headers=m.headers||{},m.headers.Authorization="'Bearer ' + oAuth2Data.access_token",f=!0}var b=Object.getOwnPropertyNames(e.queryObj).length;if(b&&u.push(h,"const "+u.var("query")+" = new URLSearchParams("+(0,code_helpers_1.addIndentation)((0,stringify_object_1.default)(e.queryObj,{indent:p.indent,inlineCharacterLimit:25}),{level:h,indent:p.indent,firstLine:!1})+").toString();").blank(),e.postData)switch((0,utils_1.normalizeMimeType)(e.postData.mimeType)){case"application/x-www-form-urlencoded":m.body=e.postData.paramsObj?"new URLSearchParams("+u.var("formData")+").toString()":e.postData.text,e.postData.paramsObj&&u.push(h,"const "+u.var("formData")+" = "+(0,code_helpers_1.addIndentation)((0,stringify_object_1.default)(e.postData.paramsObj,{indent:p.indent,inlineCharacterLimit:25}),{level:h,firstLine:!1})+";").blank();break;case"application/json":e.postData.jsonObj&&(m.body="JSON.stringify("+(0,code_helpers_1.addIndentation)((0,stringify_object_1.default)(e.postData.jsonObj,{indent:p.indent,inlineCharacterLimit:25}),{level:h,firstLine:!1})+")");break;case"multipart/form-data":(null===(n=null==m?void 0:m.headers)||void 0===n?void 0:n["Content-Type"])&&(null===(s=m.headers)||void 0===s||delete s["Content-Type"]),p.withImports&&u.unshift("import FormData from 'form-data';"),u.push(h,"const "+u.var("form")+" = new FormData();"),e.postData.params.forEach((function(e){e.fileName||e.fileName||e.contentType?e.fileName&&(c=!0,u.blank(),u.push(h,u.var("form")+".append('\" + param.name + \"', fs.createReadStream('\" + param.fileName + \"'));")):u.push(h,"form.append('"+e.name+"','"+e.value+"');")})),m.body=u.var("form"),u.blank();break;default:e.postData.text&&(m.body="`"+(0,code_helpers_1.addIndentation)(e.postData.text,{level:h+1,indent:p.indent,firstLine:!1}).trim()+"`")}if(e.cookies.length){var v="";e.cookies.forEach((function(e){v=v+encodeURIComponent(e.name)+"="+encodeURIComponent(e.value)+"; "})),v=v.trim(),m.headers||(m.headers={}),m.headers.cookie=v}if(e.basicAuth){var y=e.basicAuth,j=y.username,w=y.password;m.headers=m.headers||{},m.headers.Authorization="'Basic ' + Buffer.from('"+j+":"+w+"').toString('base64')",f=!0}c&&p.withImports&&u.unshift("import fs from 'fs';");var g=m.headers&&m.headers.Accept&&"application/json"===(0,utils_1.normalizeMimeType)(m.headers.Accept)||"application/json"===(0,utils_1.normalizeMimeType)(null===(o=e.postData)||void 0===o?void 0:o.mimeType);(0,code_helpers_1.printUrlVariablesDeclarations)(e,u,h);var k=(0,code_helpers_1.buildUrlExpression)(e,u);return u.push(h,"const "+u.var("resp")+" = await fetch(").push(h+1,"`"+k+(b?"?${"+u.var("query")+"}":"")+"`,").push(h+1,(0,code_helpers_1.addIndentation)((0,stringify_object_1.default)(m,{indent:p.indent,inlineCharacterLimit:25,transform:(0,code_helpers_1.getPreserveTransformer)({body:!0,authorizationHeader:f})}),{level:h+1,indent:p.indent,firstLine:!1})).push(h,");").blank().push(h,"const "+u.var("data")+" = await "+u.var("resp")+"."+(g?"json()":"text()")+";").push(h,"console.log("+u.var("data")+");"),p.showBoilerplate&&u.push("}").blank().push("run();"),u.join().replace(/"fs\.createReadStream\(\\"(.+)\\"\)"/,'fs.createReadStream("$1")')};function addComments(e){e.push("/**"),e.push(" * Requires Node.js >= 14"),e.push(" *"),e.push(' * Requires module "node-fetch" >= 2.6.1'),e.push(" * See here for installation details:"),e.push(" *   https://www.npmjs.com/package/node-fetch"),e.push(" */"),e.blank()}exports.info={key:"fetch",title:"Fetch",link:"https://github.com/bitinn/node-fetch",description:"Simplified HTTP node-fetch client"},exports.default=handler;
//# sourceMappingURL=fetch.js.map