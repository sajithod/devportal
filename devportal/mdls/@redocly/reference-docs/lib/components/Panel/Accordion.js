"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Accordion=void 0;var tslib_1=require("tslib"),React=(0,tslib_1.__importStar)(require("react")),react_1=require("react"),Accordion=function(e){var t=e.initialActiveIdx,c=e.children,r=(0,react_1.useState)(t),n=r[0],i=r[1],a=React.useState(!1),o=a[0],u=a[1];React.useEffect((function(){setTimeout((function(){u(!0)}),500)}),[]),React.useEffect((function(){o||i(t)}),[t,o]);var l=React.useCallback((function(e){i(e)}),[i]),s=React.Children.toArray(c).filter(React.isValidElement);return React.createElement(React.Fragment,null,React.Children.map(s,(function(e,t){return React.cloneElement(e,{key:t,expanded:t===n,onToggle:function(){return l(t)}})||null}))||null)};exports.Accordion=Accordion;
//# sourceMappingURL=Accordion.js.map