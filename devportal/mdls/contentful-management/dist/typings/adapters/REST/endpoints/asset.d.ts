import { RestEndpoint } from '../types';
export declare const get: RestEndpoint<'Asset', 'get'>;
export declare const getMany: RestEndpoint<'Asset', 'getMany'>;
export declare const update: RestEndpoint<'Asset', 'update'>;
export declare const del: RestEndpoint<'Asset', 'delete'>;
export declare const publish: RestEndpoint<'Asset', 'publish'>;
export declare const unpublish: RestEndpoint<'Asset', 'unpublish'>;
export declare const archive: RestEndpoint<'Asset', 'archive'>;
export declare const unarchive: RestEndpoint<'Asset', 'unarchive'>;
export declare const create: RestEndpoint<'Asset', 'create'>;
export declare const createWithId: RestEndpoint<'Asset', 'createWithId'>;
export declare const createFromFiles: RestEndpoint<'Asset', 'createFromFiles'>;
export declare const processForLocale: RestEndpoint<'Asset', 'processForLocale'>;
export declare const processForAllLocales: RestEndpoint<'Asset', 'processForAllLocales'>;
