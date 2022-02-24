"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.isEmptyObject=exports.arrayMerge=exports.unescapeServerVariables=exports.normalizeMimeType=exports.isSameMime=exports.normalizePath=void 0;var tslib_1=require("tslib"),deepmerge_1=(0,tslib_1.__importDefault)(require("deepmerge"));function normalizePath(e){return e.startsWith("/")||(e="/"+e),e.endsWith("/")&&(e=e.slice(0,-1)),e}function isSameMime(e,r){return!(!e||!r)&&normalizeMimeType(e)===normalizeMimeType(r)}function normalizeMimeType(e){if(e)return e.split(";")[0].toLowerCase()}function unescapeServerVariables(e){var r=new RegExp("%7B","g"),t=new RegExp("%7D","g");return e.replace(r,"{").replace(t,"}").replace("///","//")}function arrayMerge(e,r){if(e.length){var t=e.map((function(e,t){return(0,deepmerge_1.default)(e,r[t]||{})}));return r.length>e.length?t.concat(r.slice(e.length)):t}return r}function isEmptyObject(e){return!!e&&0===Object.keys(e).length}exports.normalizePath=normalizePath,exports.isSameMime=isSameMime,exports.normalizeMimeType=normalizeMimeType,exports.unescapeServerVariables=unescapeServerVariables,exports.arrayMerge=arrayMerge,exports.isEmptyObject=isEmptyObject;
//# sourceMappingURL=utils.js.map