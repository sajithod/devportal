"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.CallbackModel=void 0;var tslib_1=require("tslib"),mobx_1=require("mobx"),utils_1=require("../../utils"),Operation_1=require("./Operation"),CallbackModel=function(){function e(e,t,r,a,i){Object.defineProperty(this,"expanded",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"operations",{enumerable:!0,configurable:!0,writable:!0,value:[]}),(0,mobx_1.makeObservable)(this),this.name=t;var o=e.deref(r);e.exitRef(r);for(var l=0,n=Object.keys(o);l<n.length;l++)for(var s=n[l],b=o[s],p=0,u=Object.keys(b).filter(utils_1.isOperationName);p<u.length;p++){var d=u[p],_=b[d],c=new Operation_1.OperationModel(e,(0,tslib_1.__assign)((0,tslib_1.__assign)({},_),{pathName:s,pointer:utils_1.JsonPointer.compile([a,t,s,d]),httpVerb:d,pathParameters:b.parameters||[],pathServers:b.servers}),void 0,i,!0);this.operations.push(c)}}return Object.defineProperty(e.prototype,"toggle",{enumerable:!1,configurable:!0,writable:!0,value:function(){this.expanded=!this.expanded}}),(0,tslib_1.__decorate)([mobx_1.observable],e.prototype,"expanded",void 0),(0,tslib_1.__decorate)([mobx_1.action],e.prototype,"toggle",null),e}();exports.CallbackModel=CallbackModel;
//# sourceMappingURL=Callback.js.map