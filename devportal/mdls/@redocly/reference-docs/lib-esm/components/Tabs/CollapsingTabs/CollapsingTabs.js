import{__assign,__rest}from"tslib";import React,{useEffect,useState}from"react";import{CollapsingTabsBase}from"./CollapsingTabsBase";import{observer}from"mobx-react";function getActiveIndexFromOperation(e,t,n){var a;return t?"number"==typeof n&&n>0?hasActiveExampleName(null===(a=e[n])||void 0===a?void 0:a.content,t)?n:getActiveIndexFromOperation(e,t):e.findIndex((function(e){return hasActiveExampleName(e.content,t)})):-1}function hasActiveExampleName(e,t){return!!(null==e?void 0:e.mediaTypes.find((function(e){return Object.keys(e.examples||[]).includes(t||"")})))}export var CollapsingTabs=observer((function(e){var t=e.children,n=__rest(e,["children"]),a=useState(0),r=a[0],o=a[1],i=n.operation,s=n.operation.activeExampleName;useEffect((function(){var e=getActiveIndexFromOperation(i.responses,s,r);e>-1&&o(e)}),[s]);var c=React.useCallback((function(e){r!==e&&o(e)}),[r]);return React.createElement(CollapsingTabsBase,__assign({},n,{activeIndex:r,onChange:c}),t)}));
//# sourceMappingURL=CollapsingTabs.js.map