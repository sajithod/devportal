"use strict";var _a,_b,_c;Object.defineProperty(exports,"__esModule",{value:!0}),exports.StyledPre=exports.SampleControlsWrap=exports.SampleControls=exports.SamplesControlButton=void 0;var templateObject_1,templateObject_2,templateObject_3,templateObject_4,tslib_1=require("tslib"),polished_1=require("polished"),styled_components_1=(0,tslib_1.__importStar)(require("../styled-components")),PrismDiv_1=require("./PrismDiv");exports.SamplesControlButton=styled_components_1.default.button(templateObject_1||(templateObject_1=(0,tslib_1.__makeTemplateObject)(["\n  background-color: ",";\n  border: 0;\n  outline: 0;\n  border-radius: ",";\n  height: 20px;\n  color: ",";\n  font-size: 12px;\n  line-height: 12px;\n  cursor: pointer;\n\n  ","\n\n  :hover,\n  :focus {\n    background: ",";\n  }\n"],["\n  background-color: ",";\n  border: 0;\n  outline: 0;\n  border-radius: ",";\n  height: 20px;\n  color: ",";\n  font-size: 12px;\n  line-height: 12px;\n  cursor: pointer;\n\n  ","\n\n  :hover,\n  :focus {\n    background: ",";\n  }\n"])),(function(e){return e.theme.rightPanel.panelControlsBackgroundColor}),(function(e){return e.theme.shape.borderRadius}),(function(e){return e.theme.colors.text.light}),(0,styled_components_1.mediaCSS)({padding:(_a={},_a[styled_components_1.ZERO_BREAKPOINT]="2px 15px",_a.small="2px 20px",_a),minWidth:(_b={},_b[styled_components_1.ZERO_BREAKPOINT]="auto",_b.small="90px",_b)}),(function(e){var n=e.theme;return(0,polished_1.lighten)(.05,n.rightPanel.panelControlsBackgroundColor)})),exports.SampleControls=styled_components_1.default.div(templateObject_2||(templateObject_2=(0,tslib_1.__makeTemplateObject)(["\n  padding: 5px 0 10px;\n  opacity: 0.7;\n  transition: opacity 0.3s ease;\n  text-align: right;\n\n  &:focus-within {\n    opacity: 1;\n  }\n\n  > div,\n  > "," {\n    /* can have tooltip wrapper div also */\n    margin-top: 5px;\n    ","\n    &:first-child {\n      margin-left: 0;\n    }\n  }\n"],["\n  padding: 5px 0 10px;\n  opacity: 0.7;\n  transition: opacity 0.3s ease;\n  text-align: right;\n\n  &:focus-within {\n    opacity: 1;\n  }\n\n  > div,\n  > "," {\n    /* can have tooltip wrapper div also */\n    margin-top: 5px;\n    ","\n    &:first-child {\n      margin-left: 0;\n    }\n  }\n"])),exports.SamplesControlButton,(0,styled_components_1.mediaCSS)({marginLeft:(_c={},_c[styled_components_1.ZERO_BREAKPOINT]="5px",_c.small="10px",_c)})),exports.SampleControlsWrap=styled_components_1.default.div(templateObject_3||(templateObject_3=(0,tslib_1.__makeTemplateObject)(["\n  &:hover "," {\n    opacity: 1;\n  }\n"],["\n  &:hover "," {\n    opacity: 1;\n  }\n"])),exports.SampleControls),exports.StyledPre=(0,styled_components_1.default)(PrismDiv_1.PrismDiv.withComponent("pre"))(templateObject_4||(templateObject_4=(0,tslib_1.__makeTemplateObject)(["\n  overflow-x: auto;\n  margin: 0;\n  font-family: ",";\n  padding: 20px;\n  ",";\n"],["\n  overflow-x: auto;\n  margin: 0;\n  font-family: ",";\n  padding: 20px;\n  ",";\n"])),(function(e){return e.theme.typography.code.fontFamily}),(function(e){var n=e.theme;return(0,styled_components_1.mediaCSS)({borderRadius:n.shape.borderRadius,backgroundColor:n.rightPanel.panelControlsBackgroundColor,color:n.colors.text.light,fontSize:n.typography.code.fontSize,whiteSpace:n.typography.code.wrap?"pre-wrap":"pre"})}));
//# sourceMappingURL=samples.js.map