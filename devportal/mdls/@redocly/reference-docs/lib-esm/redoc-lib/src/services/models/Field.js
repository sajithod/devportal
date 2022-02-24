import{__assign,__decorate}from"tslib";import{action,observable,makeObservable}from"mobx";import{extractExtensions}from"../../utils";import{SchemaModel}from"./Schema";import{ExampleModel}from"./Example";import{mapValues}from"../../utils";var DEFAULT_SERIALIZATION={path:{style:"simple",explode:!1},query:{style:"form",explode:!0},header:{style:"simple",explode:!1},cookie:{style:"form",explode:!0}},FieldModel=function(){function e(e,i,t,l,a,r){var o,n,d,s,p;void 0===r&&(r={}),Object.defineProperty(this,"deps",{enumerable:!0,configurable:!0,writable:!0,value:r}),Object.defineProperty(this,"expanded",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"schema",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"required",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"description",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"example",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"examples",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"deprecated",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"in",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"kind",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"extensions",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"explode",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"style",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"const",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"serializationMime",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"fieldFullPath",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),makeObservable(this);var b=e.deref(i);this.kind=i.kind||"field",this.name=i.name||b.name,this.in=b.in,this.required=!!b.required;var c=b.schema,u="";!c&&b.in&&b.content&&(u=Object.keys(b.content)[0],c=b.content[u]&&b.content[u].schema),this.fieldFullPath=this.deps.parentFieldFullPath?this.deps.parentFieldFullPath+l.deepLinkSeparator+this.name:this.name,this.schema=new SchemaModel(e,c||{},t,l,!1,a,__assign(__assign({},r),{parentFieldFullPath:this.fieldFullPath,in:this.in})),this.description=void 0===b.description?this.schema.description||"":b.description,this.example=b.example||this.schema.example,void 0!==b.examples&&(this.examples=mapValues(b.examples,(function(i,t){return new ExampleModel(e,i,t,b.encoding)}))),u?this.serializationMime=u:b.style?this.style=b.style:this.in&&(this.style=null!==(n=null===(o=DEFAULT_SERIALIZATION[this.in])||void 0===o?void 0:o.style)&&void 0!==n?n:"form"),void 0===b.explode&&this.in?this.explode=null===(s=null===(d=DEFAULT_SERIALIZATION[this.in])||void 0===d?void 0:d.explode)||void 0===s||s:this.explode=!!b.explode,this.deprecated=void 0===b.deprecated?this.schema.deprecated:b.deprecated,e.exitRef(i),l.showExtensions&&(this.extensions=extractExtensions(b,l.showExtensions)),this.const=(null===(p=this.schema)||void 0===p?void 0:p.const)||(null==b?void 0:b.const)||""}return Object.defineProperty(e.prototype,"toggle",{enumerable:!1,configurable:!0,writable:!0,value:function(){this.expanded=!this.expanded}}),Object.defineProperty(e.prototype,"collapse",{enumerable:!1,configurable:!0,writable:!0,value:function(){this.expanded=!1}}),Object.defineProperty(e.prototype,"expand",{enumerable:!1,configurable:!0,writable:!0,value:function(){this.expanded=!0}}),__decorate([observable],e.prototype,"expanded",void 0),__decorate([action],e.prototype,"toggle",null),__decorate([action],e.prototype,"collapse",null),__decorate([action],e.prototype,"expand",null),e}();export{FieldModel};
//# sourceMappingURL=Field.js.map