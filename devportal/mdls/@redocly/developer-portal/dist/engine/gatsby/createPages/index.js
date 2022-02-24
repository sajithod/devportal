const path=require("path"),{readJsonOrYaml}=require("../../utils/fs"),{templatesPaths}=require("./templates"),{PAGE_TYPES,CUSTOM_REDIRECTS_FILE_NAME}=require("../../constants");module.exports=({graphql:a,actions:b,reporter:c})=>(`production`!==process.env.NODE_ENV&&b.createPage({path:"/dev-idp-login",component:templatesPaths.devIdpLogin,context:{}}),a(`
    {
      allContentItem {
        edges {
          node {
            id
            type
            pageId
            link
            baseLink
            sourcePath
            markdown {
              headings {
                depth
                value
                id
              }
            }
            seo {
              title
              description
              image
              keywords
              jsonLd
              lang
            }
            data {
              showPrevButton
              showNextButton
              customTemplate
              customDataString
              enableToc
              tocMaxDepth
              toc {
                enable
                maxDepth
                headings {
                  depth
                  value
                  id
                }
              }
              matchPath
              apiVersions {
                definitionId
                id
                title
                isDefault
              }
              isDefaultApiVersion
              apiVersionId
              redirectFrom
            }
          }
        }
      }
      allSidebar {
        nodes {
          pagesIds
          name
        }
      }
      siteConfig {
        contentDir
        enableToc
        tocMaxDepth
        toc {
          enable
          maxDepth
        }
      }
    }
  `).then(({data:a,errors:d})=>{if(d)throw d[0];const e=a.allContentItem.edges.map(({node:a})=>a),f=a.allSidebar.nodes;createContentPages(e,f,{actions:b,reporter:c},a.siteConfig),createCustomRedirects(a.siteConfig.contentDir,{createRedirect:b.createRedirect,reporter:c})}));function createContentPages(a,b,{actions:c,reporter:d},e){const{createPage:f,createRedirect:g}=c;for(let h of a){const a=b.find(a=>null!=a.pagesIds.find(a=>h.pageId.startsWith(a.replace(/\/?\*$/,"")))),c=h.data.customDataString?JSON.parse(h.data.customDataString):{},i=e.toc&&e.toc.enable,j=h.data.toc&&h.data.toc.enable,k={enable:null==j?i||!1:j,maxDepth:h.data.toc&&h.data.toc.maxDepth||e.toc&&e.toc.maxDepth,headings:h.data.toc&&h.data.toc.headings||h.markdown&&h.markdown.headings},l=k.headings&&k.headings[0]&&k.headings[0].value||null,m={id:h.id,seo:{title:l,...h.seo},pageId:h.pageId,pageBaseUrl:h.baseLink,type:h.type,toc:k,data:c,link:h.link,sidebarName:a&&a.name||"",isLanding:"/"===h.link,showPrevButton:h.data.showPrevButton,showNextButton:h.data.showNextButton,apiVersions:h.data.apiVersions,apiVersionId:h.data.apiVersionId,isDefaultApiVersion:h.data.isDefaultApiVersion};switch(h.data&&h.data.redirectFrom&&h.data.redirectFrom.forEach(a=>{a&&g({fromPath:a,toPath:h.link,isPermanent:!0,redirectInBrowser:!0})}),h.type){case PAGE_TYPES.markdown:f({path:h.link,component:templatesPaths.simpleMarkdown,context:m,matchPath:h.data&&h.data.matchPath});break;case PAGE_TYPES.mdx:f({path:h.link,component:h.sourcePath,context:m,matchPath:h.data&&h.data.matchPath});break;case PAGE_TYPES.referenceDocsPage:case PAGE_TYPES.referenceDocsOverview:f({path:h.link,component:templatesPaths.redocOperation,context:m});break;case PAGE_TYPES.dataTemplate:f({path:h.link,component:h.data.customTemplate,context:m,matchPath:h.data&&h.data.matchPath});break;case PAGE_TYPES.referenceDocsContainerPage:break;default:d.panicOnBuild(`Unknown page type for "${h.sourcePath}"`);}}}function createCustomRedirects(a,{createRedirect:b,reporter:c}){const d=readJsonOrYaml(path.join(a,CUSTOM_REDIRECTS_FILE_NAME));if(d&&"object"==typeof d){c.info("creating custom redirects");for(const a of Object.keys(d)){if(!d[a]||"object"!=typeof d[a])continue;const{to:c,type:e}=d[a]||{};c&&b({fromPath:a,toPath:c,isPermanent:301===e||"301"===e,redirectInBrowser:!0})}}}