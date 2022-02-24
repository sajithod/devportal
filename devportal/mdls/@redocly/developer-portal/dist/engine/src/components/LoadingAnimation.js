import*as React from"react";import styled from"../styled-components";export function LoadingAnimation(a){return React.createElement(LoadingAnimationWrap,Object.assign({},a),React.createElement("div",null),React.createElement("div",null),React.createElement("div",null),React.createElement("div",null),React.createElement("div",null))}const LoadingAnimationWrap=styled.div`
  ${({theme:a,stretch:b,size:d=30,color:c})=>`
    margin: 20px ${b?"auto":"20px"};
    width: ${d+"px;"}
    height: ${Math.floor(4*(d/5))+"px;"}
    text-align: center;
    font-size: 10px;

    & > div {
      background-color: ${c||a.colors.primary.main};
      height: 100%;
      width: ${Math.floor(d/5)-Math.floor(d/10)+"px;"}
      display: inline-block;
      margin: 0 ${Math.floor(d/10)}px 0 0;
      animation: sk-stretchdelay 1.2s infinite ease-in-out;
    }
  `}

  & div:nth-child(2) {
    animation-delay: -1.1s;
  }

  & > div:nth-child(3) {
    animation-delay: -1s;
  }

  & > div:nth-child(4) {
    animation-delay: -0.9s;
  }

  & > div:nth-child(5) {
    animation-delay: -0.8s;
  }

  @keyframes sk-stretchdelay {
    0%,
    40%,
    100% {
      transform: scaleY(0.75);
    }
    20% {
      transform: scaleY(1);
    }
  }
`;