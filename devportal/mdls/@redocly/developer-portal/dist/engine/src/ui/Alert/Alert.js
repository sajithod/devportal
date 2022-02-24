import*as React from"react";import styled from"styled-components";import{alertGeneral,alertHeading,alertIcon}from"../../components/StyledContent/alerts";export function Alert(a){const{variant:b,header:c,content:d,className:e,style:f,children:g}=a;return g||d?React.createElement(AlertWrapper,{variant:b||"attention",className:e,style:f},React.createElement("div",null,c&&React.createElement(AlertHeader,{variant:b},c),React.createElement(AlertText,{variant:b},g||d))):null}function getVariant(a,b){return a.components.alert.variants[b]}const AlertWrapper=styled.div`
  ${alertGeneral}
  display: flex;
  background-color: ${({theme:a,variant:b})=>getVariant(a,b).backgroundColor};

  &::before {
    ${alertIcon};
  }
`,AlertHeader=styled.h5`
  ${alertHeading}
`,AlertText=styled.p`
  display: block;
  width: 100%;
  margin: 0;
  padding: 0;
  color: ${({theme:a,variant:b})=>getVariant(a,b).textColor};
  line-height: 1.5;
  font-size: 16px;
`;