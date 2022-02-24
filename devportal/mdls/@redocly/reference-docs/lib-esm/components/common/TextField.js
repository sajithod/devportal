import{__assign,__makeTemplateObject}from"tslib";import React from"react";import{asField}from"informed";import{useField}from"informed";import styled,{css,mediaCSS}from"../../redoc-lib/src/styled-components";import{FormError}from"./form";import{Dropdown}from"../../redoc-lib";export var invertedInputStyles=css(templateObject_1||(templateObject_1=__makeTemplateObject(["\n  border: none;\n  outline: none;\n  padding: 8px;\n  border-radius: ",";\n  background-color: ",";\n  ","\n\n  &::placeholder {\n    opacity: 0.6;\n    color: ",";\n  }\n\n  &:-webkit-autofill {\n    background-color: ",";\n  }\n"],["\n  border: none;\n  outline: none;\n  padding: 8px;\n  border-radius: ",";\n  background-color: ",";\n  ","\n\n  &::placeholder {\n    opacity: 0.6;\n    color: ",";\n  }\n\n  &:-webkit-autofill {\n    background-color: ",";\n  }\n"])),(function(e){return e.theme.shape.borderRadius}),(function(e){return e.theme.rightPanel.panelControlsBackgroundColor}),(function(e){var t=e.theme;return mediaCSS({color:t.colors.text.light,fontFamily:t.typography.code.fontFamily,fontSize:t.typography.fontSize})}),(function(e){return e.theme.colors.text.light}),(function(e){return e.theme.rightPanel.panelBackgroundColor}));var TextFieldWrapper=styled.div(templateObject_2||(templateObject_2=__makeTemplateObject(["\n  display: ",";\n  ","\n"],["\n  display: ",";\n  ","\n"])),(function(e){return"hidden"===e.type?"none":"inline-block"}),(function(e){return e.fullWidth?"width: 100%;":""})),InputWrap=styled.div(templateObject_3||(templateObject_3=__makeTemplateObject(["\n  position: relative;\n"],["\n  position: relative;\n"])));export var StyledInput=styled.input(templateObject_4||(templateObject_4=__makeTemplateObject(["\n  ","\n  ",";\n  ","\n"],["\n  ","\n  ",";\n  ","\n"])),invertedInputStyles,(function(e){var t=e.inputType,n=e.inputActionButton;return"password"===t||n?"padding-right: 40px;":""}),(function(e){return e.fullWidth?"width: 100%;":""}));var InputActionButton=styled.span(templateObject_5||(templateObject_5=__makeTemplateObject(["\n  position: absolute;\n  right: 0;\n  line-height: normal;\n\n  font-size: 0.8em;\n  padding: calc(8px / 0.8);\n  cursor: pointer;\n  text-align: center;\n  ","\n"],["\n  position: absolute;\n  right: 0;\n  line-height: normal;\n\n  font-size: 0.8em;\n  padding: calc(8px / 0.8);\n  cursor: pointer;\n  text-align: center;\n  ","\n"])),(function(e){var t=e.theme;return mediaCSS({color:t.rightPanel.textColor})}));function TextFieldComponent(e,t){var n=e.fullWidth,r=e.errorMessage,o=e.type,a=React.useState("password"===o),l=a[0],i=a[1],c=React.useCallback((function(){i(!l)}),[l]);return React.createElement(TextFieldWrapper,{fullWidth:n,type:o},React.createElement(InputWrap,null,React.createElement(StyledInput,__assign({},e,{type:l?"password":"text",inputType:o,ref:t})),e.inputActionButton?React.createElement(InputActionButton,{onClick:e.inputActionButton.onClick},e.inputActionButton.label):"password"===o?React.createElement(InputActionButton,{onClick:c},l?"show":"hide"):null),r?React.createElement(FormError,null,r):null)}export var TextField=React.forwardRef(TextFieldComponent);export function FormTextField(e){var t=useField(__assign({fieldType:"text"},e)),n=t.userProps,r=t.render,o=t.fieldState,a=t.informed;return r(React.createElement(TextField,__assign({},n,a,{errorMessage:o.error})))}var templateObject_1,templateObject_2,templateObject_3,templateObject_4,templateObject_5,FormDropdownInt=function(e){var t=e.initValue,n=e.options,r=e.fieldApi,o=e.fieldState,a=n.map((function(e,t){return{value:e.title||e.value,idx:t,origValue:e.value}})),l=a.find((function(e){return e.origValue===t})),i=React.useState(null==l?void 0:l.value),c=i[0],p=i[1];React.useEffect((function(){t&&r.setValue(t)}),[]);var u=React.useCallback((function(e){r.setValue(a[e.idx].origValue),p(a[e.idx].value)}),[a]);return React.createElement(TextFieldWrapper,{fullWidth:!0},React.createElement(Dropdown,{fullWidth:!0,variant:"dark",value:c,options:a,onChange:u}),o.error?React.createElement(FormError,null,o.error):null)};export var FormDropdown=asField(FormDropdownInt);
//# sourceMappingURL=TextField.js.map