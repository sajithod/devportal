import{__assign,__awaiter,__decorate,__extends,__generator,__makeTemplateObject,__rest}from"tslib";import*as React from"react";import{Form,useField}from"informed";import{observer}from"mobx-react";import{get,useDimensions,unescapeFormId}from"../../utils";import{CloseButton,ConsoleBody,ConsoleWrap}from"./styled.components";import{ServerChooser}from"./ServerDropdown";import{OperationParameters}from"./OperationParameters";import{ActionPanel}from"./ActionPanel";import{ResponsePanel}from"./ResponsePanel";import{RequestBody}from"./RequestBody";import{ConsoleBadges}from"./ConsoleBadges";import{AuthPanel,requiredValidator}from"./AuthPanel";import{AnalyticsEventType}from"../../services";import Swagger from"swagger-client";import{JsonPointer,ShelfIcon,CrossIcon,LockIcon}from"../../redoc-lib";import{RenderHook}from"../../redoc-lib/src/components/helper";import{l}from"../../redoc-lib/src/services/Labels";import styled from"../../redoc-lib/src/styled-components";import{CodeHeader,Panel,Header,Accordion,Trigger,Title}from"../Panel";import{OAuth2}from"../../services/OAuth2";import{PanelBody}from"../Panel/PanelBody";import{getFileNameFromHeaders,getParameters,unescapeQueryParams,updateStorage}from"./utils";import{isFileUploadMime}from"../common/FileUpload/helper";function normalizeUrlProtocol(e){return e.startsWith("//")?"https:"+e:e}var flexColumn={flex:1,display:"flex",flexDirection:"column"},Console=function(e){function t(t){var r=e.call(this,t)||this;return Object.defineProperty(r,"formApi",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(r,"setFormApi",{enumerable:!0,configurable:!0,writable:!0,value:function(e,t){void 0===t&&(t=e.getState());var o=t.values,n=__rest(t,["values"]);r.formApi=e,setTimeout((function(){var e=__assign(__assign({},n),{values:__assign(__assign({},o),{query:unescapeQueryParams(o.query||{})})});r.setState({form:e})}),0)}}),Object.defineProperty(r,"handleChange",{enumerable:!0,configurable:!0,writable:!0,value:function(e){var t=e.values,o=__rest(e,["values"]),n=__assign(__assign({},o),{values:__assign(__assign({},t),{query:unescapeQueryParams(t.query||{})})});r.setState({form:n}),updateStorage(n)}}),Object.defineProperty(r,"handleTabChange",{enumerable:!0,configurable:!0,writable:!0,value:function(e){r.setState({activeTab:e})}}),Object.defineProperty(r,"handleServerChange",{enumerable:!0,configurable:!0,writable:!0,value:function(e){r.setState({server:e}),r.props.operation.setActiveServer(e)}}),Object.defineProperty(r,"handleExecute",{enumerable:!0,configurable:!0,writable:!0,value:function(){return __awaiter(r,void 0,void 0,(function(){var e,t,r,o,n,a,s,i,l,c,u,p,d,m,h,v,f,g,y,b,_,P,R,S,C,E,I,w,T,A,k,x,O,q,B,F,j,H,U=this;return __generator(this,(function(V){switch(V.label){case 0:if(e=this.props,t=e.store,r=e.operation,o=e.onResponse,n=this.state.form,a=n.values,s=n.invalid,this.formApi.submitForm(),s)return this.setState({shaking:!0}),setTimeout((function(){return U.setState({shaking:!1})}),1e3),null===(O=null===(x=null==t?void 0:t.options.events)||void 0===x?void 0:x.tryItSent)||void 0===O||O.call(x,{eventType:AnalyticsEventType.TryItSent,resource:"Redocly_OperationTryIt",action:"ValidationFailed",operationId:r.operationId,operationPath:r.path,operationHttpVerb:r.httpVerb,operationSummary:r.description}),[2];if(i=this.props.operation.requestBody,l=i&&i.content&&i.content.active&&i.content.active.name||"",c=a.body,/json/.test(l))try{c=JSON.parse(c)}catch(e){console.error(e)}if(this.setState({loading:!0}),u=this.state.resolvedRawSpec,!(p=get(u,["paths",r.path,(r.httpVerb||"").toLowerCase(),"servers"])||get(u,["paths",r.path,"servers"])||get(u,["servers"])))throw console.error("Servers are not specified in your OpenAPI file. You can't use Try It Out console without specifying servers. If you use OpenAPI 2, make sure you configured host and basepath"),new Error("Servers are not specified");d=p.find((function(e){return U.state.server.url.endsWith(e.url.endsWith("/")?e.url.substring(0,e.url.length-1):e.url)})),m=Date.now(),h=!!window.document.documentMode,f=a.auth,a.auth?(g=Object.keys(a.auth)[0],y=unescapeFormId(g),v=__assign(__assign({},u),{components:__assign(__assign({},u.components),{securitySchemes:__assign(__assign({},u.components.securitySchemes),(A={},A[y]=__assign(__assign({},u.components.securitySchemes[y]),{type:"openIdConnect"===u.components.securitySchemes[y].type?"oauth2":u.components.securitySchemes[y].type}),A))})}),f=__assign(__assign({},f),((k={})[y]=f[g],k))):v=__assign({},u),(b=t.options.corsProxyUrl)&&u.servers&&u.servers.length&&(v.servers=u.servers.map((function(e){return __assign(__assign({},e),{url:b+normalizeUrlProtocol(e.url)})}))),(_=(null===(B=null===(q=null==i?void 0:i.content)||void 0===q?void 0:q.active)||void 0===B?void 0:B.name)||null)&&c&&isFileUploadMime(_)&&(P=Object.values(c),c=P.length>1?P:P[0]),R=function(e,t){return function(r){return U.props.store.options.sendXUserAgentInTryIt&&(r.headers["X-User-Agent"]="Redocly Try it API console"),e?e(r,t):r}},S={userFetch:h&&require("cross-fetch").fetch,server:b?b+normalizeUrlProtocol(d.url):d.url,serverVariables:this.state.server.variables,spec:v,pathName:r.path,method:r.httpVerb,parameters:__assign(__assign(__assign(__assign({},a.path),a.query),a.header),a.cookie),securities:{authorized:f},requestBody:c,requestContentType:_,responseContentType:(null===(F=a.header)||void 0===F?void 0:F.Accept)||null,requestInterceptor:R(t.options.requestInterceptor,r)},V.label=1;case 1:return V.trys.push([1,5,8,9]),[4,Swagger.execute(S)];case 2:return C=V.sent(),(E=null==C?void 0:C.data)instanceof Blob?(isFileUploadMime(E.type)&&(C.fileInfo={rawData:E,fileName:getFileNameFromHeaders(C.headers)}),I=C,[4,E.text()]):[3,4];case 3:I.data=V.sent(),V.label=4;case 4:return null==o||o({request:S,response:C}),this.setState({response:C,error:void 0}),[3,9];case 5:return(w=V.sent())&&w.response&&w.response.data instanceof Blob?(T=w.response,[4,w.response.data.text()]):[3,7];case 6:T.data=V.sent(),null==o||o({request:S,response:w.response}),V.label=7;case 7:return this.setState({response:void 0,error:w}),[3,9];case 8:return this.setState({loading:!1,activeTab:1,time:Date.now()-m}),null===(H=null===(j=null==t?void 0:t.options.events)||void 0===j?void 0:j.tryItSent)||void 0===H||H.call(j,{eventType:AnalyticsEventType.TryItSent,resource:"Redocly_OperationTryIt",action:"Sent",operationId:r.operationId,operationPath:r.path,operationHttpVerb:r.httpVerb,operationSummary:r.description}),[7];case 9:return[2]}}))}))}}),r.state={form:{values:{path:getParameters(t.operation.parameters,"path"),cookie:getParameters(t.operation.parameters,"cookie"),header:getParameters(t.operation.parameters,"header"),query:getParameters(t.operation.parameters,"query")}},shaking:!1,loading:!1,activeTab:0,server:{}},r}return __extends(t,e),Object.defineProperty(t.prototype,"componentDidMount",{enumerable:!1,configurable:!0,writable:!0,value:function(){return __awaiter(this,void 0,void 0,(function(){var e,t,r,o;return __generator(this,(function(n){switch(n.label){case 0:return e=this.props,t=e.store,r=e.operation,[4,t.dereferenceSpecForTryIt(r)];case 1:return o=n.sent(),this.setState({resolvedRawSpec:o}),this.formApi.setValues({}),[2]}}))}))}}),Object.defineProperty(t.prototype,"componentDidUpdate",{enumerable:!1,configurable:!0,writable:!0,value:function(e){e.operation!==this.props.operation&&this.setState({response:void 0,error:void 0,activeTab:0})}}),Object.defineProperty(t.prototype,"render",{enumerable:!1,configurable:!0,writable:!0,value:function(){var e=this.props,t=e.operation,r=e.className,o=e.rootElement,n=this.state,a=n.shaking,s=n.activeTab,i=n.form,l=n.response,c=n.loading,u=n.error,p=!(!l&&!u);return React.createElement(ConsoleWrapHook,{shaking:a,className:r,rootElement:o},React.createElement(CodeHeader,null,React.createElement(ConsoleBadges,{active:s,hasResponse:p,onChange:this.handleTabChange}),this.props.onClose&&React.createElement(CloseButton,{onClick:this.props.onClose}," ✕ ")),React.createElement(ConsoleBody,{hidden:0!==s},this.renderRequest()),React.createElement(ConsoleBody,{hidden:1!==s},this.renderResponse()),React.createElement(ActionPanel,{hasResponse:p,params:i.values,operation:t,loading:c,execute:this.handleExecute}))}}),Object.defineProperty(t.prototype,"renderRequest",{enumerable:!1,configurable:!0,writable:!0,value:function(){var e,t=this.props,r=t.operation,o=t.store,n=t.properties,a=t.securityDefaults,s=this.state,i=s.form,c=s.resolvedRawSpec,u=s.server,p=i.errors||{},d=p.path||p.cookie||p.header||p.query,m=c&&JsonPointer.get(c,r.pointer),h=i.values&&i.values.auth&&Object.keys(i.values.auth)[0];h&&i.values.auth[h]||(h=void 0),!h||void 0===i.values.auth[h].token&&void 0===i.values.auth[h].client_id&&void 0===i.values.auth[h].client_secret||i.values.auth[h].token&&i.values.auth[h].token.access_token||(h=void 0),h&&null!=i.values.auth[h].username&&(i.values.auth[h].username&&i.values.auth[h].password||(h=void 0));var v=r.parameters||[],f=null===(e=null==o?void 0:o.options.hooks)||void 0===e?void 0:e.ReplaceTryItSecurityPanel;return!c&&React.createElement(React.Fragment,null,"Loading...")||React.createElement(React.Fragment,null,React.createElement(Form,{onChange:this.handleChange,getApi:this.setFormApi,style:__assign(__assign({},flexColumn),{margin:0})},React.createElement(Accordion,{initialActiveIdx:r.security.length&&h?1:0},r.security.length&&React.createElement(TryItPanel,{header:l("tryItAuth"),"data-cy":"security-trigger",renderChildrenHidden:!0,error:!h&&!!p.auth,success:!!h},f?React.createElement(AuthPanelHook,{field:"auth",validate:requiredValidator},(function(e){return React.createElement(RenderHook,{Hook:f,props:{server:u,operation:r,onChange:e,OAuth2:OAuth2}})})):React.createElement(AuthPanel,{formApi:this.formApi,form:i,operation:r,activeServer:u.url,authCorsProxyUrl:o.options.authCorsProxyUrl,securityDefaults:a}))||null,r.requestBody&&React.createElement(TryItPanel,{header:l("tryItBody"),"data-cy":"body-trigger",renderChildrenHidden:!0,error:!!p.body},React.createElement(RequestBody,{validate:allowBodyErrors,console:this,body:r.requestBody,id:r.id,resolvedBody:m.requestBody,properties:n}))||null,v.length&&React.createElement(TryItPanel,{header:l("tryItParameters"),"data-cy":"parameters-trigger",error:d,renderChildrenHidden:!0},React.createElement(OperationParameters,{operation:r,values:i.values,errors:i.errors||{}}))||null)),React.createElement(ServerChooser,{operation:r,onChange:this.handleServerChange}))}}),Object.defineProperty(t.prototype,"renderResponse",{enumerable:!1,configurable:!0,writable:!0,value:function(){var e=this.state,t=e.response,r=e.error,o=e.time;return React.createElement(ResponsePanel,{response:t,error:r,time:o})}}),t=__decorate([observer],t)}(React.Component);export{Console};function allowBodyErrors(){}function ConsoleWrapHook(e){var t=e.shaking,r=e.className,o=e.children,n=e.rootElement,a=useDimensions(n)[0];return React.createElement(ConsoleWrap,{shaking:t,className:r,"data-cy":"console",fullWidth:null==a?void 0:a.width},o)}function AuthPanelHook(e){var t=useField(__assign({},e)),r=t.fieldApi,o=t.render,n=t.userProps,a=r.setValue,s=n.children;return o(React.createElement(React.Fragment,null,s(a)))}export function TryItPanel(e){var t=e.header,r=e.error,o=e.success,n=__rest(e,["header","error","success"]);return React.createElement(StyledTryItPanel,__assign({},n,{header:function(e){var a=e.toggle,s=e.expanded;return React.createElement(Header,{onClick:a,isExpanded:s,"data-cy":n["data-cy"]},React.createElement(Trigger,null,React.createElement(Title,null,t),React.createElement(ShelfIcon,{direction:s?"down":"right"})),r&&React.createElement(CrossIcon,{size:"14px",color:"#ff908b"})||null,o&&React.createElement(LockIcon,{size:"14px",color:"#56ff26"})||null)}}))}var templateObject_1,StyledTryItPanel=styled(Panel)(templateObject_1||(templateObject_1=__makeTemplateObject(["\n  "," {\n    color: white;\n    border: 1px solid ",";\n    padding: 10px;\n  }\n\n  "," path {\n    fill: white;\n  }\n\n  "," {\n    padding: 15px 10px;\n    background-color: #3e4c59;\n    border: 1px solid ",";\n    border-top: 0;\n  }\n"],["\n  "," {\n    color: white;\n    border: 1px solid ",";\n    padding: 10px;\n  }\n\n  "," path {\n    fill: white;\n  }\n\n  "," {\n    padding: 15px 10px;\n    background-color: #3e4c59;\n    border: 1px solid ",";\n    border-top: 0;\n  }\n"])),Header,(function(e){return e.error?"#ff908b":"#89949f"}),ShelfIcon,PanelBody,(function(e){return e.error?"#ff908b":"#89949f"}));
//# sourceMappingURL=Console.js.map