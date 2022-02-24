import*as React from"react";import{Link}from"gatsby";import{useLocation}from"@gatsbyjs/reach-router";import styled from"../../styled-components";import{replaceHashInColor}from"../../appTheme";const isUrl=require("is-url"),StyledExternalLink=styled.a`
  &.external-url {
    position: relative;

    :after {
      content: '';
      display: inline-block;
      position: absolute;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' version='1.1' x='0' y='0' viewBox='0 0 100 125' enable-background='new 0 0 100 100' xml:space='preserve'%3E%3Cpath fill='${({theme:a})=>replaceHashInColor(a.colors.text.primary)}' d='M-408.2-318.5 98.6 4.8c0-0.1 0-0.2-0.1-0.3 0-0.1-0.1-0.2-0.1-0.3 0-0.1 0-0.1-0.1-0.2 0 0 0-0.1 0-0.1 0-0.1-0.1-0.2-0.2-0.3 0-0.1-0.1-0.2-0.2-0.3 -0.1-0.1-0.1-0.2-0.2-0.3C97.7 2.9 97.6 2.8 97.5 2.7c-0.1-0.1-0.2-0.2-0.3-0.3 -0.1-0.1-0.1-0.1-0.2-0.2 -0.1-0.1-0.2-0.2-0.3-0.2 -0.1-0.1-0.2-0.1-0.2-0.2 -0.1-0.1-0.2-0.1-0.3-0.2 -0.1 0-0.2-0.1-0.3-0.1 0 0-0.1 0-0.1-0.1 -0.1 0-0.2 0-0.2-0.1 -0.1 0-0.2-0.1-0.3-0.1 -0.1 0-0.2-0.1-0.4-0.1 -0.1 0-0.2 0-0.3 0 -0.1 0-0.3 0-0.4 0 -0.1 0-0.1 0-0.2 0L63.8 1.3c-2.5 0-4.6 2.1-4.6 4.6 0 2.5 2.1 4.6 4.6 4.5l19.3-0.1 -29.8 30.2c-1.1 1.1-1.5 2.7-1.2 4.1 0.2 0.9 0.6 1.7 1.3 2.4 0.9 0.9 2.1 1.3 3.2 1.3 1.2 0 2.3-0.5 3.2-1.4l0 0 29.8-30.2 0.1 19.3c0 2.5 2.1 4.6 4.6 4.5 1.3 0 2.4-0.5 3.2-1.4 0.8-0.8 1.3-2 1.3-3.2L98.7 5.7c0-0.1 0-0.1 0-0.2 0-0.1 0-0.2 0-0.4C98.6 5 98.6 4.9 98.6 4.8zM6.5 83.3c0 5.7 4.6 10.4 10.4 10.4l55.6 0.1c5.7 0 10.4-4.6 10.4-10.4l-0.1-40.8h6.1v40.8c0 9-7.3 16.3-16.3 16.3l-56.4-0.1c-8.6 0-15.6-7-15.6-15.6L0.6 27.8c0-9 7.3-16.3 16.3-16.3l41.1-0.1v6.1L17 17.5c-5.7 0-10.4 4.6-10.4 10.4L6.5 83.3z'/%3E%3C/svg%3E");
      width: 10px;
      height: 10px;
      background-repeat: no-repeat;
      top: 50%;
      right: -15px;
      transform: translateY(-50%);
    }
  }
`,propsList=["color","size","variant","bgColor","bgImage","disableArrow","withIcon","maxWidth","inversed","transparent","large"];export const withPropsFilter=a=>b=>c=>{const d=Object.fromEntries(Object.entries(c).filter(([b])=>!a.includes(b)));return React.createElement(b,Object.assign({},d))};export const UniversalLink=withPropsFilter(propsList)(a=>"string"==typeof a.to&&(isUrl(a.to)||a.to.startsWith("mailto:"))||a.external?React.createElement(StyledExternalLink,{style:a.style,href:a.to,target:a.target||a.external&&"_blank"||"_self",className:`${a.external?"external-url":""} ${a.className}`,rel:a.rel,children:a.children,"data-cy":`universalLink-${"string"==typeof a.children?a.children:"with-nested-jsx"}`}):null==a.to?React.createElement("a",{onClick:a.onClick,className:a.className,style:a.style},a.children):React.createElement(Link,Object.assign({},a,{to:a.to,state:{previousPath:useLocation()?.pathname,...a.state}})));