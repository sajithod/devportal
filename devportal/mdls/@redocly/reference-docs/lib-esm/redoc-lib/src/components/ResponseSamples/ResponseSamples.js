import*as React from"react";import{CodePanel}from"../../../../components/Panel";import{CollapsingTabs,TabPanel}from"../../../../components/Tabs";import{OptionsContext}from"../OptionsProvider";import{PayloadSamples}from"../PayloadSamples/PayloadSamples";import{creatPanelToggleEvent}from"../RequestSamples/languageSwitchEvent";import{l}from"../../services/Labels";export var ResponseSamples=function(e){var a=e.operation,t=React.useContext(OptionsContext).events,n=a.responses.filter((function(e){var a,t;return null!==(t=null===(a=e.content)||void 0===a?void 0:a.hasSample)&&void 0!==t&&t}));if(!n.length)return null;var o=n.map((function(e){var a=e.code;return{key:a,title:a}}));return React.createElement(CodePanel,{header:l("responseSamples"),onToggle:function(e){var n,o=creatPanelToggleEvent({operation:a,isExpanded:e,panelType:"response-samples"});null===(n=null==t?void 0:t.panelToggle)||void 0===n||n.call(t,o)}},React.createElement(CollapsingTabs,{tabs:o,operation:a},n.map((function(e){return React.createElement(TabPanel,{key:e.code,value:e.code},React.createElement("div",null,React.createElement(PayloadSamples,{content:e.content})))}))))};
//# sourceMappingURL=ResponseSamples.js.map