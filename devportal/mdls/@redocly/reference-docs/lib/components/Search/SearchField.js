"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.SearchField=void 0;var tslib_1=require("tslib"),React=(0,tslib_1.__importStar)(require("react")),styled_1=require("./styled"),SearchField=function(e){var t=e.showPopUp,r=e.searchValue,a=e.marker,l=e.setSearchValue,c=!!r;return React.createElement(styled_1.SearchFieldWrap,{onClick:t},React.createElement("span",null),r||"Search",React.createElement(styled_1.SearchIcon,null),c&&React.createElement(styled_1.ButtonClear,{onClick:function(e){e.stopPropagation(),a.unmark(),l("")}},React.createElement(styled_1.CrossIcon,null)))};exports.SearchField=SearchField;
//# sourceMappingURL=SearchField.js.map