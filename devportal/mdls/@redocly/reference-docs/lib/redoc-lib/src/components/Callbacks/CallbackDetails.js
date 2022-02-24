"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.CallbackDetails=void 0;var tslib_1=require("tslib"),mobx_react_1=require("mobx-react"),React=(0,tslib_1.__importStar)(require("react")),Endpoint_1=require("../../../../components/Endpoint"),styled_components_1=(0,tslib_1.__importDefault)(require("../../styled-components")),ExternalDocumentation_1=require("../ExternalDocumentation/ExternalDocumentation"),Extensions_1=require("../Fields/Extensions"),Markdown_1=require("../Markdown/Markdown"),Parameters_1=require("../Parameters/Parameters"),ResponsesList_1=require("../Responses/ResponsesList"),SecurityRequirement_1=require("../SecurityRequirement/SecurityRequirement"),Panel_1=require("../../../../components/Panel"),Labels_1=require("../../services/Labels"),CallbackDetails=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return(0,tslib_1.__extends)(t,e),Object.defineProperty(t.prototype,"render",{enumerable:!1,configurable:!0,writable:!0,value:function(){var e,t,n,r=this.props.operation,a=r.description,s=r.externalDocs,o=!(!a&&!s);return React.createElement(React.Fragment,null,o&&React.createElement(Description,null,void 0!==a&&React.createElement(Markdown_1.Markdown,{source:a}),s&&React.createElement(ExternalDocumentation_1.ExternalDocumentation,{externalDocs:s})),React.createElement(Endpoint_1.Endpoint,{operation:this.props.operation,compact:!0}),Object.keys(r.extensions||{}).length?React.createElement(Extensions_1.Extensions,{extensions:r.extensions}):null,(null===(e=r.security)||void 0===e?void 0:e.length)||(null===(t=r.parameters)||void 0===t?void 0:t.length)||r.requestBody?React.createElement(Panel_1.ContentPanel,{header:(0,Labels_1.l)("request")},React.createElement(SecurityRequirement_1.SecurityRequirements,{securities:r.security}),React.createElement(Parameters_1.Parameters,{parameters:r.parameters,body:r.requestBody})):null,(null===(n=r.responses)||void 0===n?void 0:n.length)?React.createElement(Panel_1.ContentPanel,{header:(0,Labels_1.l)("callbackResponses")},React.createElement(ResponsesList_1.ResponsesList,{responses:r.responses})):null)}}),t=(0,tslib_1.__decorate)([mobx_react_1.observer],t)}(React.Component);exports.CallbackDetails=CallbackDetails;var templateObject_1,Description=styled_components_1.default.div(templateObject_1||(templateObject_1=(0,tslib_1.__makeTemplateObject)(["\n  margin-bottom: ","px;\n"],["\n  margin-bottom: ","px;\n"])),(function(e){return 3*e.theme.spacing.unit}));
//# sourceMappingURL=CallbackDetails.js.map