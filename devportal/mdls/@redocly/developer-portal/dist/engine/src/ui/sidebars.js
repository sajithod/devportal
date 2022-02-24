import*as React from"react";import{useStaticQuery,graphql}from"gatsby";import{withPathPrefix}from"../../src/utils";export function useSidebarsInfo(){const{siteConfig:{withRbac:b},site:{pathPrefix:c},sidebars:a}=useStaticQuery(graphql`
    {
      siteConfig {
        withRbac
      }
      site {
        pathPrefix
      }
      sidebars: allSidebar(filter: { permission: { in: [null, "guest"] } }) {
        nodes {
          name
          context
          items {
            link
            label
          }
        }
      }
    }
  `),[d,e]=React.useState(null),[f,g]=React.useState(b);return React.useEffect(()=>{b&&async function(){return"development"===process.env.NODE_ENV?void g(!1):void(e(await loadRbacSidebars(c)),g(!1))}()},[b]),{sidebars:parseSidebarsContext(d||a.nodes),loadingRbac:f}}async function loadRbacSidebars(a){try{return await(await fetch(withPathPrefix("_auth/sidebars",a))).json()}catch(a){return console.log(a),null}}function parseSidebarsContext(a){return a?.map(a=>({...a,context:a.context&&JSON.parse(a.context)}))}