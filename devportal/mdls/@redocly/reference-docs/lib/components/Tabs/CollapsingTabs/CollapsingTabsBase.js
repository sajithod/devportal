"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.CollapsingTabsBase=void 0;var tslib_1=require("tslib"),react_tabs_1=require("react-tabs"),React=(0,tslib_1.__importStar)(require("react")),react_1=require("react"),redoc_lib_1=require("../../../redoc-lib"),CollapsingTabList_1=require("./CollapsingTabList"),CollapsingTab_1=require("./CollapsingTab"),CollapsingDropdown_1=require("./CollapsingDropdown"),CollapsingTabsBase=function(e){var t=e.tabs,a=e.children,l=e.hidden,i=e.activeIndex,n=e.onChange,r=(0,react_1.useContext)(redoc_lib_1.OptionsContext).samplesTabsMaxCount,s=(0,react_1.useMemo)((function(){return t.slice(r).map((function(e,t){return{idx:t,value:e.title}}))}),[t,r]),o=s.length+" more",c=(0,react_1.useState)(o),u=c[0],p=c[1],b=React.useCallback((function(){var e=i>=r;u!==o&&u===t[i].title||!e?u===o||e||p(o):p(t[i].title)}),[i,r,u,o,t]);(0,react_1.useEffect)((function(){setTimeout(b,0)}),[i,r,b]);return React.createElement(react_tabs_1.Tabs,{selectedIndex:i,onSelect:n},React.createElement(CollapsingTabList_1.CollapsingTabList,{hidden:l},t.map((function(e,t){return React.createElement(CollapsingTab_1.CollapsingTab,{key:e.key,disabled:t>=r},e.title)})),s.length?React.createElement(CollapsingDropdown_1.CollapsingDropdown,{options:s,onChange:function(e){n(r+e.idx)},placeholder:o,value:u,active:i>=r}):null),a)};exports.CollapsingTabsBase=CollapsingTabsBase;
//# sourceMappingURL=CollapsingTabsBase.js.map