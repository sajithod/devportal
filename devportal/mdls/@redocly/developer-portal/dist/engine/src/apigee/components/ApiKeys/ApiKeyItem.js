import*as React from"react";import Popup from"reactjs-popup";import styled from"styled-components";import{useParams}from"@reach/router";import{Flex,Typography}from"../../../ui";import{IconButton,MenuItemButton}from"../common-elements/styled.elements";import EditApiKey from"../EditApiKey";import{APIClientContext}from"../../services/APIClientProvider";import{useMutation,useQueryClient}from"react-query";import{QUERY_KEY_APP}from"../../services/config";import{appTheme}from"../../../appTheme";import{PopupMenuUl}from"../popup-menu";import ApiKeyOverview from"./ApiKeyOverview";import ApiKeyProductsStatus from"./ApiKeyProductsStatus";import{SeparatorLine}from"../../../components/UserComponents/styled.elements";export default function ApiKeyItem(a){const{apiClient:b}=React.useContext(APIClientContext),c=useQueryClient(),{credential:d,attributes:e}=a,f=useParams(),[g,h]=React.useState(!1),[i,j]=React.useState(!1),{isLoading:k,error:l,mutate:m}=useMutation(()=>b.deleteDeveloperAppKey(f.appName,d.consumerKey),{onMutate:async()=>{await c.cancelQueries(QUERY_KEY_APP);const a=c.getQueryData(QUERY_KEY_APP),b=a?.credentials.filter(a=>a.consumerKey!==d.consumerKey);return c.setQueryData(QUERY_KEY_APP,a=>({...a,credentials:b})),a},onSettled:()=>{c.invalidateQueries(QUERY_KEY_APP)}}),n=()=>{h(!0),j(!1)};return React.createElement(React.Fragment,null,React.createElement(ApiKeyItemFlex,null,React.createElement(ApiKeyOverview,{apiKey:d}),React.createElement(ApiKeyProductsStatus,{apiProducts:d.apiProducts}),React.createElement(Popup,{trigger:React.createElement(IconButton,null,React.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 384",width:"15px",fill:appTheme.colors.text.primary},React.createElement("circle",{cx:"192",cy:"42.667",r:"42.667"}),React.createElement("circle",{cx:"192",cy:"192",r:"42.667"}),React.createElement("circle",{cx:"192",cy:"341.333",r:"42.667"}))),position:"bottom center",on:"click",closeOnDocumentClick:!0,arrow:!1,open:i,onOpen:()=>j(!0),onClose:()=>j(!1)},React.createElement(PopupMenuUl,null,React.createElement("li",null,React.createElement(MenuItemButton,{onClick:n},"Edit")),React.createElement("li",null,React.createElement(MenuItemButton,{onClick:()=>m(),disabled:k},"Delete key"))))),g&&React.createElement(EditApiKey,{credential:d,attributes:e,open:g,onClose:()=>h(!1),onOpen:n}),l&&React.createElement(Typography,{mt:"0",mb:"0",color:appTheme.colors.error.main},l.message),React.createElement(ApiKeySeparator,null))}const ApiKeySeparator=styled(SeparatorLine)`
  margin: 2em 0em;
`,ApiKeyItemFlex=styled(Flex)`
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;

  > :nth-child(1) {
    width: 60%;
  }
  > :nth-child(2) {
    width: 25%;
  }
  > :nth-child(3) {
    width: 5%;
  }

  @media only screen and (max-width: ${({theme:a})=>a.breakpoints.small}) {
    > :nth-child(1) {
      order: 1;
      width: 90%;
    }
    > :nth-child(2) {
      order 3;
      width: 100%;
      margin-top: 1em;
    }
    > :nth-child(3) {
      order 2;
      width: 5%;
    }
  }
`;