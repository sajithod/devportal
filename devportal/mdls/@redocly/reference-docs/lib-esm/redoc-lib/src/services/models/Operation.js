import{__assign,__decorate}from"tslib";import{action,makeObservable,observable}from"mobx";import{SecurityRequirementModel}from"./SecurityRequirement";import{extractExtensions,getOperationSummary,getStatusCodeType,isStatusCode,memoize,mergeParams,normalizeServers,sanitizeItemId,sortByField,sortByRequired}from"../../utils";import{CallbackModel}from"./Callback";import{FieldModel}from"./Field";import{RequestBodyModel}from"./RequestBody";import{ResponseModel}from"./Response";import{getCodeSample}from"../../../../services/code-samples/generator";import{getInitialServerWithVariables}from"../../../../components/console/utils";export function isPayloadSample(e){return"payload"===e.lang&&"requestBodyContent"in e}var isCodeSamplesWarningPrinted=!1,OperationModel=function(){function e(e,t,i,r,o){var a,n;void 0===o&&(o=!1),Object.defineProperty(this,"parser",{enumerable:!0,configurable:!0,writable:!0,value:e}),Object.defineProperty(this,"operationDefinition",{enumerable:!0,configurable:!0,writable:!0,value:t}),Object.defineProperty(this,"options",{enumerable:!0,configurable:!0,writable:!0,value:r}),Object.defineProperty(this,"id",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"absoluteIdx",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"description",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"href",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"type",{enumerable:!0,configurable:!0,writable:!0,value:"operation"}),Object.defineProperty(this,"parent",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"externalDocs",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"items",{enumerable:!0,configurable:!0,writable:!0,value:[]}),Object.defineProperty(this,"depth",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"ready",{enumerable:!0,configurable:!0,writable:!0,value:!0}),Object.defineProperty(this,"active",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"expanded",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"activeMimeName",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"activeExampleName",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"activeServer",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"defaultExampleName",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"defaultMimeType",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"pointer",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"operationId",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"httpVerb",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"deprecated",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"path",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"servers",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"security",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"extensions",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"isCallback",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"isWebhook",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"isEvent",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),makeObservable(this),this.pointer=t.pointer,this.description=t.description,this.parent=i,this.externalDocs=t.externalDocs,this.deprecated=!!t.deprecated,this.httpVerb=t.httpVerb,this.deprecated=!!t.deprecated,this.operationId=t.operationId,this.path=t.pathName,this.isCallback=o,this.isWebhook=t.isWebhook,this.isEvent=this.isCallback||this.isWebhook,this.name=getOperationSummary(t),this.defaultExampleName=t.defaultSampleName;var l=null===(n=null===(a=this.requestBody)||void 0===a?void 0:a.content)||void 0===n?void 0:n.mediaTypes,s=(l||[])[0],p=Object.keys((null==s?void 0:s.examples)||[])[0];this.activeExampleName=!1!==t.defaultSampleName&&(t.defaultSampleName||p),this.defaultMimeType=t.defaultMimeType;var u=null==l?void 0:l.find((function(e){return e.name===t.defaultMimeType}));this.activeMimeName=(null==u?void 0:u.name)||(null==s?void 0:s.name),this.isCallback?(this.security=(t.security||[]).map((function(t){return new SecurityRequirementModel(t,e)})),this.servers=normalizeServers("",t.servers||t.pathServers||[])):(this.id=sanitizeItemId(void 0!==t.operationId?"operation/"+t.operationId:void 0!==i?i.id+this.pointer:this.pointer),this.security=(t.security||e.definition.security||[]).map((function(t){return new SecurityRequirementModel(t,e)})),this.servers=normalizeServers(e.definitionUrl,t.servers||t.pathServers||e.definition.servers||[])),r.showExtensions&&(this.extensions=extractExtensions(t,r.showExtensions)),this.activeServer=getInitialServerWithVariables(this.servers)}return Object.defineProperty(e.prototype,"activate",{enumerable:!1,configurable:!0,writable:!0,value:function(){this.active=!0}}),Object.defineProperty(e.prototype,"deactivate",{enumerable:!1,configurable:!0,writable:!0,value:function(){this.active=!1}}),Object.defineProperty(e.prototype,"toggle",{enumerable:!1,configurable:!0,writable:!0,value:function(){this.expanded=!this.expanded}}),Object.defineProperty(e.prototype,"activateMimeName",{enumerable:!1,configurable:!0,writable:!0,value:function(e){this.activeMimeName=e}}),Object.defineProperty(e.prototype,"activateExampleName",{enumerable:!1,configurable:!0,writable:!0,value:function(e){this.activeExampleName=e}}),Object.defineProperty(e.prototype,"expand",{enumerable:!1,configurable:!0,writable:!0,value:function(){this.parent&&this.parent.expand()}}),Object.defineProperty(e.prototype,"collapse",{enumerable:!1,configurable:!0,writable:!0,value:function(){}}),Object.defineProperty(e.prototype,"requestBody",{get:function(){return this.operationDefinition.requestBody&&new RequestBodyModel({parser:this.parser,infoOrRef:this.operationDefinition.requestBody,options:this.options,operation:this,isEvent:this.isEvent})},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"payload",{get:function(){var e,t=null===(e=this.requestBody)||void 0===e?void 0:e.content;return(null==t?void 0:t.hasSample)?{lang:"payload",label:"Payload",source:"",requestBodyContent:t}:void 0},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"hasSamples",{get:function(){var e,t;return(null===(t=null===(e=this.requestBody)||void 0===e?void 0:e.content)||void 0===t?void 0:t.hasSample)||this.definitionSamples.length>0},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"definitionSamples",{get:function(){var e=this.operationDefinition["x-codeSamples"]||this.operationDefinition["x-code-samples"]||[];return this.operationDefinition["x-code-samples"]&&!isCodeSamplesWarningPrinted&&(isCodeSamplesWarningPrinted=!0,console.warn('"x-code-samples" is deprecated. Use "x-codeSamples" instead')),e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"allCodeSamples",{get:function(){var e,t=this.options,i=t.payloadSampleIdx,r=t.hideRequestPayloadSample,o=[];if(!this.isWebhook){var a=this.options.generateCodeSamples||{},n=new Set(this.definitionSamples.map((function(e){return e.lang.toLowerCase()}))),l=(null===(e=a.languages)||void 0===e?void 0:e.filter((function(e){var t=e.lang;return!n.has(t.toLowerCase())})))||[];o=this.generateCodeSamples(l,a)}var s=this.definitionSamples.concat(o),p=Math.min(s.length,i);return this.payload&&!r&&s.splice(p,0,this.payload),s},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"parameters",{get:function(){var e=this,t=mergeParams(this.parser,this.operationDefinition.pathParameters,this.operationDefinition.parameters).map((function(t){return new FieldModel(e.parser,t,e.pointer,e.options,void 0,{operation:e,type:"request"})}));return this.options.sortPropsAlphabetically?sortByField(t,"name"):this.options.requiredPropsFirst?sortByRequired(t):t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"responses",{get:function(){var e=this,t=!1;return Object.keys(this.operationDefinition.responses||[]).filter((function(e){return"default"===e||("success"===getStatusCodeType(e)&&(t=!0),isStatusCode(e))})).map((function(i){return new ResponseModel({parser:e.parser,code:i,defaultAsError:t,infoOrRef:e.operationDefinition.responses[i],options:e.options,isEvent:e.isEvent,operation:e})}))},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"callbacks",{get:function(){var e=this;return Object.keys(this.operationDefinition.callbacks||[]).map((function(t){var i;return new CallbackModel(e.parser,t,null===(i=e.operationDefinition.callbacks)||void 0===i?void 0:i[t],e.pointer,e.options)}))},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"setActiveServer",{enumerable:!1,configurable:!0,writable:!0,value:function(e){this.activeServer=e}}),Object.defineProperty(e.prototype,"generateCodeSamples",{enumerable:!1,configurable:!0,writable:!0,value:function(e,t){var i=this,r=t.skipOptionalParameters,o=t.withOAuth2Call;return e.map((function(e){var t=e.lang,a=e.label,n=e.options;return{lang:t,label:a,get:function(e){return getCodeSample(__assign(__assign({},e),{lang:t,options:__assign(__assign({},n),{skipOptionalParameters:r,withOAuth2Call:o,spec:i.parser.definition,generatedPayloadSamplesMaxDepth:i.options.generatedPayloadSamplesMaxDepth})}))}}}))}}),__decorate([observable],e.prototype,"ready",void 0),__decorate([observable],e.prototype,"active",void 0),__decorate([observable],e.prototype,"expanded",void 0),__decorate([observable],e.prototype,"activeMimeName",void 0),__decorate([observable],e.prototype,"activeExampleName",void 0),__decorate([observable.ref],e.prototype,"activeServer",void 0),__decorate([action],e.prototype,"activate",null),__decorate([action],e.prototype,"deactivate",null),__decorate([action],e.prototype,"toggle",null),__decorate([action],e.prototype,"activateMimeName",null),__decorate([action],e.prototype,"activateExampleName",null),__decorate([memoize],e.prototype,"requestBody",null),__decorate([memoize],e.prototype,"payload",null),__decorate([memoize],e.prototype,"hasSamples",null),__decorate([memoize],e.prototype,"definitionSamples",null),__decorate([memoize],e.prototype,"allCodeSamples",null),__decorate([memoize],e.prototype,"parameters",null),__decorate([memoize],e.prototype,"responses",null),__decorate([memoize],e.prototype,"callbacks",null),__decorate([action],e.prototype,"setActiveServer",null),e}();export{OperationModel};
//# sourceMappingURL=Operation.js.map