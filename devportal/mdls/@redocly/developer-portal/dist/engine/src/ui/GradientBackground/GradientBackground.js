import styled from"../../styled-components";import{gradient,replaceHashInColor}from"../../appTheme";import{Flex}from"../Box/Flex";import{mediaCSS}from"@redocly/reference-docs";export const GradientBackground=styled(Flex)`
  background: ${gradient};
  color: ${({theme:a})=>a.colors.navbar.contrastText};
  ${({theme:a})=>mediaCSS({fontFamily:a.typography.headings.fontFamily})}

  a:not([role="button"]),
  a:not([role="button"]):hover {
    color: ${({theme:a})=>a.colors.navbar.contrastText};
  }

  .external-url {
    &::after {
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' version='1.1' x='0' y='0' viewBox='0 0 100 125' enable-background='new 0 0 100 100' xml:space='preserve'%3E%3Cpath fill='${({theme:a})=>replaceHashInColor(a.colors.navbar.contrastText)}' d='M-408.2-318.5 98.6 4.8c0-0.1 0-0.2-0.1-0.3 0-0.1-0.1-0.2-0.1-0.3 0-0.1 0-0.1-0.1-0.2 0 0 0-0.1 0-0.1 0-0.1-0.1-0.2-0.2-0.3 0-0.1-0.1-0.2-0.2-0.3 -0.1-0.1-0.1-0.2-0.2-0.3C97.7 2.9 97.6 2.8 97.5 2.7c-0.1-0.1-0.2-0.2-0.3-0.3 -0.1-0.1-0.1-0.1-0.2-0.2 -0.1-0.1-0.2-0.2-0.3-0.2 -0.1-0.1-0.2-0.1-0.2-0.2 -0.1-0.1-0.2-0.1-0.3-0.2 -0.1 0-0.2-0.1-0.3-0.1 0 0-0.1 0-0.1-0.1 -0.1 0-0.2 0-0.2-0.1 -0.1 0-0.2-0.1-0.3-0.1 -0.1 0-0.2-0.1-0.4-0.1 -0.1 0-0.2 0-0.3 0 -0.1 0-0.3 0-0.4 0 -0.1 0-0.1 0-0.2 0L63.8 1.3c-2.5 0-4.6 2.1-4.6 4.6 0 2.5 2.1 4.6 4.6 4.5l19.3-0.1 -29.8 30.2c-1.1 1.1-1.5 2.7-1.2 4.1 0.2 0.9 0.6 1.7 1.3 2.4 0.9 0.9 2.1 1.3 3.2 1.3 1.2 0 2.3-0.5 3.2-1.4l0 0 29.8-30.2 0.1 19.3c0 2.5 2.1 4.6 4.6 4.5 1.3 0 2.4-0.5 3.2-1.4 0.8-0.8 1.3-2 1.3-3.2L98.7 5.7c0-0.1 0-0.1 0-0.2 0-0.1 0-0.2 0-0.4C98.6 5 98.6 4.9 98.6 4.8zM6.5 83.3c0 5.7 4.6 10.4 10.4 10.4l55.6 0.1c5.7 0 10.4-4.6 10.4-10.4l-0.1-40.8h6.1v40.8c0 9-7.3 16.3-16.3 16.3l-56.4-0.1c-8.6 0-15.6-7-15.6-15.6L0.6 27.8c0-9 7.3-16.3 16.3-16.3l41.1-0.1v6.1L17 17.5c-5.7 0-10.4 4.6-10.4 10.4L6.5 83.3z'/%3E%3C/svg%3E");
    }
  }
`;