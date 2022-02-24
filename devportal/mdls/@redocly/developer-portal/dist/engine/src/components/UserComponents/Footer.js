import*as React from"react";import{UniversalLink}from"../UniversalLink/UniversalLink";import{Footer,FooterSeparator,FooterCopyright,ColumnTitle,ColumnList,ColumnListItem,FooterInfo}from"./footer.elements";import styled from"../../styled-components";import{Box,Flex}from"@redocly/developer-portal/ui";import{mediaCSS}from"@redocly/reference-docs";const StyledFooter=styled.footer`
  font-size: 1rem;
  flex-shrink: 0;
  ${({theme:a})=>mediaCSS({fontFamily:a.typography.fontFamily})}

  @media print {
    color: black;
    ${Footer} {
      display: none;
    }
  }
`;export default class UserFooter extends React.PureComponent{render(){const{columns:a,copyrightText:b}=this.props.footer,c=this.props.siteVersion,d=a.length?React.createElement(Footer,{justifyContent:"center",flexWrap:"wrap",flex:"1",p:{xs:"3em 0 1em 0",small:"5.625em 0 3.9375em 0"}},React.createElement(Flex,{justifyContent:"center",flexDirection:{xs:"column",small:"row"},flexWrap:{small:"wrap"},maxWidth:"1200px",flex:{small:"1 1 100%"},px:"20px"},a.map((a,b)=>React.createElement(Box,{key:b,textAlign:{xs:"center",small:"left"},mb:{xs:"4em",small:"3em",medium:0},flex:{xs:"0 calc(50% - 20px)",small:"0 calc(33.333% - 20px)",medium:1},mx:10},React.createElement(ColumnTitle,null,a.group||a.label),React.createElement(ColumnList,null,a.items.map((a,b)=>"separator"===a.type?React.createElement(FooterSeparator,{key:a.label+"_"+b},a.label):React.createElement(ColumnListItem,{key:b},React.createElement(UniversalLink,{to:a.link,target:a.target,external:a.external,"data-cy":a.label},a.label)))))))):null,e=b||c?React.createElement(FooterInfo,null,React.createElement(FooterCopyright,null,b," ",c?`| ${c}`:null)):null;return React.createElement(StyledFooter,null,d,e)}}