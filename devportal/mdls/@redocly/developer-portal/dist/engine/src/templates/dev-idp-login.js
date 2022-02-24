import*as React from"react";import{IDP_ID_TOKEN_COOKIE_NAME,REDOCLY_COOKIE_NAME,REDOCLY_LOGIN_RESULT_COOKIE_NAME,sanitizeBase64}from"../ui/auth/utils";import styled from"../styled-components";import{formatStubJwt}from"../helpers";const defaultClaims={sub:"1234567890",name:"John Doe",iat:Math.floor(Date.now()/1e3),given_name:"John",family_name:"Doe",picture:"https://picsum.photos/id/856/100/100",email:"john.doe@localhost",email_verified:!0};export default function DevIdpLogin(){const[a,b]=React.useState(JSON.stringify(defaultClaims,null,2)),[c,d]=React.useState(formatStubJwt(defaultClaims)),[e,f]=React.useState(""),[g,h]=React.useState(""),i=React.useCallback(()=>{document.cookie=`${IDP_ID_TOKEN_COOKIE_NAME}=${c};`,document.cookie=`${REDOCLY_COOKIE_NAME}=${c};`,document.cookie=`${REDOCLY_LOGIN_RESULT_COOKIE_NAME}=success;`;const a=new URLSearchParams(window.location.search).get("redirect_to")||"/";window.location.href=a},[c]),j=React.useCallback(a=>{d(a.target.value);const[,c]=a.target.value.split(".");c||h("Invalid IDP JWT token format");try{const a=JSON.parse(atob(sanitizeBase64(c)));b(JSON.stringify(a,null,2)),f(""),h("")}catch(a){h("Invaid IDP JWT token format: "+a.message)}},[a]),k=React.useCallback(a=>{b(a.target.value);try{const b=JSON.parse(a.target.value),c=formatStubJwt(b);d(c),f(""),h("")}catch(a){f("Failed to parse claims: "+a.message)}},[a]);return React.createElement(MessageWrapper,null,React.createElement("h1",null,"Development Login Simulator"),React.createElement("h2",null,"External IdP login is not supported in development mode"),React.createElement("h3",null,"Paste the IDP Id token below or edit the claims to generate a stub token and click Login to simulate login. ",React.createElement("br",null),"RBAC simulation is not yet supported."),React.createElement(Panel,null,React.createElement("div",null,"Claims"),React.createElement(TextArea,{value:a,onChange:k}),React.createElement("div",{style:{color:"red"}}," ",e," ")),React.createElement(Panel,null,React.createElement("div",null,"IdP JWT Token"),React.createElement(TextArea,{value:c,onChange:j}),React.createElement("div",{style:{color:"red"}}," ",g," ")),React.createElement(Panel,null,React.createElement("button",{disabled:!!e||!!g,onClick:i},"Login")))}const MessageWrapper=styled.div`
  padding: 20px;
`,Panel=styled.div`
  display: inline-block;
  width: 50%;
  padding: 20px;
`,TextArea=styled.textarea`
  width: 100%;
  display: inline-block;
  height: 300px;
  margin-bottom: 20px;
  font-family: 'Courier New', Courier, monospace;
  font-size: 16px;
`;