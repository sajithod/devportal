import{resolve as urlResolve}from"url";import{isFormUrlEncoded,isJsonLike,urlFormEncodePayload}from"../../utils";var externalExamplesCache={},ExampleModel=function(){function e(e,r,l,t){Object.defineProperty(this,"mime",{enumerable:!0,configurable:!0,writable:!0,value:l}),Object.defineProperty(this,"value",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"summary",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"description",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"externalValueUrl",{enumerable:!0,configurable:!0,writable:!0,value:void 0});var a=e.deref(r);this.value=a.value,this.summary=a.summary,this.description=a.description,a.externalValue&&(this.externalValueUrl=urlResolve(e.definitionUrl||"",a.externalValue)),e.exitRef(r),isFormUrlEncoded(l)&&this.value&&"object"==typeof this.value&&(this.value=urlFormEncodePayload(this.value,t))}return Object.defineProperty(e.prototype,"getExternalValue",{enumerable:!1,configurable:!0,writable:!0,value:function(e){return this.externalValueUrl?(this.externalValueUrl in externalExamplesCache||(externalExamplesCache[this.externalValueUrl]=fetch(this.externalValueUrl).then((function(r){return r.text().then((function(l){if(!r.ok)return Promise.reject(new Error(l));if(!isJsonLike(e))return l;try{return JSON.parse(l)}catch(e){return l}}))}))),externalExamplesCache[this.externalValueUrl]):Promise.resolve(void 0)}}),e}();export{ExampleModel};
//# sourceMappingURL=Example.js.map