"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.dottedString=exports.joinStringFactory=exports.get=exports.getSecurityDetailsOptions=exports.getSecurityDetails=exports.setSecurityDetailsVariants=exports.setSecurityDetails=exports.unescapeFormId=exports.escapeFormId=exports.useDimensions=exports.fromLocalStorage=exports.toLocalStorage=exports.getParameterValue=exports.setParameterValue=exports.fromSessionStorage=exports.toSessionStorage=exports.debounce=exports.setGlobalStore=exports.getGlobalStore=void 0;var _store,tslib_1=require("tslib"),React=(0,tslib_1.__importStar)(require("react")),redoc_lib_1=require("./redoc-lib"),getGlobalStore=function(){return _store};exports.getGlobalStore=getGlobalStore;var setGlobalStore=function(e){return _store=e};function debounce(e,t,o){var r,s=0;return function(){for(var n=[],a=0;a<arguments.length;a++)n[a]=arguments[a];function i(){s>1&&e.apply(void 0,n),s=0,r=null}s++,r?clearTimeout(r):o&&e.apply(void 0,n),r=setTimeout(i,t)}}function toSessionStorage(e,t){window.sessionStorage.setItem("redoc."+e,t)}function fromSessionStorage(e){return redoc_lib_1.IS_BROWSER&&window.sessionStorage.getItem("redoc."+e)||""}function setParameterValue(e,t,o){toSessionStorage(e+"."+t,JSON.stringify(o))}function getParameterValue(e,t){try{return JSON.parse(fromSessionStorage(e+"."+t))}catch(e){return null}}function toLocalStorage(e,t){window.localStorage.setItem("redoc."+e,t)}function fromLocalStorage(e){return redoc_lib_1.IS_BROWSER&&window.localStorage.getItem("redoc."+e)||""}function useDimensions(e){var t=React.useState(null),o=t[0],r=t[1];return React.useLayoutEffect((function(){if(e){var t=function(){return window.requestAnimationFrame((function(){return r(e.getBoundingClientRect())}))};return t(),window.addEventListener("resize",t),function(){window.removeEventListener("resize",t)}}}),[e]),[o]}function escapeFormId(e){return e.replace(/\./g,"%2e")}function unescapeFormId(e){return e.replace(/%2e/g,".")}function setSecurityDetails(e,t){e=escapeFormId(e),"string"==typeof t?toSessionStorage("auth."+e,t):t&&(toSessionStorage("auth."+e+".password",t.password||""),toSessionStorage("auth."+e+".username",t.username||""),toSessionStorage("auth."+e+".token",t.token&&JSON.stringify(t.token)||""),toSessionStorage("auth."+e+".client_id",t.client_id||""),toSessionStorage("auth."+e+".client_secret",t.client_secret||""),toSessionStorage("auth."+e+".scopes",t.scopes&&JSON.stringify(t.scopes)||""))}function setSecurityDetailsVariants(e,t){toSessionStorage("auth."+(e=escapeFormId(e))+".variants",JSON.stringify(t))}function getSecurityDetails(e){var t=fromSessionStorage("auth."+(e=escapeFormId(e))),o=fromSessionStorage("auth."+e+".token");return{raw:t,password:fromSessionStorage("auth."+e+".password"),username:fromSessionStorage("auth."+e+".username"),token:o&&JSON.parse(o)||null,client_id:fromSessionStorage("auth."+e+".client_id"),client_secret:fromSessionStorage("auth."+e+".client_secret"),scopes:fromSessionStorage("auth."+e+".scopes")}}function getSecurityDetailsOptions(e,t){var o=fromSessionStorage("auth."+(e=escapeFormId(e))+".variants");if(!o)return null;var r=JSON.parse(o);return r&&Array.isArray(r)?r.map((function(e){return e.details?""===t&&e.details&&"string"==typeof e.details?{label:e.label,value:e.details}:"object"==typeof e.details?{label:e.label,value:e.details[t]}:null:null})).filter(notNull):null}function notNull(e){return null!==e}function get(e,t,o){return"string"==typeof t&&(t=t.split(".")),t.reduce((function(e,t){return e&&e[t]?e[t]:o}),e)}function joinStringFactory(e){return function(){for(var t=[],o=0;o<arguments.length;o++)t[o]=arguments[o];return t.filter(Boolean).join(e)}}exports.setGlobalStore=setGlobalStore,exports.debounce=debounce,exports.toSessionStorage=toSessionStorage,exports.fromSessionStorage=fromSessionStorage,exports.setParameterValue=setParameterValue,exports.getParameterValue=getParameterValue,exports.toLocalStorage=toLocalStorage,exports.fromLocalStorage=fromLocalStorage,exports.useDimensions=useDimensions,exports.escapeFormId=escapeFormId,exports.unescapeFormId=unescapeFormId,exports.setSecurityDetails=setSecurityDetails,exports.setSecurityDetailsVariants=setSecurityDetailsVariants,exports.getSecurityDetails=getSecurityDetails,exports.getSecurityDetailsOptions=getSecurityDetailsOptions,exports.get=get,exports.joinStringFactory=joinStringFactory,exports.dottedString=joinStringFactory(".");
//# sourceMappingURL=utils.js.map