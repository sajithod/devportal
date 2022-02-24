export type BuildArgs = import("gatsby").BuildArgs;
export type Reporter = import("gatsby").Reporter;
/**
 * @type { (graphql: BuildArgs['graphql'], reporter: Reporter) => Promise<string[]> }
 */
export function getClientRoutes(graphql: <TData, TVariables = any>(query: string, variables?: TVariables) => Promise<{
    errors?: any;
    data?: TData;
}>, reporter: import("gatsby-cli/lib/reporter/reporter").Reporter): Promise<string[]>;
/**
 * @type { (clientRoutesFilePath: string, clientRoutes: string[], reporter: Reporter) => Promise<void> }
 */
export function saveClientSideRoutesInBuild(clientRoutesFilePath: string, clientRoutes: string[], reporter: import("gatsby-cli/lib/reporter/reporter").Reporter): Promise<void>;
