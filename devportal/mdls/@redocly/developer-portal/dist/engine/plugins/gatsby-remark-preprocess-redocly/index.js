const visit=require("unist-util-visit"),isRelativeUrl=require(`is-relative-url`),path=require("path"),slugify=require("slugify"),{replaceEnv,getEnv}=require("../../utils/utils");module.exports=({markdownAST:a})=>{visit(a,"code",a=>{isCodeSnippetNode(a)&&a.meta&&(a.details=a.meta,a.meta="")})};function isCodeSnippetNode(a){return"code"===a.type&&a.lang}