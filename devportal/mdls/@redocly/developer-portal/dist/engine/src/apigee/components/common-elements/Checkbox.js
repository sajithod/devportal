import*as React from"react";import styled from"styled-components";export default function Checkbox(a){const{checked:b,id:c,onChange:d,label:e,disabled:f}=a;return React.createElement(React.Fragment,null,React.createElement(StyledInput,{id:c,type:"checkbox",checked:b,onChange:d,disabled:f}),React.createElement("label",{htmlFor:c},React.createElement("div",null,e)))}const StyledInput=styled.input`
  position: absolute;
  opacity: 0;

  & + label {
    position: relative;
    cursor: pointer;
    padding: 0;
    display: flex;
    div {
      margin-top: 1px;
      display: inline-block;
    }
    p {
      line-height: 1.2;
    }

    &::before {
      content: '';
      margin-right: 10px;
      display: inline-block;
      vertical-align: top;
      width: 19px;
      height: 19px;
      background: white;
      border: 1px solid rgba(0, 0, 0, 0.23);
      border-radius: 2px;
      flex-shrink: 0;
    }
  }

  &:focus + label:before {
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.12);
  }

  &:checked + label {
    &::before {
      background: ${({theme:a})=>a.colors.primary.main};
    }
    &::after {
      content: '';
      position: absolute;
      left: 5px;
      top: 10px;
      background: white;
      width: 2px;
      height: 2px;
      box-shadow: 2px 0 0 white, 4px 0 0 white, 4px -2px 0 white, 4px -4px 0 white, 4px -6px 0 white,
        4px -8px 0 white;
      transform: rotate(45deg);
    }
  }

  &:disabled + label {
    color: #b8b8b8;
    cursor: auto;
    &::before {
      box-shadow: none;
      background: #ddd;
    }
  }
`;