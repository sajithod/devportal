import{default as Dropdown,DropdownContent,DropdownTrigger}from"react-simple-dropdown";import styled from"../../styled-components";import{appTheme}from"../../appTheme";import{mediaCSS}from"@redocly/reference-docs";require("react-simple-dropdown/styles/Dropdown.css");const defaultWidth="110px",StyledDropwDownContent=styled(DropdownContent)`
  position: absolute;
  left: ${({position:a})=>a&&"left"!==a?"":0};
  right: ${({position:a})=>"right"===a?0:""};
  background: ${appTheme.colors.primary.contrastText};
  color: ${appTheme.colors.text.primary};
  z-index: 1;
  width: ${a=>a.width||defaultWidth};
  font-size: 12px;
  margin-top: 5px;
  box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12),
    0 8px 10px -5px rgba(0, 0, 0, 0.4);
  ${mediaCSS({fontFamily:appTheme.typography.fontFamily})}
`;export{Dropdown,StyledDropwDownContent as DropdownContent,DropdownTrigger};