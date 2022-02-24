import styled from"../../styled-components";import{typography}from"../../common-elements";import{color,typography as typographySystem}from"styled-system";import{mediaCSS}from"@redocly/reference-docs";export const Emphasis=styled.strong`
  font-weight: ${({theme:a})=>a.typography.fontWeightBold};
`;export const H1=styled.h1`
  ${({theme:a})=>typography(a.typography.heading1)}
  margin: 1.35em 0 0.9em;
  && {
    ${({mt:a})=>a&&`margin-top: ${a};`}
    ${({mb:a})=>a&&`margin-bottom: ${a};`}
    ${color}
    ${typographySystem}
  }
`;export const H2=styled.h2`
  ${({theme:a})=>typography(a.typography.heading2)}
  margin: 1.25em 0 0.8em;
  && {
    ${({mt:a})=>a&&`margin-top: ${a};`}
    ${({mb:a})=>a&&`margin-bottom: ${a};`}
    ${color}
    ${typographySystem}
  }
`;export const H3=styled.h3`
  ${({theme:a})=>typography(a.typography.heading3)}
  margin: 1.25em 0 0.8em;
  && {
    ${({mt:a})=>a&&`margin-top: ${a};`}
    ${({mb:a})=>a&&`margin-bottom: ${a};`}
    ${color}
    ${typographySystem}
  }
`;export const SectionHeader=styled.h2`
  color: ${a=>a.theme.colors.primary.main};
  font-size: 1.75em;
  font-weight: ${({theme:a})=>a.typography.fontWeightLight};
  text-align: center;
  margin: 2.65em 0;
  padding: 0px 20px;
  ${({theme:a})=>mediaCSS({fontFamily:a.typography.headings.fontFamily})}
`;export const Typography=styled.p`
  ${({theme:a})=>typography(a.typography)};
  color: ${({theme:a})=>a.colors.text.primary};
  ${color}
  margin-top: ${({mt:a})=>a||"1em"};
  margin-bottom: ${({mb:a})=>a||"1em"};
  ${typographySystem}
`;export const CompactTypography=styled(Typography).attrs(()=>({mt:"0em",mb:"0em"}))``;