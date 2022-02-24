import{css,mediaCSS}from"@redocly/reference-docs";export function typography(a){return a?css`
    ${mediaCSS({fontSize:a.fontSize||"",fontWeight:a.fontWeight||"",fontFamily:a.fontFamily||"",lineHeight:a.lineHeight||"",color:a.color||"",textTransform:a.transform||""})}
  `:""}export function margins(a){return a?css`
    ${mediaCSS({marginTop:a.marginTop||a.marginVertical||"",marginBottom:a.marginBottom||a.marginVertical||"",marginLeft:a.marginLeft||a.marginHorizontal||"",marginRight:a.marginRight||a.marginHorizontal||""})}
  `:""}