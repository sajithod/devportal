"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Schema=void 0;var tslib_1=require("tslib"),React=(0,tslib_1.__importStar)(require("react")),mobx_react_1=require("mobx-react"),fields_1=require("../../common-elements/fields"),FieldDetails_1=require("../Fields/FieldDetails"),ArraySchema_1=require("./ArraySchema"),ObjectSchema_1=require("./ObjectSchema"),OneOfSchema_1=require("./OneOfSchema"),Labels_1=require("../../services/Labels");exports.Schema=(0,mobx_react_1.observer)((function(e){var r,t=e.schema,a=(0,tslib_1.__rest)(e,["schema"]);if(!t)return React.createElement("em",null," Schema not provided ");var i=t.type,l=t.oneOf,c=t.discriminatorProp,n=t.isCircular,s=(a.level||0)+1;if(n)return React.createElement("div",null,React.createElement(fields_1.TypeName,null,t.displayType),t.title&&React.createElement(fields_1.TypeTitle,null," ",t.title," "),React.createElement(fields_1.RecursiveLabel,null," ",(0,Labels_1.l)("recursive")," "));if(void 0!==c)return l&&l.length?React.createElement(ObjectSchema_1.ObjectSchema,(0,tslib_1.__assign)({},a,{level:s,schema:l[t.activeOneOf],discriminator:{fieldName:c,parentSchema:t}})):(console.warn("Looks like you are using discriminator wrong: you don't have any definition inherited from the "+t.title),null);if(void 0!==l)return React.createElement(OneOfSchema_1.OneOfSchema,(0,tslib_1.__assign)({},a,{schema:t}));var m=Array.isArray(i)?i:[i];if(m.includes("object")){if(null===(r=t.fields)||void 0===r?void 0:r.length)return React.createElement(ObjectSchema_1.ObjectSchema,(0,tslib_1.__assign)({},a,{level:s,schema:t}))}else if(m.includes("array"))return React.createElement(ArraySchema_1.ArraySchema,(0,tslib_1.__assign)({},a,{level:s,schema:t}));var o={schema:t,name:"",required:!1,description:t.description,externalDocs:t.externalDocs,deprecated:!1,toggle:function(){return null},expanded:!1};return React.createElement("div",null,React.createElement(FieldDetails_1.FieldDetails,{field:o}))}));
//# sourceMappingURL=Schema.js.map