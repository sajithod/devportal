import { Headers } from "got";
import type { GatsbyCache } from "gatsby";
export interface IFetchRemoteFileOptions {
    url: string;
    cache: GatsbyCache;
    auth?: {
        htaccess_pass?: string;
        htaccess_user?: string;
    };
    httpHeaders?: Headers;
    ext?: string;
    name?: string;
}
export declare function fetchRemoteFile({ url, cache, auth, httpHeaders, ext, name, }: IFetchRemoteFileOptions): Promise<string>;
