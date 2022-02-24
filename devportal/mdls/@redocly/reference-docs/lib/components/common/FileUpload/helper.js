"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.getFileToUpload=exports.getIsBase64=exports.fileToBase64=exports.isRootFileUpload=exports.isMultipartFileUploadProperty=exports.isFileUploadMime=exports.mimeTypeToAccept=void 0;var tslib_1=require("tslib"),models_1=require("../../../models"),FILE_UPLOAD_FORMATS=Object.values(models_1.FileUploadFormats),FILE_UPLOAD_MIME_TYPES=["application/octet-stream","application/pdf","application/gzip","application/zip"],COMMON_FILE_UPLOAD_PREFIXES=["image/","audio/","video/"];function mimeTypeToAccept(e){if(COMMON_FILE_UPLOAD_PREFIXES.some((function(t){return e.startsWith(t)})))return e}function isFileUploadMime(e){return!!FILE_UPLOAD_MIME_TYPES.includes(e)||COMMON_FILE_UPLOAD_PREFIXES.some((function(t){return e.startsWith(t)}))}function isMultipartFileUploadProperty(e){var t="array"===e.type?e.items:e;if(!t||!t.type||"any"===(null==t?void 0:t.type))return!0;var i=t.contentMediaType||"",o=t.format||t.contentEncoding||(isFileUploadMime(i)?"binary":"");return t.type===models_1.DefinitionTypes.STRING&&FILE_UPLOAD_FORMATS.includes(o)}function isRootFileUpload(e,t){if(!e||!e.type||"any"===e.type)return isFileUploadMime(t);var i=e.format||e.contentEncoding||"";return e.type===models_1.DefinitionTypes.STRING&&FILE_UPLOAD_FORMATS.includes(i)}function fileToBase64(e){return new Promise((function(t,i){var o=new FileReader;o.onload=function(){var e=o.result.replace(/data:.*\/.*;base64,/g,"");t(e)},o.onerror=function(){return i(o.error)},o.readAsDataURL(e)}))}function getIsBase64(e){return[e.format,e.contentEncoding,e.contentMediaType].includes(models_1.FileUploadFormats.BASE64)}function getFileToUpload(e,t){return(0,tslib_1.__awaiter)(this,void 0,void 0,(function(){var i,o,r=this;return(0,tslib_1.__generator)(this,(function(s){switch(s.label){case 0:return i=Object.values(e),o=1===i.length?i[0]:i,t.type===models_1.DefinitionTypes.STRING&&getIsBase64(t)?[4,fileToBase64(i[0])]:[3,2];case 1:return o=s.sent(),[3,5];case 2:return t.type===models_1.DefinitionTypes.ARRAY&&t.items?getIsBase64(t.items)?[4,Promise.all(i.map((function(e){return(0,tslib_1.__awaiter)(r,void 0,void 0,(function(){return(0,tslib_1.__generator)(this,(function(t){switch(t.label){case 0:return[4,fileToBase64(e)];case 1:return[2,t.sent()]}}))}))})))]:[3,4]:[3,5];case 3:return o=s.sent(),[3,5];case 4:o=i,s.label=5;case 5:return[2,o]}}))}))}exports.mimeTypeToAccept=mimeTypeToAccept,exports.isFileUploadMime=isFileUploadMime,exports.isMultipartFileUploadProperty=isMultipartFileUploadProperty,exports.isRootFileUpload=isRootFileUpload,exports.fileToBase64=fileToBase64,exports.getIsBase64=getIsBase64,exports.getFileToUpload=getFileToUpload;
//# sourceMappingURL=helper.js.map