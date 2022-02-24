export const PERMISSIONS_FILE_NAME: "permissions.rbac.yaml";
export const ROLES_FILE_NAME: "rbac.yaml";
export const GUEST_PERMISSION: "guest";
import queryData = require("./query");
export function copyClaimsPreprocessor({ config, configPath, publicDir }: {
    config: any;
    configPath: any;
    publicDir: any;
}): void;
export function getDefaultPermission(contentDir: any): any;
/**
 *
 * @param {string} targetPath
 * @param {string} configPath
 *
 * @type{ (configPath: string, targetPath:string) => string | null }
 */
export function getDirectoryPermission(configPath: string, targetPath: string): string | null;
export function getDirectoriesPermissions(configPath: any, dirPath: any, currentPermission?: string, dirsConfig?: {}): {};
/**
 *
 * @param {string} authSettingsFileName
 * @param {{auth: object, rbac?: object; nav?: any[]; footer?: object; sidebars?: object; pages?: object, apis?: any[]}} settings
 * @param {*} reporter
 */
export function saveSettings(authSettingsFileName: string, settings: {
    auth: object;
    rbac?: object;
    nav?: any[];
    footer?: object;
    sidebars?: object;
    pages?: object;
    apis?: any[];
}, reporter: any): void;
export declare const AUTH_CONFIG_FILENAME: string;
export declare const RBACConfig: {};
export { queryData };
