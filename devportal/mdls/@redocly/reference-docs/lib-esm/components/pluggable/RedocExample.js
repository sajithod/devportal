import{__extends}from"tslib";import*as React from"react";import{ExampleModel,Example,Row}from"../../redoc-lib";import{ExamplesWrap}from"./styled.components";var RedocExample=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return __extends(t,e),Object.defineProperty(t.prototype,"render",{enumerable:!1,configurable:!0,writable:!0,value:function(){var e=this.props,t=e.store,r=e.pointer,o=e.mimeType,a=e.encoding,n=new ExampleModel(t.definition.parser,{$ref:r},o,a);return React.createElement(Row,{layout:t.layout},React.createElement(ExamplesWrap,null,React.createElement(Example,{example:n,mimeType:o})))}}),t}(React.Component);export{RedocExample};
//# sourceMappingURL=RedocExample.js.map