import{readableColor,transparentize}from"polished";import styled,{css}from"../../styled-components";import{gradient}from"../../appTheme";import{UniversalLink}from"../UniversalLink/UniversalLink";import{replaceHashInColor}from"../../appTheme";import{mediaCSS}from"@redocly/reference-docs";export const NavBarWrapper=styled.nav`
  display: flex;
  color: ${({theme:a})=>a.colors.navbar.contrastText};
  align-items: center;
  justify-content: space-between;
  flex-shrink: 0;

  font-size: 1rem;
  position: ${a=>a.standalone?"sticky":"static"};
  top: 0;
  z-index: 200;
  padding: 1.125em 2.75em;
  background: ${a=>a.standalone?gradient:"none"};
  ${({theme:a})=>mediaCSS({fontFamily:a.typography.headings.fontFamily})}

  @media only screen and (max-width: ${({theme:a})=>a.breakpoints.medium}) {
    padding: 1.25em;
  }

  @media only screen and (min-width: ${({theme:a})=>a.breakpoints.medium}) and (max-width: ${({theme:a})=>a.breakpoints.large}) {
    font-size: 0.875rem;
  }

  .external-url {
    &::after {
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' version='1.1' x='0' y='0' viewBox='0 0 100 125' enable-background='new 0 0 100 100' xml:space='preserve'%3E%3Cpath fill='${({theme:a})=>replaceHashInColor(a.colors.navbar.contrastText)}' d='M-408.2-318.5 98.6 4.8c0-0.1 0-0.2-0.1-0.3 0-0.1-0.1-0.2-0.1-0.3 0-0.1 0-0.1-0.1-0.2 0 0 0-0.1 0-0.1 0-0.1-0.1-0.2-0.2-0.3 0-0.1-0.1-0.2-0.2-0.3 -0.1-0.1-0.1-0.2-0.2-0.3C97.7 2.9 97.6 2.8 97.5 2.7c-0.1-0.1-0.2-0.2-0.3-0.3 -0.1-0.1-0.1-0.1-0.2-0.2 -0.1-0.1-0.2-0.2-0.3-0.2 -0.1-0.1-0.2-0.1-0.2-0.2 -0.1-0.1-0.2-0.1-0.3-0.2 -0.1 0-0.2-0.1-0.3-0.1 0 0-0.1 0-0.1-0.1 -0.1 0-0.2 0-0.2-0.1 -0.1 0-0.2-0.1-0.3-0.1 -0.1 0-0.2-0.1-0.4-0.1 -0.1 0-0.2 0-0.3 0 -0.1 0-0.3 0-0.4 0 -0.1 0-0.1 0-0.2 0L63.8 1.3c-2.5 0-4.6 2.1-4.6 4.6 0 2.5 2.1 4.6 4.6 4.5l19.3-0.1 -29.8 30.2c-1.1 1.1-1.5 2.7-1.2 4.1 0.2 0.9 0.6 1.7 1.3 2.4 0.9 0.9 2.1 1.3 3.2 1.3 1.2 0 2.3-0.5 3.2-1.4l0 0 29.8-30.2 0.1 19.3c0 2.5 2.1 4.6 4.6 4.5 1.3 0 2.4-0.5 3.2-1.4 0.8-0.8 1.3-2 1.3-3.2L98.7 5.7c0-0.1 0-0.1 0-0.2 0-0.1 0-0.2 0-0.4C98.6 5 98.6 4.9 98.6 4.8zM6.5 83.3c0 5.7 4.6 10.4 10.4 10.4l55.6 0.1c5.7 0 10.4-4.6 10.4-10.4l-0.1-40.8h6.1v40.8c0 9-7.3 16.3-16.3 16.3l-56.4-0.1c-8.6 0-15.6-7-15.6-15.6L0.6 27.8c0-9 7.3-16.3 16.3-16.3l41.1-0.1v6.1L17 17.5c-5.7 0-10.4 4.6-10.4 10.4L6.5 83.3z'/%3E%3C/svg%3E");
    }
  }

  @media print {
    background: transparent;
    display: none;

    > :not(a, img) {
      display: none !important;
    }
    img {
      ${({theme:a})=>readableColor(a.colors.navbar.main,"","filter: invert();",!1)}
      padding: 0;
      margin: 0;
    }
  }
`;export const Logo=styled.img`
  cursor: pointer;
  width: auto;
  height: ${({theme:a})=>a.logo.height};
  max-width: ${({theme:a})=>a.logo.maxWidth};
  max-height: ${({theme:a})=>a.logo.maxHeight};

  margin: ${({theme:a})=>a.logo.margin};
`;export const LogoLink=styled(UniversalLink)`
  display: inline-block;
  margin-right: 2.75em;
`;export const NavItems=styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;

  @media only screen and (max-width: ${({theme:a})=>a.breakpoints.medium}) {
    display: none;
  }
`;export const navItemStyles=css`
  text-align: center;
  line-height: 1;
  ${({theme:a})=>`
    font-size:${a.navbar.fontSize};
    margin-left: ${a.navbar.marginHorizontal};
    margin-right: ${a.navbar.marginHorizontal};
    border-radius: ${a.navbar.borderRadius};
    font-weight: ${a.navbar.fontWeight};
  `}
`;export const NavItem=styled.li`
  display: inline-block;
  padding: 0.625em 1.5em;
  ${navItemStyles}

  background: ${({theme:a,active:b})=>b?a.navbar.activeBgColor:"none"};
  > a {
    color: ${({theme:a,active:b})=>b?a.navbar.activeTextColor:a.colors.navbar.contrastText};
    text-decoration: ${({theme:a,active:b})=>b?a.navbar.activeTextDecoration:"none"};
  }

  > span {
    cursor: pointer;
    vertical-align: middle;
  }
`;export const NavControls=styled.div`
  display: none;
  align-items: center;
  flex: 1;
  justify-content: flex-end;
  @media only screen and (max-width: ${({theme:a})=>a.breakpoints.medium}) {
    display: flex;
  }
`;export const MobileMenuIcon=styled.span`
  width: 1.25em;
  height: 1.25em;
  display: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' version='1.1' x='0' y='0' viewBox='0 0 396.7 396.7' xml:space='preserve'%3E%3Cpath fill='${({theme:a})=>replaceHashInColor(a.colors.navbar.contrastText)}' d='M17 87.8h362.7c9.4 0 17-7.6 17-17s-7.6-17-17-17H17c-9.3 0-17 7.7-17 17C0 80.2 7.7 87.8 17 87.8zM17 215.3h362.7c9.4 0 17-7.6 17-17s-7.6-17-17-17H17c-9.3 0-17 7.7-17 17S7.7 215.3 17 215.3zM17 342.8h362.7c9.4 0 17-7.6 17-17s-7.6-17-17-17H17c-9.3 0-17 7.7-17 17S7.7 342.8 17 342.8z'/%3E%3C/svg%3E");
  cursor: pointer;

  @media only screen and (max-width: ${({theme:a})=>a.breakpoints.medium}) {
    display: inline-block;
  }
`;export const MobileMenu=styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: none;
  position: absolute;
  border-top: 1px solid transparent;
  z-index: 1;
  color: ${a=>a.theme.colors.primary.contrastText};
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  font-size: 1.1875rem;
  background: ${gradient};
  box-shadow: 0px 10px 100px 0px rgba(35, 35, 35, 0.1);
  text-align: left;

  @media only screen and (max-width: ${({theme:a})=>a.breakpoints.medium}) {
    position: fixed;
    display: ${a=>a.isShown?"flex":"none"};
    flex-direction: column;
    overflow-y: auto;
  }
`;export const CloseIcon=styled.i`
  cursor: pointer;
  position: absolute;
  right: 20px;
  top: 25px;
  width: 15px;
  height: 15px;
  background-repeat: no-repeat;
  background-size: 15px 15px;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' version='1.1' viewBox='0 0 15.6 15.6' enable-background='new 0 0 15.642 15.642'%3E%3Cpath fill-rule='evenodd' fill='${({theme:a})=>replaceHashInColor(a.colors.navbar.contrastText)}' d='M8.9 7.8l6.5-6.5c0.3-0.3 0.3-0.8 0-1.1 -0.3-0.3-0.8-0.3-1.1 0L7.8 6.8 1.3 0.2c-0.3-0.3-0.8-0.3-1.1 0 -0.3 0.3-0.3 0.8 0 1.1l6.5 6.5L0.2 14.4c-0.3 0.3-0.3 0.8 0 1.1 0.1 0.1 0.3 0.2 0.5 0.2s0.4-0.1 0.5-0.2l6.5-6.5 6.5 6.5c0.1 0.1 0.3 0.2 0.5 0.2 0.2 0 0.4-0.1 0.5-0.2 0.3-0.3 0.3-0.8 0-1.1L8.9 7.8z'/%3E%3C/svg%3E");
`;export const MobileLogo=styled(Logo)`
  @media only screen and (max-width: ${({theme:a})=>a.breakpoints.medium}) {
    padding: 1.25rem;
    margin-bottom: 0.5em;
  }
`;export const MobileMenuItem=styled.li`
  padding: 1em 1em;
  text-align: left;
  font-weight: ${({theme:a})=>a.typography.fontWeightLight};
  position: relative;
  text-align: center;
  background: ${a=>a.active?transparentize(.9,"#fff"):"none"};

  :hover {
    font-weight: bold;
  }

  a {
    display: block;
    color: ${a=>a.theme.colors.navbar.contrastText};
    text-decoration: none;

    &.external-url {
      :after {
        display: none;
      }
    }
  }
`;export const NavIcon=styled.i`
  background-image: url('${a=>a.url}');
  width: 1.5em;
  height: 1.5em;
  display: inline-block;
  background-size: contain;
  margin-right: 0.5em;
  vertical-align: middle;
  background-position: center;
  background-repeat: no-repeat;
`;