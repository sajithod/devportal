"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.SanitizedMarkdownHTML=void 0;var tslib_1=require("tslib"),dompurify_1=(0,tslib_1.__importDefault)(require("dompurify")),React=(0,tslib_1.__importStar)(require("react")),OptionsProvider_1=require("../OptionsProvider"),styled_elements_1=require("./styled.elements");function SanitizedMarkdownHTML(e){var t,i,r,o=React.useContext(OptionsProvider_1.OptionsContext),n=e.inline?styled_elements_1.StyledMarkdownSpan:styled_elements_1.StyledMarkdownBlock,l=(null===(t=o.hooks)||void 0===t?void 0:t.sanitize)?null===(r=null===(i=o.hooks)||void 0===i?void 0:i.sanitize)||void 0===r?void 0:r.call(i,e.html):o.untrustedDefinition?dompurify_1.default.sanitize(e.html):e.html;return React.createElement(n,(0,tslib_1.__assign)({className:"redoc-markdown "+(e.className||""),dangerouslySetInnerHTML:{__html:l},"data-role":e["data-role"]},e))}exports.SanitizedMarkdownHTML=SanitizedMarkdownHTML;
//# sourceMappingURL=SanitizedMdBlock.js.map