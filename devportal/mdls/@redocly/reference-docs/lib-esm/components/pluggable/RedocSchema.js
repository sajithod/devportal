import{__extends}from"tslib";import*as React from"react";import{Schema,SchemaModel,Row}from"../../redoc-lib";import{FullWidthPanel}from"./styled.components";var RedocSchema=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return __extends(t,e),Object.defineProperty(t.prototype,"render",{enumerable:!1,configurable:!0,writable:!0,value:function(){var e=this.props,t=e.store,r=e.pointer,o=e.schema||{$ref:r},n=new SchemaModel(t.definition.parser,o,r||"",t.options);return React.createElement(Row,null,React.createElement(FullWidthPanel,null,React.createElement(Schema,{schema:n})))}}),t}(React.Component);export{RedocSchema};
//# sourceMappingURL=RedocSchema.js.map