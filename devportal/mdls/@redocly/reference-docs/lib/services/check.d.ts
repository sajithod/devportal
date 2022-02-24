export declare const cryptoLib: Crypto | undefined;
export declare type LicenseInfo = {
    t?: boolean;
    i?: number;
    e?: number;
    h?: string[] | true;
    valid?: boolean;
    expired?: boolean;
    allowed?: boolean;
    local?: boolean;
    cryptoMissing?: boolean;
};
export declare function isHostAllowed(hostname: string, hosts: string[] | boolean | undefined): boolean;
export default function parse(key?: string): Promise<LicenseInfo>;
