"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.RequestBodyModel=void 0;var MediaContent_1=require("./MediaContent"),utils_1=require("../../utils"),RequestBodyModel=function(e){Object.defineProperty(this,"description",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"required",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"content",{enumerable:!0,configurable:!0,writable:!0,value:void 0});var t=e.parser,i=e.infoOrRef,r=e.options,o=e.isEvent,n=e.operation,d=!o,s=t.deref(i);this.description=s.description||"",this.required=!!s.required,t.exitRef(i);var u=(0,utils_1.getContentWithLegacyExamples)(s);void 0!==u&&(this.content=new MediaContent_1.MediaContentModel(t,u,d,r,{operation:n,type:"request"}))};exports.RequestBodyModel=RequestBodyModel;
//# sourceMappingURL=RequestBody.js.map