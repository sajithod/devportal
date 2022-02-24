import{__assign,__extends}from"tslib";import*as React from"react";import{MarkdownRenderer}from"../../services";import{SanitizedMarkdownHTML}from"./SanitizedMdBlock";import{OptionsConsumer}from"../OptionsProvider";import{StoreConsumer}from"../StoreBuilder";var AdvancedMarkdown=function(e){function r(){return null!==e&&e.apply(this,arguments)||this}return __extends(r,e),Object.defineProperty(r.prototype,"render",{enumerable:!1,configurable:!0,writable:!0,value:function(){var e=this;return React.createElement(OptionsConsumer,null,(function(r){return React.createElement(StoreConsumer,null,(function(n){return e.renderWithOptionsAndStore(r,n)}))}))}}),Object.defineProperty(r.prototype,"renderWithOptionsAndStore",{enumerable:!1,configurable:!0,writable:!0,value:function(e,r){var n=this.props,t=n.source,o=n.htmlWrap,i=void 0===o?function(e){return e}:o;if(!r)throw new Error("When using components in markdown, store prop must be provided");var a=new MarkdownRenderer(e).renderMdWithComponents(t);return a.length?a.map((function(e,n){return"string"==typeof e?React.cloneElement(i(React.createElement(SanitizedMarkdownHTML,{html:e,inline:!1,compact:!1})),{key:n}):React.createElement(e.component,__assign({key:n},__assign(__assign({},e.props),e.propsSelector(r))))})):null}}),r}(React.Component);export{AdvancedMarkdown};
//# sourceMappingURL=AdvancedMarkdown.js.map