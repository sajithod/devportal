import*as React from"react";import{useState}from"react";export var Accordion=function(e){var t=e.initialActiveIdx,n=e.children,a=useState(t),c=a[0],r=a[1],i=React.useState(!1),u=i[0],l=i[1];React.useEffect((function(){setTimeout((function(){l(!0)}),500)}),[]),React.useEffect((function(){u||r(t)}),[t,u]);var o=React.useCallback((function(e){r(e)}),[r]),f=React.Children.toArray(n).filter(React.isValidElement);return React.createElement(React.Fragment,null,React.Children.map(f,(function(e,t){return React.cloneElement(e,{key:t,expanded:t===c,onToggle:function(){return o(t)}})||null}))||null)};
//# sourceMappingURL=Accordion.js.map