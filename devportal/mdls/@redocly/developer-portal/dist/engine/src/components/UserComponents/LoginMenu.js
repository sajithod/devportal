import*as React from"react";import{useStaticQuery,graphql}from"gatsby";import Popup from"reactjs-popup";import{svgToDataUri}from"../../appTheme";import styled from"../../styled-components";import{getUserClaims,getIdPJwt,logout}from"../../ui/auth/utils";import{useIdpLoginPath}from"../RedirectToLogin";import{UniversalLink}from"../UniversalLink/UniversalLink";import{NavIcon,NavItem,navItemStyles}from"./navbar.elements";export function LoginMenu({mobile:a}){const b=getUserClaims(),c=getIdPJwt(),d=useIdpLoginPath(void 0),{siteConfig:{login:e}}=useStaticQuery(graphql`
    {
      siteConfig {
        login {
          menu {
            label
            sublabel
            icon
            link
            type
            target
            external
            menuStyle
            separatorLine
          }
          label
          userLabel {
            claim
            fallback
          }
          userAvatar {
            claim
            fallbackLettersClaim
          }
        }
      }
    }
  `),[f,g]=React.useState(!1),h=React.useCallback(()=>g(!0),[]),i=React.useCallback(()=>g(!1),[]);if(!e)return null;const j=null===e.userLabel?null:b?.[e.userLabel?.claim||"email"]||e.userLabel?.fallback||"Unknown user",k=b?.[e.userAvatar?.claim],l=b?.[e.userAvatar?.fallbackLettersClaim];return b&&c?React.createElement(Popup,{trigger:React.createElement(LoginWrap,{"aria-label":"Open popup menu"},React.createElement(UserAvatar,{picture:k,name:l}),React.createElement(UserLabel,null,j,React.createElement(ArrowIcon,null))),open:f,onOpen:h,onClose:i,position:a?"bottom center":"bottom right",offsetY:10,on:"click",closeOnDocumentClick:!0,arrow:!1},React.createElement(PopupMenu,{onClick:i},e.menu.map((a,b)=>{switch(a.type){case"logout":return React.createElement("li",{key:b},a.icon?React.createElement(NavIcon,{url:a.icon}):null,React.createElement("button",{onClick:()=>logout(a.link)},"Sign out"));case"page":case"href":return React.createElement("li",{key:b},a.icon?React.createElement(NavIcon,{url:a.icon}):null,React.createElement(UniversalLink,{to:a.link},a.label));case"separatorLine":return React.createElement(SeparatorLine,{key:b});}return null}))):React.createElement(NavItem,null,React.createElement("a",{href:d},React.createElement(React.Fragment,null,React.createElement("span",null,e.label||"Sign in"))))}function UserAvatar(a){const{picture:b,name:c}=a;if(b)return React.createElement(StyledUserAvatar,{image:b});if(c){const a=c.split(" "),b=1<a.length?a[0].slice(0,1)+a[1].slice(0,1):c.slice(0,2);return React.createElement(StyledUserAvatar,null,b)}return null}const arrowIcon=`<svg xmlns="http://www.w3.org/2000/svg" fill="#000" viewBox="0 0 451.847 451.847" width="12px" height="12px" ><path d="M225.923 354.706c-8.098 0-16.195-3.092-22.369-9.263L9.27 151.157c-12.359-12.359-12.359-32.397 0-44.751 12.354-12.354 32.388-12.354 44.748 0l171.905 171.915 171.906-171.909c12.359-12.354 32.391-12.354 44.744 0 12.365 12.354 12.365 32.392 0 44.751L248.292 345.449c-6.177 6.172-14.274 9.257-22.369 9.257z" /></svg>`;export const ArrowIcon=styled.i`
  display: inline-block;
  width: 12px;
  height: 12px;
  background-repeat: no-repeat;
  background-size: 12px 12px;
  margin-left: 6px;
  vertical-align: middle;
  background-image: url('${({theme:a})=>svgToDataUri(arrowIcon,a.colors.navbar.contrastText)}');
`;export const PopupMenu=styled.ul`
  background-color: #fff;
  border-radius: ${a=>a.theme.shape.borderRadius};
  box-shadow: 0px 10px 30px 0px rgba(35, 35, 35, 0.1);
  min-width: 200px;
  padding: 0;
  padding-top: 0.25em;
  padding-bottom: 0.25em;
  margin: 0;
  li {
    font-size: ${a=>a.theme.navbar.fontSize};
    list-style: none;
    padding: 5px 10px;
    transition: background-color 0.25s ease;
    &:hover {
      background-color: rgba(0, 0, 0, 0.1);
      a,
      button {
        color: ${({theme:a})=>a.colors.primary.main};
      }
    }
  }
  a,
  button {
    display: inline-block;
    color: ${({theme:a})=>a.colors.text.primary};
    padding: 0.5em 1em;
    transition: color 0.25s ease;
    cursor: pointer;
    text-decoration: none;
    width: 100%;
    text-align: left;
  }
  button {
    background-color: transparent;
    outline: 0;
    border: 0;
  }
`;const LoginWrap=styled.li`
  ${navItemStyles}
  display: inline-block;
  line-height: calc(${({theme:a})=>a.navbar.fontSize} * (0.625 * 2 + 1));
  cursor: pointer;
  vertical-align: middle;

  padding-left: 1.5em;

  @media only screen and (max-width: ${({theme:a})=>a.breakpoints.medium}) {
    padding: 5px 0;
  }

  > span {
    vertical-align: middle;
  }
`,StyledUserAvatar=styled.span`
  display: inline-block;
  background: rgb(80, 90, 111);
  text-align: center;
  vertical-align: middle;

  font-weight: 500;
  text-transform: uppercase;
  cursor: pointer;
  user-select: none;

  ${({theme:a,image:b})=>`
    width: calc(${a.navbar.fontSize} * (0.625 * 2 + 1));
    height: calc(${a.navbar.fontSize} * (0.625 * 2 + 1));
    line-height: calc(${a.navbar.fontSize} * (0.625 * 2 + 1));

    border-radius:  ${a.components.login.avatarBorderRadius};
    background: ${a.components.login.avatarBgColor};

    background-image: url(${b});
    background-size: cover;
  `}
`,UserLabel=styled.span`
  display: inline-block;
  vertical-align: middle;
  margin-left: 5px;
`,SeparatorLine=styled.li`
  display: block;
  width: 100%;
  height: 1px;
  padding: 0 !important;
  margin: 0;
  background-color: ${({theme:a})=>a.sidebar.separatorLineColor};
`;