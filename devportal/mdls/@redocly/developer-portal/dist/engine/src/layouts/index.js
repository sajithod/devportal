import*as React from"react";import{graphql,useStaticQuery}from"gatsby";import{LayoutWrapper}from"../components/LayoutWrapper/LayoutWrapper";import styled,{ThemeProvider}from"../styled-components";import{appTheme}from"../appTheme";import{NavBar}from"../components/NavBar/NavBar";import{Footer}from"../components/Footer/Footer";import{GlobalStyle}from"../globalStyle";import SidebarLayout from"../components/UserComponents/layouts/Sidebar";import{PageHeader}from"../components/PageHeader/PageHeader";import{isTocEnabled}from"./MarkdownLayout";import{RedirectToLogin}from"../components/RedirectToLogin";import{useIsLoggedIn}from"../ui/auth/utils";import{flattenNestedItems,withPathPrefix}from"../utils";import{PAGE_TYPES}from"../../constants";import{mediaCSS}from"@redocly/reference-docs";import{PageDataContext}from"./PageDataContext";import{App}from"../components/UserComponents/App";const CustomTemplateWrapper=styled.div`
  flex: 1 0 auto;
  line-height: 1.5;
  padding: 0;
  color: ${({theme:a})=>a.colors.text.primary};
  position: relative;

  ${({theme:a})=>mediaCSS({fontFamily:a.typography.fontFamily})}
`,LandingWrapper=styled.section`
  flex: 1 0 auto;
  position: relative;
`;var LinkKey;(function(a){a.PREV="redocPrevLink",a.NEXT="redocNextLink"})(LinkKey||(LinkKey={}));var LabelKey;(function(a){a.PREV="redocPrevLabel",a.NEXT="redocNextLabel"})(LabelKey||(LabelKey={}));function SidebarsWrapper({children:a,sidebarName:b,pageId:c,showNextButton:d,showPrevButton:e}){async function f(a,b){try{return(await fetch(withPathPrefix(`_auth/sidebar/${encodeURIComponent(a)}`,b))).json()}catch(a){return console.log(a),m}}const{allSidebar:g,siteConfig:{withRbac:h,showNextButton:i,showPrevButton:j},site:{pathPrefix:k}}=useStaticQuery(graphql`
    {
      site {
        pathPrefix
      }
      siteConfig {
        withRbac
        showPrevButton
        showNextButton
      }
      allSidebar {
        nodes {
          name
          context
          items {
            ...SidebarFragment
          }
        }
      }
    }
  `),l=g.nodes.find(a=>a.name===b),[m,n]=React.useState(void 0);if(React.useEffect(()=>{n(void 0),h&&async function(){"development"===process.env.NODE_ENV||n(await f(b,k))}()},[b,h]),!l)throw new Error(`Unexpected error: can't find sidebar details`);const o=m||l,p=flattenNestedItems(o.items).filter(a=>"page"===a.type&&!!a.pageId),q=p.findIndex(a=>a.pageId===c),r=a=>{if(-1===q)return;const b=p[q],c=b[LinkKey[a]],d=b[LabelKey[a]];if(c&&d)return{link:c,label:d};const e="PREV"===a?q-1:q+1;return p[e]},s=!0===e||j&&!1!==e?r("PREV"):void 0,t=!0===d||i&&!1!==d?r("NEXT"):void 0;return a(o,s,t)}export default function DefaultLayout(a){const b=a.pageContext.isLanding;let{children:c,pageContext:d,location:e,data:f}=a;if("develop"===process.env.GATSBY_BUILD_STAGE&&`undefined`!=typeof window&&"localhost"!==window.location.hostname&&"127.0.0.1"!==window.location.hostname&&""!==window.location.hostname&&!window.location.hostname.endsWith(".apps.codespaces.githubusercontent.com"))return"Development mode is only allowed in localhost";const{redocStoreStr:g}=f?.contentItem?.data||{},h=React.useMemo(()=>g?JSON.parse(g):null,[g]),i=React.useMemo(()=>({referenceDocsStoreJson:h,rawApiDefinition:h?.definition?.data??null,frontmatter:d.data,pageId:d.pageId,lastModified:f?.contentItem?.data?.lastModified}),[h,d.data,d.pageId]),j=isTocEnabled(d),k=d.type===PAGE_TYPES.referenceDocsPage||d.type===PAGE_TYPES.referenceDocsOverview;let l=d.showPrevButton,m=d.showNextButton;const n=b&&!d.sidebarName,o=useIsLoggedIn();f?.contentItem?.data.requestLogin&&!o&&(l=!1,m=!1,c=React.createElement(RedirectToLogin,null));const p=n?React.createElement(LandingWrapper,null,c):!d.sidebarName?React.createElement(CustomTemplateWrapper,{isRedoc:k},c):React.createElement(SidebarsWrapper,{sidebarName:d.sidebarName,pageId:d.pageId,showPrevButton:l,showNextButton:m},(a,b,f)=>React.createElement(SidebarLayout,{location:e,items:a.items||[],context:JSON.parse(a.context||"null"),prevPage:b,nextPage:f,withRightPanel:k&&appTheme.layout.showDarkRightPanel,isReferenceDocs:k,withToc:j,pageId:d.pageId,apiVersionId:d.apiVersionId,apiVersions:d.apiVersions},c));return React.createElement(ThemeProvider,{theme:appTheme},React.createElement(PageDataContext.Provider,{value:i},React.createElement(App,{location:e},React.createElement(LayoutWrapper,null,React.createElement(GlobalStyle,null),React.createElement(PageHeader,{seo:d.seo}),n?null:React.createElement(NavBar,{standalone:!0,location:e,sidebarName:d.sidebarName}),p,React.createElement(Footer,null)))))}