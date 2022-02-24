"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.SamplesTabs=void 0;var tslib_1=require("tslib"),React=(0,tslib_1.__importStar)(require("react")),react_1=require("react"),mobx_react_1=require("mobx-react"),Tabs_1=require("../Tabs"),redoc_lib_1=require("../../redoc-lib"),LoadingWrapper_1=require("./LoadingWrapper"),shared_1=require("../shared");exports.SamplesTabs=(0,mobx_react_1.observer)((function(e){var a=e.children,t=e.onChange,r=e.defaultLanguage,n=(0,tslib_1.__rest)(e,["children","onChange","defaultLanguage"]),s=(0,react_1.useMemo)((function(){return n.tabs.map((function(e){return e.lang}))}),[n.tabs]),c=(0,react_1.useContext)(redoc_lib_1.StoreContext),i=(0,react_1.useState)(r),u=i[0],o=i[1],_=(0,react_1.useState)(s),l=_[0],g=_[1];(0,react_1.useEffect)((function(){return g(s)}),[n.tabs]),(0,react_1.useEffect)((function(){u===c.activeSampleLanguage&&o(void 0)}),[c.activeSampleLanguage]),(0,react_1.useEffect)((function(){return c.stopLoader()}),[c.activeSampleLanguage]),(0,react_1.useEffect)((function(){u&&(c.startLoader(),c.activateSampleLanguage(u))}),[u,r]);var d;return React.createElement(LoadingWrapper_1.LoadingWrapper,{className:u&&"updated"},React.createElement(Tabs_1.CollapsingTabsBase,(0,tslib_1.__assign)({},n,{activeIndex:(d=l.indexOf(u||c.activeSampleLanguage),-1===d?0:d),onChange:function(e){var a=n.tabs[e];c.setActiveSampleLanguage(a.lang),t&&t(a)}}),r&&-1===l.indexOf(r)&&React.createElement(shared_1.WarnMessage,null,"Provided language is not supported"),a))}));
//# sourceMappingURL=SamplesTabs.js.map