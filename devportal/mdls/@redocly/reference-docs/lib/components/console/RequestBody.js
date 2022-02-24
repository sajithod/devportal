"use strict";var _this=this;Object.defineProperty(exports,"__esModule",{value:!0}),exports.RequestBody=void 0;var tslib_1=require("tslib"),React=(0,tslib_1.__importStar)(require("react")),react_1=require("react"),mobx_react_1=require("mobx-react"),deepmerge_1=(0,tslib_1.__importDefault)(require("deepmerge")),redoc_lib_1=require("../../redoc-lib"),CodemirrorInput_1=(0,tslib_1.__importDefault)(require("./CodemirrorInput")),RequestMimeLabel_1=require("./RequestMimeLabel"),Samples_1=require("../Samples"),utils_1=require("../../services/utils"),RequestBodyForm_1=require("./RequestBodyForm"),helper_1=require("../common/FileUpload/helper"),models_1=require("../../models");exports.RequestBody=(0,mobx_react_1.observer)((function(e){var r,t,o=e.properties,i=void 0===o?{}:o,a=(0,tslib_1.__rest)(e,["properties"]),l=function(e){var r,t=a.body.content;if(!t||!t.hasSample)return"";var o=null===(r=t.active)||void 0===r?void 0:r.examples;if(!(null==o?void 0:o[e]))return"";var l=(0,deepmerge_1.default)(null==o?void 0:o[e].value,i,{arrayMerge:utils_1.arrayMerge});return JSON.stringify(l,null,2)},n=null===(t=null===(r=a.body.content)||void 0===r?void 0:r.operation)||void 0===t?void 0:t.activeExampleName,u=function(e){var r,t;null===(t=null===(r=a.body.content)||void 0===r?void 0:r.operation)||void 0===t||t.activateExampleName(e),a.console.formApi.setValue("body",l(e))},d=function(e){if(!e)return"";if("application/x-www-form-urlencoded"===e.mime)return e.value;var r=(0,deepmerge_1.default)(e.value,i,{arrayMerge:utils_1.arrayMerge});return JSON.stringify(r,null,2)},s=function(e,r){return(0,tslib_1.__awaiter)(void 0,void 0,void 0,(function(){var t;return(0,tslib_1.__generator)(this,(function(o){return t=a.console.formApi,(0,t.setValue)("body."+e,r),[2]}))}))};(0,react_1.useEffect)((function(){!1!==n?n&&a.console.formApi.setValue("body",l(n)):a.console.formApi.setValue("body",JSON.stringify(i,null,2))}),[n]);var m=a.validate,c=a.body;return React.createElement(React.Fragment,null,React.createElement(redoc_lib_1.MediaTypesSwitch,{content:c.content,renderDropdown:function(e){return React.createElement(redoc_lib_1.DropdownOrLabel,(0,tslib_1.__assign)({},e,{variant:"dark",fullWidth:!0,Label:RequestMimeLabel_1.RequestMimeLabel,Dropdown:redoc_lib_1.Dropdown}))}},(function(e){var r,t=e.examples||{},o=Object.keys(t),i=e.schema,l=(0,helper_1.isRootFileUpload)(i||{},e.name)||e.name===models_1.MediaTypes.MULTIPART||e.name===models_1.MediaTypes.URL_ENCODED,n=(0,Samples_1.useExampleKey)(e.operation,t).exampleKey,c=t[n];return React.createElement(React.Fragment,null,o.length&&1!==o.length&&React.createElement(Samples_1.ExampleSwitch,{examples:t,onChange:u,exampleKey:n})||null,l?React.createElement(RequestBodyForm_1.RequestBodyForm,{mediaType:e,onChange:s.bind(_this)}):React.createElement(CodemirrorInput_1.default,{id:"body"+a.id,field:"body",initialValue:d(c),schema:((null===(r=null==a?void 0:a.resolvedBody)||void 0===r?void 0:r.content[e.name])||{}).schema,mode:e.name,validate:m}))})))}));
//# sourceMappingURL=RequestBody.js.map