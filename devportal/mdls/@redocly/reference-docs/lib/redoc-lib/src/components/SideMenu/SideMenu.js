"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.SideMenu=void 0;var tslib_1=require("tslib"),mobx_react_1=require("mobx-react"),React=(0,tslib_1.__importStar)(require("react")),OptionsProvider_1=require("../OptionsProvider"),MenuItems_1=require("./MenuItems"),perfect_scrollbar_1=require("../../common-elements/perfect-scrollbar"),styled_elements_1=require("./styled.elements"),SideMenu=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return Object.defineProperty(t,"_updateScroll",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(t,"activate",{enumerable:!0,configurable:!0,writable:!0,value:function(e){e&&e.active&&t.context.menuToggle&&(e.expanded?e.collapse():e.expand()),t.props.menu.activateAndScroll(e,!0),setTimeout((function(){t._updateScroll&&t._updateScroll()}))}}),Object.defineProperty(t,"saveScrollUpdate",{enumerable:!0,configurable:!0,writable:!0,value:function(e){t._updateScroll=e}}),t}return(0,tslib_1.__extends)(t,e),Object.defineProperty(t.prototype,"render",{enumerable:!1,configurable:!0,writable:!0,value:function(){var e,t,r=this.props.menu;return React.createElement(perfect_scrollbar_1.PerfectScrollbarWrap,{updateFn:this.saveScrollUpdate,className:this.props.className,options:{wheelPropagation:!1}},React.createElement(MenuItems_1.MenuItems,{items:r.items,onActivate:this.activate,root:!0,linksBefore:null===(e=this.context.sidebarLinks)||void 0===e?void 0:e.beforeInfo,linksAfter:null===(t=this.context.sidebarLinks)||void 0===t?void 0:t.end}),this.context.whiteLabel?React.createElement(styled_elements_1.RedocAttribution,null,React.createElement("a",{href:"https://redoc.ly",target:"_blank",rel:"noreferrer"},"Powered by Redocly")):React.createElement(React.Fragment,null))}}),Object.defineProperty(t,"contextType",{enumerable:!0,configurable:!0,writable:!0,value:OptionsProvider_1.OptionsContext}),t=(0,tslib_1.__decorate)([mobx_react_1.observer],t)}(React.Component);exports.SideMenu=SideMenu;
//# sourceMappingURL=SideMenu.js.map