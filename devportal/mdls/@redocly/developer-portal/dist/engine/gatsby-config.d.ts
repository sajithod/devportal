export const pathPrefix: string;
export declare const assetPrefix: string;
export declare namespace flags {
    const FAST_DEV: boolean;
    const DEV_SSR: boolean;
    const LAZY_IMAGES: boolean;
    const PRESERVE_WEBPACK_CACHE: boolean;
    const PRESERVE_FILE_DOWNLOAD_CACHE: boolean;
    const PARALLEL_SOURCING: boolean;
}
export declare const siteMetadata: any;
export declare const plugins: ("gatsby-plugin-react-helmet" | "gatsby-plugin-layout" | "@redocly/gatsby-plugin-sharp" | "gatsby-plugin-nprogress" | "gatsby-plugin-styled-components" | "gatsby-plugin-redirect" | {
    resolve: string;
    options?: undefined;
} | {
    resolve: string;
    options: any;
})[];
