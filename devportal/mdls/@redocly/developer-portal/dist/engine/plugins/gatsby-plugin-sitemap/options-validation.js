const{parseGraphql}=require("gatsby/graphql"),{stripIndent,oneLine}=require("common-tags"),{resolveSiteUrl,resolvePagePath,resolvePages,serialize,defaultFilterPages}=require("./internals"),pluginOptionsSchema=({Joi:a})=>a.object({plugins:a.array().strip(),output:a.string().default(`/sitemap`).description(`Folder path where sitemaps are stored in \`public\`.`),createLinkInHead:a.boolean().default(!0).description(`Whether to populate the \`<head>\` of your site with a link to the sitemap.`),entryLimit:a.number().default(45e3).description(`Number of entries per sitemap file, a sitemap index and multiple sitemaps are created if you have more entries.`),query:a.string().default(oneLine`{
          site {
            siteMetadata {
              siteUrl
            }
          }

          allSitePage {
            nodes {
              path
            }
          }
        }`).external(({query:a})=>{if(a)try{parseGraphql(a)}catch(a){throw new Error(stripIndent`
        Invalid plugin options for "gatsby-plugin-sitemap":
        "query" must be a valid GraphQL query. Received the error "${a.message}"`)}}).description(stripIndent`
        (GraphQL Query) The query for the data you need to generate the sitemap.
        It's required to get the site's URL, if you are not fetching it from \`site.siteMetadata.siteUrl\`,
        you will need to set a custom \`resolveSiteUrl\` function.
        If you override the query, you may need to pass in a custom \`resolvePagePath\` or
        \`resolvePages\` to keep everything working.
        If you fetch pages without using \`allSitePage.nodes\` query structure
        you will definately need to customize the \`resolvePages\` function.`),excludes:a.array().items(a.any()).default([]).description(stripIndent`
        An array of paths to exclude from the sitemap.
        While this is usually an array of strings it is possible to
        enter other data types into this array for custom filtering.
        Doing so will require customization of the \`filterPages\` function.`),exclude:a.forbidden().messages({"any.unknown":`As of v4 the \`exclude\` option was renamed to \`excludes\``}),resolveSiteUrl:a.function().default(()=>resolveSiteUrl).description(`Takes the output of the data query and lets you return the site URL.`),resolvePagePath:a.function().default(()=>resolvePagePath).description(`Takes a page object and returns the uri of the page (no domain or protocol).`),resolvePages:a.function().default(()=>resolvePages).description(`Takes the output of the data query and expects an array of page objects to be returned.`),filterPages:a.function().default(()=>defaultFilterPages).description(stripIndent`Takes the current page a string (or other object)
        from the \`exclude\` array and expects a boolean to be returned.
        \`true\` excludes the path, \`false\` keeps it.`),serialize:a.function().default(()=>serialize).description(`Takes the output of \`filterPages\` and lets you return a sitemap entry.`)});exports.pluginOptionsSchema=pluginOptionsSchema;