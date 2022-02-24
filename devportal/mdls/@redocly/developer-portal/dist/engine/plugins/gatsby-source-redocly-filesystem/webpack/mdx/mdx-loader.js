const{getOptions}=require("loader-utils"),{slash}=require("gatsby-core-utils"),{createMDXNode,getMdxParser}=require("./ast"),grayMatter=require("gray-matter");module.exports=async function(a){const b=this.async(),c=getOptions(this),{getNodes:d}=c,e=slash(this.resourcePath);let f=d().find(a=>`File`===a.internal.type&&a.absolutePath===e);f||console.warn(`Can't find GraphQL node for ${e}`);const{content:g}=grayMatter(a),h=createMDXNode({node:f,content:g});let i;try{const a=await getMdxParser({...c,mdxNode:h}),b=await a.parseAndTransform(h);i=a.stringify(b)}catch(a){return b(a)}const j=`
  import React from 'react'
  import { MDXTag } from '@mdx-js/tag'

  ${i.replace("const { components, ...props } = this.props",`const props = this.props
    const components = { wrapper: React.Fragment };\n`)}
  `;return b(null,j)};