"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.ResponseModel=void 0;var tslib_1=require("tslib"),mobx_1=require("mobx"),utils_1=require("../../utils"),Field_1=require("./Field"),MediaContent_1=require("./MediaContent"),ResponseModel=function(){function e(e){var t=this;Object.defineProperty(this,"expanded",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"content",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"code",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"summary",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"description",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"type",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"headers",{enumerable:!0,configurable:!0,writable:!0,value:[]});var i=e.parser,r=e.code,o=e.defaultAsError,n=e.infoOrRef,a=e.options,s=e.isEvent,l=e.operation,d=!!s;(0,mobx_1.makeObservable)(this),this.expanded="all"===a.expandResponses||a.expandResponses[r];var p=i.deref(n);i.exitRef(n),this.code=r;var b=(0,utils_1.getContentWithLegacyExamples)(p);void 0!==b&&(this.content=new MediaContent_1.MediaContentModel(i,b,d,a,{operation:l,type:"response",response:this})),void 0!==p["x-summary"]?(this.summary=p["x-summary"],this.description=p.description||""):(this.summary=p.description||"",this.description=""),this.type=(0,utils_1.getStatusCodeType)(r,o);var u=p.headers;void 0!==u&&(this.headers=Object.keys(u).map((function(e){var r=u[e];return new Field_1.FieldModel(i,(0,tslib_1.__assign)((0,tslib_1.__assign)({},r),{name:e}),"",a,void 0,{operation:l,type:"response",response:t})})))}return Object.defineProperty(e.prototype,"toggle",{enumerable:!1,configurable:!0,writable:!0,value:function(){this.expanded=!this.expanded}}),Object.defineProperty(e.prototype,"expand",{enumerable:!1,configurable:!0,writable:!0,value:function(){this.expanded=!0}}),(0,tslib_1.__decorate)([mobx_1.observable],e.prototype,"expanded",void 0),(0,tslib_1.__decorate)([mobx_1.action],e.prototype,"toggle",null),(0,tslib_1.__decorate)([mobx_1.action],e.prototype,"expand",null),e}();exports.ResponseModel=ResponseModel;
//# sourceMappingURL=Response.js.map