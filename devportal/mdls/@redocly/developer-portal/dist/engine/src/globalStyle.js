import{mediaCSS}from"@redocly/reference-docs";import{normalize,getLuminance}from"polished";import{createGlobalStyle,css}from"styled-components";import{appTheme,genTokens}from"./appTheme";const codeBlockBackgroundColor=Array.isArray(appTheme.codeBlock.backgroundColor)?appTheme.codeBlock.backgroundColor[0]:appTheme.codeBlock.backgroundColor,lightStyleCodeButton=css`
  .gatsby-code-button,
  .done-indicator {
    color: ${appTheme.codeBlock.copyButton.visibleText};
  }

  .gatsby-code-button:hover {
    color: ${appTheme.codeBlock.copyButton.visibleText};
    outline: 1px solid ${appTheme.codeBlock.copyButton.visibleText};
  }
`,darkStyleCodeButton=css`
  .gatsby-code-button,
  .done-indicator {
    color: ${appTheme.codeBlock.copyButton.visibleText};
  }

  .gatsby-code-button:hover {
    color: white;
    color: ${appTheme.codeBlock.copyButton.contrastText};
    background-color: ${appTheme.codeBlock.copyButton.background};
  }
`,lightStyleTokens=css`
  .token.comment,
  .token.prolog,
  .token.doctype,
  .token.cdata {
    color: #999988;
    font-style: italic;
  }

  .token.namespace {
    opacity: 0.7;
  }

  .token.string,
  .token.attr-value {
    color: #e3116c;
  }
  .token.punctuation,
  .token.operator {
    color: #393a34; /* no highlight */
  }

  .token.entity,
  .token.url,
  .token.symbol,
  .token.number,
  .token.boolean,
  .token.variable,
  .token.constant,
  .token.property,
  .token.regex,
  .token.inserted {
    color: #36acaa;
  }

  .token.atrule,
  .token.keyword,
  .token.attr-name,
  .language-autohotkey .token.selector {
    color: #00a4db;
  }

  .token.function,
  .token.deleted,
  .language-autohotkey .token.tag {
    color: #9a050f;
  }

  .token.tag,
  .token.selector,
  .language-autohotkey .token.keyword {
    color: #00009f;
  }
`,darkStyleTokens=css`
  .token.comment,
  .token.prolog,
  .token.doctype,
  .token.cdata {
    color: hsl(30, 20%, 50%);
  }

  .token.property,
  .token.tag,
  .token.number,
  .token.constant,
  .token.symbol {
    color: #62bff9;
  }
  .token.boolean {
    color: firebrick;
  }
  .token.selector,
  .token.attr-name,
  .token.string,
  .token.char,
  .token.builtin,
  .token.inserted {
    color: #a0fbaa;
    & + a,
    & + a:visited {
      color: #4ed2ba;
      text-decoration: underline;
    }
  }
  .token.operator,
  .token.entity,
  .token.url,
  .token.variable {
    color: hsl(40, 90%, 60%);
  }
  .token.atrule,
  .token.attr-value,
  .token.keyword {
    color: hsl(350, 40%, 70%);
  }
  .token.regex,
  .token.important {
    color: #e90;
  }

  .token.deleted {
    color: red;
  }
`;export const GlobalStyle=createGlobalStyle`
  ${normalize()}
  html,
  body {
    height: 100%;
    ${mediaCSS({fontSize:appTheme.typography.fontSize,fontFamily:appTheme.typography.fontFamily})}
  }

  article th {
    overflow: hidden;
    resize: horizontal;
  }
  
  #___gatsby,
  #gatsby-focus-wrapper {
    min-height: 100vh;
  }

  * {
    box-sizing: border-box;
  }


  .scrollbar-container {
    overflow: auto;
  }

  /**
  * Prism styles based on prism-dark.css
  */

 .gatsby-highlight code[class*='language-'],
 .gatsby-highlight pre[class*='language-'],
  code[class*='language-'],
  pre[class*='language-'] {
    /* color: white;
    background: none; */
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;
    line-height: 1.5;
    -moz-tab-size: 4;
    -o-tab-size: 4;
    tab-size: 4;
    -webkit-hyphens: none;
    -moz-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;
  }

  /* 
   * Code blocks 
   */
  
  /* Code copy button */
  .code-wrapper {
    position: relative;

    ${.25>getLuminance(codeBlockBackgroundColor)?darkStyleCodeButton:lightStyleCodeButton}

    .gatsby-code-button-container {
      position: absolute;
      top: 5px;
      right: 5px;
    }

    .gatsby-code-button,
    .done-indicator {
      padding: 0 5px;
      display: none;
    }
    
    .done-indicator {
      cursor: default;
    }

    .gatsby-code-button:hover {
      cursor: pointer;
    }
    
    &:hover {
      .gatsby-code-button-container .gatsby-code-button {
        display: block;
      }
    }
  }

  /* Code text */
  .gatsby-highlight pre[class*='language-'],
  pre[class*='language-'] {
    padding: 1em;
    margin: 0.5em 0;
    overflow: auto;
    border: 0;
    border-radius: ${({theme:a})=>a.shape.borderRadius};
  }

  code[class='language-text'] {
    line-height: 1.2em;
    display: inline-flex;
    white-space: pre-wrap;
    overflow-wrap: anywhere;
  }
  .gatsby-highlight,
  code[class*='language-'],
  pre[class*='language-'] {
    .token.important,
    .token.bold {
      font-weight: bold;
    }
    .token.italic {
      font-style: italic;
    }
    .token.entity {
      cursor: help;
    }
    .token.punctuation {
      opacity: 0.7;
    }
    .namespace {
      opacity: 0.7;
    }
    ${.5>getLuminance(codeBlockBackgroundColor)?darkStyleTokens:lightStyleTokens}
    ${genTokens(appTheme.codeBlock.tokens)}
  }

  .mermaid > svg {
    font-size: 14px!important;
    max-width: 100%;
  }
`;