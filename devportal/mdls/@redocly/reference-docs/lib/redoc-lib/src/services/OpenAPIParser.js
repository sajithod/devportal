"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.OpenAPIParser=void 0;var tslib_1=require("tslib"),url_1=require("url"),utils_1=require("../utils/"),JsonPointer_1=require("../utils/JsonPointer"),utils_2=require("../utils"),MarkdownRenderer_1=require("./MarkdownRenderer"),RedocNormalizedOptions_1=require("./RedocNormalizedOptions"),RefCounter=function(){function e(){Object.defineProperty(this,"_counter",{enumerable:!0,configurable:!0,writable:!0,value:{}})}return Object.defineProperty(e.prototype,"reset",{enumerable:!1,configurable:!0,writable:!0,value:function(){this._counter={}}}),Object.defineProperty(e.prototype,"visit",{enumerable:!1,configurable:!0,writable:!0,value:function(e){this._counter[e]=this._counter[e]?this._counter[e]+1:1}}),Object.defineProperty(e.prototype,"exit",{enumerable:!1,configurable:!0,writable:!0,value:function(e){this._counter[e]=this._counter[e]&&this._counter[e]-1}}),Object.defineProperty(e.prototype,"visited",{enumerable:!1,configurable:!0,writable:!0,value:function(e){return!!this._counter[e]}}),e}(),OpenAPIParser=function(){function e(e,r,t){var i=this;void 0===t&&(t=new RedocNormalizedOptions_1.RedocNormalizedOptions({})),Object.defineProperty(this,"options",{enumerable:!0,configurable:!0,writable:!0,value:t}),Object.defineProperty(this,"definitionUrl",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"definition",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"hasSecurityDefinitions",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"_refCounter",{enumerable:!0,configurable:!0,writable:!0,value:new RefCounter}),Object.defineProperty(this,"allowMergeRefs",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"byRef",{enumerable:!0,configurable:!0,writable:!0,value:function(e){var r;if(i.definition){"#"!==e.charAt(0)&&(e="#"+e),e=decodeURIComponent(e);try{r=JsonPointer_1.JsonPointer.get(i.definition,e)}catch(e){}return r||{}}}}),this.validate(e),this.preprocess(e),this.definition=e,this.hasSecurityDefinitions=this.containsSecurity(e),this.allowMergeRefs=e.openapi.startsWith("3.1");var n=utils_1.IS_BROWSER?window.location.href:"";"string"==typeof r&&(this.definitionUrl=(0,url_1.resolve)(n,r))}return Object.defineProperty(e.prototype,"validate",{enumerable:!1,configurable:!0,writable:!0,value:function(e){if(void 0===e.openapi)throw new Error("Document must be valid OpenAPI 3.0.0 definition")}}),Object.defineProperty(e.prototype,"containsSecurity",{enumerable:!1,configurable:!0,writable:!0,value:function(e){var r=e.info&&e.info.description||"";return MarkdownRenderer_1.MarkdownRenderer.containsComponent(r,utils_2.SECURITY_DEFINITIONS_COMPONENT_NAME)||MarkdownRenderer_1.MarkdownRenderer.containsComponent(r,utils_2.SECURITY_DEFINITIONS_JSX_NAME)}}),Object.defineProperty(e.prototype,"preprocess",{enumerable:!1,configurable:!0,writable:!0,value:function(e){if(e.info&&this.options.hideInfoDescription)e.info.description="";else if(!this.options.noAutoAuth&&e.info&&e.components&&e.components.securitySchemes){var r=e.info.description||"";if(!this.containsSecurity(e)){var t=(0,MarkdownRenderer_1.buildComponentComment)(utils_2.SECURITY_DEFINITIONS_COMPONENT_NAME);e.info.description=(0,utils_1.appendToMdHeading)(r,"Authentication",t)}}}}),Object.defineProperty(e.prototype,"isRef",{enumerable:!1,configurable:!0,writable:!0,value:function(e){return!!e&&(void 0!==(e=e).$ref&&null!==e.$ref)}}),Object.defineProperty(e.prototype,"resetVisited",{enumerable:!1,configurable:!0,writable:!0,value:function(){if("production"!==process.env.NODE_ENV)for(var e in this._refCounter._counter)this._refCounter._counter[e]>0&&console.warn("Not exited reference: "+e);this._refCounter=new RefCounter}}),Object.defineProperty(e.prototype,"exitRef",{enumerable:!1,configurable:!0,writable:!0,value:function(e){this.isRef(e)&&this._refCounter.exit(e.$ref)}}),Object.defineProperty(e.prototype,"deref",{enumerable:!1,configurable:!0,writable:!0,value:function(e,r,t){if(void 0===r&&(r=!1),void 0===t&&(t=!1),this.isRef(e)){var i=(0,utils_2.getDefinitionName)(e.$ref);if(i&&this.options.ignoreNamedSchemas.has(i))return{type:"object",title:i};var n=this.byRef(e.$ref),o=this._refCounter.visited(e.$ref);if(this._refCounter.visit(e.$ref),o&&!r)return Object.assign({},n,{"x-circular-ref":!0});var s=n;return this.isRef(n)&&(s=this.deref(n,!1,t),this.exitRef(n)),this.allowMergeRefs?this.mergeRefs(e,n,t):s}return e}}),Object.defineProperty(e.prototype,"mergeRefs",{enumerable:!1,configurable:!0,writable:!0,value:function(e,r,t){e.$ref;var i=(0,tslib_1.__rest)(e,["$ref"]),n=Object.keys(i);return 0===n.length?r:t&&n.some((function(e){return"description"!==e&&"title"!==e&&"externalDocs"!==e}))?{allOf:[i,r]}:(0,tslib_1.__assign)((0,tslib_1.__assign)({},r),i)}}),Object.defineProperty(e.prototype,"shallowDeref",{enumerable:!1,configurable:!0,writable:!0,value:function(e){if(this.isRef(e)){var r=(0,utils_2.getDefinitionName)(e.$ref);if(r&&this.options.ignoreNamedSchemas.has(r))return{type:"object",title:r};var t=this.byRef(e.$ref);return this.allowMergeRefs?this.mergeRefs(e,t,!1):t}return e}}),Object.defineProperty(e.prototype,"mergeAllOf",{enumerable:!1,configurable:!0,writable:!0,value:function(e,r,t,i){var n,o=this;if(void 0===t&&(t=!1),void 0===i&&(i=new Set),r&&i.add(r),void 0===(e=this.hoistOneOfs(e)).allOf)return e;var s=(0,tslib_1.__assign)((0,tslib_1.__assign)({},e),{allOf:void 0,parentRefs:[],title:e.title||(0,utils_2.getDefinitionName)(r)});void 0!==s.properties&&"object"==typeof s.properties&&(s.properties=(0,tslib_1.__assign)({},s.properties)),void 0!==s.items&&"object"==typeof s.items&&(s.items=(0,tslib_1.__assign)({},s.items));for(var a=e.allOf.map((function(e){var r;if(!(e&&e.$ref&&i.has(e.$ref))){var n=o.deref(e,t,!0),a=e.$ref||void 0,l=o.mergeAllOf(n,a,t,i);return null===(r=s.parentRefs)||void 0===r||r.push.apply(r,l.parentRefs||[]),{$ref:a,schema:l}}})).filter((function(e){return void 0!==e})),l=0,f=a;l<f.length;l++){var u=f[l],p=u.$ref,c=u.schema;if(s.type!==c.type&&void 0!==s.type&&void 0!==c.type&&console.warn('Incompatible types in allOf at "'+r+'": "'+s.type+'" and "'+c.type+'"'),void 0!==c.type&&(s.type=c.type),void 0!==c.properties)for(var d in s.properties=s.properties||{},c.properties)if(s.properties[d]){var b=this.mergeAllOf({allOf:[s.properties[d],c.properties[d]]},r+"/properties/"+d);s.properties[d]=b,this.exitParents(b)}else s.properties[d]=c.properties[d];void 0!==c.items&&(s.items=s.items||{},s.items=this.mergeAllOf({allOf:[s.items,c.items]},r+"/items",!1,i)),void 0!==c.required&&(s.required=(s.required||[]).concat(c.required)),s=(0,tslib_1.__assign)((0,tslib_1.__assign)({},c),s),p&&(null===(n=s.parentRefs)||void 0===n||n.push(p),void 0===s.title&&(0,utils_2.isNamedDefinition)(p))}return s}}),Object.defineProperty(e.prototype,"findDerived",{enumerable:!1,configurable:!0,writable:!0,value:function(e){var r={},t=this.definition.components&&this.definition.components.schemas||{};for(var i in t){var n=this.deref(t[i]);void 0!==n.allOf&&n.allOf.find((function(r){return void 0!==r.$ref&&e.indexOf(r.$ref)>-1}))&&(r["#/components/schemas/"+i]=[n["x-discriminator-value"]||i])}return r}}),Object.defineProperty(e.prototype,"exitParents",{enumerable:!1,configurable:!0,writable:!0,value:function(e){for(var r=0,t=e.parentRefs||[];r<t.length;r++){var i=t[r];this.exitRef({$ref:i})}}}),Object.defineProperty(e.prototype,"hoistOneOfs",{enumerable:!1,configurable:!0,writable:!0,value:function(e){var r=this;if(void 0===e.allOf)return e;for(var t=e.allOf,i=function(e){var i=t[e];if(Array.isArray(i.oneOf)){var n=t.slice(0,e),o=t.slice(e+1);return{value:{oneOf:i.oneOf.map((function(e){var t=r.mergeAllOf({allOf:(0,tslib_1.__spreadArray)((0,tslib_1.__spreadArray)((0,tslib_1.__spreadArray)([],n,!0),[e],!1),o,!0)});return r.exitParents(t),t}))}}}},n=0;n<t.length;n++){var o=i(n);if("object"==typeof o)return o.value}return e}}),e}();exports.OpenAPIParser=OpenAPIParser;
//# sourceMappingURL=OpenAPIParser.js.map