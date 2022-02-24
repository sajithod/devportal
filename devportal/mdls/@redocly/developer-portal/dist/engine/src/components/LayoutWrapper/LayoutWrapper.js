import{mediaCSS}from"@redocly/reference-docs";import styled from"styled-components";export const LayoutWrapper=styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  ${({theme:a})=>"#ffffff"===a.colors.background?"":`background-color: ${a.colors.background};`}

  ${({theme:a})=>mediaCSS({fontFamily:a.typography.fontFamily})}
`;