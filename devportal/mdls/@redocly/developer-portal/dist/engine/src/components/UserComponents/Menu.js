import*as React from"react";import{MenuItems}from"../Menu/MenuItems";import{MenuMobileButton,MenuWrapper}from"./layouts/sidebar.components";import{MenuInnerWrapper}from"./styled.elements";import VersionSwitcher from"./VersionSwitcher";export default function UserMenu(a){const{className:b,items:c,navbarHeight:d,location:e,apiVersionId:f,apiVersions:g,onVersionChange:h}=a,[i,j]=React.useState(!1),k=React.useCallback(()=>{j(!i)},[i]);return React.useEffect(()=>{j(!1)},[e.pathname]),React.createElement(React.Fragment,null,React.createElement(MenuMobileButton,{opened:i,onClick:k}),React.createElement(MenuWrapper,{animate:!0,opened:i,navBarHeight:d,className:b},null!=f&&g&&1<g.length&&React.createElement(VersionSwitcher,{apiVersionId:f,apiVersions:g,onVersionChange:h})||null,React.createElement(MenuInnerWrapper,null,React.createElement(MenuItems,{depth:0,items:c}))))}