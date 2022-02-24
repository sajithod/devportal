import{__decorate,__extends}from"tslib";import{observer}from"mobx-react";import*as React from"react";import{OptionsContext}from"../OptionsProvider";import{MenuItems}from"./MenuItems";import{PerfectScrollbarWrap}from"../../common-elements/perfect-scrollbar";import{RedocAttribution}from"./styled.elements";var SideMenu=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return Object.defineProperty(t,"_updateScroll",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(t,"activate",{enumerable:!0,configurable:!0,writable:!0,value:function(e){e&&e.active&&t.context.menuToggle&&(e.expanded?e.collapse():e.expand()),t.props.menu.activateAndScroll(e,!0),setTimeout((function(){t._updateScroll&&t._updateScroll()}))}}),Object.defineProperty(t,"saveScrollUpdate",{enumerable:!0,configurable:!0,writable:!0,value:function(e){t._updateScroll=e}}),t}return __extends(t,e),Object.defineProperty(t.prototype,"render",{enumerable:!1,configurable:!0,writable:!0,value:function(){var e,t,r=this.props.menu;return React.createElement(PerfectScrollbarWrap,{updateFn:this.saveScrollUpdate,className:this.props.className,options:{wheelPropagation:!1}},React.createElement(MenuItems,{items:r.items,onActivate:this.activate,root:!0,linksBefore:null===(e=this.context.sidebarLinks)||void 0===e?void 0:e.beforeInfo,linksAfter:null===(t=this.context.sidebarLinks)||void 0===t?void 0:t.end}),this.context.whiteLabel?React.createElement(RedocAttribution,null,React.createElement("a",{href:"https://redoc.ly",target:"_blank",rel:"noreferrer"},"Powered by Redocly")):React.createElement(React.Fragment,null))}}),Object.defineProperty(t,"contextType",{enumerable:!0,configurable:!0,writable:!0,value:OptionsContext}),t=__decorate([observer],t)}(React.Component);export{SideMenu};
//# sourceMappingURL=SideMenu.js.map