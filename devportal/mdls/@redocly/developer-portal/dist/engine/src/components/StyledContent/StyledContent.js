import styled,{css}from"../../styled-components";import{transparentize,getLuminance}from"polished";import{typography,margins}from"../../common-elements";import{RedocComponentWrap,CodeSampleWrap}from"../mdx";import{alertGeneral,alertHeading,alertIcon,getAlertVariant,getAlertIcon}from"./alerts";import{mediaCSS}from"@redocly/reference-docs";export const StyledContent=styled.article`
  ${({theme:a})=>css`
    > ${RedocComponentWrap}:not(${CodeSampleWrap}) {
      > div > div {
        padding: 20px;

        p:first-child {
          margin-top: 0;
        }
      }

      > div > div:last-child:not(:only-child) > div {
        ${mediaCSS({background:a.codeBlock.backgroundColor})}
      }

      ul[role='tablist'] {
        margin: 0;
      }
    }

    font-weight: ${a.typography.fontWeightRegular};
    padding: 0;

    color: ${a.colors.text.primary};

    ${mediaCSS({fontSize:a.typography.fontSize,fontFamily:a.typography.fontFamily,lineHeight:a.typography.lineHeight})}
    a:not([role="button"]) {
      text-decoration: ${a.typography.links.textDecoration};
      color: ${a.typography.links.color};

      &:visited {
        color: ${a.typography.links.visited};
      }

      &:hover {
        color: ${a.typography.links.hover};
      }
    }

    img {
      max-width: 100%;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-weight: ${a.typography.headings.fontWeight};

      ${mediaCSS({fontFamily:a.typography.headings.fontFamily})}
      .anchor {
        top: initial;

        svg {
          width: 0.625em;
          height: 0.625em;
          fill: ${a.colors.primary.main};
        }
      }

      :not(${CodeSampleWrap}) code {
        font-size: inherit;
      }
    }

    strong {
      font-weight: ${a.typography.fontWeightBold};
    }

    .admonition-content > p:first-child {
      margin-top: 0;
    }

    .success,
    .warning,
    .danger,
    .attention,
    .info,
    .admonition {
      ${alertGeneral({theme:a})}
      .admonition-icon {
        display: none;
      }

      &::before {
        ${alertIcon({theme:a})}
      }

      h5,
      > strong:first-child,
      > b:first-child {
        ${alertHeading({theme:a})}
      }
    }

    .success,
    .admonition-success {
      background-color: ${getAlertVariant(a.components.alert.variants,"success").backgroundColor};
      color: ${getAlertVariant(a.components.alert.variants,"success").textColor};

      &:before {
        background-image: url('${getAlertIcon(a,"success")}');
      }

      h5,
      > strong:first-child,
      > b:first-child {
        color: ${getAlertVariant(a.components.alert.variants,"success").headingColor};
      }
    }

    .warning,
    .admonition-warning {
      background-color: ${getAlertVariant(a.components.alert.variants,"warning").backgroundColor};
      color: ${getAlertVariant(a.components.alert.variants,"warning").textColor};

      &:before {
        background-image: url('${getAlertIcon(a,"warning")}');
      }

      h5,
      > strong:first-child,
      > b:first-child {
        color: ${getAlertVariant(a.components.alert.variants,"warning").headingColor};
      }
    }

    .danger,
    .admonition-danger {
      background-color: ${getAlertVariant(a.components.alert.variants,"danger").backgroundColor};
      color: ${getAlertVariant(a.components.alert.variants,"danger").textColor};

      &:before {
        background-image: url('${getAlertIcon(a,"danger")}');
      }

      h5,
      > strong:first-child,
      > b:first-child {
        color: ${getAlertVariant(a.components.alert.variants,"danger").headingColor};
      }
    }

    .attention,
    .admonition-attention {
      background-color: ${getAlertVariant(a.components.alert.variants,"attention").backgroundColor};
      color: ${getAlertVariant(a.components.alert.variants,"attention").textColor};

      &:before {
        background-image: url('${getAlertIcon(a,"attention")}');
      }

      h5,
      > strong:first-child,
      > b:first-child {
        color: ${getAlertVariant(a.components.alert.variants,"attention").headingColor};
      }
    }

    hr {
      border-top: 1px solid ${a.colors.border.light};
    }

    details {
      margin: 1.125em 0;

      summary {
        color: ${transparentize(.1,a.colors.primary.main)};
        font-weight: ${a.typography.fontWeightRegular};
        outline: 0;
        padding: 0;
        cursor: pointer;
      }

      > :not(summary):first-of-type {
        margin-top: 1.25em;
      }

      > *:last-child {
        margin-bottom: 1.25em;
      }
    }

    details > table,
    > table,
    > div:not(${RedocComponentWrap}) table,
    > p table {
      border-collapse: collapse;
      display: block;
      width: 100%;
      overflow: auto;
      word-break: normal;
      word-break: keep-all;
      border-collapse: collapse;
      border-spacing: 0;
      margin-top: 1.5em;
      margin-bottom: 1.5em;

      td,
      th {
        padding: 6px 13px;
        border: 1px solid ${a.colors.border.light};
      }

      th {
        text-align: left;
        background-color: ${a.colors.primary.main};
        color: ${a.colors.primary.contrastText};
        font-weight: bold;
      }

      tr {
        background-color: #fff;
        border-top: 1px solid ${a.colors.border.light};

        &:nth-child(2n) {
          background-color: ${a.schema.nestedBackground};
        }
      }
    }

    .code-snippets-tabs {
      .snippets-tabs-headers {
        font-size: 0.9em;

        ${mediaCSS({fontFamily:a.typography.headings.fontFamily})}
        .tab-header {
          text-align: center;
          padding: 0.2em 0.5em;
          display: inline-block;
          cursor: pointer;
          color: ${transparentize(.3,a.colors.text.primary)};

          &.active {
            color: ${a.colors.primary.main};
            font-weight: ${a.typography.fontWeightBold};
          }
        }
      }

      .tab-content {
        margin-top: 4px;
        display: none;

        pre {
          margin-top: 0;
        }

        &.active {
          display: block;
        }
      }
    }

    p {
      &:last-child {
        margin-bottom: 0;
      }
    }

    h1 {
      ${typography(a.typography.heading1)}
      ${margins(a.typography.heading1)}
    }

    h2 {
      ${typography(a.typography.heading2)}
      ${margins(a.typography.heading2)}
    }

    h3 {
      ${typography(a.typography.heading3)}
      ${margins(a.typography.heading3)}
    }

    h4 {
      ${typography(a.typography.heading4)}
      ${margins(a.typography.heading4)}
    }

    h5 {
      ${typography(a.typography.heading5)}
      ${margins(a.typography.heading5)}
    }

    h6 {
      ${typography(a.typography.heading6)}
      ${margins(a.typography.heading6)}
    }

    code {
      color: ${a.typography.code.color};
      background-color: ${a.typography.code.backgroundColor};

      border-radius: 2px;
      border: 1px solid ${a.colors.border.light};
      padding: 0.1em 0.25em 0.2em;
      font-weight: ${a.typography.code.fontWeight};
      word-break: break-word;
      ${mediaCSS({fontSize:a.typography.code.fontSize,fontFamily:a.typography.code.fontFamily})}
    }

    pre {
      white-space: ${a.typography.code.wrap?"pre-wrap":"pre"};
      color: white;
      padding: 12px 14px 15px 14px;
      overflow-x: auto;
      line-height: normal;
      border-radius: 0px;
      border: 1px solid ${a.colors.border.light};

      ${mediaCSS({fontFamily:a.typography.code.fontFamily,backgroundColor:a.codeBlock.backgroundColor})}
      code {
        background-color: transparent;
        border: 0;
        padding: 0;

        ${mediaCSS({color:.5>getLuminance(a.codeBlock.backgroundColor)?"white":"#393A34"})}
        &:before,
        &:after {
          content: none;
        }
      }
    }

    ${RedocComponentWrap} :not(.redoc-markdown) {
      > pre,
      > code {
        color: inherit;
        border: none;
      }
    }

    blockquote {
      margin: ${a.components.blockquote.marginVertical}
        ${a.components.blockquote.marginHorizontal};
      padding: ${a.components.blockquote.paddingVertical}
        ${a.components.blockquote.paddingHorizontal};

      border-left: ${a.components.blockquote.borderLeft};
      background-color: ${a.components.blockquote.backgroundColor};

      ${typography(a.components.blockquote)}

      & > p:first-child {
        margin-top: 0;
      }
    }

    img {
      max-width: 100%;
      box-sizing: content-box;
    }
    > ul,
    > div:not(${RedocComponentWrap}) ul,
    > p ul {
      > ol,
      > div:not(${RedocComponentWrap}) ol,
      > p ol {
        padding-left: 2em;
        margin: 0;
        margin-bottom: 1em;

        ul,
        ol {
          margin-bottom: 0;
          margin-top: 0;
        }
      }
    }

    > div:not(${RedocComponentWrap}) {
      ul,
      ol {
        li {
          margin-top: 8px;
          margin-bottom: 8px;
        }
      }

      li p {
        margin: 0;
      }
    }
  `}
`;