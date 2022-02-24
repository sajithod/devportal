import*as React from"react";import{createGlobalStyle,MarkdownRenderer,mediaCSS,ProProviders,ProStore,RedoclyReferenceDocs,Section,ZERO_BREAKPOINT}from"@redocly/reference-docs";import{navigate}from"gatsby";import{configure}from"mobx";import{observer}from"mobx-react";import{graphql as gql}from"gatsby";import ApiReferenceInfo from"../components/UserComponents/ApiReferenceInfo";import{appTheme}from"../appTheme";import{PageHeader}from"../components/PageHeader/PageHeader";import{PAGE_TYPES,REDOC_OVERVIEW_ITEM_ID}from"../../constants";import{usePageData,usePathPrefix}from"../ui/utils";import{getNavbarElement}from"../utils";import"../fragments";import{getUserId}from"../ui/auth/utils";import{useIdpLoginPath}from"../components/RedirectToLogin";import{FakeControlsWrap}from"../components/styled";import{getHooks}from"./get-hooks";import{joinWithSeparator}from"../helpers";const DEFAULT_OAUTH2_REDIRECT_PAGE="/_auth/oauth2-redirect.html";configure({isolateGlobalState:!0,useProxies:"ifavailable"});const oldRender=MarkdownRenderer.prototype.renderMd,{events,requestInterceptor,...hooks}=getHooks();function RedocPage(a){const{type:b,data:c}=a.data.contentItem,{referenceDocsStoreJson:d}=usePageData(),e=a.data.contentItem.data.redocItemId,[f,g]=React.useState(),h=React.useMemo(()=>{if(!d)return null;d.options={...(d.options||{}),...(c.settings||{})},d.options.disableSearch=!0,d.options.ctrlFHijack=!1,d.options.showNextButton=!1,d.options.theme=appTheme||{},d.options.hooks=hooks,d.options.events=events,d.options.requestInterceptor=requestInterceptor;const b=usePathPrefix();if(d.options.routingBasePath=a.pageContext.pageBaseUrl||void 0,d.options.oAuth2RedirectURI="undefined"==typeof window?null:`${window.location.origin}${b}${DEFAULT_OAUTH2_REDIRECT_PAGE}`,d.options.disableSidebar=!0,d.options.pagination=d.options.pagination||"item",d.options.disablePaginationLoadingAnimation=void 0===d.options.disablePaginationLoadingAnimation?"section"!==d.options.pagination:d.options.disablePaginationLoadingAnimation,d.options.skipBundleAndConvert=!0,d.options.unauthorizedTryIt&&!getUserId()){const c=b+a.data.contentItem.link;let e=d.options.unauthorizedTryIt.link;const f=e||useIdpLoginPath();d.options.unstable_tryItButtonOverride={label:d.options.unauthorizedTryIt.label,onClick:()=>{navigate(f+"?redirect_to="+encodeURIComponent(c))}}}d.options.linkForId=function(a){if(!a)return"";if(a.startsWith("section/Authentication/")){if(!c.redocHasSecurityDefinitions)return"";if("none"!==d.options.pagination)return c.redocInfoPageLink?b+c.redocInfoPageLink+"#"+a:""}return"#"+a},d.options.generateDeepLink=(a,b)=>{switch(d.options.pagination){case"item":return"#!"+a;case"section":case"none":return"#"+joinWithSeparator(b.split("#")[1]||"",a,d.options.deepLinkPrefix||"!");}return null},d.options.onDeepLinkClick=a=>{navigate(a),"item"===d.options.pagination&&f.menu.history.replaceForField(e+a.substr(1))},d.options.scrollYOffset=()=>{const a=getNavbarElement();return a&&a.getBoundingClientRect().bottom||74};const f=ProStore.fromJS(d),g=b+(a.pageContext.pageBaseUrl||"");MarkdownRenderer.prototype.renderMd=function(a,b){const c=oldRender.apply(this,[a,b]);return c.replace(/<a href="#(section|operation|tag)\/([^\/"]*)(?:\/([^"]*))?"/g,(a,b,c,e)=>{const f="item"===d.options.pagination?"":"#";return`<a href="${g}/${f}${b}/${c}${e?"#"+e:""}"`})},Object.defineProperty(f.menu.history,"replace",{get:()=>a=>{if(!a)return;let c=f.menu.history.linkForId(a);a.startsWith("section/Authentication/")&&b&&(c=c.slice(b.length)),navigate(c)},configurable:!0});const h=f.menu.flatItems.find(a=>a.id===e);return f.menu.activate(h,!1,!1,!1),hooks.onPagination&&hooks.onPagination({operation:"operation"===h?.type?h:void 0,item:h,store:f}),f.options.hooks?.onInit&&f.options.hooks?.onInit?.({store:f}),f},[d]);if(React.useEffect(()=>{switch(h?.options.pagination){case"item":g(window.location.hash.substring(1));break;case"section":case"none":g(window.location.hash.split(h.options.deepLinkPrefix)[1]);}},[h]),React.useLayoutEffect(()=>{if(!h)return;const a=window.location.hash.substring(1).split(h.options.deepLinkPrefix)[0],b=h.menu.flatItems.find(b=>b.id===a)||h.menu.activeItem,c=f?joinWithSeparator(b?.id||"",f,h.options.deepLinkPrefix):void 0;c&&h.menu.history.replaceForField(c||""),h.menu.activateAndScroll(b,!1,void 0,c)},[f,h]),React.useEffect(()=>{if(h){const a=h.menu.flatItems.find(a=>a.id===e);h.menu.activate(a,!1,!1,!1)}},[e]),!h)return null;let i;return i=b===PAGE_TYPES.referenceDocsOverview&&"none"!==d.options.pagination?React.createElement(ApiReferenceInfo,{store:h,data:c}):React.createElement(RedoclyReferenceDocs,{store:h,_forceRenderInfo:e===REDOC_OVERVIEW_ITEM_ID&&c.redocHasInfoPage}),React.createElement(React.Fragment,null,React.createElement(PageHeader,{seo:a.pageContext.seo}),React.createElement(ProProviders,{store:h},i),React.createElement(CssFixes,{withLayoutButtons:h.options.showRightPanelToggle||h.options.showChangeLayoutButton}))}const CssFixes=createGlobalStyle`
  // TODO: !!!
  ${Section}:last-child {
    ${mediaCSS({minHeight:{[ZERO_BREAKPOINT]:"",medium:0}})}
  }

  ${FakeControlsWrap} {
    ${({withLayoutButtons:a})=>a?"":"display: none;"};
  }
`;export default observer(RedocPage);export const pageQuery=gql`
  query RedocOpQuery($pageId: String!) {
    contentItem(pageId: { eq: $pageId }) {
      type
      link
      data {
        redocStoreStr
        redocHasSecurityDefinitions
        redocInfoPageLink
        redocItemId
        redocHasInfoPage
        settings
        requestLogin
        lastModified
      }
      seo {
        title
      }
    }
  }
`;