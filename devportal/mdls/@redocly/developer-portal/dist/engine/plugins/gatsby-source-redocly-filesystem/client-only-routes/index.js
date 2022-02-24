const path=require("path"),{mkdirSync,writeFileSync}=require("fs");module.exports={getClientRoutes,saveClientSideRoutesInBuild};async function getClientRoutes(a,b){b.verbose("Getting client-only routes");const{data:c,errors:d}=await a(`
    query GetClientSideRoutes {
      allContentItem(filter: { type: { eq: "mdx" }, data: { matchPath: { ne: "" } } }) {
        edges {
          node {
            id
            data {
              matchPath
            }
            type
          }
        }
      }
    }
  `);if(d)return b.warn("Can not get client-only routes"),[];try{const a=c.allContentItem.edges.map(a=>a.node.data.matchPath);return a}catch(a){return b.warn(a.message||"Can not get client-only routes"),[]}}async function saveClientSideRoutesInBuild(a,b,c){try{mkdirSync(path.dirname(a),{recursive:!0}),writeFileSync(a,JSON.stringify({clientRoutes:b},null,2),"utf-8"),c.info(`Created ${a} in the artifacts dir`)}catch(b){c.error(`Can not create ${a} in the artifacts dir: ${b.message}`)}}