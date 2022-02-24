"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.ConsoleBadges=void 0;var templateObject_1,templateObject_2,tslib_1=require("tslib"),React=(0,tslib_1.__importStar)(require("react")),polished_1=require("polished"),redoc_lib_1=require("../../redoc-lib"),BadgesWrap=redoc_lib_1.styled.div(templateObject_1||(templateObject_1=(0,tslib_1.__makeTemplateObject)(["\n  display: flex;\n  font-size: 12px;\n  button {\n    margin: 0;\n  }\n"],["\n  display: flex;\n  font-size: 12px;\n  button {\n    margin: 0;\n  }\n"]))),Badge=redoc_lib_1.styled.button(templateObject_2||(templateObject_2=(0,tslib_1.__makeTemplateObject)(["\n  outline: none;\n  border: none;\n  background-color: ",";\n  text-align: center;\n  cursor: pointer;\n  color: ",";\n  min-width: 80px;\n  min-height: 30px;\n  border-radius: ",";\n  font-size: 12px;\n\n  padding: 0 10px;\n\n  border-top: 4px solid transparent;\n  border-bottom: 4px solid transparent;\n\n  &:first-child {\n    border-top-left-radius: ",";\n    border-top-right-radius: 0;\n    border-bottom-right-radius: 0;\n    border-bottom-left-radius: ",";\n  }\n\n  &:last-child {\n    border-top-left-radius: 0;\n    border-top-right-radius: ",";\n    border-bottom-right-radius: ",";\n    border-bottom-left-radius: 0;\n  }\n\n  ","\n\n  ","\n"],["\n  outline: none;\n  border: none;\n  background-color: ",";\n  text-align: center;\n  cursor: pointer;\n  color: ",";\n  min-width: 80px;\n  min-height: 30px;\n  border-radius: ",";\n  font-size: 12px;\n\n  padding: 0 10px;\n\n  border-top: 4px solid transparent;\n  border-bottom: 4px solid transparent;\n\n  &:first-child {\n    border-top-left-radius: ",";\n    border-top-right-radius: 0;\n    border-bottom-right-radius: 0;\n    border-bottom-left-radius: ",";\n  }\n\n  &:last-child {\n    border-top-left-radius: 0;\n    border-top-right-radius: ",";\n    border-bottom-right-radius: ",";\n    border-bottom-left-radius: 0;\n  }\n\n  ","\n\n  ","\n"])),(function(e){return e.theme.rightPanel.panelBackgroundColor}),(function(e){return e.theme.colors.text.light}),(function(e){return e.theme.shape.borderRadius}),(function(e){return e.theme.shape.borderRadius}),(function(e){return e.theme.shape.borderRadius}),(function(e){return e.theme.shape.borderRadius}),(function(e){return e.theme.shape.borderRadius}),(function(e){var n=e.active,t=e.theme;return n&&"\n    border-bottom: 4px solid "+t.colors.accent.main+";\n    background-color: "+(0,polished_1.darken)(.05,t.rightPanel.panelBackgroundColor)+";\n  "||""}),(function(e){var n=e.disabled,t=e.theme;return n&&"\n    cursor: default;\n    color:  "+(0,polished_1.transparentize)(.3,t.colors.text.light)+";\n  "||""})),ConsoleBadges=function(e){function n(){return null!==e&&e.apply(this,arguments)||this}return(0,tslib_1.__extends)(n,e),Object.defineProperty(n.prototype,"render",{enumerable:!1,configurable:!0,writable:!0,value:function(){var e=this.props,n=e.onChange,t=e.active,r=e.hasResponse;return React.createElement(BadgesWrap,null,React.createElement(Badge,{onClick:function(){return n(0)},active:0===t},r?"Edit Request":"Request"),React.createElement(Badge,{onClick:function(){return r&&n(1)},active:1===t,disabled:!r}," ","Response"," "))}}),n}(React.Component);exports.ConsoleBadges=ConsoleBadges;
//# sourceMappingURL=ConsoleBadges.js.map