import*as React from"react";import styled from"../styled-components";import{Button}from"@redocly/developer-portal/ui";export default function Default404(){return React.createElement(PageWrapper,null,React.createElement(Title,null,"404"),React.createElement(Text,null,"It looks like you're lost"),React.createElement(BackButton,{color:"primary",to:"/",size:"xlarge"},"Go home"))}const PageWrapper=styled.div`
  min-height: calc(100vh - 60px);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`,Title=styled.h2`
  margin: 0;
  font-size: 14.5em;
  line-height: 1.2;
  font-weight: ${({theme:a})=>a.typography.fontWeightBold};
  color: ${({theme:a})=>a.colors.primary.main};
`,Text=styled.p`
  margin: 0;
  font-size: 1.875em;
  line-height: 1;
  font-weight: ${({theme:a})=>a.typography.fontWeightRegular};
`,BackButton=styled(Button)`
  margin-top: 4em;
`;