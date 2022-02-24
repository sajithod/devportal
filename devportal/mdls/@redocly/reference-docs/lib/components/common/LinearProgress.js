"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.LinearProgress=void 0;var templateObject_1,tslib_1=require("tslib"),React=(0,tslib_1.__importStar)(require("react")),redoc_lib_1=require("../../redoc-lib"),LoadingLine=redoc_lib_1.styled.div(templateObject_1||(templateObject_1=(0,tslib_1.__makeTemplateObject)(["\n  position: relative;\n  height: 4px;\n  display: block;\n  width: 100%;\n  background-color: ",";\n  border-radius: ",";\n  background-clip: padding-box;\n  margin: 0.5rem 0 1rem 0;\n  overflow: hidden;\n\n  .determinate {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    background-color: ",";\n    transition: width 0.3s linear;\n  }\n  .indeterminate {\n    background-color: ",";\n  }\n  .indeterminate:before {\n    content: '';\n    position: absolute;\n    background-color: inherit;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    will-change: left, right;\n    -webkit-animation: indeterminate 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;\n    animation: indeterminate 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;\n  }\n  .indeterminate:after {\n    content: '';\n    position: absolute;\n    background-color: inherit;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    will-change: left, right;\n    -webkit-animation: indeterminate-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;\n    animation: indeterminate-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;\n    -webkit-animation-delay: 1.15s;\n    animation-delay: 1.15s;\n  }\n\n  @-webkit-keyframes indeterminate {\n    0% {\n      left: -35%;\n      right: 100%;\n    }\n    60% {\n      left: 100%;\n      right: -90%;\n    }\n    100% {\n      left: 100%;\n      right: -90%;\n    }\n  }\n  @keyframes indeterminate {\n    0% {\n      left: -35%;\n      right: 100%;\n    }\n    60% {\n      left: 100%;\n      right: -90%;\n    }\n    100% {\n      left: 100%;\n      right: -90%;\n    }\n  }\n  @-webkit-keyframes indeterminate-short {\n    0% {\n      left: -200%;\n      right: 100%;\n    }\n    60% {\n      left: 107%;\n      right: -8%;\n    }\n    100% {\n      left: 107%;\n      right: -8%;\n    }\n  }\n  @keyframes indeterminate-short {\n    0% {\n      left: -200%;\n      right: 100%;\n    }\n    60% {\n      left: 107%;\n      right: -8%;\n    }\n    100% {\n      left: 107%;\n      right: -8%;\n    }\n  }\n"],["\n  position: relative;\n  height: 4px;\n  display: block;\n  width: 100%;\n  background-color: ",";\n  border-radius: ",";\n  background-clip: padding-box;\n  margin: 0.5rem 0 1rem 0;\n  overflow: hidden;\n\n  .determinate {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    background-color: ",";\n    transition: width 0.3s linear;\n  }\n  .indeterminate {\n    background-color: ",";\n  }\n  .indeterminate:before {\n    content: '';\n    position: absolute;\n    background-color: inherit;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    will-change: left, right;\n    -webkit-animation: indeterminate 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;\n    animation: indeterminate 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;\n  }\n  .indeterminate:after {\n    content: '';\n    position: absolute;\n    background-color: inherit;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    will-change: left, right;\n    -webkit-animation: indeterminate-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;\n    animation: indeterminate-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;\n    -webkit-animation-delay: 1.15s;\n    animation-delay: 1.15s;\n  }\n\n  @-webkit-keyframes indeterminate {\n    0% {\n      left: -35%;\n      right: 100%;\n    }\n    60% {\n      left: 100%;\n      right: -90%;\n    }\n    100% {\n      left: 100%;\n      right: -90%;\n    }\n  }\n  @keyframes indeterminate {\n    0% {\n      left: -35%;\n      right: 100%;\n    }\n    60% {\n      left: 100%;\n      right: -90%;\n    }\n    100% {\n      left: 100%;\n      right: -90%;\n    }\n  }\n  @-webkit-keyframes indeterminate-short {\n    0% {\n      left: -200%;\n      right: 100%;\n    }\n    60% {\n      left: 107%;\n      right: -8%;\n    }\n    100% {\n      left: 107%;\n      right: -8%;\n    }\n  }\n  @keyframes indeterminate-short {\n    0% {\n      left: -200%;\n      right: 100%;\n    }\n    60% {\n      left: 107%;\n      right: -8%;\n    }\n    100% {\n      left: 107%;\n      right: -8%;\n    }\n  }\n"])),(function(n){return n.theme.colors.accent.light}),(function(n){return n.theme.shape.borderRadius}),(function(n){return n.theme.colors.accent.main}),(function(n){return n.theme.colors.accent.main})),LinearProgress=function(){return React.createElement(LoadingLine,null,React.createElement("div",{className:"indeterminate"}))};exports.LinearProgress=LinearProgress;
//# sourceMappingURL=LinearProgress.js.map