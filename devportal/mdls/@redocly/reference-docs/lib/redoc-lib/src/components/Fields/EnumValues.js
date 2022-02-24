"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.EnumValues=void 0;var tslib_1=require("tslib"),React=(0,tslib_1.__importStar)(require("react")),fields_1=require("../../common-elements/fields"),Labels_1=require("../../services/Labels"),OptionsProvider_1=require("../OptionsProvider"),styled_components_1=(0,tslib_1.__importDefault)(require("../../styled-components")),styled_elements_1=require("../Markdown/styled.elements"),Markdown_1=require("../Markdown/Markdown"),DescriptionEnumsBlock=(0,styled_components_1.default)(styled_elements_1.StyledMarkdownBlock)(templateObject_1||(templateObject_1=(0,tslib_1.__makeTemplateObject)(["\n  table {\n    margin-bottom: 0.2em;\n  }\n"],["\n  table {\n    margin-bottom: 0.2em;\n  }\n"]))),EnumValues=function(e){function t(t){var n=e.call(this,t)||this;return Object.defineProperty(n,"state",{enumerable:!0,configurable:!0,writable:!0,value:{collapsed:!0}}),n.toggle=n.toggle.bind(n),n}return(0,tslib_1.__extends)(t,e),Object.defineProperty(t.prototype,"toggle",{enumerable:!1,configurable:!0,writable:!0,value:function(){this.setState({collapsed:!this.state.collapsed})}}),Object.defineProperty(t.prototype,"render",{enumerable:!1,configurable:!0,writable:!0,value:function(){var e=this.props,t=e.values,n=e.type,l=this.state.collapsed,a=!Array.isArray(t),r=Array.isArray(t)&&t||Object.entries(t||{}).map((function(e){return{value:e[0],description:e[1]}})),o=this.context,i=o.enumSkipQuotes,c=o.maxDisplayedEnumValues;if(!r.length)return null;var u=this.state.collapsed&&c?r.slice(0,c):r,s=!!c&&r.length>c,m=c?l?"… "+(r.length-c)+" more":"Hide":"";return React.createElement(React.Fragment,null,a?React.createElement(DescriptionEnums,{enums:u,toggle:this.toggle,showToggleButton:s,toggleButtonText:m,type:n}):React.createElement(SimpleEnums,{enums:u,enumSkipQuotes:i,type:n,toggle:this.toggle,toggleButtonText:m,showToggleButton:s}))}}),Object.defineProperty(t,"contextType",{enumerable:!0,configurable:!0,writable:!0,value:OptionsProvider_1.OptionsContext}),t}(React.PureComponent);function SimpleEnums(e){var t=e.enums,n=e.enumSkipQuotes,l=e.type,a=e.toggle,r=e.showToggleButton,o=e.toggleButtonText;return React.createElement(React.Fragment,null,React.createElement(fields_1.FieldLabel,null,"array"===l?(0,Labels_1.l)("enumArray"):""," ",1===t.length?(0,Labels_1.l)("enumSingleValue"):(0,Labels_1.l)("enum"),":")," ",t.map((function(e,t){var l=n?String(e):JSON.stringify(e);return React.createElement(React.Fragment,{key:t},React.createElement(fields_1.ExampleValue,null,l)," ")})),r?React.createElement(ToggleButton,{onClick:a},o):null)}function DescriptionEnums(e){var t=e.enums,n=e.toggle,l=e.showToggleButton,a=e.toggleButtonText,r=e.type;return React.createElement(React.Fragment,null,React.createElement(DescriptionEnumsBlock,null,React.createElement("table",null,React.createElement("thead",null,React.createElement("tr",null,React.createElement("th",null,React.createElement(fields_1.FieldLabel,null,"array"===r?(0,Labels_1.l)("enumArray"):""," ",1===t.length?(0,Labels_1.l)("enumSingleValue"):(0,Labels_1.l)("enum"),":")," "),React.createElement("th",null,React.createElement("strong",null,"Description")))),React.createElement("tbody",null,t.map((function(e,t){var n=e.description,l=e.value;return React.createElement("tr",{key:t},React.createElement("td",null,l),React.createElement("td",null,React.createElement(Markdown_1.Markdown,{source:n,compact:!0,inline:!0})))}))))),l?React.createElement(ToggleButton,{onClick:n},a):null)}exports.EnumValues=EnumValues;var templateObject_1,templateObject_2,ToggleButton=styled_components_1.default.span(templateObject_2||(templateObject_2=(0,tslib_1.__makeTemplateObject)(["\n  color: ",";\n  vertical-align: middle;\n  font-size: 13px;\n  line-height: 20px;\n  padding: 0 5px;\n  cursor: pointer;\n"],["\n  color: ",";\n  vertical-align: middle;\n  font-size: 13px;\n  line-height: 20px;\n  padding: 0 5px;\n  cursor: pointer;\n"])),(function(e){return e.theme.colors.primary.main}));
//# sourceMappingURL=EnumValues.js.map