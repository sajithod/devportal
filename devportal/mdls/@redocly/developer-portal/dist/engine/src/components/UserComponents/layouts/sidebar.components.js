import styled from"../../../styled-components";const sideBarTriggerIcon=require("../../../../images/sidebar.svg");export const MenuMobileButton=styled.span`
  background-color: ${a=>a.theme.colors.primary.main};
  width: 55px;
  user-select: none;
  height: 55px;
  bottom: 44px;
  cursor: pointer;
  position: fixed;
  right: 20px;
  z-index: 3;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 0px 20px;
  border-radius: 50%;

  transform: ${a=>a.opened?"rotate(180deg)":"rotate(0deg)"};
  transition: transform 0.75s;

  :after {
    content: '';
    display: inline-block;
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    width: 25px;
    height: 25px;
    background-color: ${({theme:a})=>a.colors.primary.contrastText};
    -webkit-mask: url(${sideBarTriggerIcon}) no-repeat 50% 50%;
    mask: url(${sideBarTriggerIcon}) no-repeat 50% 50%;
  }

  @media only screen and (min-width: ${({theme:a})=>a.breakpoints[a.sidebar.showAtBreakpoint]}) {
    display: none;
    transform: rotate(180deg);
  }

  @media print {
    display: none !important;
  }
`;export const MenuWrapper=styled.aside`
  border-right: 1px solid ${({theme:a})=>a.sidebar.rightLineColor};
  opacity: ${a=>a.opened?"1":"0"};
  pointer-events: ${a=>a.opened?"auto":"none"};
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
  background: ${({theme:a})=>a.sidebar.backgroundColor};
  font-size: ${({theme:a})=>a.sidebar.fontSize};
  font-family: ${({theme:a})=>a.sidebar.fontFamily};
  color: ${({theme:a})=>a.sidebar.textColor};
  top: ${({navBarHeight:a})=>a}px;
  height: calc(100vh - ${({navBarHeight:a})=>a}px);

  display: flex;
  flex-direction: column;

  width: 100%;
  -webkit-font-smoothing: antialiased;

  & > * {
    transform: ${a=>a.opened?"translate(0, 0)":"translate(0, 40px)"};
    transition: ${a=>a.animate?"transform 0.65s ease, opacity 0.25s ease;":"none"};
  }

  @media screen and (min-width: ${({theme:a})=>a.breakpoints[a.sidebar.showAtBreakpoint]}) {
    position: sticky;
    pointer-events: auto;
    display: flex;
    opacity: 1;
    flex-shrink: 0;
    width: ${({theme:a})=>a.sidebar.width};
    & > * {
      transform: none;
    }
  }

  @media only screen and (min-width: ${({theme:a})=>a.breakpoints.large}) {
    transform: none;
  }
`;