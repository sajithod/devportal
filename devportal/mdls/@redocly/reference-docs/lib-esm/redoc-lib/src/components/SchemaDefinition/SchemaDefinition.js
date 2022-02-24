import{__extends}from"tslib";import*as React from"react";import{MiddlePanel,RightPanel,Row,Section}from"../../common-elements";import{MediaTypeModel}from"../../services";import{MediaTypeSamples}from"../PayloadSamples/MediaTypeSamples";import{Schema}from"../Schema";import{CodePanel,ContentPanel}from"../../../../components/Panel";import{LayoutVariant}from"../../../../services/store-types";var SchemaDefinition=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return Object.defineProperty(t,"_mediaModel",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),t}return __extends(t,e),Object.defineProperty(t,"getMediaType",{enumerable:!1,configurable:!0,writable:!0,value:function(e,t){if(!e)return{};var a={schema:{$ref:e}};return t&&(a.examples={example:{$ref:t}}),a}}),Object.defineProperty(t.prototype,"mediaModel",{get:function(){var e=this.props,a=e.parser,n=e.schemaRef,r=e.exampleRef,i=e.options;return this._mediaModel||(this._mediaModel=new MediaTypeModel(a,"json",!1,t.getMediaType(n,r),i)),this._mediaModel},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"render",{enumerable:!1,configurable:!0,writable:!0,value:function(){var e=this.props,t=e.showReadOnly,a=void 0===t||t,n=e.showWriteOnly,r=void 0!==n&&n,i=e.layout,o=e.showRightPanel;return React.createElement(Section,null,React.createElement(Row,{layout:i},React.createElement(MiddlePanel,{isStacked:i===LayoutVariant.STACKED},React.createElement(ContentPanel,null,React.createElement(Schema,{skipWriteOnly:!r,skipReadOnly:!a,schema:this.mediaModel.schema}))),o?React.createElement(RightPanel,null,React.createElement(CodePanel,null,React.createElement(MediaTypeSamples,{mediaType:this.mediaModel}))):null))}}),t}(React.PureComponent);export{SchemaDefinition};
//# sourceMappingURL=SchemaDefinition.js.map