import*as React from"react";import{ContentWrapper}from"../../styled";import styled from"../../../styled-components";import{mediaCSS}from"@redocly/reference-docs";export default function UserMarkdownLayout(a){const{withToc:b,lastModifiedAgo:c,Toc:d,children:e,lastModified:f}=a;return React.createElement(PageWrapper,null,React.createElement(ContentWrapper,{withToc:b},c&&React.createElement(PageInfo,null,React.createElement(PageInfoText,{"data-cy":"last-updated",dateTime:f?.toString()},"Last updated ",React.createElement("span",null,c))),e),React.createElement(d,null))}export const PageWrapper=styled.div`
  display: flex;
  flex: 1;
  width: 100%;
`;const PageInfo=styled.div`
  display: flex;
  align-items: center;
  font-size: 0.8125rem;
  margin-bottom: 1.5em;
`,PageInfoText=styled.time`
  color: ${a=>a.theme.colors.text.primary};
  font-weight: ${a=>a.theme.typography.fontWeightRegular};
  ${({theme:a})=>mediaCSS({fontFamily:a.typography.fontFamily})}

  @media print {
    > span {
      display: none;
    }
    &::after {
      content: attr(datetime);
    }
  }
`;