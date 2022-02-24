import { APIGEE_VERSION, ApiProduct, App, Attribute } from './apigee-api-types';
export declare class APIClient {
    apiUrl: string;
    developerUrl: string;
    accessToken: string | null;
    organizationName: string;
    email: string;
    organizationUrl: string;
    version: APIGEE_VERSION;
    constructor({ apiUrl, accessToken, organizationName, email, version, }: {
        apiUrl?: string;
        accessToken?: string | null;
        organizationName?: string;
        email?: string;
        version: APIGEE_VERSION;
    });
    setAuthHeader(init: any): any;
    protected getErrorMessage(text: string): any;
    protected fetchData(input: RequestInfo, init?: RequestInit): Promise<any>;
    protected multipleFetchData(input: RequestInfo[], init?: RequestInit): Promise<any>;
    getDeveloperApps(): Promise<{
        app: App[];
    }>;
    getApiProducts(): Promise<{
        apiProduct: ApiProduct[];
    }>;
    getDeveloperApp(name: string): Promise<App>;
    getDeveloper(): Promise<any>;
    createDeveloper(email: string, firstName: string, lastName: string, username: string): Promise<any>;
    createDeveloperApp(name: string, apiProducts: string[]): Promise<App>;
    renameDeveloperApp(name: string, newName: string): Promise<App>;
    deleteDeveloperApp(name: string): Promise<App>;
    createDeveloperAppKey(name: string, apiProducts: string[], attributes: Attribute[]): Promise<Credential>;
    deleteDeveloperAppKey(name: string, consumerKey: string): Promise<Credential>;
    updateDeveloperAppKey(name: string, consumerKey: string, apiProducts: string[], attributes: Attribute[]): Promise<Credential>;
    deleteDeveloperAppKeyProduct(name: string, consumerKey: string, apiProducts: string[]): Promise<any>;
}
