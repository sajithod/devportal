import{__assign}from"tslib";var get=function(e,r,t,o,i){for(r=r&&r.split?r.split("."):[r],o=0;o<r.length;o++)e=e?e[r[o]]:i;return e===i?t:e},aliases={bg:"backgroundColor",m:"margin",mt:"marginTop",mr:"marginRight",mb:"marginBottom",ml:"marginLeft",mx:"marginX",my:"marginY",p:"padding",pt:"paddingTop",pr:"paddingRight",pb:"paddingBottom",pl:"paddingLeft",px:"paddingX",py:"paddingY"},multiples={marginX:["marginLeft","marginRight"],marginY:["marginTop","marginBottom"],paddingX:["paddingLeft","paddingRight"],paddingY:["paddingTop","paddingBottom"],size:["width","height"]},scales={color:"colors",backgroundColor:"colors",borderColor:"colors",margin:"space",marginTop:"space",marginRight:"space",marginBottom:"space",marginLeft:"space",marginX:"space",marginY:"space",padding:"space",paddingTop:"space",paddingRight:"space",paddingBottom:"space",paddingLeft:"space",paddingX:"space",paddingY:"space",top:"space",right:"space",bottom:"space",left:"space",gridGap:"space",gridColumnGap:"space",gridRowGap:"space",gap:"space",columnGap:"space",rowGap:"space",fontFamily:"fonts",fontSize:"fontSizes",fontWeight:"fontWeights",lineHeight:"lineHeights",letterSpacing:"letterSpacings",border:"borders",borderTop:"borders",borderRight:"borders",borderBottom:"borders",borderLeft:"borders",borderWidth:"borderWidths",borderStyle:"borderStyles",borderRadius:"radii",borderTopRightRadius:"radii",borderTopLeftRadius:"radii",borderBottomRightRadius:"radii",borderBottomLeftRadius:"radii",borderTopWidth:"borderWidths",borderTopColor:"colors",borderTopStyle:"borderStyles",borderBottomWidth:"borderWidths",borderBottomColor:"colors",borderBottomStyle:"borderStyles",borderLeftWidth:"borderWidths",borderLeftColor:"colors",borderLeftStyle:"borderStyles",borderRightWidth:"borderWidths",borderRightColor:"colors",borderRightStyle:"borderStyles",outlineColor:"colors",boxShadow:"shadows",textShadow:"shadows",zIndex:"zIndices",width:"sizes",minWidth:"sizes",maxWidth:"sizes",height:"sizes",minHeight:"sizes",maxHeight:"sizes",flexBasis:"sizes",size:"sizes",fill:"colors",stroke:"colors"},positiveOrNegative=function(e,r){if("number"!=typeof r||r>=0)return get(e,r,r);var t=Math.abs(r),o=get(e,t,t);return"string"==typeof o?"-"+o:-1*o},transforms=["margin","marginTop","marginRight","marginBottom","marginLeft","marginX","marginY","top","bottom","left","right"].reduce((function(e,r){var t;return __assign(__assign({},e),((t={})[r]=positiveOrNegative,t))}),{});export var ZERO_BREAKPOINT="_";var responsive=function(e){return function(r){for(var t={},o=get(r,"breakpoints"),i={},a=0,n=Object.entries(o);a<n.length;a++){var s=n[a],d=s[0],l=s[1];i[d]="@media screen and (min-width: "+l+")",t[i[d]]=null}for(var d in e){if(null!=(l="function"==typeof e[d]?e[d](r):e[d]))if(Array.isArray(l)||"object"!=typeof l)t[d]=l;else for(var g=0,p=Object.entries(l);g<p.length;g++){var m=p[g],f=m[0],c=m[1],u=i[f];u?(t[u]=t[u]||{},null!=c&&(t[u][d]=c)):f===ZERO_BREAKPOINT&&(t[d]=c)}}return t}};function getValueAt(e,r){if("object"==typeof r){var t=r[e];return t||0===t?t:null}return e===ZERO_BREAKPOINT?r:null}function getDefaultValue(e){var r=getValueAt(ZERO_BREAKPOINT,e);return null!==r?r:(console.warn("Theme resolver: could not find default value for "+JSON.stringify(e)+'. Theme properties with breakpoints should contain a non-empty "'+ZERO_BREAKPOINT+'" property.'),null)}export function mediaMap(e,r,t){var o={},i=getDefaultValue(t),a=null,n=r.map(getDefaultValue);i&&!n.some((function(e){return null===e}))&&(o[ZERO_BREAKPOINT]=i.apply(void 0,n),a=o[ZERO_BREAKPOINT]);for(var s=0,d=Object.keys(e);s<d.length;s++){var l=d[s];i=getValueAt(l,t)||i;for(var g=0;g<r.length;g++){var p=getValueAt(l,r[g])||n[g];null!==p&&(n[g]=p)}var m=n.findIndex((function(e){return null===e}));if(-1===m)if(i){var f=i.apply(void 0,n);a!==f&&(o[l]=f,a=f)}else console.warn("Theme resolver: could not resolve media mapper. CSS may be rendered incorrectly.");else console.warn('Theme resolver: could not resolve breakpoint: "'+l+'" for value '+JSON.stringify(r[m])+".")}return o}export var mediaCSS=function(e){return function(r){void 0===r&&(r={});var t=r.theme||r,o={},i="function"==typeof e?e(t):e,a=responsive(i)(t);for(var n in a){var s=a[n],d="function"==typeof s?s(t):s;if("variant"!==n)if(!d||"object"!=typeof d||Array.isArray(d)){var l=get(aliases,n,n),g=get(scales,l),p=get(t,g,get(t,l,{})),m=get(transforms,l,get)(p,d,d);if(multiples[l])for(var f=multiples[l],c=0;c<f.length;c++)o[f[c]]=m;else o[l]=m}else o[n]=mediaCSS(d)(t);else{var u=mediaCSS(get(t,d))(t);o=__assign(__assign({},o),u)}}return o}};
//# sourceMappingURL=media-css.js.map