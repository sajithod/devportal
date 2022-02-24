import*as React from"react";import styled from"../../styled-components";import{MenuItem}from"./MenuItem";const MenuListStyled=styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  color: ${a=>a.theme.sidebar.textColor};
  position: relative;
  a {
    text-decoration: none;
    display: block;
    color: ${a=>a.theme.sidebar.textColor};
  }
  .external-url::after {
    content: none;
  }
`;export class MenuItems extends React.PureComponent{render(){const{depth:a,items:b,className:c}=this.props,d=b.find(({active:a})=>a),e=b.find(({menuStyle:a,link:b})=>"drilldown"!==a&&!!b);return React.createElement(MenuListStyled,{depth:a,className:c},b.map((c,f)=>React.createElement(MenuItem,{item:c,depth:a,key:c.pageId+"-"+f,isLast:f===b.length-1,activeItem:d,firstSiblingItem:e,isAlwaysExpanded:"always"===c.expanded},0<c.items?.length?React.createElement(MenuItems,{items:c.items,depth:a+1}):null)))}}