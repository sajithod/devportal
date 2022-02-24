import*as React from"react";import styled from"../../styled-components";import{flexbox}from"styled-system";import{Box}from"./Box";export const Flex=styled(Box)`
  display: flex;
  ${flexbox}
`;export function FlexSection(a){return React.createElement(Flex,Object.assign({},a,{mx:"auto",width:a.width||{xs:"90%",large:910}}),a.children)}