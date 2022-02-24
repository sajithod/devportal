"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.SecurityDefs=exports.OAuthFlow=void 0;var tslib_1=require("tslib"),React=(0,tslib_1.__importStar)(require("react")),common_elements_1=require("../../common-elements"),helpers_1=require("../../utils/helpers"),Markdown_1=require("../Markdown/Markdown"),styled_elements_1=require("../Markdown/styled.elements"),AUTH_TYPES={oauth2:"OAuth2",apiKey:"API Key",http:"HTTP",openIdConnect:"OpenID Connect"},OAuthFlow=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return(0,tslib_1.__extends)(t,e),Object.defineProperty(t.prototype,"render",{enumerable:!1,configurable:!0,writable:!0,value:function(){var e=this.props,t=e.type,n=e.flow;return React.createElement("tr",null,React.createElement("th",null," ",t," OAuth Flow "),React.createElement("td",null,"implicit"===t||"authorizationCode"===t?React.createElement("div",null,React.createElement("strong",null," Authorization URL: "),n.authorizationUrl):null,"password"===t||"clientCredentials"===t||"authorizationCode"===t?React.createElement("div",null,React.createElement("strong",null," Token URL: "),n.tokenUrl):null,(null==n?void 0:n.refreshUrl)&&React.createElement("div",null,React.createElement("strong",null," Refresh URL: "),null==n?void 0:n.refreshUrl),React.createElement("div",null,React.createElement("strong",null," Scopes: ")),React.createElement("ul",null,Object.keys((null==n?void 0:n.scopes)||{}).map((function(e){return React.createElement("li",{key:e},React.createElement("code",null,e)," - ",React.createElement(Markdown_1.Markdown,{inline:!0,source:(null==n?void 0:n.scopes[e])||""}))})))))}}),t}(React.PureComponent);exports.OAuthFlow=OAuthFlow;var SecurityDefs=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return(0,tslib_1.__extends)(t,e),Object.defineProperty(t.prototype,"render",{enumerable:!1,configurable:!0,writable:!0,value:function(){return this.props.securitySchemes.schemes.map((function(e){return React.createElement(common_elements_1.Section,{id:e.sectionId,key:e.id},React.createElement(common_elements_1.Row,null,React.createElement(common_elements_1.MiddlePanel,null,React.createElement(common_elements_1.H2,null,React.createElement(common_elements_1.ShareLink,{to:e.sectionId}),e.id),React.createElement(Markdown_1.Markdown,{source:e.description||""}),React.createElement(styled_elements_1.StyledMarkdownBlock,null,React.createElement("table",{className:"security-details"},React.createElement("tbody",null,React.createElement("tr",null,React.createElement("th",null," Security Scheme Type "),React.createElement("td",null," ",AUTH_TYPES[e.type]||e.type," ")),e.apiKey?React.createElement("tr",null,React.createElement("th",null," ",(0,helpers_1.titleize)(e.apiKey.in||"")," parameter name:"),React.createElement("td",null," ",e.apiKey.name," ")):e.http?[React.createElement("tr",{key:"scheme"},React.createElement("th",null," HTTP Authorization Scheme "),React.createElement("td",null," ",e.http.scheme," ")),"bearer"===e.http.scheme&&e.http.bearerFormat&&React.createElement("tr",{key:"bearer"},React.createElement("th",null," Bearer format "),React.createElement("td",null,' "',e.http.bearerFormat,'" '))]:e.openId?React.createElement("tr",null,React.createElement("th",null," Connect URL "),React.createElement("td",null,React.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:e.openId.connectUrl},e.openId.connectUrl))):e.flows?Object.keys(e.flows).map((function(t){return React.createElement(OAuthFlow,{key:t,type:t,flow:e.flows[t]})})):null))))))}))}}),t}(React.PureComponent);exports.SecurityDefs=SecurityDefs;
//# sourceMappingURL=SecuritySchemes.js.map