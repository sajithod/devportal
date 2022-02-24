import styled from"../../styled-components";import{replaceHashInColor}from"../../appTheme";const defaultWidth="7px",defaultHeight="5px",defaultDirection="down",defaultColor="#fff";function directionToTransform(a){let b;const c=a.direction||defaultDirection;return b="down"===c?0:"up"===c?180:"right"===c?-90:"left"===c?90:0,`rotate(${b}deg)`}export const Arrow=styled.i`
  width: ${a=>a.width||defaultWidth};
  height: ${a=>a.height||defaultHeight};
  background-repeat: no-repeat;
  background-position: center;
  display: inline-block;
  background-size: ${a=>a.width||defaultWidth} ${a=>a.height||defaultHeight};
  background-image: url("data:image/svg+xml,%3Csvg fill='none' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 7 5'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M3.5 2.51L5.806.205a.7.7 0 01.99.99l-2.8 2.8a.698.698 0 01-.99 0l-2.8-2.8a.7.7 0 11.99-.99L3.5 2.51z' fill='${a=>replaceHashInColor(a.color||defaultColor)}'/%3E%3C/svg%3E");
  transform: ${directionToTransform};

  vertical-align: middle;
`;