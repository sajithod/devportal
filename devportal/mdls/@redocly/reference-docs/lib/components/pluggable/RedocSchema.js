"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.RedocSchema=void 0;var tslib_1=require("tslib"),React=(0,tslib_1.__importStar)(require("react")),redoc_lib_1=require("../../redoc-lib"),styled_components_1=require("./styled.components"),RedocSchema=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return(0,tslib_1.__extends)(t,e),Object.defineProperty(t.prototype,"render",{enumerable:!1,configurable:!0,writable:!0,value:function(){var e=this.props,t=e.store,r=e.pointer,o=e.schema||{$ref:r},c=new redoc_lib_1.SchemaModel(t.definition.parser,o,r||"",t.options);return React.createElement(redoc_lib_1.Row,null,React.createElement(styled_components_1.FullWidthPanel,null,React.createElement(redoc_lib_1.Schema,{schema:c})))}}),t}(React.Component);exports.RedocSchema=RedocSchema;
//# sourceMappingURL=RedocSchema.js.map