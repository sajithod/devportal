"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.history=exports.HistoryService=void 0;var tslib_1=require("tslib"),decko_1=require("decko"),eventemitter3_1=(0,tslib_1.__importDefault)(require("eventemitter3")),utils_1=require("../utils/"),EVENT="hashchange",HistoryService=function(){function e(){var e=this;Object.defineProperty(this,"_emiter",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"basePath",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"emit",{enumerable:!0,configurable:!0,writable:!0,value:function(){e._emiter.emit(EVENT,e.currentId)}}),this._emiter=new eventemitter3_1.default,this.bind()}return Object.defineProperty(e.prototype,"currentId",{get:function(){return utils_1.IS_BROWSER?decodeURIComponent(window.location.hash.substring(1)):""},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"linkForId",{enumerable:!1,configurable:!0,writable:!0,value:function(e){return e?"#"+e:""}}),Object.defineProperty(e.prototype,"generateDeepLink",{enumerable:!1,configurable:!0,writable:!0,value:function(e,t){return""}}),Object.defineProperty(e.prototype,"subscribe",{enumerable:!1,configurable:!0,writable:!0,value:function(e){var t=this._emiter.addListener(EVENT,e);return function(){return t.removeListener(EVENT,e)}}}),Object.defineProperty(e.prototype,"bind",{enumerable:!1,configurable:!0,writable:!0,value:function(){utils_1.IS_BROWSER&&window.addEventListener("hashchange",this.emit,!1)}}),Object.defineProperty(e.prototype,"dispose",{enumerable:!1,configurable:!0,writable:!0,value:function(){utils_1.IS_BROWSER&&window.removeEventListener("hashchange",this.emit)}}),Object.defineProperty(e.prototype,"replace",{enumerable:!1,configurable:!0,writable:!0,value:function(e,t){void 0===t&&(t=!1),utils_1.IS_BROWSER&&null!=e&&e!==this.currentId&&(t?window.history.replaceState(null,"",window.location.href.split("#")[0]+this.linkForId(e)):(window.history.pushState(null,"",window.location.href.split("#")[0]+this.linkForId(e)),this.emit()))}}),Object.defineProperty(e.prototype,"replaceForField",{enumerable:!1,configurable:!0,writable:!0,value:function(e,t){void 0===t&&(t=!1)}}),(0,tslib_1.__decorate)([decko_1.bind,decko_1.debounce],e.prototype,"replace",null),(0,tslib_1.__decorate)([decko_1.bind,decko_1.debounce],e.prototype,"replaceForField",null),e}();exports.HistoryService=HistoryService,exports.history=new HistoryService,module.hot&&module.hot.dispose((function(){exports.history.dispose()}));
//# sourceMappingURL=HistoryService.js.map