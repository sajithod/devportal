import*as React from"react";import{Box,Flex,Alert,usePathPrefix}from"../../ui";import{useParams,Router}from"@reach/router";import styled from"styled-components";import{Link}from"gatsby";import{Container,Paper}from"../components/common-elements/styled.elements";import ApiKeys from"../components/ApiKeys";import AppOverview from"../components/AppOverview";import CircularProgress from"../components/common-elements/CircularProgress";import{APIClientContext}from"../services/APIClientProvider";import{getAppDisplayName}from"../services/helpers";import{useQuery}from"react-query";import{QUERY_KEY_APP}from"../services/config";import{replaceHashInColor}from"../../appTheme";import ProtectedRoute from"./ProtectedRoute";import{withPathPrefix}from"../../utils";export function AppPage(){const a=usePathPrefix();return React.createElement(Router,{basepath:withPathPrefix("app",a)},React.createElement(ProtectedRoute,{path:"/:appName",component:React.createElement(AppPageInternal,null)}))}function AppPageInternal(){const a=useParams(),{apiClient:b}=React.useContext(APIClientContext),{isLoading:c,data:d,error:e}=useQuery(QUERY_KEY_APP,()=>b?.getDeveloperApp(a.appName)),f=!c&&getAppDisplayName(d?.attributes);return React.createElement(Box,{mb:"4em",mt:"4em"},React.createElement(Container,null,React.createElement(StyledLink,{to:"/apps/"},React.createElement(ArrowIcon,null),"Back to apps"),React.createElement(Paper,{py:{xs:"2em",medium:"3em"},px:{xs:"1em",medium:"0"}},c?React.createElement(Flex,{justifyContent:"center",mt:"2em"},React.createElement(CircularProgress,null)):React.createElement(Box,{maxWidth:{xs:"100%",medium:"80%"},mx:"auto"},e?React.createElement(Alert,{variant:"danger",content:e?.message??"Something went wrong"}):d?React.createElement(React.Fragment,null,React.createElement(AppOverview,{app:{displayName:f,name:d?.name,appId:d?.appId,createdAt:d?.createdAt}}),React.createElement(ApiKeys,{credentials:d?.credentials,attributes:d?.attributes})):null))))}const StyledLink=styled(Link)`
  display: inline-block;
  color: ${({theme:a})=>a.colors.primary.main};
  text-decoration: none;

  i {
    transform: translateX(-4px) rotate(90deg);
  }

  margin-bottom: 2em;
  &:hover {
    opacity: 0.75;
  }
`;export const ArrowIcon=styled.i`
  display: inline-block;
  width: 12px;
  height: 12px;
  background-repeat: no-repeat;
  background-size: 12px 12px;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='${({theme:a})=>replaceHashInColor(a.colors.primary.main)}' viewBox='0 0 451.847 451.847' width='12px' height='12px' %3E%3Cpath d='M225.923 354.706c-8.098 0-16.195-3.092-22.369-9.263L9.27 151.157c-12.359-12.359-12.359-32.397 0-44.751 12.354-12.354 32.388-12.354 44.748 0l171.905 171.915 171.906-171.909c12.359-12.354 32.391-12.354 44.744 0 12.365 12.354 12.365 32.392 0 44.751L248.292 345.449c-6.177 6.172-14.274 9.257-22.369 9.257z' /%3E%3C/svg%3E");
`;