const React=require("react"),pluginDefaults={className:`anchor`,icon:!0};exports.onRenderBody=({setHeadComponents:a},b)=>{const{className:c,icon:d}=Object.assign(pluginDefaults,b),e=d?React.createElement("style",{key:`gatsby-remark-autolink-headers-style`,type:"text/css"},`
    .${c}.before {
      position: absolute;
      top: 0;
      left: 0;
      transform: translateX(-100%);
      padding-right: 4px;
    }
    .${c}.after {
      display: inline-block;
      padding-left: 4px;
    }
    h1 .${c} svg,
    h2 .${c} svg,
    h3 .${c} svg,
    h4 .${c} svg,
    h5 .${c} svg,
    h6 .${c} svg {
      visibility: hidden;
    }
    h1:hover .${c} svg,
    h2:hover .${c} svg,
    h3:hover .${c} svg,
    h4:hover .${c} svg,
    h5:hover .${c} svg,
    h6:hover .${c} svg,
    h1 .${c}:focus svg,
    h2 .${c}:focus svg,
    h3 .${c}:focus svg,
    h4 .${c}:focus svg,
    h5 .${c}:focus svg,
    h6 .${c}:focus svg {
      visibility: visible;
    }
    .hidden-anchor { 
      position: absolute;
      top: 0px;
    }
  `):void 0;return a([e])};