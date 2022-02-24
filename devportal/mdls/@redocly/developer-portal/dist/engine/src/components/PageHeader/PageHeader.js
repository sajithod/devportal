import*as React from"react";import{Helmet}from"react-helmet";import{useStaticQuery,graphql}from"gatsby";export function PageHeader(a){const{siteConfig:b}=useStaticQuery(graphql`
    {
      siteConfig {
        stylesheets
        scripts
        social {
          twitter
        }
        seo {
          title
          description
          image
          keywords
          lang
          jsonLd
        }
      }
    }
  `),{seo:c}=a,{stylesheets:d,scripts:e,social:f,seo:g}=b,h=c?.title||g.title,i=c?.description||g.description,j=c?.image||g.image,k=c?.keywords||g.keywords,l={lang:c?.lang||g.lang},m=c?.jsonLd||g.jsonLd;return React.createElement(Helmet,{defer:!1,htmlAttributes:l},React.createElement("title",null,h),React.createElement("meta",{name:"title",content:h}),React.createElement("meta",{name:"description",content:i}),k&&React.createElement("meta",{name:"keywords",content:k})||null,React.createElement("meta",{property:"og:type",content:"website"}),React.createElement("meta",{property:"og:title",content:h}),React.createElement("meta",{property:"og:description",content:i}),React.createElement("meta",{property:"og:site_name",content:g.title}),j&&React.createElement("meta",{property:"og:image",content:j}),React.createElement("meta",{name:"twitter:title",content:h}),React.createElement("meta",{name:"twitter:description",content:i}),f&&f.twitter&&React.createElement("meta",{name:"twitter:site",content:f.twitter}),React.createElement("meta",{name:"twitter:card",content:j?"summary_large_image":"summary"}),j&&React.createElement("meta",{property:"twitter:image",content:j}),d.filter(a=>!!a).map(a=>React.createElement("link",{key:a,href:a,rel:"stylesheet"})),e.filter(a=>!!a).map(a=>React.createElement("script",{key:a,src:a})),m&&React.createElement("script",{type:"application/ld+json"},JSON.stringify(m)))}