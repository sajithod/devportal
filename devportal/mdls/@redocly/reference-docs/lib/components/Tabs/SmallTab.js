"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.SmallTab=void 0;var templateObject_1,tslib_1=require("tslib"),styled_components_1=(0,tslib_1.__importDefault)(require("../../redoc-lib/src/styled-components")),Tab_1=require("./Tab");exports.SmallTab=(0,styled_components_1.default)(Tab_1.Tab)(templateObject_1||(templateObject_1=(0,tslib_1.__makeTemplateObject)(["\n  flex: 0 0 auto;\n  padding: 2px 5px;\n  margin-right: 1px;\n  font-size: 12px;\n  min-width: 112px;\n  line-height: 16px;\n  background: ",";\n\n  &:last-child {\n    margin-right: 0;\n  }\n\n  &.react-tabs__tab--selected {\n    background: ",";\n    color: ",";\n    border-bottom: none;\n    margin-bottom: 0;\n  }\n\n  ","\n\n  ","\n"],["\n  flex: 0 0 auto;\n  padding: 2px 5px;\n  margin-right: 1px;\n  font-size: 12px;\n  min-width: 112px;\n  line-height: 16px;\n  background: ",";\n\n  &:last-child {\n    margin-right: 0;\n  }\n\n  &.react-tabs__tab--selected {\n    background: ",";\n    color: ",";\n    border-bottom: none;\n    margin-bottom: 0;\n  }\n\n  ","\n\n  ","\n"])),(function(n){return n.theme.rightPanel.panelControlsBackgroundColor}),(function(n){return n.theme.colors.accent.main}),(function(n){return n.theme.colors.text.light}),(function(n){return n.$error&&"&::after {\n      content: '';\n      display: inline-block;\n      background-color: rgb(255, 77, 77);\n      border-radius: 50%; // for small red dot near text\n      margin-left: 2px;\n      height: 6px;\n      width: 6px;\n  }"}),(function(n){return n.$success&&"&::after {\n      content: '';\n      display: inline-block;\n      background-color: rgb(75, 210, 143);\n      border-radius: 50%; // for small green dot near text\n      margin-left: 2px;\n      height: 6px;\n      width: 6px;\n  }"}));
//# sourceMappingURL=SmallTab.js.map