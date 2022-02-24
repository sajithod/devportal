import*as React from"react";import styled from"../../styled-components";import SearchResultItem from"../SearchBox/SearchResultItem";import{SearchResultsWrap}from"../SearchBox/searchbox.elements";export default function UserSearchResults(a){const{show:b,results:c,indexError:d,activeItemIdx:e,loading:f,query:g}=a;return React.createElement(SearchResultsWrap,{show:b},d&&"development"===process.env.NODE_ENV&&React.createElement(Message,null,"Failed to load search index. Search index is not working in develop. ",React.createElement("br",null),"Try running ",React.createElement("code",null,"yarn build")," to build the search index"),0===c.length&&!f&&React.createElement(Message,null," Nothing Found "),c.map((a,b)=>React.createElement(SearchResultItem,{key:a.link,item:a,query:g,active:b===e})))}const Message=styled.div`
  text-align: center;
  color: ${a=>a.theme.colors.primary.main};
  padding: 1.5em;
  @media only screen and (max-width: ${({theme:a})=>a.breakpoints.medium}) {
    padding: 0.75em;
  }
`;