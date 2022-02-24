"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Extensions=void 0;var tslib_1=require("tslib"),React=(0,tslib_1.__importStar)(require("react")),fields_1=require("../../common-elements/fields"),styled_components_1=(0,tslib_1.__importDefault)(require("../../styled-components")),OptionsProvider_1=require("../OptionsProvider"),styled_elements_1=require("../Markdown/styled.elements"),Extension=(0,styled_components_1.default)(styled_elements_1.StyledMarkdownBlock)(templateObject_1||(templateObject_1=(0,tslib_1.__makeTemplateObject)(["\n  margin: 2px 0;\n"],["\n  margin: 2px 0;\n"]))),Extensions=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return(0,tslib_1.__extends)(t,e),Object.defineProperty(t.prototype,"render",{enumerable:!1,configurable:!0,writable:!0,value:function(){var e=this.props.extensions;return React.createElement(OptionsProvider_1.OptionsContext.Consumer,null,(function(t){return React.createElement(React.Fragment,null,t.showExtensions?React.createElement(ExtensionsWrap,null,Object.keys(e).map((function(t){return React.createElement(Extension,{key:t},React.createElement(fields_1.FieldLabel,null," ",t.substring(2),": ")," ",React.createElement(fields_1.ExtensionValue,null,"string"==typeof e[t]?e[t]:JSON.stringify(e[t])))}))):null)}))}}),t}(React.PureComponent);exports.Extensions=Extensions;var templateObject_1,templateObject_2,ExtensionsWrap=styled_components_1.default.div(templateObject_2||(templateObject_2=(0,tslib_1.__makeTemplateObject)(["\n  /* margin: 15px 0; */ // TODO: fix margin for Extensions\n"],["\n  /* margin: 15px 0; */ // TODO: fix margin for Extensions\n"])));
//# sourceMappingURL=Extensions.js.map