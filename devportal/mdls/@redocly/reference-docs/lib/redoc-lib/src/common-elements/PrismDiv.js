"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.PrismDiv=void 0;var templateObject_1,tslib_1=require("tslib"),styled_components_1=(0,tslib_1.__importStar)(require("../styled-components"));exports.PrismDiv=styled_components_1.default.div(templateObject_1||(templateObject_1=(0,tslib_1.__makeTemplateObject)(["\n  /**\n  * Based on prism-dark.css\n  */\n\n  code[class*='language-'],\n  pre[class*='language-'] {\n    /* color: white;\n    background: none; */\n    text-shadow: 0 -0.1em 0.2em black;\n    text-align: left;\n    white-space: pre;\n    word-spacing: normal;\n    word-break: normal;\n    word-wrap: normal;\n    line-height: 1.5;\n\n    -moz-tab-size: 4;\n    -o-tab-size: 4;\n    tab-size: 4;\n\n    -webkit-hyphens: none;\n    -moz-hyphens: none;\n    -ms-hyphens: none;\n    hyphens: none;\n  }\n\n  @media print {\n    code[class*='language-'],\n    pre[class*='language-'] {\n      text-shadow: none;\n    }\n  }\n\n  /* Code blocks */\n  pre[class*='language-'] {\n    padding: 1em;\n    margin: 0.5em 0;\n    overflow: auto;\n  }\n\n  .token.comment,\n  .token.prolog,\n  .token.doctype,\n  .token.cdata {\n    color: hsl(30, 20%, 50%);\n  }\n\n  .token.punctuation {\n    opacity: 1;\n  }\n\n  .namespace {\n    opacity: 0.7;\n  }\n\n  .token.property,\n  .token.tag,\n  .token.number,\n  .token.constant,\n  .token.symbol {\n    color: ",";\n  }\n\n  .token.boolean {\n    color: ",";\n  }\n\n  .token.selector,\n  .token.attr-name,\n  .token.string,\n  .token.char,\n  .token.builtin,\n  .token.inserted {\n    color: #fee39e;\n\n    & + a,\n    & + a:visited {\n      color: #4ed2ba;\n      text-decoration: underline;\n    }\n  }\n\n  .token.property.string {\n    color: #9efaa7;\n  }\n\n  .token.operator,\n  .token.entity,\n  .token.url,\n  .token.variable {\n    color: #f5b83d;\n  }\n\n  .token.atrule,\n  .token.attr-value,\n  .token.keyword {\n    color: #ffdbf4;\n  }\n\n  .token.regex,\n  .token.important {\n    color: #e90;\n  }\n\n  .token.important,\n  .token.bold {\n    font-weight: bold;\n  }\n\n  .token.italic {\n    font-style: italic;\n  }\n\n  .token.entity {\n    cursor: help;\n  }\n\n  .token.deleted {\n    color: red;\n  }\n\n  ",";\n"],["\n  /**\n  * Based on prism-dark.css\n  */\n\n  code[class*='language-'],\n  pre[class*='language-'] {\n    /* color: white;\n    background: none; */\n    text-shadow: 0 -0.1em 0.2em black;\n    text-align: left;\n    white-space: pre;\n    word-spacing: normal;\n    word-break: normal;\n    word-wrap: normal;\n    line-height: 1.5;\n\n    -moz-tab-size: 4;\n    -o-tab-size: 4;\n    tab-size: 4;\n\n    -webkit-hyphens: none;\n    -moz-hyphens: none;\n    -ms-hyphens: none;\n    hyphens: none;\n  }\n\n  @media print {\n    code[class*='language-'],\n    pre[class*='language-'] {\n      text-shadow: none;\n    }\n  }\n\n  /* Code blocks */\n  pre[class*='language-'] {\n    padding: 1em;\n    margin: 0.5em 0;\n    overflow: auto;\n  }\n\n  .token.comment,\n  .token.prolog,\n  .token.doctype,\n  .token.cdata {\n    color: hsl(30, 20%, 50%);\n  }\n\n  .token.punctuation {\n    opacity: 1;\n  }\n\n  .namespace {\n    opacity: 0.7;\n  }\n\n  .token.property,\n  .token.tag,\n  .token.number,\n  .token.constant,\n  .token.symbol {\n    color: ",";\n  }\n\n  .token.boolean {\n    color: ",";\n  }\n\n  .token.selector,\n  .token.attr-name,\n  .token.string,\n  .token.char,\n  .token.builtin,\n  .token.inserted {\n    color: #fee39e;\n\n    & + a,\n    & + a:visited {\n      color: #4ed2ba;\n      text-decoration: underline;\n    }\n  }\n\n  .token.property.string {\n    color: #9efaa7;\n  }\n\n  .token.operator,\n  .token.entity,\n  .token.url,\n  .token.variable {\n    color: #f5b83d;\n  }\n\n  .token.atrule,\n  .token.attr-value,\n  .token.keyword {\n    color: #ffdbf4;\n  }\n\n  .token.regex,\n  .token.important {\n    color: #e90;\n  }\n\n  .token.important,\n  .token.bold {\n    font-weight: bold;\n  }\n\n  .token.italic {\n    font-style: italic;\n  }\n\n  .token.entity {\n    cursor: help;\n  }\n\n  .token.deleted {\n    color: red;\n  }\n\n  ",";\n"])),(function(n){return n.theme.colors.text.light}),(function(n){return n.theme.colors.error.main}),(0,styled_components_1.extensionsHook)("Prism"));
//# sourceMappingURL=PrismDiv.js.map