import{RedocRequestBody,ProProviders}from"@redocly/reference-docs";import*as React from"react";import{GetStore}from"../../layouts/MarkdownLayout";import{RedocComponentWrap}from"./styled.elements";export default class OpenApiRequestBody extends React.Component{render(){const{definitionId:a,pointer:b,options:c,hideSamples:d}=this.props;return React.createElement(RedocComponentWrap,null,React.createElement(GetStore,{definitionId:a},a=>React.createElement(ProProviders,{store:a,customOptions:c},React.createElement(RedocRequestBody,{store:a,pointer:b,hideSamples:d}))))}}