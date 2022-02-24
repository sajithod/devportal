import*as React from"react";import{useQuery}from"react-query";import styled from"styled-components";import{Flex,Typography}from"../../ui";import{APIClientContext}from"../services/APIClientProvider";import{QUERY_KEY_PRODUCTS}from"../services/config";import CircularProgress from"./common-elements/CircularProgress";import{StyledPopup}from"./common-elements/CopyButton";import{appTheme}from"../../appTheme";export default function ApiKeyProducts(a){const{credentialApiProducts:b}=a,{apiClient:c}=React.useContext(APIClientContext),[d,e]=React.useState(!1),{data:f,isLoading:g,error:h}=useQuery(QUERY_KEY_PRODUCTS,()=>c?.getApiProducts(),{enabled:d}),i=b.map(a=>a.apiproduct),j=!g&&f?.apiProduct?.filter(a=>i.includes(a.name));return React.createElement(StyledPopup,{trigger:React.createElement("span",null,React.createElement(InfoIcon,null)),open:d,onOpen:()=>e(!0),onClose:()=>e(!1),position:"right center",arrow:!0,closeOnDocumentClick:!0,on:"hover"},h&&React.createElement(Typography,{mt:"0",mb:"0",color:appTheme.colors.error.main},h.message),g?React.createElement(Flex,{justifyContent:"center"},React.createElement(CircularProgress,null)):React.createElement(ApiProductsList,null,j&&j?.map(a=>React.createElement("li",{key:a.displayName},a.displayName))))}const InfoIcon=()=>React.createElement(StyledInfoIcon,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 330 330",width:"16px",height:"16px"},React.createElement("path",{d:"M165 0C74.019 0 0 74.02 0 165.001 0 255.982 74.019 330 165 330s165-74.018 165-164.999S255.981 0 165 0zm0 300c-74.44 0-135-60.56-135-134.999S90.56 30 165 30s135 60.562 135 135.001C300 239.44 239.439 300 165 300z"}),React.createElement("path",{d:"M164.998 70c-11.026 0-19.996 8.976-19.996 20.009 0 11.023 8.97 19.991 19.996 19.991 11.026 0 19.996-8.968 19.996-19.991 0-11.033-8.97-20.009-19.996-20.009zM165 140c-8.284 0-15 6.716-15 15v90c0 8.284 6.716 15 15 15 8.284 0 15-6.716 15-15v-90c0-8.284-6.716-15-15-15z"})),StyledInfoIcon=styled.svg`
  fill: ${({theme:a})=>a.colors.text.secondary};
  margin-top: 4px;
  margin-right: 4px;
  cursor: pointer;
`,ApiProductsList=styled.ul`
  list-style: none;
  margin: 0;
  padding: 8px 16px;
  li {
    margin-bottom: 4px;
  }
`;