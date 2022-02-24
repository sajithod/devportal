import styled from"styled-components";import{CompactTypography}from"../../../ui";export default styled(CompactTypography).attrs({"data-cy":"product-status"})`
  color: ${({theme:a,color:b})=>a.colors[b].contrastText};
  background-color: ${({theme:a,color:b})=>a.colors[b].light};
  font-size: 0.7em;
  padding: 0em 0.7em;
  border-radius: ${({theme:a})=>a.shape.borderRadius};
`;