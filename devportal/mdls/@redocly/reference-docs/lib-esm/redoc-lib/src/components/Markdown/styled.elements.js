import{__makeTemplateObject}from"tslib";import{headerCommonMixin,linkifyMixin}from"../../common-elements";import{PrismDiv}from"../../common-elements/PrismDiv";import styled,{css,extensionsHook,mediaCSS}from"../../styled-components";export var linksCss=css(templateObject_1||(templateObject_1=__makeTemplateObject(["\n  a {\n    text-decoration: ",";\n    color: ",";\n\n    &:visited {\n      color: ",";\n    }\n\n    &:hover {\n      color: ",";\n    }\n  }\n"],["\n  a {\n    text-decoration: ",";\n    color: ",";\n\n    &:visited {\n      color: ",";\n    }\n\n    &:hover {\n      color: ",";\n    }\n  }\n"])),(function(n){return n.theme.typography.links.textDecoration}),(function(n){return n.theme.typography.links.color}),(function(n){return n.theme.typography.links.visited}),(function(n){return n.theme.typography.links.hover}));export var baseTable=css(templateObject_2||(templateObject_2=__makeTemplateObject(["\n  table {\n    display: block;\n    width: 100%;\n    overflow: auto;\n    word-break: keep-all;\n    border-collapse: separate;\n    border-spacing: 0;\n    margin-top: 20px;\n    margin-bottom: 20px;\n    font-size: 14px;\n  }\n\n  table th,\n  table td {\n    padding: 12px;\n    border-bottom: 1px solid ",";\n  }\n\n  table th {\n    text-align: left;\n    font-weight: bold;\n    background-color: ",";\n  }\n\n  table tr th:first-child,\n  table tr td:first-child {\n    border-left: 1px solid ",";\n  }\n\n  table tr td:last-child,\n  table tr th:last-child {\n    border-right: 1px solid ",";\n  }\n\n  table thead td,\n  table thead th {\n    border-top: 1px solid ",";\n  }\n\n  /* top-left border */\n  table thead tr:first-child th:first-child {\n    border-top-left-radius: ",";\n  }\n\n  /* top-right border */\n  table thead tr:first-child th:last-child {\n    border-top-right-radius: ",";\n    border-top: 1px solid ",";\n  }\n\n  /* bottom-left border */\n  table tbody tr:last-child td:first-child {\n    border-bottom-left-radius: ",";\n  }\n\n  /* bottom-right border */\n  table tbody tr:last-child td:last-child {\n    border-bottom-right-radius: ",";\n  }\n"],["\n  table {\n    display: block;\n    width: 100%;\n    overflow: auto;\n    word-break: keep-all;\n    border-collapse: separate;\n    border-spacing: 0;\n    margin-top: 20px;\n    margin-bottom: 20px;\n    font-size: 14px;\n  }\n\n  table th,\n  table td {\n    padding: 12px;\n    border-bottom: 1px solid ",";\n  }\n\n  table th {\n    text-align: left;\n    font-weight: bold;\n    background-color: ",";\n  }\n\n  table tr th:first-child,\n  table tr td:first-child {\n    border-left: 1px solid ",";\n  }\n\n  table tr td:last-child,\n  table tr th:last-child {\n    border-right: 1px solid ",";\n  }\n\n  table thead td,\n  table thead th {\n    border-top: 1px solid ",";\n  }\n\n  /* top-left border */\n  table thead tr:first-child th:first-child {\n    border-top-left-radius: ",";\n  }\n\n  /* top-right border */\n  table thead tr:first-child th:last-child {\n    border-top-right-radius: ",";\n    border-top: 1px solid ",";\n  }\n\n  /* bottom-left border */\n  table tbody tr:last-child td:first-child {\n    border-bottom-left-radius: ",";\n  }\n\n  /* bottom-right border */\n  table tbody tr:last-child td:last-child {\n    border-bottom-right-radius: ",";\n  }\n"])),(function(n){return n.theme.colors.border.light}),(function(n){return n.theme.colors.secondary.light}),(function(n){return n.theme.colors.border.light}),(function(n){return n.theme.colors.border.light}),(function(n){return n.theme.colors.border.light}),(function(n){return n.theme.components.panels.borderRadius}),(function(n){return n.theme.components.panels.borderRadius}),(function(n){return n.theme.colors.border.light}),(function(n){return n.theme.components.panels.borderRadius}),(function(n){return n.theme.components.panels.borderRadius}));export var StyledMarkdownBlock=styled(PrismDiv)(templateObject_3||(templateObject_3=__makeTemplateObject(["\n  ","\n  p {\n    &:first-child {\n      margin-top: 0;\n    }\n\n    &:last-child {\n      margin-bottom: 0;\n    }\n  }\n\n  ","\n\n  ","\n\n  h1 {\n    ",";\n    color: ",";\n    margin-top: 0;\n  }\n\n  h2 {\n    ",";\n    color: ",";\n  }\n\n  code {\n    border-radius: ",";\n    border: 1px solid ",";\n    padding: 0 ","px;\n    word-break: break-word;\n    ","\n  }\n\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    > code {\n      font-size: inherit;\n    }\n  }\n\n  pre {\n    white-space: ",";\n    ","\n    color: white;\n    padding: ","px;\n    overflow-x: auto;\n    line-height: normal;\n    border-radius: ",";\n    border: 1px solid rgba(38, 50, 56, 0.1);\n\n    code {\n      background-color: transparent;\n      color: white;\n      padding: 0;\n      border: none;\n\n      &:before,\n      &:after {\n        content: none;\n      }\n    }\n  }\n\n  blockquote {\n    margin: 0;\n    margin-bottom: 1em;\n    padding: 0 15px;\n    color: #777;\n    border-left: 4px solid #ddd;\n  }\n\n  img {\n    max-width: 100%;\n    box-sizing: content-box;\n  }\n\n  ul,\n  ol {\n    padding-left: 2em;\n    margin: 0;\n    margin-bottom: 1em;\n\n    ul,\n    ol {\n      margin-bottom: 0;\n      margin-top: 0;\n    }\n  }\n\n  ","\n\n  ",";\n\n  ","\n\n  ",";\n"],["\n  ","\n  p {\n    &:first-child {\n      margin-top: 0;\n    }\n\n    &:last-child {\n      margin-bottom: 0;\n    }\n  }\n\n  ","\n\n  ","\n\n  h1 {\n    ",";\n    color: ",";\n    margin-top: 0;\n  }\n\n  h2 {\n    ",";\n    color: ",";\n  }\n\n  code {\n    border-radius: ",";\n    border: 1px solid ",";\n    padding: 0 ","px;\n    word-break: break-word;\n    ","\n  }\n\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    > code {\n      font-size: inherit;\n    }\n  }\n\n  pre {\n    white-space: ",";\n    ","\n    color: white;\n    padding: ","px;\n    overflow-x: auto;\n    line-height: normal;\n    border-radius: ",";\n    border: 1px solid rgba(38, 50, 56, 0.1);\n\n    code {\n      background-color: transparent;\n      color: white;\n      padding: 0;\n      border: none;\n\n      &:before,\n      &:after {\n        content: none;\n      }\n    }\n  }\n\n  blockquote {\n    margin: 0;\n    margin-bottom: 1em;\n    padding: 0 15px;\n    color: #777;\n    border-left: 4px solid #ddd;\n  }\n\n  img {\n    max-width: 100%;\n    box-sizing: content-box;\n  }\n\n  ul,\n  ol {\n    padding-left: 2em;\n    margin: 0;\n    margin-bottom: 1em;\n\n    ul,\n    ol {\n      margin-bottom: 0;\n      margin-top: 0;\n    }\n  }\n\n  ","\n\n  ",";\n\n  ","\n\n  ",";\n"])),(function(n){var t=n.theme;return mediaCSS({fontFamily:t.typography.fontFamily,fontWeight:t.typography.fontWeightRegular,lineHeight:t.typography.lineHeight})}),(function(n){return n.compact&&"\n    p:first-child {\n      margin-top: 0;\n    }\n    p:last-child {\n      margin-bottom: 0;\n    }\n  "}),(function(n){return n.inline&&" p {\n    display: inline-block;\n  }"}),headerCommonMixin(1),(function(n){return n.theme.colors.primary.main}),headerCommonMixin(2),(function(n){return n.theme.colors.text.primary}),(function(n){return n.theme.shape.borderRadius}),(function(n){return n.theme.colors.border.light}),(function(n){return n.theme.spacing.unit}),(function(n){var t=n.theme;return mediaCSS({fontFamily:t.typography.code.fontFamily,fontSize:t.typography.code.fontSize,color:t.typography.code.color,backgroundColor:t.colors.secondary.light,fontWeight:t.typography.code.fontWeight})}),(function(n){return n.theme.typography.code.wrap?"pre-wrap":"pre"}),(function(n){var t=n.theme;return mediaCSS({backgroundColor:t.codeBlock.backgroundColor,fontFamily:t.typography.code.fontFamily})}),(function(n){return 2*n.theme.spacing.unit}),(function(n){return n.theme.components.panels.borderRadius}),baseTable,linkifyMixin(".share-link","15px"),linksCss,extensionsHook("Markdown"));export var StyledMarkdownSpan=StyledMarkdownBlock.withComponent("span");var templateObject_1,templateObject_2,templateObject_3;
//# sourceMappingURL=styled.elements.js.map