import*as React from"react";import{useStaticQuery,graphql}from"gatsby";import UserFooter from"../UserComponents/Footer";import{withPathPrefix}from"../../utils";async function loadRbacFooterItems(a,b){try{const a=await fetch(withPathPrefix("_auth/footer",b)),c=await a.json();return c}catch(b){return console.log(b),a}}export function Footer(a){const{siteConfig:{footer:b,siteVersion:c,withRbac:d},site:{pathPrefix:e}}=useStaticQuery(graphql`
    query FooterQuery {
      ...FooterFragment
      siteConfig {
        withRbac
      }
      site {
        pathPrefix
      }
    }
  `),[f,g]=React.useState(b||{});return React.useEffect(()=>{d&&async function(){"development"===process.env.NODE_ENV||g(await loadRbacFooterItems(b,e))}()},[d]),React.createElement(UserFooter,Object.assign({footer:f,siteVersion:c},a))}