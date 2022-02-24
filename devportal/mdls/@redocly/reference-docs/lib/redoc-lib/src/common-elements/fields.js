"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.ToggleButton=exports.PatternLabel=exports.ConstraintItem=exports.ExtensionValue=exports.ExampleValue=exports.RecursiveLabel=exports.RequiredLabel=exports.TypeFormat=exports.TypeTitle=exports.TypeName=exports.TypePrefix=exports.FieldLabel=exports.ClickablePropertyNameCell=void 0;var templateObject_1,templateObject_2,templateObject_3,templateObject_4,templateObject_5,templateObject_6,templateObject_7,templateObject_8,templateObject_9,templateObject_10,templateObject_11,templateObject_12,tslib_1=require("tslib"),styled_components_1=(0,tslib_1.__importStar)(require("../styled-components")),fields_layout_1=require("./fields-layout"),icons_1=require("./icons");exports.ClickablePropertyNameCell=(0,styled_components_1.default)(fields_layout_1.PropertyNameCell)(templateObject_1||(templateObject_1=(0,tslib_1.__makeTemplateObject)(["\n  button {\n    background-color: transparent;\n    border: 0;\n    outline: 0;\n    cursor: pointer;\n    padding: 0;\n    ","\n    &:focus {\n      font-weight: ",";\n    }\n  }\n  "," {\n    margin-left: 4px;\n    height: ",";\n    width: ",";\n    fill: ",";\n    margin-top: -1px;\n  }\n\n  ",";\n"],["\n  button {\n    background-color: transparent;\n    border: 0;\n    outline: 0;\n    cursor: pointer;\n    padding: 0;\n    ","\n    &:focus {\n      font-weight: ",";\n    }\n  }\n  "," {\n    margin-left: 4px;\n    height: ",";\n    width: ",";\n    fill: ",";\n    margin-top: -1px;\n  }\n\n  ",";\n"])),(function(e){var t=e.theme;return(0,styled_components_1.mediaCSS)({fontFamily:t.typography.fieldName.fontFamily,fontSize:t.typography.fieldName.fontSize,color:t.colors.text.primary})}),(function(e){return e.theme.typography.fontWeightBold}),icons_1.ShelfIcon,(function(e){return e.theme.schema.caretSize}),(function(e){return e.theme.schema.caretSize}),(function(e){return e.theme.schema.caretColor}),(0,styled_components_1.extensionsHook)("ClickablePropertyNameCell")),exports.FieldLabel=styled_components_1.default.span(templateObject_2||(templateObject_2=(0,tslib_1.__makeTemplateObject)(["\n  vertical-align: middle;\n  line-height: 20px;\n  ",";\n"],["\n  vertical-align: middle;\n  line-height: 20px;\n  ",";\n"])),(function(e){var t=e.theme;return(0,styled_components_1.mediaCSS)({fontSize:t.typography.fieldName.fontSize})})),exports.TypePrefix=(0,styled_components_1.default)(exports.FieldLabel)(templateObject_3||(templateObject_3=(0,tslib_1.__makeTemplateObject)(["\n  color: ",";\n"],["\n  color: ",";\n"])),(function(e){return e.theme.schema.typeNameColor})),exports.TypeName=(0,styled_components_1.default)(exports.FieldLabel)(templateObject_4||(templateObject_4=(0,tslib_1.__makeTemplateObject)(["\n  color: ",";\n"],["\n  color: ",";\n"])),(function(e){return e.theme.schema.typeNameColor})),exports.TypeTitle=(0,styled_components_1.default)(exports.FieldLabel)(templateObject_5||(templateObject_5=(0,tslib_1.__makeTemplateObject)(["\n  color: ",";\n  word-break: break-word;\n"],["\n  color: ",";\n  word-break: break-word;\n"])),(function(e){return e.theme.schema.typeTitleColor})),exports.TypeFormat=exports.TypeName,exports.RequiredLabel=(0,styled_components_1.default)(exports.FieldLabel.withComponent("div"))(templateObject_6||(templateObject_6=(0,tslib_1.__makeTemplateObject)(["\n  color: ",";\n  font-size: ",";\n  font-weight: normal;\n  line-height: 1;\n  display: block;\n"],["\n  color: ",";\n  font-size: ",";\n  font-weight: normal;\n  line-height: 1;\n  display: block;\n"])),(function(e){return e.theme.schema.requireLabelColor}),(function(e){return e.theme.schema.labelsTextSize})),exports.RecursiveLabel=(0,styled_components_1.default)(exports.FieldLabel)(templateObject_7||(templateObject_7=(0,tslib_1.__makeTemplateObject)(["\n  color: ",";\n  font-size: 13px;\n"],["\n  color: ",";\n  font-size: 13px;\n"])),(function(e){return e.theme.colors.warning.main})),exports.ExampleValue=(0,styled_components_1.default)(exports.FieldLabel)(templateObject_8||(templateObject_8=(0,tslib_1.__makeTemplateObject)(["\n  border-radius: ",";\n  ","\n\n  ","\n\n  & + & {\n    margin-left: 0;\n  }\n  ",";\n  line-height: 1.2em;\n  display: inline-flex;\n  white-space: pre-wrap;\n  overflow-wrap: anywhere;\n"],["\n  border-radius: ",";\n  ","\n\n  ","\n\n  & + & {\n    margin-left: 0;\n  }\n  ",";\n  line-height: 1.2em;\n  display: inline-flex;\n  white-space: pre-wrap;\n  overflow-wrap: anywhere;\n"])),(function(e){return e.theme.shape.borderRadius}),(function(e){var t=e.theme;return"\n    background-color: "+t.colors.secondary.light+";\n    color: "+t.colors.text.primary+";\n    padding: 1px "+t.spacing.unit+"px;\n    border: 1px solid "+t.colors.border.light+";\n    font-size: 12px;\n  "}),(function(e){var t=e.theme;return(0,styled_components_1.mediaCSS)({fontFamily:t.typography.fieldName.fontFamily})}),(0,styled_components_1.extensionsHook)("ExampleValue")),exports.ExtensionValue=(0,styled_components_1.default)(exports.ExampleValue)(templateObject_9||(templateObject_9=(0,tslib_1.__makeTemplateObject)([""],[""]))),exports.ConstraintItem=(0,styled_components_1.default)(exports.FieldLabel)(templateObject_10||(templateObject_10=(0,tslib_1.__makeTemplateObject)(["\n  border-radius: ",";\n  ","\n\n  ","\n\n  & + & {\n    margin-left: 0;\n  }\n  ",";\n"],["\n  border-radius: ",";\n  ","\n\n  ","\n\n  & + & {\n    margin-left: 0;\n  }\n  ",";\n"])),(function(e){return e.theme.shape.borderRadius}),(function(e){var t=e.theme;return"\n    background-color: "+t.colors.secondary.light+";\n    color: "+t.colors.accent.dark+";\n    margin: 0 "+t.spacing.unit+"px;\n    padding: 1px "+t.spacing.unit+"px;\n    border: 1px solid "+t.colors.border.light+";\n    font-size: 12px;\n  "}),(function(e){var t=e.theme;return(0,styled_components_1.mediaCSS)({fontFamily:t.typography.fieldName.fontFamily})}),(0,styled_components_1.extensionsHook)("ConstraintItem")),exports.PatternLabel=(0,styled_components_1.default)(exports.ConstraintItem)(templateObject_11||(templateObject_11=(0,tslib_1.__makeTemplateObject)([""],[""]))),exports.ToggleButton=styled_components_1.default.button(templateObject_12||(templateObject_12=(0,tslib_1.__makeTemplateObject)(["\n  background-color: transparent;\n  border: 0;\n  color: ",";\n  margin-left: ","px;\n  border-radius: ",";\n  cursor: pointer;\n  outline-color: ",";\n  font-size: 12px;\n"],["\n  background-color: transparent;\n  border: 0;\n  color: ",";\n  margin-left: ","px;\n  border-radius: ",";\n  cursor: pointer;\n  outline-color: ",";\n  font-size: 12px;\n"])),(function(e){return e.theme.colors.text.secondary}),(function(e){return e.theme.spacing.unit}),(function(e){return e.theme.shape.borderRadius}),(function(e){return e.theme.colors.text.secondary}));
//# sourceMappingURL=fields.js.map