import{__extends}from"tslib";import*as React from"react";import{ExampleValue,FieldLabel}from"../../common-elements/fields";var FieldDetail=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return __extends(t,e),Object.defineProperty(t.prototype,"render",{enumerable:!1,configurable:!0,writable:!0,value:function(){if(void 0===this.props.value)return null;var e=this.props.raw?String(this.props.value):JSON.stringify(this.props.value);return React.createElement("div",null,React.createElement(FieldLabel,null," ",this.props.label," ")," ",React.createElement(ExampleValue,null,e))}}),t}(React.PureComponent);export{FieldDetail};
//# sourceMappingURL=FieldDetail.js.map