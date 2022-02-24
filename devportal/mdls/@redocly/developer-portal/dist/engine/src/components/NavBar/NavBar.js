import*as React from"react";import{useStaticQuery,graphql}from"gatsby";import UserNavBar from"../UserComponents/NavBar";import{withPathPrefix}from"../../utils";async function loadRbacNavItems(a,b){try{return(await fetch(withPathPrefix("_auth/header",b))).json()}catch(b){return a}}export function NavBar(a){let{siteConfig:b,site:{pathPrefix:c}}=useStaticQuery(graphql`
      query NavQuery {
        ...HeaderNavFragment
        site {
          pathPrefix
        }
        siteConfig {
          withRbac
        }
      }
    `);const d=b.nav,e=b.withRbac,{href:f,altText:g,image:h}=b.logo,[i,j]=React.useState(d);return React.useEffect(()=>{e&&async function(){"development"===process.env.NODE_ENV||j(await loadRbacNavItems(i,c))}()},[e]),React.createElement(React.Fragment,null,React.createElement(UserNavBar,Object.assign({items:i,logo:h,altText:g,href:f,pathPrefix:c,sidebarName:a.sidebarName},a)))}