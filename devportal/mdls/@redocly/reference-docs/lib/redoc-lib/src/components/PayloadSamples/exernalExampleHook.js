"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.useExternalExample=void 0;var tslib_1=require("tslib"),react_1=require("react");function useExternalExample(e,r){var t=this,a=(0,react_1.useState)(!0)[1],u=(0,react_1.useRef)(void 0),s=(0,react_1.useRef)(void 0);return s.current!==e&&(u.current=void 0),s.current=e,(0,react_1.useEffect)((function(){(0,tslib_1.__awaiter)(t,void 0,void 0,(function(){var t,s;return(0,tslib_1.__generator)(this,(function(n){switch(n.label){case 0:a(!0),n.label=1;case 1:return n.trys.push([1,3,,4]),t=u,[4,e.getExternalValue(r)];case 2:return t.current=n.sent(),[3,4];case 3:return s=n.sent(),u.current=s,[3,4];case 4:return a(!1),[2]}}))}))}),[e,r]),u.current}exports.useExternalExample=useExternalExample;
//# sourceMappingURL=exernalExampleHook.js.map