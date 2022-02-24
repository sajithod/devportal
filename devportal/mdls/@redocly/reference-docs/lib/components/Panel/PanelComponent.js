"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.PanelComponent=void 0;var tslib_1=require("tslib"),react_1=(0,tslib_1.__importStar)(require("react")),common_elements_1=require("../../redoc-lib/src/common-elements"),Header_1=require("./Header"),Trigger_1=require("./Trigger"),Title_1=require("./Title"),PanelBody_1=require("./PanelBody");function PanelComponent(e){var t=e.expanded,r=void 0===t||t,n=e.renderChildrenHidden,a=void 0!==n&&n,l=e.header,o=e.className,i=e.children,c=e.onToggle,d=(0,react_1.useState)(r),u=d[0],_=d[1],m=(0,react_1.useState)(!1),s=m[0],f=m[1],g=function(e){e.target instanceof HTMLAnchorElement||(f(!0),_(!u),null==c||c(!u))};return(0,react_1.useEffect)((function(){return _(r)}),[r]),react_1.default.createElement("div",{className:o},l&&("function"==typeof l?l({expanded:u,toggle:g}):react_1.default.createElement(Header_1.Header,{onClick:g,isExpanded:u},react_1.default.createElement(Trigger_1.Trigger,null,react_1.default.createElement(Title_1.Title,null,l),react_1.default.createElement(common_elements_1.ShelfIcon,{direction:u?"down":"right"})))),(u||a)&&react_1.default.createElement(PanelBody_1.PanelBody,{hidden:!u,animate:s},i))}exports.PanelComponent=PanelComponent;
//# sourceMappingURL=PanelComponent.js.map