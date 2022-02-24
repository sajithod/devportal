import*as React from"react";import{Typography}from"../../ui";import styled,{css}from"styled-components";import{Link}from"gatsby";import{transparentize}from"polished";import{Paper}from"./common-elements/styled.elements";import{getAppDisplayName,getReadableDate}from"../services/helpers";import{useSortableData}from"../services/useSortableData";export default function AppsList(a){const{apps:b}=a,{sortedItems:c,requestSort:d,sortConfig:e}=useSortableData(b,{key:"name",direction:"descending"});React.useEffect(()=>{d("createdAt")},[]);const f=a=>e?e.key===a?e.direction:void 0:void 0;return React.createElement(Paper,{p:"0 0 1em"},React.createElement(HeadingRow,null,React.createElement(Heading,{className:f("name")},React.createElement("button",{"aria-label":"Sort by name",onClick:()=>d("name")},"Name ",React.createElement(ArrowIcon,null))),React.createElement(Heading,{className:f("createdAt")},React.createElement("button",{"aria-label":"Sort by created date",onClick:()=>d("createdAt")},"Created ",React.createElement(ArrowIcon,null))),React.createElement(Heading,{className:f("lastModifiedAt")},React.createElement("button",{"aria-label":"Sort by last modified date",onClick:()=>d("lastModifiedAt")},"Last modified ",React.createElement(ArrowIcon,null))),React.createElement("div",null)),React.createElement(React.Fragment,null,c.map(a=>{const b=getAppDisplayName(a.attributes);return React.createElement(Item,{key:a.appId,to:`/app/${a.name}`,"data-cy":`app-${a.name}`},React.createElement("div",null,React.createElement(StyledTypography,{title:b||a.name},b||a.name),React.createElement(SecondaryText,{title:a.name},a.name)),React.createElement("div",null,React.createElement(SecondaryText,null,getReadableDate(a.createdAt))),React.createElement("div",null,React.createElement(SecondaryText,null,getReadableDate(a.lastModifiedAt))),React.createElement("div",null,React.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 492.004 492.004",width:"15px",height:"15px"},React.createElement("path",{d:"M382.678 226.804L163.73 7.86C158.666 2.792 151.906 0 144.698 0s-13.968 2.792-19.032 7.86l-16.124 16.12c-10.492 10.504-10.492 27.576 0 38.064L293.398 245.9l-184.06 184.06c-5.064 5.068-7.86 11.824-7.86 19.028 0 7.212 2.796 13.968 7.86 19.04l16.124 16.116c5.068 5.068 11.824 7.86 19.032 7.86s13.968-2.792 19.032-7.86L382.678 265c5.076-5.084 7.864-11.872 7.848-19.088.016-7.244-2.772-14.028-7.848-19.108z"}))))})))}const Item=styled(Link)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: background-color 0.25s ease;
  padding: 1em 2em;
  text-decoration: none;
  &:hover {
    background-color: ${({theme:a})=>transparentize(.95,a.colors.primary.main)};
  }
  svg {
    fill: ${({theme:a})=>a.colors.primary.main};
  }
  div {
    width: 25%;
    &:first-child {
      width: 40%;
    }
    &:last-child {
      width: 10%;
      text-align: right;
    }
  }
  ${Typography} {
    margin-top: 0;
    margin-bottom: 0;
  }
  @media only screen and (max-width: ${({theme:a})=>a.breakpoints.small}) {
    flex-wrap: wrap;
    padding: 1em;
    div {
      &:first-child {
        width: 100%;
        margin-bottom: 0.5em;
      }
      &:nth-child(2) {
        width: 45%;
      }
      &:nth-child(3) {
        display: none;
      }
    }
  }
`,HeadingRow=styled.div`
  display: flex;
  align-items: flex-start;
  padding: 1em 2em;
  @media only screen and (max-width: ${({theme:a})=>a.breakpoints.small}) {
    display: none;
  }
`,Heading=styled.p`
  font-size: 0.75em;
  color: ${({theme:a})=>a.colors.text.secondary};
  text-transform: uppercase;
  margin: 0;
  &:first-child {
    width: 40%;
  }
  width: 25%;
  button {
    padding: 0;
    border: 0;
    background-color: transparent;
    text-align: left;
    outline: 0;
    color: ${({theme:a})=>a.colors.text.secondary};
    text-transform: uppercase;
    cursor: pointer;
    transition: color 0.25s ease;
    &:focus,
    &:hover {
      color: #3e4c59;
    }
  }
  svg {
    display: none;
  }
  &.ascending {
    svg {
      display: inline-block;
      transform: rotate(180deg);
    }
  }
  &.descending {
    svg {
      display: inline-block;
      transform: rotate(0deg);
    }
  }
`,truncatedText=css`
  max-width: 50ch;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`,SecondaryText=styled(Typography)`
  color: ${({theme:a})=>a.colors.text.secondary};
  ${truncatedText}
`,StyledTypography=styled(Typography)`
  ${truncatedText};
`,ArrowIcon=()=>React.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 213.333 213.333",width:"10px",height:"10px",fill:"#7B8794"},React.createElement("path",{d:"M0 53.333L106.667 160 213.333 53.333z"}));