"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.FakeHistoryService=void 0;var tslib_1=require("tslib"),decko_1=require("decko"),eventemitter3_1=(0,tslib_1.__importDefault)(require("eventemitter3")),EVENT="itemchange",FakeHistoryService=function(){function e(e){var t=this;Object.defineProperty(this,"options",{enumerable:!0,configurable:!0,writable:!0,value:e}),Object.defineProperty(this,"_emitter",{enumerable:!0,configurable:!0,writable:!0,value:new eventemitter3_1.default}),Object.defineProperty(this,"basePath",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"currentId",{enumerable:!0,configurable:!0,writable:!0,value:""}),Object.defineProperty(this,"emit",{enumerable:!0,configurable:!0,writable:!0,value:function(){t._emitter.emit(EVENT,t.currentId)}}),this.bind()}return Object.defineProperty(e.prototype,"linkForId",{enumerable:!1,configurable:!0,writable:!0,value:function(e){return this.options.linkForId?this.options.linkForId(e):""}}),Object.defineProperty(e.prototype,"generateDeepLink",{enumerable:!1,configurable:!0,writable:!0,value:function(e,t){return e&&this.options.generateDeepLink?this.options.generateDeepLink(e,t):null}}),Object.defineProperty(e.prototype,"subscribe",{enumerable:!1,configurable:!0,writable:!0,value:function(e){var t=this._emitter.addListener(EVENT,e);return function(){return t.removeListener(EVENT,e)}}}),Object.defineProperty(e.prototype,"bind",{enumerable:!1,configurable:!0,writable:!0,value:function(){}}),Object.defineProperty(e.prototype,"dispose",{enumerable:!1,configurable:!0,writable:!0,value:function(){}}),Object.defineProperty(e.prototype,"replace",{enumerable:!1,configurable:!0,writable:!0,value:function(e,t){void 0===t&&(t=!1)}}),Object.defineProperty(e.prototype,"replaceForField",{enumerable:!1,configurable:!0,writable:!0,value:function(e,t){void 0===t&&(t=!1),this.currentId=(e||"").replace(/^#/,""),this.emit()}}),Object.defineProperty(e.prototype,"replaceNow",{enumerable:!1,configurable:!0,writable:!0,value:function(e,t){void 0===t&&(t=!1)}}),Object.defineProperty(e.prototype,"replaceDebounced",{enumerable:!1,configurable:!0,writable:!0,value:function(e){}}),(0,tslib_1.__decorate)([decko_1.bind],e.prototype,"replace",null),(0,tslib_1.__decorate)([decko_1.bind],e.prototype,"replaceForField",null),(0,tslib_1.__decorate)([decko_1.bind,decko_1.debounce],e.prototype,"replaceDebounced",null),e}();exports.FakeHistoryService=FakeHistoryService;
//# sourceMappingURL=FakeHistoryService.js.map