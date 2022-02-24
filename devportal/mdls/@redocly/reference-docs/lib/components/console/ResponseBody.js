"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.ResponseBody=void 0;var tslib_1=require("tslib"),React=(0,tslib_1.__importStar)(require("react")),redoc_lib_1=require("../../redoc-lib"),ResponsePanel_1=require("./ResponsePanel");function ResponseBody(e){var t=e.response;return React.createElement(React.Fragment,null,React.createElement(ResponsePanel_1.ResponseHeader,null," Body: "),getResponseBody(t))}function getResponseBody(e){return e.body?React.createElement(redoc_lib_1.JsonViewer,{data:e.body}):e.fileInfo?React.createElement(redoc_lib_1.SourceCodeWithFile,{fileInfo:e.fileInfo}):null!==e.data?e.data?React.createElement(redoc_lib_1.SourceCodeWithText,{lang:(0,redoc_lib_1.langFromMime)(e.headers["Content-Type"]||"text/plain"),source:e.data}):React.createElement(ResponsePanel_1.PanelStyledPre,null,React.createElement("i",null,"(no content)")):null}exports.ResponseBody=ResponseBody;
//# sourceMappingURL=ResponseBody.js.map