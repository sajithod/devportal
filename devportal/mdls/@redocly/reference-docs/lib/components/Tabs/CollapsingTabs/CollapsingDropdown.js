"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.CollapsingDropdown=void 0;var templateObject_1,tslib_1=require("tslib"),styled_components_1=(0,tslib_1.__importDefault)(require("../../../redoc-lib/src/styled-components")),dropdown_1=require("../../../redoc-lib/src/common-elements/dropdown");exports.CollapsingDropdown=(0,styled_components_1.default)(dropdown_1.Dropdown)(templateObject_1||(templateObject_1=(0,tslib_1.__makeTemplateObject)(["\n  ",";\n\n  padding: 5px 10px;\n  height: 40px;\n\n  border-top-left-radius: 0;\n  border-top-right-radius: ",";\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n\n  margin: 0 0 -4px;\n  transition: none;\n  min-width: auto;\n  background: ",";\n  & {\n    border-bottom: 4px solid\n      ",";\n\n    &[open],\n    &:focus-within,\n    &:hover {\n      background: ",";\n      border-bottom: 4px solid\n        ",";\n    }\n  }\n\n  .dropdown-selector {\n    justify-content: center;\n  }\n\n  .dropdown-selector-value {\n    line-height: 26px;\n    font-family: ",";\n    text-align: center;\n  }\n\n  .dropdown-selector-content {\n    margin-top: 7px;\n    left: auto;\n    width: auto;\n  }\n\n  .dropdown-option {\n    justify-content: center;\n  }\n"],["\n  ",";\n\n  padding: 5px 10px;\n  height: 40px;\n\n  border-top-left-radius: 0;\n  border-top-right-radius: ",";\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n\n  margin: 0 0 -4px;\n  transition: none;\n  min-width: auto;\n  background: ",";\n  & {\n    border-bottom: 4px solid\n      ",";\n\n    &[open],\n    &:focus-within,\n    &:hover {\n      background: ",";\n      border-bottom: 4px solid\n        ",";\n    }\n  }\n\n  .dropdown-selector {\n    justify-content: center;\n  }\n\n  .dropdown-selector-value {\n    line-height: 26px;\n    font-family: ",";\n    text-align: center;\n  }\n\n  .dropdown-selector-content {\n    margin-top: 7px;\n    left: auto;\n    width: auto;\n  }\n\n  .dropdown-option {\n    justify-content: center;\n  }\n"])),dropdown_1.darkDropdownStyle,(function(n){return n.theme.shape.borderRadius}),(function(n){var t=n.theme;return n.active?t.colors.border.dark:"none"}),(function(n){var t=n.active,o=n.theme;return t?o.colors.accent.main:"transparent"}),(function(n){return n.theme.colors.border.dark}),(function(n){var t=n.active,o=n.theme;return t?o.colors.accent.main:"transparent"}),(function(n){return n.theme.typography.fontFamily}));
//# sourceMappingURL=CollapsingDropdown.js.map