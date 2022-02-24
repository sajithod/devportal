import styled from"../../styled-components";import{transparentize}from"polished";import{mediaCSS}from"@redocly/reference-docs";export const TileHeader=styled.h3`
  font-weight: ${({theme:a})=>a.typography.fontWeightBold};
  line-height: 1.25;
  color: ${a=>a.color||transparentize(.1,a.theme.colors.primary.main)};
  ${({theme:a})=>mediaCSS({fontFamily:a.typography.headings.fontFamily})}
  && {
    margin: 0 0 0.5em;
  }
`;export const TileText=styled.span`
  display: inline-block;
  font-weight: ${({theme:a})=>a.typography.fontWeightRegular};
  overflow: hidden;
  color: ${a=>a.color||a.theme.colors.text.primary};
  line-height: 1.25;
  ${({theme:a})=>mediaCSS({fontFamily:a.typography.fontFamily})}
`;