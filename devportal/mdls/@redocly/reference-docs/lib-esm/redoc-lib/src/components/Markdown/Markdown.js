import{__assign,__rest}from"tslib";import*as React from"react";import{MarkdownRenderer}from"../../services";import{SanitizedMarkdownHTML}from"./SanitizedMdBlock";export var Markdown=function(r){var e=r.source,t=__rest(r,["source"]),n=new MarkdownRenderer;return React.createElement(SanitizedMarkdownHTML,__assign({},t,{html:n.renderMd(e)}))};
//# sourceMappingURL=Markdown.js.map