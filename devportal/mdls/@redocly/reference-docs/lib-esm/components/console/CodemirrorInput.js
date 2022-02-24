import{__extends,__makeTemplateObject}from"tslib";import*as React from"react";import{createGlobalStyle}from"../../redoc-lib";import{asField}from"informed";import{Controlled as CodeMirror}from"react-codemirror2";import"./codemirror-helpers";var templateObject_1,CodeMirrorStyles=createGlobalStyle(templateObject_1||(templateObject_1=__makeTemplateObject(["\n  .cm-s-material.CodeMirror {\n    background-color: ","!important;\n    color: ","!important;\n    font-family: ",";\n    line-height: 18px;\n    padding: 10px;\n  }\n\n  .CodeMirror-lint-mark-error {\n    background-size: 4px;\n    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAYAAAD+Bd/7AAAAVUlEQVR42mNgQAL/GRjigPg/EP8FYntkCX4gtoVKgvE/BoabcEVAhj6S5DUgfgFl/wFJ2gPxL6iuT1DF+kD2R5AYA5KRj6CS/FAMYvszIBltz4AFAAD9fz0YtLg13wAAAABJRU5ErkJggg==') !important;\n  }\n\n  .cm-s-material.CodeMirror-focused div.CodeMirror-selected {\n    background: rgba(255, 255, 255, 0.3) !important;\n  }\n\n  .cm-s-material .CodeMirror-code .cm-string.cm-property {\n    color: #9EFAA7;\n  }\n\n  .cm-s-material .CodeMirror-code .cm-string {\n    color: #FEE39E;\n  }\n\n  .cm-s-material .CodeMirror-code .cm-atom {\n    color: ",";\n  }\n\n  div .cm-s-material .CodeMirror-matchingbracket {\n    outline: 1px solid grey;\n    text-decoration: none;\n  }\n\n  .react-codemirror2 {\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    overflow: hidden;\n\n    flex: 1;\n  }\n\n  .CodeMirror {\n    flex: 1;\n    border-radius: ",";\n  }\n"],["\n  .cm-s-material.CodeMirror {\n    background-color: ","!important;\n    color: ","!important;\n    font-family: ",";\n    line-height: 18px;\n    padding: 10px;\n  }\n\n  .CodeMirror-lint-mark-error {\n    background-size: 4px;\n    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAYAAAD+Bd/7AAAAVUlEQVR42mNgQAL/GRjigPg/EP8FYntkCX4gtoVKgvE/BoabcEVAhj6S5DUgfgFl/wFJ2gPxL6iuT1DF+kD2R5AYA5KRj6CS/FAMYvszIBltz4AFAAD9fz0YtLg13wAAAABJRU5ErkJggg==') !important;\n  }\n\n  .cm-s-material.CodeMirror-focused div.CodeMirror-selected {\n    background: rgba(255, 255, 255, 0.3) !important;\n  }\n\n  .cm-s-material .CodeMirror-code .cm-string.cm-property {\n    color: #9EFAA7;\n  }\n\n  .cm-s-material .CodeMirror-code .cm-string {\n    color: #FEE39E;\n  }\n\n  .cm-s-material .CodeMirror-code .cm-atom {\n    color: ",";\n  }\n\n  div .cm-s-material .CodeMirror-matchingbracket {\n    outline: 1px solid grey;\n    text-decoration: none;\n  }\n\n  .react-codemirror2 {\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    overflow: hidden;\n\n    flex: 1;\n  }\n\n  .CodeMirror {\n    flex: 1;\n    border-radius: ",";\n  }\n"])),(function(e){return e.theme.rightPanel.panelControlsBackgroundColor}),(function(e){return e.theme.colors.text.light}),(function(e){return e.theme.typography.code.fontFamily}),(function(e){return e.theme.colors.text.light}),(function(e){return e.theme.components.panels.borderRadius})),CodemirrorInput=function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return Object.defineProperty(r,"editor",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(r,"_onKeyUp",{enumerable:!0,configurable:!0,writable:!0,value:function(e,n){/^[a-zA-Z0-9_":]$/.test(n.key)&&r.editor.execCommand("autocomplete")}}),Object.defineProperty(r,"initEditor",{enumerable:!0,configurable:!0,writable:!0,value:function(e){r.editor=e,e.on("keyup",r._onKeyUp)}}),Object.defineProperty(r,"refreshEditor",{enumerable:!0,configurable:!0,writable:!0,value:function(){r.editor.refresh()}}),r}return __extends(r,e),Object.defineProperty(r.prototype,"componentDidMount",{enumerable:!1,configurable:!0,writable:!0,value:function(){var e=this;setTimeout((function(){e.editor.refresh()}),0),document.addEventListener("click",this.refreshEditor)}}),Object.defineProperty(r.prototype,"componentWillUnmount",{enumerable:!1,configurable:!0,writable:!0,value:function(){document.removeEventListener("click",this.refreshEditor)}}),Object.defineProperty(r.prototype,"render",{enumerable:!1,configurable:!0,writable:!0,value:function(){var e=this,r=this.props.fieldState.value,n=this.props.fieldApi,o=n.setValue,t=n.setTouched,i=n.setError,a=this.props,l=a.onChange,c=a.onBlur,d=a.forwardedRef;return React.createElement(React.Fragment,null,React.createElement(CodeMirrorStyles,null),React.createElement(CodeMirror,{editorDidMount:this.initEditor,value:r||"",ref:d||void 0,onBeforeChange:function(e,r,n){o(n),l&&l(n)},onBlur:function(e){t(),c&&c(e)},options:{mode:this.props.mode||"application/json",theme:"material",matchBrackets:!0,autoCloseBrackets:!0,tabSize:2,foldGutter:!0,extraKeys:{"Cmd-Space":function(){return e.editor.showHint({completeSingle:!0})},"Ctrl-Space":function(){return e.editor.showHint({completeSingle:!0})}},hintOptions:{id:this.props.id,completeSingle:!1,schema:this.props.schema},lint:{id:this.props.id,schema:this.props.schema,setError:i}}}))}}),r}(React.Component);export{CodemirrorInput};export default asField(CodemirrorInput);
//# sourceMappingURL=CodemirrorInput.js.map