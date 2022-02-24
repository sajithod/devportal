"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.AuthPanel=exports.requiredValidator=void 0;var tslib_1=require("tslib"),React=(0,tslib_1.__importStar)(require("react")),redoc_lib_1=require("../../redoc-lib"),utils_1=require("../../utils"),OAuth2TokenInput_1=(0,tslib_1.__importDefault)(require("./OAuth2TokenInput")),OAuth2Flow_1=require("./OAuth2Flow"),OpenIDConnect_1=require("./OpenIDConnect"),TextField_1=require("../common/TextField"),form_1=require("../common/form"),Labels_1=require("../../redoc-lib/src/services/Labels");function requiredValidator(e){if(!e)return"Field is required"}exports.requiredValidator=requiredValidator;var getCookie=function(e){var t=document.cookie.match("\\b"+e+"=([^;]*)\\b");return t?t[1]:void 0};function fromCookie(e){if("cookie"===e.in)return getCookie(e.name)}var AuthPanel=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return Object.defineProperty(t,"state",{enumerable:!0,configurable:!0,writable:!0,value:{activeScheme:0}}),Object.defineProperty(t,"handleSchemeChange",{enumerable:!0,configurable:!0,writable:!0,value:function(e){t.setState({activeScheme:e.idx}),(0,utils_1.toSessionStorage)("securityRequirementName",e.value)}}),t}return(0,tslib_1.__extends)(t,e),Object.defineProperty(t,"getDerivedStateFromProps",{enumerable:!1,configurable:!0,writable:!0,value:function(e){var t=e.operation.security.map((function(e){return e.schemes.map((function(e){return e.id})).join(" and ")})),r=(0,utils_1.fromSessionStorage)("securityRequirementName"),l=t.findIndex((function(e){return e===r}));return{activeScheme:l<0?0:l}}}),Object.defineProperty(t.prototype,"render",{enumerable:!1,configurable:!0,writable:!0,value:function(){var e=this,t=this.props.securityDefaults,r=this.state.activeScheme,l=this.props.operation.security,o=l.map((function(e){return e.schemes.map((function(e){return e.id})).join(" and ")})).map((function(e,t){return{value:e,idx:t}}));return 0===o.length?null:React.createElement(React.Fragment,null,React.createElement(form_1.FormWrapper,null,o.length>1&&React.createElement(form_1.FormControl,null,React.createElement(redoc_lib_1.Dropdown,{variant:"dark",fullWidth:!0,prefix:"Security scheme: ",options:o,value:o[r].value,onChange:this.handleSchemeChange}))||null,l[r].schemes.map((function(r){var l,o,a,i,n,u,s,c=(0,utils_1.escapeFormId)(r.id);if("apiKey"===r.type){var d=(0,utils_1.getSecurityDetailsOptions)(c,""),m={field:"auth."+c,fullWidth:!0,initialValue:fromCookie(r)||(0,utils_1.fromSessionStorage)("auth."+c)||(null==t?void 0:t[c]),initValue:fromCookie(r)||(0,utils_1.fromSessionStorage)("auth."+c)||(null==t?void 0:t[c]),validate:requiredValidator,validateOnBlur:!0,validateOnChange:!0};return React.createElement(form_1.FormControl,{key:c},React.createElement(form_1.FormLabel,null," ",r.name,": "),d?React.createElement(TextField_1.FormDropdown,(0,tslib_1.__assign)({},m,{options:d})):React.createElement(TextField_1.FormTextField,(0,tslib_1.__assign)({},m,{type:"password","data-cy":"apiKey-auth-password"})))}if("http"===r.type){if("basic"===r.scheme){var p=(0,utils_1.getSecurityDetailsOptions)(c,"username");m={field:"auth."+c+".username",fullWidth:!0,initialValue:(0,utils_1.fromSessionStorage)("auth."+c+".username")||(null===(l=null==t?void 0:t[c])||void 0===l?void 0:l.username),initValue:(0,utils_1.fromSessionStorage)("auth."+c+".username")||(null===(o=null==t?void 0:t[c])||void 0===o?void 0:o.username),validate:requiredValidator,validateOnBlur:!0,validateOnChange:!0};return React.createElement(React.Fragment,{key:c},React.createElement(form_1.FormControl,null,React.createElement(form_1.FormLabel,null," ",(0,Labels_1.l)("tryItAuthBasicUsername"),": "),p?React.createElement(TextField_1.FormDropdown,(0,tslib_1.__assign)({},m,{options:p})):React.createElement(TextField_1.FormTextField,(0,tslib_1.__assign)({},m))),React.createElement(form_1.FormControl,null,React.createElement(form_1.FormLabel,null," ",(0,Labels_1.l)("tryItAuthBasicPassword"),": "),React.createElement(TextField_1.FormTextField,{type:"password","data-cy":"http-auth-password",fullWidth:!0,field:"auth."+c+".password",validate:requiredValidator,initialValue:(0,utils_1.fromSessionStorage)("auth."+c+".password")||(null===(a=null==t?void 0:t[c])||void 0===a?void 0:a.password),validateOnBlur:!0,validateOnChange:!0})))}if("bearer"===r.scheme){var f=(0,utils_1.getSecurityDetailsOptions)(c,"");m={field:"auth."+c,fullWidth:!0,initialValue:(0,utils_1.fromSessionStorage)("auth."+c)||(null==t?void 0:t[c]),initValue:(0,utils_1.fromSessionStorage)("auth."+c)||(null==t?void 0:t[c]),validate:requiredValidator,validateOnBlur:!0,validateOnChange:!0};return React.createElement(React.Fragment,{key:c},React.createElement(form_1.FormControl,null,React.createElement(form_1.FormLabel,null," Bearer Token: "),f?React.createElement(TextField_1.FormDropdown,(0,tslib_1.__assign)({},m,{options:f})):React.createElement(TextField_1.FormTextField,(0,tslib_1.__assign)({},m,{type:"password",placeholder:"(without 'Bearer')"}))))}}else{if("oauth2"===r.type&&r.flows&&r.flows.clientCredentials)return React.createElement(OAuth2TokenInput_1.default,{key:c,flow:r.flows.clientCredentials,server:e.props.activeServer,authCorsProxyUrl:e.props.authCorsProxyUrl,id:c,form:e.props.form,formApi:e.props.formApi,clientId:r.flows.clientCredentials["x-defaultClientId"]||r["x-defaultClientId"],defaultValues:null==t?void 0:t[c]});if("oauth2"===r.type&&r.flows&&r.flows.implicit)return React.createElement(OAuth2Flow_1.OAuth2Flow,{key:c,authorizationUrl:r.flows.implicit.authorizationUrl,authCorsProxyUrl:e.props.authCorsProxyUrl,scopes:Object.keys((null===(n=null===(i=null==r?void 0:r.flows)||void 0===i?void 0:i.implicit)||void 0===n?void 0:n.scopes)||{}),server:e.props.activeServer,id:c,form:e.props.form,formApi:e.props.formApi,clientId:r.flows.implicit["x-defaultClientId"]||r["x-defaultClientId"],flow:"implicit",defaultValues:null==t?void 0:t[c]});if("oauth2"===r.type&&r.flows&&r.flows.authorizationCode)return React.createElement(OAuth2Flow_1.OAuth2Flow,{key:c,authorizationUrl:r.flows.authorizationCode.authorizationUrl,tokenUrl:r.flows.authorizationCode.tokenUrl,authCorsProxyUrl:e.props.authCorsProxyUrl,scopes:Object.keys((null===(u=r.flows.authorizationCode)||void 0===u?void 0:u.scopes)||{}),server:e.props.activeServer,id:c,form:e.props.form,formApi:e.props.formApi,clientId:r.flows.authorizationCode["x-defaultClientId"]||r["x-defaultClientId"],flow:"authorizationCode",usePkce:r.flows.authorizationCode["x-usePkce"],defaultValues:null==t?void 0:t[c]});if("oauth2"===r.type){var h=(0,utils_1.fromSessionStorage)("auth."+c+".token")||JSON.stringify(null===(s=null==t?void 0:t[c])||void 0===s?void 0:s.token);return h=h?JSON.parse(h):{},React.createElement(React.Fragment,{key:c},React.createElement(form_1.FormControl,null,React.createElement(form_1.FormLabel,null," Access Token Type: "),React.createElement(TextField_1.FormTextField,{fullWidth:!0,field:"auth."+c+".token.token_type",initialValue:h.token_type||"Bearer"})),React.createElement(form_1.FormControl,null,React.createElement(form_1.FormLabel,null," Access Token: "),React.createElement(TextField_1.FormTextField,{type:"password",fullWidth:!0,field:"auth."+c+".token.access_token",validate:requiredValidator,initialValue:h.access_token,validateOnBlur:!0,validateOnChange:!0})))}if("openIdConnect"===r.type)return React.createElement(OpenIDConnect_1.OpenIDConnect,{key:c,server:e.props.activeServer,authCorsProxyUrl:e.props.authCorsProxyUrl,id:c,form:e.props.form,formApi:e.props.formApi,scheme:r,clientId:r["x-defaultClientId"],defaultValues:null==t?void 0:t[c]})}}))),React.createElement("small",null,React.createElement("strong",null,"Note"),": Your credentials will be saved until the end of the browser session"))}}),t}(React.Component);exports.AuthPanel=AuthPanel;
//# sourceMappingURL=AuthPanel.js.map