import styled from"../../styled-components";import{space}from"styled-system";import{GradientBackground}from"../GradientBackground/GradientBackground";import{H1,H2}from"../Typography/Typography";export const Jumbotron=styled(GradientBackground)`
  flex-direction: column;
  padding-top: ${({pt:a})=>a||"0"};
  padding-bottom: ${({pb:a})=>a||"8em"};
  padding-left: ${({pl:a})=>a||"0"};
  padding-right: ${({pr:a})=>a||"0"};
  ${({bgColor:a})=>a&&`background: ${a}`};
  ${({bgImage:a,theme:b,bgColor:c})=>a&&`
      background: ${c||b.colors.navbar.main} url(${a});
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
  `};

  ${({parallaxEffect:a})=>a&&`
      background-attachment: scroll, fixed;
  `};
  ${space}

  ${H1}, ${H2} {
    color: ${({theme:a,textColor:b})=>b||a.colors.navbar.contrastText};
    text-align: center;
    padding: 0;
  }

  h1 {
    font-size: 3.5em;
    line-height: 1.2;
    font-weight: ${({theme:a})=>a.typography.fontWeightBold};
    margin: 1.75em 0 0.5em 0;
  }

  h2 {
    font-size: 1.875em;
    line-height: 1;
    font-weight: ${({theme:a})=>a.typography.fontWeightLight};
    margin: 0;
    margin-bottom: 2em;
  }
`;