"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.SamplesWrapper=exports.CallbackSamples=void 0;var templateObject_1,tslib_1=require("tslib"),mobx_react_1=require("mobx-react"),React=(0,tslib_1.__importStar)(require("react")),Panel_1=require("../../../../components/Panel"),shared_1=require("../../../../components/shared"),styled_components_1=(0,tslib_1.__importStar)(require("../../styled-components")),OptionsProvider_1=require("../OptionsProvider"),GenericChildrenSwitcher_1=require("../GenericChildrenSwitcher/GenericChildrenSwitcher"),DropdownOrLabel_1=require("../DropdownOrLabel/DropdownOrLabel"),CallbackReqSamples_1=require("./CallbackReqSamples"),dropdown_1=require("../../../src/common-elements/dropdown"),__1=require("../../.."),CallbackSamples=function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return Object.defineProperty(r,"renderDropdown",{enumerable:!0,configurable:!0,writable:!0,value:function(e){return React.createElement(__1.DropdownWrapper,null,React.createElement(DropdownOrLabel_1.DropdownOrLabel,(0,tslib_1.__assign)({Label:shared_1.MimeLabel,Dropdown:dropdown_1.Dropdown,fullWidth:!0,variant:"dark"},e)))}}),r}return(0,tslib_1.__extends)(r,e),Object.defineProperty(r.prototype,"render",{enumerable:!1,configurable:!0,writable:!0,value:function(){var e=this,r=this.props.callbacks;if(!r||0===r.length)return null;var t=r.map((function(e){return e.operations.map((function(e){return e}))})).reduce((function(e,r){return e.concat(r)}),[]);if(!t.some((function(e){return e.hasSamples})))return null;var n=t.map((function(e,r){return{value:e.httpVerb.toUpperCase()+": "+e.name,idx:r}}));return React.createElement(Panel_1.CodePanel,{header:"Callback payload samples"},React.createElement(GenericChildrenSwitcher_1.GenericChildrenSwitcher,{items:t,renderDropdown:this.renderDropdown,options:n},(function(r){return React.createElement(CallbackReqSamples_1.CallbackPayloadSample,{key:"callbackPayloadSample",callback:r,renderDropdown:e.renderDropdown})})))}}),Object.defineProperty(r,"contextType",{enumerable:!0,configurable:!0,writable:!0,value:OptionsProvider_1.OptionsContext}),r=(0,tslib_1.__decorate)([mobx_react_1.observer],r)}(React.Component);exports.CallbackSamples=CallbackSamples,exports.SamplesWrapper=styled_components_1.default.div(templateObject_1||(templateObject_1=(0,tslib_1.__makeTemplateObject)(["\n  ","\n  padding: ","px;\n"],["\n  ","\n  padding: ","px;\n"])),(function(e){var r=e.theme;return(0,styled_components_1.mediaCSS)({background:r.codeBlock.backgroundColor})}),(function(e){return 4*e.theme.spacing.unit}));
//# sourceMappingURL=CallbackSamples.js.map