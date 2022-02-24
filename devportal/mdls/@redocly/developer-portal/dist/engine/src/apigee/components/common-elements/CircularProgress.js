import*as React from"react";import styled from"styled-components";export default function CircularProgress(a){return React.createElement(StyledSpinner,Object.assign({},a),React.createElement("div",null),React.createElement("div",null),React.createElement("div",null),React.createElement("div",null))}export const StyledSpinner=styled.div`
  display: inline-block;
  position: relative;
  width: ${({size:a})=>a||"60"}px;
  height: ${({size:a})=>a||"60"}px;
  div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: ${({size:a})=>a||"44"}px;
    height: ${({size:a})=>a||"44"}px;
    margin: 0;
    border: 2px solid
      ${({theme:a,color:b})=>"contrast"===b?a.colors.primary.contrastText:a.colors.primary.main};
    border-radius: 50%;
    animation: ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: ${({theme:a,color:b})=>"contrast"===b?a.colors.primary.contrastText:a.colors.primary.main}
      transparent transparent transparent;
  }
  div:nth-child(1) {
    animation-delay: -0.45s;
  }
  div:nth-child(2) {
    animation-delay: -0.3s;
  }
  div:nth-child(3) {
    animation-delay: -0.15s;
  }
  @keyframes ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;