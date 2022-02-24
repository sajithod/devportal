import styled from"../../styled-components";import{transparentize}from"polished";import{UniversalLink}from"../UniversalLink/UniversalLink";import{replaceHashInColor,svgToDataUri}from"../../appTheme";import{mediaCSS}from"@redocly/reference-docs";export const SearchWrap=styled.span`
  position: relative;
  vertical-align: middle;

  @media print {
    display: none;
  }
`;export const SearchResultsWrap=styled.ul`
  position: absolute;
  display: ${a=>a.show?"block":"none"};
  top: calc(100% + 20px);
  right: 0;
  z-index: 100;
  width: 550px;
  max-width: 90vw;
  max-height: 400px;
  overflow: auto;
  padding: 0;
  margin: 0;
  box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12),
    0 8px 10px -5px rgba(0, 0, 0, 0.4);
  background: ${a=>a.theme.colors.primary.contrastText};
  list-style: none;
  border-radius: ${a=>a.theme.shape.borderRadius};

  @media only screen and (max-width: ${({theme:a})=>a.breakpoints.medium}) {
    top: 100%;
    width: 90%;
    max-width: 90%;
    left: 5%;
    margin-bottom: 16px;
    padding: 8px 0;
  }
`;export const SearchResultItemWrap=styled.div`
  width: 100%;
  padding: 8px 24px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: ${({theme:a})=>transparentize(.9,a.colors.primary.main)};
  }
  background-color: ${a=>a.active&&transparentize(.9,a.theme.colors.primary.main)};

  @media only screen and (max-width: ${({theme:a})=>a.breakpoints.medium}) {
    padding: 8px 16px;
  }

  font-size: 16px;
`;export const SearchResultLink=styled(UniversalLink)`
  &&& {
    color: ${({theme:a})=>a.colors.text.primary};
    font-weight: ${({theme:a})=>a.typography.fontWeightBold};
    text-decoration: none;
    &:hover {
      color: ${({theme:a})=>a.colors.text.primary};
    }
  }
`;export const SearchItemDescription=styled.div`
  color: ${({theme:a})=>a.colors.text.secondary};
  font-size: 0.875em;
  line-height: 1.2;
  font-weight: ${({theme:a})=>a.typography.fontWeightLight};
  margin-top: 8px;
`;export const SearchHighlightedText=styled.span`
  color: ${a=>a.theme.colors.primary.main};
  font-weight: bold;
`;export const SearchInputWrap=styled.span`
  display: inline-flex;
  justify-content: flex-end;
  align-items: center;
  flex: 1;

  height: 2em;
  line-height: 2em;

  margin-left: 5px; // margin to avoid sticking with active navbar items

  @media only screen and (max-width: ${({theme:a})=>a.breakpoints.medium}) {
    padding: 0;
    flex: 0 1 auto;
    width: 90%;

    margin: 32px auto;
    line-height: 1.2;
    font-size: 1rem;
    position: relative;
    display: block;
    height: auto;
  }
`;const InputSearchIcon=styled.span`
  position: absolute;
  cursor: pointer;
  width: 1em;
  height: 1em;
  right: 1em;
  transform: translateY(-50%);
  top: 50%;
  background-size: contain;
  background-repeat: no-repeat;

  @media only screen and (max-width: ${({theme:a})=>a.breakpoints.medium}) {
    width: 1.2em;
    height: 1.2em;
  }
`;export const SearchInputField=styled.input`
  max-width: 275px;
  display: inline-block;
  border-radius: ${a=>a.theme.shape.borderRadius};
  flex: 1 1 auto;
  padding: 1em 2.5em 1em 1em;
  border: none;
  background-color: ${({theme:a})=>transparentize(.9,a.colors.navbar.contrastText)};
  box-sizing: border-box;
  outline: none;
  color: ${({theme:a})=>a.colors.navbar.contrastText};
  font-size: ${({theme:a})=>a.navbar.fontSize};

  ${({theme:a})=>mediaCSS({fontFamily:a.typography.headings.fontFamily})}

  @media only screen and (max-width: ${({theme:a})=>a.breakpoints.medium}) {
    display: inline-block;
    width: 100%;
    max-width: 100%;
    margin: 0 auto;
    padding-right: 2.6em;
  }

  ::placeholder {
    color: ${({theme:a})=>a.colors.navbar.contrastText};
    font-weight: ${({theme:a})=>a.typography.fontWeightRegular};
  }
`;export const SearchIcon=styled(InputSearchIcon)`
  background-image: url('${({theme:a})=>svgToDataUri(a.components.search.icon,a.components.search.iconColor)}');
`;export const SearchClearIcon=styled(InputSearchIcon)`
  ${({theme:a})=>`
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' version='1.1' x='0' y='0' viewBox='0 0 298.7 298.7' xml:space='preserve'%3E%3Cpolygon fill='${replaceHashInColor(a.colors.navbar.contrastText)}' points='298.7 30.2 268.5 0 149.3 119.1 30.2 0 0 30.2 119.1 149.3 0 268.5 30.2 298.7 149.3 179.5 268.5 298.7 298.7 268.5 179.5 149.3 '/%3E%3C/svg%3E%0A");
  width: 0.5em;
  height: 0.5em;
  right: 1.2em;
  @media only screen and (max-width: ${a.breakpoints.medium}) {
    width: 0.625em;
    height: 0.625em;
  }
  `}
`;export const SearchLoadingIcon=styled(InputSearchIcon)`
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200px' height='200px' viewBox='0 0 100 100' preserveAspectRatio='xMidYMid' background='none'%3E%3Ccircle cx='50' cy='50' fill='none' stroke='%23fdfdfd' stroke-width='15' r='35' stroke-dasharray='164.93361431346415 56.97787143782138' transform='rotate(257.745 50 50)'%3E%3CanimateTransform attributeName='transform' type='rotate' calcMode='linear' values='0 50 50;360 50 50' keyTimes='0;1' dur='1s' begin='0s' repeatCount='indefinite'/%3E%3C/circle%3E%3C/svg%3E");
`;