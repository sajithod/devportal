"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.JsonPointer=void 0;var tslib_1=require("tslib"),json_pointer_1=(0,tslib_1.__importDefault)(require("json-pointer")),origParse=json_pointer_1.default.parse,JsonPointer=function(){function e(){}return Object.defineProperty(e,"baseName",{enumerable:!1,configurable:!0,writable:!0,value:function(r,n){void 0===r&&(r=""),void 0===n&&(n=1);var t=e.parse(r);return t[t.length-n]}}),Object.defineProperty(e,"dirName",{enumerable:!1,configurable:!0,writable:!0,value:function(r,n){void 0===n&&(n=1);var t=e.parse(r);return json_pointer_1.default.compile(t.slice(0,t.length-n))}}),Object.defineProperty(e,"relative",{enumerable:!1,configurable:!0,writable:!0,value:function(r,n){var t=e.parse(r);return e.parse(n).slice(t.length)}}),Object.defineProperty(e,"parse",{enumerable:!1,configurable:!0,writable:!0,value:function(e){void 0===e&&(e="");var r=e;return"#"===r.charAt(0)&&(r=r.substring(1)),origParse(r)}}),Object.defineProperty(e,"join",{enumerable:!1,configurable:!0,writable:!0,value:function(r,n){var t=e.parse(r).concat(n);return json_pointer_1.default.compile(t)}}),Object.defineProperty(e,"get",{enumerable:!1,configurable:!0,writable:!0,value:function(e,r){return json_pointer_1.default.get(e,r)}}),Object.defineProperty(e,"compile",{enumerable:!1,configurable:!0,writable:!0,value:function(e){return json_pointer_1.default.compile(e)}}),Object.defineProperty(e,"escape",{enumerable:!1,configurable:!0,writable:!0,value:function(e){return json_pointer_1.default.escape(e)}}),e}();exports.JsonPointer=JsonPointer,json_pointer_1.default.parse=JsonPointer.parse,Object.assign(JsonPointer,json_pointer_1.default),exports.default=JsonPointer;
//# sourceMappingURL=JsonPointer.js.map