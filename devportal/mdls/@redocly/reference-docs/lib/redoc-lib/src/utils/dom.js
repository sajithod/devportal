"use strict";function querySelector(t){return"undefined"!=typeof document?document.querySelector(t):null}function html2Str(t){return t.split(/<[^>]+>/).map((function(t){return t.trim()})).filter((function(t){return t.length>0})).join(" ")}Object.defineProperty(exports,"__esModule",{value:!0}),exports.html2Str=exports.querySelector=exports.IS_BROWSER=void 0,exports.IS_BROWSER="undefined"!=typeof window&&"HTMLElement"in window,exports.querySelector=querySelector,exports.html2Str=html2Str,"undefined"==typeof Element||Element.prototype.scrollIntoViewIfNeeded||(Element.prototype.scrollIntoViewIfNeeded=function(t){t=0===arguments.length||!!t;var e=this.parentNode,o=window.getComputedStyle(e,void 0),r=parseInt(o.getPropertyValue("border-top-width"),10),i=parseInt(o.getPropertyValue("border-left-width"),10),l=this.offsetTop-e.offsetTop<e.scrollTop,f=this.offsetTop-e.offsetTop+this.clientHeight-r>e.scrollTop+e.clientHeight,n=this.offsetLeft-e.offsetLeft<e.scrollLeft,s=this.offsetLeft-e.offsetLeft+this.clientWidth-i>e.scrollLeft+e.clientWidth,p=l&&!f;(l||f)&&t&&(e.scrollTop=this.offsetTop-e.offsetTop-e.clientHeight/2-r+this.clientHeight/2),(n||s)&&t&&(e.scrollLeft=this.offsetLeft-e.offsetLeft-e.clientWidth/2-i+this.clientWidth/2),(l||f||n||s)&&!t&&this.scrollIntoView(p)});
//# sourceMappingURL=dom.js.map