import{__assign,__decorate,__extends,__makeTemplateObject}from"tslib";import{observer}from"mobx-react";import*as React from"react";import{CodePanel}from"../../../../components/Panel";import{MimeLabel}from"../../../../components/shared";import styled,{mediaCSS}from"../../styled-components";import{OptionsContext}from"../OptionsProvider";import{GenericChildrenSwitcher}from"../GenericChildrenSwitcher/GenericChildrenSwitcher";import{DropdownOrLabel}from"../DropdownOrLabel/DropdownOrLabel";import{CallbackPayloadSample}from"./CallbackReqSamples";import{Dropdown}from"../../../src/common-elements/dropdown";import{DropdownWrapper}from"../../..";var templateObject_1,CallbackSamples=function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return Object.defineProperty(r,"renderDropdown",{enumerable:!0,configurable:!0,writable:!0,value:function(e){return React.createElement(DropdownWrapper,null,React.createElement(DropdownOrLabel,__assign({Label:MimeLabel,Dropdown:Dropdown,fullWidth:!0,variant:"dark"},e)))}}),r}return __extends(r,e),Object.defineProperty(r.prototype,"render",{enumerable:!1,configurable:!0,writable:!0,value:function(){var e=this,r=this.props.callbacks;if(!r||0===r.length)return null;var t=r.map((function(e){return e.operations.map((function(e){return e}))})).reduce((function(e,r){return e.concat(r)}),[]);if(!t.some((function(e){return e.hasSamples})))return null;var n=t.map((function(e,r){return{value:e.httpVerb.toUpperCase()+": "+e.name,idx:r}}));return React.createElement(CodePanel,{header:"Callback payload samples"},React.createElement(GenericChildrenSwitcher,{items:t,renderDropdown:this.renderDropdown,options:n},(function(r){return React.createElement(CallbackPayloadSample,{key:"callbackPayloadSample",callback:r,renderDropdown:e.renderDropdown})})))}}),Object.defineProperty(r,"contextType",{enumerable:!0,configurable:!0,writable:!0,value:OptionsContext}),r=__decorate([observer],r)}(React.Component);export{CallbackSamples};export var SamplesWrapper=styled.div(templateObject_1||(templateObject_1=__makeTemplateObject(["\n  ","\n  padding: ","px;\n"],["\n  ","\n  padding: ","px;\n"])),(function(e){var r=e.theme;return mediaCSS({background:r.codeBlock.backgroundColor})}),(function(e){return 4*e.theme.spacing.unit}));
//# sourceMappingURL=CallbackSamples.js.map