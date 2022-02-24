"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Checkbox=exports.StyledInput=void 0;var tslib_1=require("tslib"),React=(0,tslib_1.__importStar)(require("react")),styled_components_1=(0,tslib_1.__importDefault)(require("../../redoc-lib/src/styled-components"));exports.StyledInput=styled_components_1.default.input(templateObject_1||(templateObject_1=(0,tslib_1.__makeTemplateObject)(["\n  cursor: pointer;\n  vertical-align: middle;\n  margin-left: 0;\n  margin-right: 5px;\n  height: 20px;\n"],["\n  cursor: pointer;\n  vertical-align: middle;\n  margin-left: 0;\n  margin-right: 5px;\n  height: 20px;\n"])));var templateObject_1,templateObject_2,templateObject_3,CheckboxLabel=styled_components_1.default.label(templateObject_2||(templateObject_2=(0,tslib_1.__makeTemplateObject)(["\n  display: inline-block;\n  cursor: pointer;\n  vertical-align: middle;\n  position: relative;\n  text-overflow: ellipsis;\n  overflow: hidden;\n\n  overflow-wrap: break-word;\n  line-height: 20px;\n"],["\n  display: inline-block;\n  cursor: pointer;\n  vertical-align: middle;\n  position: relative;\n  text-overflow: ellipsis;\n  overflow: hidden;\n\n  overflow-wrap: break-word;\n  line-height: 20px;\n"]))),CheckBoxWrap=styled_components_1.default.div(templateObject_3||(templateObject_3=(0,tslib_1.__makeTemplateObject)(["\n  width: ",";\n  display: inline-flex;\n  align-items: center;\n\n  & > label {\n    white-space: ",";\n  }\n"],["\n  width: ",";\n  display: inline-flex;\n  align-items: center;\n\n  & > label {\n    white-space: ",";\n  }\n"])),(function(e){return e.fullWidth?"100%":"50%"}),(function(e){return e.nowrap?"nowrap":"normal"}));function CheckboxComponent(e,t){var n=e.fullWidth,l=e.id,i=e.label,r=e.nowrap;return React.createElement(CheckBoxWrap,{fullWidth:n,nowrap:r},React.createElement(exports.StyledInput,(0,tslib_1.__assign)({},e,{type:"checkbox",ref:t})),React.createElement(CheckboxLabel,{htmlFor:l},i))}exports.Checkbox=React.forwardRef(CheckboxComponent);
//# sourceMappingURL=Checkbox.js.map