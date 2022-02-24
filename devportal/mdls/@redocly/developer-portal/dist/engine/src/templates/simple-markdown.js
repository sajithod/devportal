import*as React from"react";import{graphql}from"gatsby";import"../fragments";import MarkdownLayout from"../layouts/MarkdownLayout";export default class SimpleMarkdown extends React.PureComponent{render(){const{html:a}=this.props.data.markdownRemark;return React.createElement(MarkdownLayout,Object.assign({},this.props,{html:a}))}}export const q=graphql`
  query MarkdownQuery($pageId: String!, $id: String!) {
    markdownRemark(fields: { contentId: { eq: $id } }) {
      html
      headings {
        value
        depth
      }
    }
    contentItem(pageId: { eq: $pageId }) {
      data {
        lastModified
        enableToc
        disableLastModified
        tocMaxDepth
        requestLogin
      }
    }
    siteConfig {
      enableToc
      disableLastModified
      tocMaxDepth
    }
  }
`;