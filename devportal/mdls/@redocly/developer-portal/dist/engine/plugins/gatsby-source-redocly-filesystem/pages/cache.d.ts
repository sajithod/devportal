export var sidebarsFiles: Set<any>;
export function cleanPagesCache(): void;
export function getPageInfo(id: any): any;
export function getAllPagesInfo(): any[];
export function updatePagesInfoCache({ getNodesByType }: {
    getNodesByType: any;
}): void;
export function updatePagesInfo(contentItem: any, boundMethods: any, { configPath, getSiteConfig }: {
    configPath: any;
    getSiteConfig: any;
}): Promise<void>;
