import*as React from"react";import styled from"styled-components";import ApiKeyRow from"./ApiKeyRow";import CreatedAtRow from"./CreatedAtRow";import ExpiresAtRow from"./ExpiresAtRow";import SecretRow from"./SecretRow";import StatusRow from"./StatusRow";export default function ApiKeyOverview(a){const{apiKey:b}=a;return React.createElement(OverviewGrid,null,React.createElement(ApiKeyRow,{apiKey:b.consumerKey}),React.createElement(SecretRow,{secret:b.consumerSecret}),React.createElement(StatusRow,{status:b.status}),React.createElement(CreatedAtRow,{createdAt:b.issuedAt}),React.createElement(ExpiresAtRow,{expiresAt:b.expiresAt}))}const OverviewGrid=styled.div`
  display: grid;
  grid-gap: 0.5em;
  grid-template-columns: 2fr 12fr 1fr 1fr;
`;