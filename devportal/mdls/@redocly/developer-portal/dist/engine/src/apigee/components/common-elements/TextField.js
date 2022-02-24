import*as React from"react";import styled from"styled-components";export default function TextField(a){return React.createElement(Label,null,React.createElement("span",null,a.label),React.createElement(Input,Object.assign({},a.inputProps)))}const Input=styled.input`
  border: 1px solid rgba(0, 0, 0, 0.23);
  padding: 12px;
  border-radius: 4px;
  width: 100%;
  height: 48px;
  display: block;
  outline-color: ${({theme:a})=>a.colors.primary.main};
  transition: outline 0.25s ease;
`,Label=styled.label`
  color: ${({theme:a})=>a.colors.text.primary};
  span {
    font-size: 0.9em;
    display: inline-block;
    margin-bottom: 5px;
  }
`;