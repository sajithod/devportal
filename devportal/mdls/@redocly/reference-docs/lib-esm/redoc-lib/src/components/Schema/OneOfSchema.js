import{__assign,__rest}from"tslib";import*as React from"react";import{observer}from"mobx-react";import{OneOfButton as StyledOneOfButton,OneOfList,Wrapper}from"../../common-elements/schema";import{Schema}from"./Schema";import{OptionsContext}from"../OptionsProvider";import{Markdown}from"../Markdown/Markdown";export var OneOfSchema=observer((function(e){var t=e.schema.oneOf,r=e.schema,n=__rest(e,["schema","schema"]);if(void 0===t)return null;var a=React.useContext(OptionsContext).hideOneOfDescription,o=t[r.activeOneOf];return React.createElement("div",null,React.createElement(Wrapper,null,React.createElement("span",null,r.oneOfType,":"),React.createElement(OneOfList,null,t.map((function(e,t){return React.createElement(StyledOneOfButton,{key:e.pointer,active:t===r.activeOneOf,onClick:function(){return r.activateOneOf(t)},"data-cy":"oneOf"+e.title||e.typePrefix+e.displayType},e.title||e.typePrefix+e.displayType)})))),!a&&o.description&&React.createElement(Wrapper,null,React.createElement(Markdown,{compact:!0,source:o.description})),React.createElement(Schema,__assign({},n,{schema:o})))}));
//# sourceMappingURL=OneOfSchema.js.map