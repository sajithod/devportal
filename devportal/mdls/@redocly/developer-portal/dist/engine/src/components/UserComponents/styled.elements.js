import*as React from"react";import styled from"../../styled-components";import{OperationBadge}from"@redocly/reference-docs";const externalIconDark=require("../../../images/external-link-dark.svg");export const ExternalIcon=styled.i`
  display: inline-block;
  vertical-align: middle;
  background: url(${externalIconDark});
  width: 10px;
  height: 10px;
  background-repeat: no-repeat;
  margin-left: 5px;
`;export const Separator=styled.span`
  display: flex;
  justify-content: space-between;
  margin-left: ${({theme:a,depth:b=0})=>a.sidebar.spacing.offsetLeft+b*a.sidebar.spacing.offsetNesting}px;
  padding: ${({theme:a})=>a.sidebar.spacing.paddingVertical}px
    ${({theme:a})=>a.sidebar.spacing.paddingHorizontal}px;

  padding-left: ${({theme:a})=>a.sidebar.spacing.paddingHorizontal+1.5*a.sidebar.spacing.unit}px;
  position: relative;
  cursor: default;
  font-family: ${({theme:a})=>a.sidebar.fontFamily};
  font-size: ${({theme:a})=>a.sidebar.fontSize};
  font-weight: ${({theme:a})=>a.typography.fontWeightBold};
  color: ${({theme:a})=>a.sidebar.separatorLabelColor};

  &:empty {
    padding: 0.1em 0;
  }
`;export const SeparatorLine=styled.span`
  display: block;
  width: 100%;
  height: 1px;
  background-color: ${({theme:a})=>a.sidebar.separatorLineColor};
  margin: ${({theme:a})=>a.sidebar.spacing.paddingVertical}px 0;
`;export const MenuItemTitle=styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;

  font-family: ${({theme:a})=>a.sidebar.fontFamily};
  font-size: ${({theme:a})=>a.sidebar.fontSize};
  font-weight: ${({theme:a})=>a.typography.fontWeightRegular};

  color: ${a=>a.active?a.theme.sidebar.activeTextColor:"inherit"};
  background-color: ${a=>a.active?a.theme.sidebar.activeBgColor:"inherit"};

  cursor: ${({isAlwaysExpanded:a})=>a?"default":"pointer"};

  margin-left: ${({depth:a,theme:b})=>`${b.sidebar.spacing.offsetLeft+a*b.sidebar.spacing.offsetNesting}px`};

  padding-top: ${({theme:a})=>a.sidebar.spacing.paddingVertical}px;
  padding-right: ${({theme:a})=>a.sidebar.spacing.paddingHorizontal}px;
  padding-bottom: ${({theme:a})=>a.sidebar.spacing.paddingVertical}px;
  margin-bottom: 1px; // hardcoded for now

  padding-left: ${({theme:a,hasChildren:b,isAlwaysExpanded:c})=>b&&!c?a.sidebar.spacing.paddingHorizontal:a.sidebar.spacing.paddingHorizontal+a.sidebar.caretSize+.5*a.sidebar.spacing.unit}px;

  transition: background-color 0.3s, color 0.3s;
  border-top-left-radius: ${({theme:a})=>a.sidebar.borderRadius};
  border-bottom-left-radius: ${({theme:a})=>a.sidebar.borderRadius};

  word-break: break-word;

  :hover {
    color: ${({isAlwaysExpanded:a,theme:b})=>a?"inherit":b.sidebar.activeTextColor};
    background-color: ${({isAlwaysExpanded:a,theme:b})=>a?"inherit":b.sidebar.activeBgColor};
  }

  :empty {
    padding: 0;
  }

  ${({isDrilldown:a,theme:b})=>a&&`
    padding-top: ${2*b.sidebar.spacing.paddingVertical}px;
    padding-bottom: ${2*b.sidebar.spacing.paddingVertical}px;
    padding-left: ${b.sidebar.spacing.paddingHorizontal}px;
    &:hover {
      color: currentColor;
      background-color: ${b.sidebar.backgroundColor};
    }
  `}
`;export const ArrowWrapper=styled.div`
  margin-right: ${({theme:a})=>a.sidebar.spacing.unit/2}px;
`;export const StyledOperationBadge=styled(OperationBadge)`
  flex-shrink: 0;
  margin-top: 0;
`;export const MenuLabel=styled.span`
  width: 100%;
`;export const DrilldownMenu=styled.div`
  ${({theme:a})=>`
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
    z-index: 100;
    background-color: ${a.sidebar.backgroundColor};
    > div {
      animation-name: slideIn;
      animation-fill-mode: forwards;
      animation-duration: 0.3s;
      animation-timing-function: ease;
      background-color: transparent;
    }
  `}
  @keyframes slideIn {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(0%);
    }
  }
`;export const ButtonBack=styled.button`
  width: 100%;
  background-color: transparent;
  padding: 0;
  border: 0;
  outline: 0;
  color: ${({theme:a})=>a.sidebar.textColorSecondary};
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: ${({theme:a})=>a.sidebar.fontSize};
  transition: color 0.25s ease;
  text-align: left;
  margin-bottom: ${({theme:a})=>3*a.sidebar.spacing.paddingVertical}px;
  svg {
    margin-right: ${({theme:a})=>1.5*a.sidebar.spacing.unit}px;
  }
  &:hover {
    color: ${({theme:a})=>a.sidebar.textColor};
  }
`;export const StyledDrilldownMenuItem=styled.span`
  display: inline-flex;
  align-items: center;
  color: ${({theme:a})=>a.sidebar.textColor};
  font-size: ${({theme:a})=>a.sidebar.fontSize};
  font-weight: ${({theme:a})=>a.typography.fontWeightBold};
`;export const DrilldownMenuWrapper=styled.div`
  padding: ${({theme:a})=>a.sidebar.spacing.paddingVertical}px
    ${({theme:a})=>a.sidebar.spacing.paddingHorizontal}px;
  margin-bottom: ${({theme:a})=>3*a.sidebar.spacing.unit}px;
  margin-left: ${({theme:a})=>2*a.sidebar.spacing.unit}px;
  word-break: break-word;
`;export const DrilldownMenuIcon=styled.img`
  width: ${({theme:a})=>4*a.sidebar.spacing.unit}px;
  height: ${({theme:a})=>4*a.sidebar.spacing.unit}px;
  margin-right: ${({theme:a})=>a.sidebar.spacing.unit}px;
  border-radius: 50%;
  flex-shrink: 0;
  overflow: hidden;
`;export const DrilldownMenuSublabel=styled.span`
  display: block;
  margin-top: 2px;
  color: ${({theme:a})=>a.sidebar.textColorSecondary};
  font-size: 0.85rem;
  font-weight: ${({theme:a})=>a.typography.fontWeightRegular};
`;export const VersionSwitcherWrapper=styled.div`
  border-bottom: 1px solid ${({theme:a})=>a.sidebar.separatorLineColor};
  padding: ${({theme:a})=>3*a.sidebar.spacing.unit}px
    ${({theme:a})=>2*a.sidebar.spacing.unit}px;
`;export const MenuInnerWrapper=styled.div`
  position: relative;
  overflow-y: auto;
  flex-grow: 1;
  padding-top: ${({theme:a})=>a.sidebar.spacing.offsetTop}px;
`;export function DrilldownMenuItem(a){const{icon:b,label:c,sublabel:d}=a;return React.createElement(StyledDrilldownMenuItem,null,b&&React.createElement(DrilldownMenuIcon,{src:b,alt:""}),React.createElement("span",null,c,d&&React.createElement(DrilldownMenuSublabel,null,d)))}