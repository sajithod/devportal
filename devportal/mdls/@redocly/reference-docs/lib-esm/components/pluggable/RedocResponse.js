import{__extends}from"tslib";import*as React from"react";import{ResponseModel,Row,MiddlePanel,ResponseDetails,RightPanel,PayloadSamples}from"../../redoc-lib";import{FullWidthPanel,SamplesWrap}from"./styled.components";import{OperationModel}from"../../redoc-lib/src/services";var RedocResponse=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return __extends(t,e),Object.defineProperty(t.prototype,"render",{enumerable:!1,configurable:!0,writable:!0,value:function(){var e=this.props,t=e.store,o=e.pointer,r=e.hideSamples,n=new OperationModel(t.definition.parser,{pointer:o,pathName:"",httpVerb:"",pathParameters:[],pathServers:[],isWebhook:!1,responses:{}},void 0,t.options,!1),a=new ResponseModel({parser:t.definition.parser,code:"default",defaultAsError:!1,infoOrRef:{$ref:o},options:t.options,operation:n});a.description=a.summary;var l=r?FullWidthPanel:MiddlePanel;return React.createElement(Row,{layout:t.layout},React.createElement(l,{style:{paddingBottom:"20px"}},React.createElement(ResponseDetails,{response:a})),!r&&a.content&&React.createElement(RightPanel,null,React.createElement(SamplesWrap,null,React.createElement(PayloadSamples,{content:a.content})))||React.createElement("span",null))}}),t}(React.Component);export{RedocResponse};
//# sourceMappingURL=RedocResponse.js.map