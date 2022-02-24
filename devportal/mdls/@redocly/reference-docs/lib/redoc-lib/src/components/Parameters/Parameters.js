"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.BodyContent=exports.Parameters=void 0;var tslib_1=require("tslib"),React=(0,tslib_1.__importStar)(require("react")),DropdownOrLabel_1=require("../DropdownOrLabel/DropdownOrLabel"),ParametersGroup_1=require("./ParametersGroup"),common_elements_1=require("../../common-elements"),MediaTypesSwitch_1=require("../MediaTypeSwitch/MediaTypesSwitch"),Schema_1=require("../Schema"),Markdown_1=require("../Markdown/Markdown"),styled_components_1=(0,tslib_1.__importDefault)(require("../../styled-components"));function safePush(e,t,r){e[t]||(e[t]=[]),e[t].push(r)}var PARAM_PLACES=["path","query","cookie","header"],Parameters=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return(0,tslib_1.__extends)(t,e),Object.defineProperty(t.prototype,"orderParams",{enumerable:!1,configurable:!0,writable:!0,value:function(e){var t={};return e.forEach((function(e){safePush(t,e.in,e)})),t}}),Object.defineProperty(t.prototype,"render",{enumerable:!1,configurable:!0,writable:!0,value:function(){var e=this.props,t=e.body,r=e.parameters,n=void 0===r?[]:r;if(void 0===t&&void 0===n)return null;var a=this.orderParams(n),o=n.length>0?PARAM_PLACES:[],i=t&&t.content,c=t&&t.description;return React.createElement(React.Fragment,null,o.map((function(e){return React.createElement(ParametersGroup_1.ParametersGroup,{key:e,place:e,parameters:a[e]})})),i&&React.createElement(BodyContent,{content:i,description:c}))}}),t}(React.PureComponent);function DropdownWithinHeader(e){return React.createElement(common_elements_1.FieldsGroupHeader,{key:"header","data-cy":"request-body-header"},"Request Body schema: ",React.createElement(DropdownOrLabel_1.DropdownOrLabel,(0,tslib_1.__assign)({},e)))}function BodyContent(e){var t=e.content,r=e.description,n=t.isRequestType;return React.createElement(MediaTypesSwitch_1.MediaTypesSwitch,{content:t,renderDropdown:DropdownWithinHeader},(function(e){var t=e.schema;return React.createElement(React.Fragment,null,void 0!==r&&React.createElement(Description,null,React.createElement(Markdown_1.Markdown,{source:r})," "),React.createElement(Schema_1.Schema,{skipReadOnly:n,skipWriteOnly:!n,key:"schema",schema:t}))}))}exports.Parameters=Parameters,exports.BodyContent=BodyContent;var templateObject_1,Description=styled_components_1.default.div(templateObject_1||(templateObject_1=(0,tslib_1.__makeTemplateObject)(["\n  margin-bottom: ","px;\n"],["\n  margin-bottom: ","px;\n"])),(function(e){return 4*e.theme.spacing.unit}));
//# sourceMappingURL=Parameters.js.map