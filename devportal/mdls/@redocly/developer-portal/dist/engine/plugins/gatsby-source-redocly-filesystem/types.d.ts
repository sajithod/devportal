type PluginOptions = {
    publicDir: string;
    configPath: string;
    getSiteConfig: () => any;
    envVariablesAllowedClientSide: string[];
};
