import*as React from"react";import styled from"styled-components";import TruncatedText from"./TruncatedText";import OverviewRow from"./OverviewRow";import{Flex}from"../../../ui";const successIcon=require("../../../../images/success.svg"),pendingIcon=require("../../../../images/pending.svg"),minusIcon=require("../../../../images/minus.svg"),KEY_STATUSES={pending:React.createElement(KeyStatus,{icon:pendingIcon,text:"Pending"}),approved:React.createElement(KeyStatus,{icon:successIcon,text:"Approved"}),revoked:React.createElement(KeyStatus,{icon:minusIcon,text:"Revoked"})};export default function StatusRow(a){const{status:b}=a;return React.createElement(OverviewRow,{title:"Status",content:KEY_STATUSES[b]})}function KeyStatus(a){const{icon:b,text:c}=a;return React.createElement(Flex,{alignItems:"baseline"},React.createElement(StatusIcon,{icon:b,"data-cy":"credential-status"}),React.createElement(TruncatedText,null,c))}const StatusIcon=styled.i`
  display: inline-block;
  vertical-align: middle;
  background: url(${({icon:a})=>a});
  width: 0.9em;
  height: 0.9em;
  background-repeat: no-repeat;
  margin-right: 0.4em;
`;