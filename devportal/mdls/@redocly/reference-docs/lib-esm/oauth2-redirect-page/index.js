import"core-js/web/url";import{handleOAuth2Redirect}from"./handler/oauth2-redirect-handler";function run(){var r,e=null===(r=window.opener)||void 0===r?void 0:r.redirectOAuth2;try{handleOAuth2Redirect(e)}catch(r){null==e||e.errorCallback(r)}window.close()}window.onload=run;
//# sourceMappingURL=index.js.map