import*as React from"react";import styled from"../../styled-components";import{darken}from"polished";import*as GithubSlugger from"github-slugger";import throttle from"lodash.throttle";import{useFullHeight}from"../../hooks";import{mediaCSS}from"@redocly/reference-docs";const slugger=new GithubSlugger,HEADING_GAP=1;function useActiveHeading(a){const[b,c]=React.useState(void 0),d=React.useMemo(()=>a&&a.querySelectorAll(".hidden-anchor"),[a]),e=React.useCallback(throttle(()=>{if(d)for(let a=0;a<d.length;a++){const b=d[a].parentNode;if(b&&b.offsetTop-HEADING_GAP>window.scrollY){const b=0===a?void 0:d[a-1].getAttribute("id")||void 0;return void c(b)}}}),[d]);return React.useEffect(()=>{if("undefined"!=typeof window&&d&&d.length)return window.addEventListener("scroll",e,{capture:!1}),e(),()=>window.removeEventListener("scroll",e)},[e]),b}export default function TableOfContent(a){const{headings:b,tocMaxDepth:c}=a,d=React.useRef(null);useFullHeight(d);const e=useActiveHeading(a.contentWrapper);return slugger.reset(),b&&1===b.length&&1===b[0]?.depth?null:React.createElement(React.Fragment,null,b&&React.createElement(TableOfContentMenu,null,React.createElement(TableOfContentItems,{ref:d},b.map(a=>({...a,value:a.value?.replace(/(<([^>]+)>)/gi,"")})).map((a,b)=>{if(0===b&&1===a.depth)return null;if(a.depth&&a.depth>c)return null;const d="#"+(a.id?a.id:slugger.slug(a.value,!1));return React.createElement(MenuItem,{key:d,depth:a.depth||0,href:d,className:"#"+e==d?"active":"",dangerouslySetInnerHTML:{__html:a.value||""},"data-cy":`toc-${a.value}`})}))))}const MenuItem=styled.a`
  display: block;
  color: ${({theme:a})=>a.colors.text.primary};
  cursor: pointer;
  font-size: 0.8em;
  padding: 10px 20px;
  padding-left: ${({depth:a})=>15*(a-1)}px;
  transition: background-color 0.3s, color 0.3s;
  text-decoration: none;
  word-break: break-word;
  ${({theme:a})=>mediaCSS({fontFamily:a.typography.headings.fontFamily})}
  :hover,
  &.active {
    color: ${({theme:a})=>a.colors.primary.main};
    background-color: ${({theme:a})=>darken(.1,a.colors.primary.contrastText)};
  }

  :empty {
    padding: 0;
  }
`,TableOfContentMenu=styled.aside`
  font-size: 1rem;
  background-color: transparent;
  flex-shrink: 0;
  display: none !important;

  ${({theme:a})=>mediaCSS({fontFamily:a.typography.fontFamily})}

  @media only screen and (min-width: ${({theme:a})=>a.breakpoints.medium}) {
    width: ${({theme:a})=>a.tocPanel.width};
    display: block !important;
  }
`,TableOfContentItems=styled.div`
  position: fixed;
  overflow-y: auto;
  padding: 20px 0;
  width: ${({theme:a})=>a.tocPanel.width};
`;