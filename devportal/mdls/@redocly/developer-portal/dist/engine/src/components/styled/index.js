import*as React from"react";import{observer}from"mobx-react";import{ApiContentWrap,BackgroundStub,NextSectionButtonWrap,BackgroundStubFix,CssFixes,ToggleRightPanelButton,ControlsWrap,ChangeViewButton,LayoutVariant}from"@redocly/reference-docs";import styled from"../../styled-components";export const ContentWrapper=styled.section`
  max-width: ${({theme:a})=>a.components.contentWrapper.maxWidth};
  width: 90%;
  margin: 0 auto;

  padding: ${({theme:a})=>`${a.components.contentWrapper.paddingVertical} ${a.components.contentWrapper.paddingHorizontal}`};

  & > article:first-child > h1:first-child {
    // disable margin top for h1 on the title heading if there is no "Last updated at" block
    margin-top: 0;
  }

  @media only screen and (min-width: ${({theme:a})=>a.breakpoints.medium}) {
    width: ${({withToc:a,theme:b})=>a?`calc(90% - ${b.tocPanel.width})`:"90%"};
  }
`;export const NavButtonsWrapper=styled(ContentWrapper)`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-end;
  align-items: flex-end;

  @media only screen and (min-width: ${({theme:a})=>a.breakpoints.small}) {
    flex-direction: row;
  }
`;export function NextPageWrapperWithRightPanel(a){return React.createElement(React.Fragment,null,React.createElement(ApiContentWrap,null,a.withRightPanel&&React.createElement(BackgroundStub,null)||null,React.createElement(NextSectionButtonWrap,null,a.children)),a.withRightPanel&&React.createElement(BackgroundStubFix,null)||null,React.createElement(FakeControlsWrap,null))}export const ApiReferenceLayout=observer(a=>{const{store:b}=a;return React.useLayoutEffect(()=>{b.onDidMount()},[]),React.createElement(ApiReferenceLayoutWrap,null,React.createElement(ApiContentWrap,{layout:b.layout===LayoutVariant.THREE_PANEL&&b.showRightPanel?LayoutVariant.THREE_PANEL:LayoutVariant.STACKED},b.options.theme.layout.showDarkRightPanel&&b.showRightPanel&&b.layout!==LayoutVariant.STACKED&&React.createElement(BackgroundStub,null),a.children),b.options.theme.layout.showDarkRightPanel&&b.showRightPanel&&b.layout!==LayoutVariant.STACKED&&React.createElement(BackgroundStubFix,null),React.createElement(ControlsWrap,null,React.createElement(ToggleRightPanelButton,{store:b,isVisible:b.layout===LayoutVariant.THREE_PANEL}),React.createElement(ChangeViewButton,{store:b,isVisible:b.showRightPanel})),React.createElement(CssFixes,{whiteLabel:b.options.whiteLabel,showRightPanel:b.showRightPanel,layout:b.layout}))});const ApiReferenceLayoutWrap=styled.div`
  display: flex;
  width: 100%;
  > * {
    padding: ${({theme:a})=>`${a.components.contentWrapper.paddingVertical} ${a.components.contentWrapper.paddingHorizontal}`};
  }

  > ${ControlsWrap} {
    padding: 0;
  }
`;export const FakeControlsWrap=styled.div`
  width: 36px;
  height: 0px;
`;