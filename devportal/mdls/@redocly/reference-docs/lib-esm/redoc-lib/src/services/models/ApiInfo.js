import{IS_BROWSER}from"../../utils/";var ApiInfoModel=function(){function e(e){Object.defineProperty(this,"parser",{enumerable:!0,configurable:!0,writable:!0,value:e}),Object.defineProperty(this,"title",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"version",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"description",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"summary",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"termsOfService",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"contact",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"license",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"downloadFileName",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.assign(this,e.definition.info),this.description=e.definition.info.description||"",this.summary=e.definition.info.summary||"";var i=this.description.search(/^##?\s+/m);i>-1&&(this.description=this.description.substring(0,i)),this.downloadFileName=this.getDownloadFileName()}return Object.defineProperty(e.prototype,"downloadLink",{get:function(){if(this.parser.definitionUrl)return this.parser.definitionUrl;if(IS_BROWSER&&window.Blob&&window.URL&&window.URL.createObjectURL){var e=new Blob([JSON.stringify(this.parser.definition,null,2)],{type:"application/json"});return window.URL.createObjectURL(e)}},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"getDownloadFileName",{enumerable:!1,configurable:!0,writable:!0,value:function(){if(!this.parser.definitionUrl)return"swagger.json"}}),e}();export{ApiInfoModel};
//# sourceMappingURL=ApiInfo.js.map