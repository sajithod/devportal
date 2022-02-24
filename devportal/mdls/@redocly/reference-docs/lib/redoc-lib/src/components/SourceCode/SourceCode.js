"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.SourceCodeWithFile=exports.SourceCodeWithText=exports.SourceCode=void 0;var tslib_1=require("tslib"),React=(0,tslib_1.__importStar)(require("react")),utils_1=require("../../utils"),common_elements_1=require("../../common-elements"),CopyButtonWrapper_1=require("../../common-elements/CopyButtonWrapper"),Download_1=require("../../common-elements/Download"),SourceCode=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return(0,tslib_1.__extends)(t,e),Object.defineProperty(t.prototype,"render",{enumerable:!1,configurable:!0,writable:!0,value:function(){var e=this.props,t=e.source,o=e.lang;return React.createElement(common_elements_1.StyledPre,{dangerouslySetInnerHTML:{__html:(0,utils_1.highlight)(t,o)}})}}),t}(React.PureComponent);function SourceCodeWithText(e){var t,o,r,n=e.source||(null===(r=null===(o=null===(t=e.externalSource)||void 0===t?void 0:t.sample)||void 0===o?void 0:o.get)||void 0===r?void 0:r.call(o,e.externalSource))||"";return React.createElement(CopyButtonWrapper_1.CopyButtonWrapper,{data:n},(function(t){var o=t.renderCopyButton;return React.createElement(common_elements_1.SampleControlsWrap,null,React.createElement(common_elements_1.SampleControls,null,o()),React.createElement(SourceCode,{lang:e.lang,source:n}))}))}function SourceCodeWithFile(e){var t;return React.createElement(common_elements_1.SampleControlsWrap,null,React.createElement(common_elements_1.SampleControls,null,React.createElement(Download_1.Download,{fileInfo:e.fileInfo})),React.createElement(common_elements_1.StyledPre,null,React.createElement(common_elements_1.FileIcon,{color:"light"})," ",null===(t=e.fileInfo)||void 0===t?void 0:t.fileName))}exports.SourceCode=SourceCode,exports.SourceCodeWithText=SourceCodeWithText,exports.SourceCodeWithFile=SourceCodeWithFile;
//# sourceMappingURL=SourceCode.js.map