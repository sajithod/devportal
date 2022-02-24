"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.info=void 0;var tslib_1=require("tslib"),util_1=require("util"),code_builder_1=require("../../helpers/code-builder"),shell_1=(0,tslib_1.__importDefault)(require("../../helpers/shell")),code_helpers_1=require("../../helpers/code-helpers"),utils_1=require("../../../../utils"),__1=require("../.."),handler=function(e,t,s){var a,r,i=s.target,l=s.client,o=Object.assign({indent:"  ",short:!1,binary:!1},t),n=new code_builder_1.CodeBuilder({indentation:o.indent,lineJoin:o.indent?" \\\n"+o.indent:" "}),u=(null===(a=e.securityOAuth2ExtraCalls)||void 0===a?void 0:a.length)?new __1.HTTPSnippet(null===(r=e.securityOAuth2ExtraCalls)||void 0===r?void 0:r[0]).convert(i,l,(0,tslib_1.__assign)((0,tslib_1.__assign)({},o),{withComments:!1})):"";n.push(0,"curl -i %s %s",o.short?"-X":"--request",e.method.toUpperCase()),e.basicAuth&&n.push((0,util_1.format)("-u %s:%s",e.basicAuth.username,e.basicAuth.password));var d=(0,code_helpers_1.buildUrlExpression)(e,n);if(n.push((0,util_1.format)("%s%s",o.short?"":"--url ",shell_1.default.quote(d))),"HTTP/1.0"===e.httpVersion&&n.push(o.short?"-0":"--http1.0"),Object.keys(e.headersObj).sort().forEach((function(t){var s=(0,util_1.format)("%s: %s",t,e.headersObj[t]);n.push("%s %s",o.short?"-H":"--header",shell_1.default.quote(s))})),e.allHeaders.cookie&&n.push("%s %s",o.short?"-b":"--cookie",shell_1.default.quote(e.allHeaders.cookie)),e.postData)switch((0,utils_1.normalizeMimeType)(e.postData.mimeType)){case"multipart/form-data":e.postData.params.map((function(e){var t;t=e.fileName?(0,util_1.format)("%s=@%s",e.name,e.fileName):(0,util_1.format)("%s=%s",e.name,e.value),n.push("%s %s",o.short?"-F":"--form",shell_1.default.quote(t))}));break;case"application/x-www-form-urlencoded":e.postData.params?e.postData.params.map((function(e){n.push("%s %s",o.binary?"--data-binary":o.short?"-d":"--data",shell_1.default.quote((0,util_1.format)("%s=%s",e.name,e.value)))})):n.push("%s %s",o.binary?"--data-binary":o.short?"-d":"--data",shell_1.default.quote(e.postData.text));break;case"application/json":e.postData.jsonObj&&n.push("%s %s",o.binary?"--data-binary":o.short?"-d":"--data",(0,code_helpers_1.addIndentation)(shell_1.default.quote(JSON.stringify(e.postData.jsonObj,null,o.indent)),{level:1,indent:o.indent,firstLine:!1}));break;default:e.postData.text&&n.push("%s %s",o.binary?"--data-binary":o.short?"-d":"--data",(0,code_helpers_1.addIndentation)(shell_1.default.quote(e.postData.text),{level:1,indent:o.indent,firstLine:!1}))}return(o.withComments?"# Requires curl >= 7.2\n\n":"")+(u?u+"\n\n"+n.join():n.join())};exports.info={key:"curl",title:"curl",link:"http://curl.haxx.se/",description:"cURL is a command line tool and library for transferring data with URL syntax"},exports.default=handler;
//# sourceMappingURL=curl.js.map