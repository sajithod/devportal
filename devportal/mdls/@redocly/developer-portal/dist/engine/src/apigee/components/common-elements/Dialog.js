import*as React from"react";import Popup from"reactjs-popup";import styled from"styled-components";export default function Dialog(a){const{onOpen:b,onClose:c,open:d,children:e}=a;return React.createElement(Modal,{onOpen:b,onClose:c,open:d,modal:!0,lockScroll:!0},e)}const Modal=styled(Popup)`
  &-content {
    border: 0;
    width: 100%;
    max-width: 600px;
    box-shadow: 0px 15px 55px 0 rgba(0, 0, 0, 0.08);
    border-radius: 4px;
    background-color: #fff;
    padding: 2em;
  }
  &-overlay {
    overflow-y: auto;
    background-color: rgba(0, 0, 0, 0.15);
  }
`;