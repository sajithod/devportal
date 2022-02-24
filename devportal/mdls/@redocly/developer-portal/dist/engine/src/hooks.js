import*as React from"react";import throttle from"lodash.throttle";import scrollLock from"scroll-lock";import{globalHistory}from"@gatsbyjs/reach-router";import{getNavbarElement}from"./utils";import{deleteCookie,getCookie,getUserClaims,REDOCLY_LOGIN_RESULT_COOKIE_NAME}from"./ui/auth/utils";function getLoginResult(){const a=getCookie(REDOCLY_LOGIN_RESULT_COOKIE_NAME)||null;return a&&deleteCookie(REDOCLY_LOGIN_RESULT_COOKIE_NAME),a}if("undefined"!=typeof window){const a=window.__redoclyRouteChangeListenres||[];a.forEach(a=>globalHistory.listen(a)),delete window.__redoclyRouteChangeListenres,window._onRedoclyRouteChange=a=>{globalHistory.listen(a)};const b=function(a){const b=getLoginResult();b&&a({result:"success",idpId:b,claims:getUserClaims()})},c=window.__redoclyLoginResultListenres||[];c.forEach(a=>{b(a)}),delete window.__redoclyLoginResultListenres,window._onRedoclyLoginResult=b}export function useNavbarHeight(a){const[b,c]=React.useState(0);return React.useEffect(()=>{const a=getNavbarElement();c(a&&a.clientHeight||0)},[a.pathname]),React.useEffect(()=>{window.requestAnimationFrame(()=>{const a=getNavbarElement();c(a&&a.clientHeight||0)})},[]),b}export function useFullHeight(a){const b=React.useCallback(()=>{if(!a.current)return;const b=document.querySelector("footer");if(!b)return;const c=a.current.getBoundingClientRect().top,d=b.offsetTop-window.scrollY-c;a.current.style.maxHeight=d>window.innerHeight?`${window.innerHeight-c}px`:`${d}px`},[a]),c=React.useCallback(throttle(b,150),[b]);React.useEffect(()=>"undefined"!=typeof window&&a.current?(window.addEventListener("scroll",c,{capture:!1}),window.addEventListener("resize",c,{capture:!1}),b(),()=>{window.removeEventListener("scroll",c),window.removeEventListener("resize",c)}):()=>{},[c,a])}export function useScrollLock(a){React.useLayoutEffect(()=>{a?scrollLock.disablePageScroll():scrollLock.enablePageScroll()},[a])}