import{RedocExample,ProProviders}from"@redocly/reference-docs";import*as React from"react";import{GetStore}from"../../layouts/MarkdownLayout";import{OpenApiExampleWrap}from"./styled.elements";export default class OpenApiExample extends React.Component{render(){const{definitionId:a,pointer:b,options:c,mimeType:d}=this.props;return React.createElement(OpenApiExampleWrap,null,React.createElement(GetStore,{definitionId:a},a=>React.createElement(ProProviders,{store:a,customOptions:c},React.createElement(RedocExample,{store:a,pointer:b,mimeType:d||"application/json"}))))}}