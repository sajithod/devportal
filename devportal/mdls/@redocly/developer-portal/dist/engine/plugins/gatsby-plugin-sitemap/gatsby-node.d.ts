export { pluginOptionsSchema };
export function onPostBuild({ graphql, reporter, pathPrefix }: {
    graphql: any;
    reporter: any;
    pathPrefix: any;
}, { output, query, excludes, resolveSiteUrl, resolvePagePath, resolvePages, filterPages, serialize, }: {
    output: any;
    query: any;
    excludes: any;
    resolveSiteUrl: any;
    resolvePagePath: any;
    resolvePages: any;
    filterPages: any;
    serialize: any;
}): Promise<void>;
import { pluginOptionsSchema } from "./options-validation";
