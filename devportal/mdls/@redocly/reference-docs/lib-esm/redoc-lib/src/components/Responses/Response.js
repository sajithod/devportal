import{observer}from"mobx-react";import*as React from"react";import{ResponseDetails}from"./ResponseDetails";import{ResponsePanel}from"../../../../components/Panel";import{ResponseSummary}from"./ResponseSummary";export var ResponseView=observer((function(e){var o=e.response;return React.createElement(ResponsePanel,{header:function(e){var r=e.expanded,n=e.toggle;return React.createElement(ResponseSummary,{response:o,toggle:n,expanded:r})},expanded:Boolean(o.expanded),type:o.type},React.createElement(ResponseDetails,{response:o}))}));
//# sourceMappingURL=Response.js.map