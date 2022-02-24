import*as React from"react";import styled from"../../styled-components";import{replaceHashInColor}from"../../appTheme";import{TileHeader,TileText}from"./styled.elements";import{UniversalLink}from"../../components/UniversalLink/UniversalLink";const WideTileWrapper=styled(UniversalLink)`
  display: inline-flex;

  flex-direction: ${({withIcon:a})=>a?"column":"row"};
  border-radius: 10px;
  box-shadow: 0px 10px 30px 0px rgba(35, 35, 35, 0.1);
  background-color: ${({bgColor:a})=>a||"#fff"};
  background-image: ${({bgImage:a})=>a?`url(${a})`:"none"};
  background-repeat: no-repeat;
  padding: 24px;
  padding-right: ${({disableArrow:a})=>a?"24px":"56px"};
  margin-bottom: 32px;
  box-sizing: border-box;
  position: relative;
  text-decoration: none;
  width: 100%;
  transition: box-shadow 0.25s ease;

  :hover {
    box-shadow: 0px 10px 30px 0px rgba(35, 35, 35, 0.2);
  }

  :before {
    content: ${({disableArrow:a})=>a?"none":"\"\""};
    background: url('data:image/svg+xml;charset=UTF-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 163.8 285.5"><path class="st0" d="m157.8 127.7l-121.8-121.7c-8-8-21-8-29 0s-8 21 0 29l107.2 107.2-108.2 108.3c-8 8-8 21 0 29 4 4 9.3 6 14.5 6s10.5-2 14.5-6l122.8-122.8c3.8-3.8 6-9.1 6-14.5s-2.2-10.6-6-14.5z" fill="${a=>replaceHashInColor(a.color||a.theme.colors.primary.main)}"/></svg>');
    display: inline-block;
    width: 9px;
    min-height: 18px;
    background-size: 9px 18px;
    background-repeat: no-repeat;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 30px;
  }

  &.external-url::after {
    content: none;
  }

  @media only screen and (min-width: ${({theme:a})=>a.breakpoints.medium}) {
    width: calc(50% - 2em);
    padding: 32px;
    padding-right: ${({disableArrow:a})=>a?"32px":"64px"};
    flex-direction: row;
    max-width: ${({maxWidth:a})=>a};
  }
`,WideTileHeader=styled(TileHeader)`
  font-size: 24px;
  text-align: ${({align:a})=>a||"left"};
`,WideTileText=styled(TileText)`
  font-size: 18px;
  text-align: ${({align:a})=>a||"left"};
`,WideTileIcon=styled.div`
  margin-bottom: 24px;
  flex-shrink: 0;
  width: 70px;
  img {
    display: block;
    height: auto;
    max-width: 100%;
  }
  @media only screen and (min-width: ${({theme:a})=>a.breakpoints.medium}) {
    margin-right: 24px;
    margin-bottom: 0;
  }
`;export class WideTile extends React.Component{render(){const{to:a,header:b,children:c,target:d,disableArrow:e,textAlign:f,headerAlign:g,icon:h,bgColor:i,bgImage:j,color:k,className:l,style:m,maxWidth:n}=this.props;return React.createElement(WideTileWrapper,{to:a,target:d,disableArrow:e,withIcon:!!h,bgColor:i,bgImage:j,color:k,className:l,style:m,maxWidth:n},h&&React.createElement(WideTileIcon,null,React.createElement("img",{src:h,alt:""})),React.createElement("div",null,b&&React.createElement(WideTileHeader,{align:f,color:k,"data-cy":`Wide-${b}`},b),c&&React.createElement(WideTileText,{align:g,color:k},c)))}}