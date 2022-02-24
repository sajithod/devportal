import*as React from"react";import{mediaCSS,ZERO_BREAKPOINT,NextSectionButton}from"@redocly/reference-docs";import styled from"../../../styled-components";import{Menu}from"../../Menu/Menu";import{NavButtonsWrapper}from"../../styled/";import{Flex,Link}from"@redocly/developer-portal/ui";import{NextPageWrapperWithRightPanel}from"../../../components/styled";export default function SidebarLayout(a){const{items:b,location:c,prevPage:d,nextPage:e,withRightPanel:f,isReferenceDocs:g,withToc:h,children:i,context:j,apiVersionId:k,apiVersions:l,pageId:m}=a,n=g?NextPageWrapperWithRightPanel:NextPageWrapper;return React.createElement(FlexWrapper,{position:"relative",flex:"1 0 auto"},React.createElement(Menu,{items:b,location:c,context:j||{},apiVersionId:k,apiVersions:l,pageId:m}),React.createElement(Flex,{width:{xs:"100%",medium:0},flex:"1 1 auto",flexDirection:"column"},i,(e||d)&&React.createElement(PageWrapper,null,React.createElement(n,{withToc:h,withRightPanel:f},d&&React.createElement(LinkBack,{"data-cy":"back-to",to:d.link},React.createElement(NextSectionButton,null,"Back to ",React.createElement("strong",null,d.label))),e&&React.createElement(LinkForward,{"data-cy":"next-to",to:e.link},React.createElement(NextSectionButton,null,"Next to ",React.createElement("strong",null,e.label)))),h&&React.createElement(TableOfContentStub,null))))}const FlexWrapper=styled(Flex)`
  ${({theme:a})=>mediaCSS({flexDirection:{[ZERO_BREAKPOINT]:"column",[a.sidebar.showAtBreakpoint]:"row"}})}
`;export const PageWrapper=styled.div`
  display: flex;
  flex: 1;
  width: 100%;
`;const NextPageWrapper=styled(NavButtonsWrapper)`
  padding-left: 0;
  padding-right: 0;

  @media only screen and (min-width: ${({theme:a})=>a.breakpoints.medium}) {
    margin-top: 0;
    margin-bottom: 0;
  }
`,TableOfContentStub=styled.div`
  display: none !important;
  @media only screen and (min-width: ${({theme:a})=>a.breakpoints.medium}) {
    width: ${({theme:a})=>a.tocPanel.width};
    display: block !important;
  }
`,PaginationLink=styled(Link)`
  margin-bottom: 0.5em;

  & + & {
    margin-left: auto;
  }

  @media only screen and (max-width: ${({theme:a})=>a.breakpoints.small}) {
    margin-left: auto;
  }

  @media print {
    display: none;
  }
`,LinkBack=styled(PaginationLink)`
  &:only-child {
    margin-left: 0;
    margin-right: auto;
  }
`,LinkForward=styled(PaginationLink)`
  margin-left: auto;
`;