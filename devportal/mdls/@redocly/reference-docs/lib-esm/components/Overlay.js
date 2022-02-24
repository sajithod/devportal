import{__awaiter,__generator,__makeTemplateObject}from"tslib";import*as React from"react";import{styled}from"../redoc-lib";var INVALID_KEY="Invalid license key",INVALID_KEY_MISSING=INVALID_KEY+": missing key",EXPIRED="Invalid license key: expired",TRIAL_EXPIRED=EXPIRED,INVALID_HOST="Invalid license key: host not allowed";export var Overlay=function(e){var n=e.l,t=React.useState(null),a=t[0],i=t[1],l=React.useState(-1),r=l[0],o=l[1],c=React.useState(!1),d=c[0],s=c[1];return React.useEffect((function(){__awaiter(void 0,void 0,void 0,(function(){var e,t;return __generator(this,(function(a){switch(a.label){case 0:return[4,n];case 1:return(e=a.sent()).local?(s(!0),[2]):(e.valid?e.allowed?e.expired&&i(e.t?EXPIRED:TRIAL_EXPIRED):i(INVALID_HOST):i(!1===e.valid?INVALID_KEY+(e.cryptoMissing?": works only with https":""):INVALID_KEY_MISSING),e.t&&o(Math.ceil(((null!==(t=null==e?void 0:e.e)&&void 0!==t?t:0)-Date.now()/1e3)/60/60/24)),[2])}}))}))}),[n]),d?React.createElement(TrialWrap,null,React.createElement("a",{href:"https://redoc.ly"},"Redocly API reference docs")," preview"):!a&&r>-1?React.createElement(TrialWrap,null," Trial version: ",r," days remaining "):a?React.createElement(Flash,null,React.createElement("span",null,a," ",React.createElement("br",null),React.createElement("small",null,"Please contact ",React.createElement("a",{href:"mailto:team@redoc.ly"},"team@redoc.ly")," to remedy the problem."," "))):null};var templateObject_1,templateObject_2,TrialWrap=styled.div(templateObject_1||(templateObject_1=__makeTemplateObject(["\n  padding: 10px 40px;\n  position: fixed;\n  text-align: right;\n  width: 100%;\n  box-sizing: border-box;\n  color: orange;\n  z-index: 10;\n  opacity: 0.6;\n\n  > a,\n  a:visited {\n    color: orange;\n  }\n"],["\n  padding: 10px 40px;\n  position: fixed;\n  text-align: right;\n  width: 100%;\n  box-sizing: border-box;\n  color: orange;\n  z-index: 10;\n  opacity: 0.6;\n\n  > a,\n  a:visited {\n    color: orange;\n  }\n"]))),Flash=styled.div(templateObject_2||(templateObject_2=__makeTemplateObject(["\n  font-size: 1.5em;\n  position: fixed;\n  z-index: 100;\n  background: rgba(38, 50, 56, 0.93);\n  margin: 0;\n  padding: 1em;\n  width: 100%;\n  color: white;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  text-align: center;\n  box-sizing: border-box;\n\n  > span {\n    display: inline-block;\n    line-height: 1.5;\n  }\n\n  a,\n  a:hover,\n  a:visited {\n    color: white;\n  }\n"],["\n  font-size: 1.5em;\n  position: fixed;\n  z-index: 100;\n  background: rgba(38, 50, 56, 0.93);\n  margin: 0;\n  padding: 1em;\n  width: 100%;\n  color: white;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  text-align: center;\n  box-sizing: border-box;\n\n  > span {\n    display: inline-block;\n    line-height: 1.5;\n  }\n\n  a,\n  a:hover,\n  a:visited {\n    color: white;\n  }\n"])));
//# sourceMappingURL=Overlay.js.map