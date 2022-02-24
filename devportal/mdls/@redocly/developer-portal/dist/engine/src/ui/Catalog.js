import*as React from"react";import{useStaticQuery,graphql}from"gatsby";import{withPathPrefix}from"../../src/utils";export function useAPICatalog(){const{apis:a,siteConfig:{withRbac:b},site:{pathPrefix:c}}=useStaticQuery(graphql`
    {
      siteConfig {
        withRbac
      }
      site {
        pathPrefix
      }
      apis {
        id
        definitionId
        link
        sourcePath
        info
        data
        definitionProperties
        permission
        versions {
          definitionId
          isDefault
          id
          title
          link
        }
      }
    }
  `),[d,e]=React.useState(null),[f,g]=React.useState(b);return React.useEffect(()=>{b&&async function(){"development"===process.env.NODE_ENV&&setTimeout(()=>g(!1),2e3);try{e(await loadRbacApis(c))}finally{g(!1)}}()},[b]),{apis:d||a,loadingRbac:f}}export function APICatalog(a){const{apis:b,loadingRbac:c}=useAPICatalog();return React.createElement(React.Fragment,null,a.children({apis:b,loadingRbac:c}))}async function loadRbacApis(a){try{return(await fetch(withPathPrefix("_auth/apis",a))).json()}catch(a){return console.log(a),null}}