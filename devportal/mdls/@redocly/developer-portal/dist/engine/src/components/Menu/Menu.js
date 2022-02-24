import*as React from"react";import{resolve}from"url";import{withPrefix,navigate}from"gatsby";import throttle from"lodash.throttle";import{useNavbarHeight}from"../../hooks";import{removeTrailingSlash}from"./../../ui/utils";import UserMenu from"../UserComponents/Menu";import{REDOC_OVERVIEW_ITEM_ID}from"../../../constants";function useActiveSectionId(a,b){const[c,d]=React.useState(""),e=useNavbarHeight(a),f=React.useCallback(throttle(()=>{const a=document.querySelectorAll("[data-section-id]");if(2>a.length)return void d("");for(let b=0;b<a.length;b++){const c=a[b],f=c.getBoundingClientRect();if(f.y<e+5&&f.bottom>e+5)return void d(c.getAttribute("data-section-id")||"")}b?d(""):d(a[0]&&a[0].getAttribute("data-section-id")||"")},150),[a,e]);return React.useEffect(()=>(window.addEventListener("scroll",f,{capture:!1}),setTimeout(()=>{f()},0),()=>{window.removeEventListener("scroll",f)}),[a,e]),c}export function Menu(a){function b(a,c,f,g=""){return a.map(a=>{if(null!=c&&null!=a.apiVersionId){const b=f?.find(b=>b.id===a.apiVersionId);if(b&&a.apiVersionId!==c)return null;if(!b&&!a.isDefaultApiVersion)return null}if(null==c&&null!=a.apiVersionId&&!a.isDefaultApiVersion)return null;const h=d(a,g);return{...a,items:b(a.items||[],c,f,g),active:h,hasActiveSubItem:h||e(a,g)}}).filter(Boolean)}function c(a,b){for(let d of a){if(d.pageId===b)return d.link&&d.link.split("#")[1]||"";if(d.items){const a=c(d.items,b);if(a)return a}}return""}function d(b,c=""){const{location:d}=a,e=d.pathname;if(!b.link)return!1;const[f,g]=b.link&&b.link.split("#");return!(decodeURIComponent(removeTrailingSlash(e))!==decodeURIComponent(removeTrailingSlash(withPrefix(resolve(e,f)))))&&(isOverviewPage(b)?!c:!g||g===(c||""))}function e(a,b=""){const c=a.items||[];return d(a,b)||c.some(a=>e(a,b))}const{items:f,location:g,apiVersionId:h,className:i,context:j,apiVersions:k,pageId:l}=a,m=useActiveSectionId(g,isOverviewPage({pageId:l}))||k&&c(f,l),[n,o]=React.useState(b(f,h,k,m));React.useEffect(()=>{o(b(f,h,k,m))},[g,f,h,k,m]);const p=useNavbarHeight(g),q=React.useCallback(a=>{const b=k?.find(b=>b.id===a.value),c=b?.isDefault?"":"@"+b?.id;let d=findDifferentVersionOfReferencePage({items:f},l.split("@")[0]+c,g.hash.substr(1))||findFirstItemOfReference({items:f},b?.id,l.split("#")[0]);d&&d.link&&navigate(d.link)},[f,l,h,k,g.hash]);return React.createElement(UserMenu,{navbarHeight:p,items:n,context:j,className:i,location:g,apiVersionId:h,apiVersions:k,onVersionChange:q})}function findDifferentVersionOfReferencePage(a,b,c){if(!a)return null;if(a.pageId===b){const[,b]=(a.link||"").split("#");if(a.link&&!b&&!c)return a;if(c===b)return a}for(const d of a.items||[]){const a=findDifferentVersionOfReferencePage(d,b,c);if(a)return a}return null}function findFirstItemOfReference(a,b,c){if(!a)return null;if(a.pageId&&a.pageId.split("#")[0]===c&&a.apiVersionId===b&&a.link)return a;for(const d of a.items||[]){const a=findFirstItemOfReference(d,b,c);if(a)return a}return null}function isOverviewPage(a){if(!a.pageId)return!1;const b=a.pageId.split("@")[0];return b.endsWith(`#${REDOC_OVERVIEW_ITEM_ID}`)&&!a.redocFakePage}