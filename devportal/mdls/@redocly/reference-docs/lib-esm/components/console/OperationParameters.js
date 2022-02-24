import{__spreadArray}from"tslib";import*as React from"react";import{dottedString,escapeFormId,get,unescapeFormId}from"../../utils";import{FormLabel,FormControl,FormWarning,GroupLabel,Table}from"../common/form";import{FormTextField}from"../common/TextField";import{ParameterEnumDropdown}from"./ParameterDropdown";export var SchemaType;!function(e){e.ARRAY="array",e.OBJECT="object"}(SchemaType||(SchemaType={}));var placeholder=function(e){return"("+e.schema.type+")"+(e.example?" "+e.example:"")};function safePush(e,a,r){e[a]||(e[a]=[]),e[a].push(r)}function orderParams(e){var a={};return e.forEach((function(e){safePush(a,e.in,e)})),a}var PARAM_PLACES=["path","query","cookie","header"];function createValidator(e){return function(a){if(e.required&&!a)return"Field is required";if(e.required&&e.schema.type===SchemaType.ARRAY&&Array.isArray(a)){if(a.length>(e.schema.rawSchema&&e.schema.rawSchema.maxItems||1/0))return"Too many items selected, maximum "+e.schema.rawSchema.maxItems;if(a.length<(e.schema.rawSchema&&e.schema.rawSchema.minItems||0)){var r=e.schema.rawSchema.minItems;return"You should select at least "+(1===r?r+" item":r+" items")}}}}function getInitialValue(e){if(e.schema.type===SchemaType.ARRAY){var a=e.schema.default||e.schema.example;if(!a&&e.schema.rawSchema.items){if(e.schema.rawSchema.items.default)return[e.schema.rawSchema.items.default];if(e.schema.rawSchema.items.example)return[e.schema.rawSchema.items.example]}return a||[]}return e.schema.default||e.schema.example}export function OperationParameters(e){var a=e.values;function r(e,t,m){var n,c=m?dottedString(m,e.name):e.name,o=function(e){var a=e.oneOfType,r=e.type,t=e.items;return a||r===SchemaType.ARRAY&&(null==t?void 0:t.type)===SchemaType.OBJECT&&"Array of objects"}(e.schema);if(o&&console.warn('Unsupported parameter definition: "'+o+'"'),e.schema.type===SchemaType.OBJECT)return null===(n=e.schema.fields)||void 0===n?void 0:n.map((function(e){return r(e,t,c)}));var i=m?[t,m]:[e.in],l=dottedString.apply(void 0,__spreadArray(__spreadArray([],i,!1),[escapeFormId(e.name)],!1));return React.createElement(FormControl,{key:l},React.createElement(FormLabel,{required:e.required},c,":"),o?React.createElement(FormWarning,null,"Unsupported field schema definition"):function(e,r){var t=React.useMemo((function(){return createValidator(r)}),[r]),m=Array.isArray(r.schema.enum)&&r.schema.enum.length?r.schema.enum:void 0,n=getInitialValue(r),c=e.split(".").map((function(e){return unescapeFormId(e)}));return m?React.createElement(FormControl,null,React.createElement(ParameterEnumDropdown,{initValue:n,paramEnum:m,field:e})):React.createElement(FormTextField,{fullWidth:!0,"data-cy":"parameter-input",id:e,field:e,placeholder:placeholder(r),validate:t,initialValue:n||get(a,c),validateOnBlur:!0,validateOnChange:!0})}(l,e))}var t=orderParams(e.operation.parameters||[]);return React.createElement(Table,null,PARAM_PLACES.map((function(e){return function(e,a){return a&&a.length?React.createElement(React.Fragment,{key:e},React.createElement(FormControl,null,React.createElement(GroupLabel,null," # ",e," parameters "),React.createElement("span",null," ")),a.map((function(a){return r(a,e)}))):null}(e,t[e])})))}
//# sourceMappingURL=OperationParameters.js.map