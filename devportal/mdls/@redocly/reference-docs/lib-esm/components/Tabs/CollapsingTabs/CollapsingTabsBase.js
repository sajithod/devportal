import{Tabs}from"react-tabs";import*as React from"react";import{useContext,useEffect,useMemo,useState}from"react";import{OptionsContext}from"../../../redoc-lib";import{CollapsingTabList}from"./CollapsingTabList";import{CollapsingTab}from"./CollapsingTab";import{CollapsingDropdown}from"./CollapsingDropdown";export var CollapsingTabsBase=function(e){var t=e.tabs,a=e.children,n=e.hidden,o=e.activeIndex,i=e.onChange,l=useContext(OptionsContext).samplesTabsMaxCount,r=useMemo((function(){return t.slice(l).map((function(e,t){return{idx:t,value:e.title}}))}),[t,l]),s=r.length+" more",c=useState(s),p=c[0],m=c[1],u=React.useCallback((function(){var e=o>=l;p!==s&&p===t[o].title||!e?p===s||e||m(s):m(t[o].title)}),[o,l,p,s,t]);useEffect((function(){setTimeout(u,0)}),[o,l,u]);return React.createElement(Tabs,{selectedIndex:o,onSelect:i},React.createElement(CollapsingTabList,{hidden:n},t.map((function(e,t){return React.createElement(CollapsingTab,{key:e.key,disabled:t>=l},e.title)})),r.length?React.createElement(CollapsingDropdown,{options:r,onChange:function(e){i(l+e.idx)},placeholder:s,value:p,active:o>=l}):null),a)};
//# sourceMappingURL=CollapsingTabsBase.js.map