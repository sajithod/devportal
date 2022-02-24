import{__assign,__decorate,__extends,__makeTemplateObject}from"tslib";import*as React from"react";import{Dropdown,styled}from"../../redoc-lib";import{observer}from"mobx-react";import{fromSessionStorage,toSessionStorage}from"../../utils";import ServerVariable from"./ServerVariable";import{FormControl,FormLabel}from"../common/form";import{expandDefaultServerVariables,expandVariables,getServerWithVariables,getDefaultOrStoredVariables,updateVariablesStorage}from"./utils";var ServerChooser=function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return Object.defineProperty(r,"state",{enumerable:!0,configurable:!0,writable:!0,value:{activeIdx:0,variables:{}}}),Object.defineProperty(r,"handleServerChange",{enumerable:!0,configurable:!0,writable:!0,value:function(e){var a=r.props.operation.servers.find((function(r){return r.url===e.serverUrl})),t=getDefaultOrStoredVariables(a);r.props.onChange({url:e.serverUrl,variables:t}),toSessionStorage("serverUrl",e.serverUrl),r.setState({variables:t})}}),Object.defineProperty(r,"handleVariableChange",{enumerable:!0,configurable:!0,writable:!0,value:function(e,a){var t,n=r.props.operation.servers[r.state.activeIdx],o=__assign(__assign({},r.state.variables),((t={})[e]=a||getDefaultOrStoredVariables(n)[e],t));r.setState({variables:o}),updateVariablesStorage(e,a),r.props.onChange(__assign(__assign({},n),{variables:o}))}}),r}return __extends(r,e),Object.defineProperty(r,"getDerivedStateFromProps",{enumerable:!1,configurable:!0,writable:!0,value:function(e){var r=e.operation,a=fromSessionStorage("serverUrl"),t=r.servers.findIndex((function(e){return e.url===a}));return{activeIdx:t<0?0:t}}}),Object.defineProperty(r.prototype,"componentDidMount",{enumerable:!1,configurable:!0,writable:!0,value:function(){var e=getServerWithVariables(this.props.operation.servers,this.state.activeIdx);this.props.onChange(e),this.setState({variables:e.variables})}}),Object.defineProperty(r.prototype,"render",{enumerable:!1,configurable:!0,writable:!0,value:function(){var e=this,r=this.state.activeIdx,a=this.props.operation.servers.map((function(r){return{serverUrl:r.url,value:"\n          "+expandDefaultServerVariables(expandVariables(r.url,e.state.variables),r.variables)+"\n        - "+(r.description||"Default")+"\n      "}})),t=Object.keys(this.state.variables);return React.createElement(ServerDropdownWrap,null,React.createElement(FormLabel,{htmlFor:"server"},"Target server: "),React.createElement(FormControl,null,React.createElement(Dropdown,{openUp:!0,variant:"dark",value:a[r].value,options:a,onChange:this.handleServerChange})),t.length?t.map((function(r){var a,t=null===(a=e.props.operation.servers[e.state.activeIdx].variables)||void 0===a?void 0:a[r];if(t)return React.createElement(ServerVariable,{key:r,name:r,value:e.state.variables[r],defaultValue:t.default,onChange:function(a){return e.handleVariableChange(r,a)},variableEnum:t.enum,description:t.description})})):null)}}),r=__decorate([observer],r)}(React.Component);export{ServerChooser};var templateObject_1,ServerDropdownWrap=styled.div(templateObject_1||(templateObject_1=__makeTemplateObject(["\n  margin-top: 20px;\n"],["\n  margin-top: 20px;\n"])));
//# sourceMappingURL=ServerDropdown.js.map