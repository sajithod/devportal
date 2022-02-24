import*as React from"react";import{CopyToClipboard}from"react-copy-to-clipboard";import{IconButton}from"./styled.elements";import Popup from"reactjs-popup";import styled from"styled-components";export default function CopyButton(a){return React.createElement(StyledPopup,{trigger:React.createElement(IconButton,{"aria-label":"Copy to clipboard"},React.createElement(CopyToClipboard,{text:a.value},React.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 477.867 477.867",width:"18px",height:"18px"},React.createElement("path",{d:"M341.333 85.333H51.2c-28.277 0-51.2 22.923-51.2 51.2v290.133c0 28.277 22.923 51.2 51.2 51.2h290.133c28.277 0 51.2-22.923 51.2-51.2V136.533c0-28.277-22.923-51.2-51.2-51.2zM358.4 426.667c0 9.426-7.641 17.067-17.067 17.067H51.2c-9.426 0-17.067-7.641-17.067-17.067V136.533c0-9.426 7.641-17.067 17.067-17.067h290.133c9.426 0 17.067 7.641 17.067 17.067v290.134z"}),React.createElement("path",{d:"M426.667 0h-307.2c-28.277 0-51.2 22.923-51.2 51.2 0 9.426 7.641 17.067 17.067 17.067S102.4 60.626 102.4 51.2s7.641-17.067 17.067-17.067h307.2c9.426 0 17.067 7.641 17.067 17.067v307.2c0 9.426-7.641 17.067-17.067 17.067s-17.067 7.641-17.067 17.067 7.641 17.067 17.067 17.067c28.277 0 51.2-22.923 51.2-51.2V51.2c0-28.277-22.923-51.2-51.2-51.2z"})))),position:"top center",arrow:!0,closeOnDocumentClick:!0},React.createElement("span",null,"Copied!"))}export const StyledPopup=styled(Popup)`
  &-content {
    background-color: #fff;
    border: 1px solid #d7d7d7;
    padding: 6px 10px;
    border-radius: 4px;
  }
  &-arrow {
    filter: drop-shadow(0 -3px 3px rgba(0, 0, 0, 0.16));
    color: #fff;
    stroke-width: 2px;
    stroke: #d7d7d7;
    stroke-dasharray: 30px;
    stroke-dashoffset: -54px;
  }
`;