"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.InfoSpanBox=exports.InfoSpanBoxWrap=exports.InfoSpan=exports.ApiHeader=exports.ApiInfoWrap=void 0;var templateObject_1,templateObject_2,templateObject_3,templateObject_4,tslib_1=require("tslib"),common_elements_1=require("../../common-elements"),styled_components_1=(0,tslib_1.__importStar)(require("../../styled-components")),delimiterWidth=15;exports.ApiInfoWrap=common_elements_1.MiddlePanel,exports.ApiHeader=(0,styled_components_1.default)(common_elements_1.H1)(templateObject_1||(templateObject_1=(0,tslib_1.__makeTemplateObject)(["\n  margin-top: 0;\n  margin-bottom: 0.5em;\n\n  ",";\n"],["\n  margin-top: 0;\n  margin-bottom: 0.5em;\n\n  ",";\n"])),(0,styled_components_1.extensionsHook)("ApiHeader")),exports.InfoSpan=styled_components_1.default.span(templateObject_2||(templateObject_2=(0,tslib_1.__makeTemplateObject)(["\n  &::before {\n    content: '|';\n    display: inline-block;\n    opacity: 0.5;\n    width: ","px;\n    text-align: center;\n  }\n\n  &:last-child::after {\n    display: none;\n  }\n"],["\n  &::before {\n    content: '|';\n    display: inline-block;\n    opacity: 0.5;\n    width: ","px;\n    text-align: center;\n  }\n\n  &:last-child::after {\n    display: none;\n  }\n"])),delimiterWidth),exports.InfoSpanBoxWrap=styled_components_1.default.div(templateObject_3||(templateObject_3=(0,tslib_1.__makeTemplateObject)(["\n  overflow: hidden;\n"],["\n  overflow: hidden;\n"]))),exports.InfoSpanBox=styled_components_1.default.div(templateObject_4||(templateObject_4=(0,tslib_1.__makeTemplateObject)(["\n  display: flex;\n  flex-wrap: wrap;\n  // hide separator on new lines: idea from https://stackoverflow.com/a/31732902/1749888\n  margin-left: -","px;\n"],["\n  display: flex;\n  flex-wrap: wrap;\n  // hide separator on new lines: idea from https://stackoverflow.com/a/31732902/1749888\n  margin-left: -","px;\n"])),delimiterWidth);
//# sourceMappingURL=styled.elements.js.map