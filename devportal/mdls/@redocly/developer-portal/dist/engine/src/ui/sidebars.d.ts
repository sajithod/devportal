export interface SidebarInfo<T = any> {
    name: string;
    items: {
        link?: string | null;
        label?: string;
    }[];
    context: T;
}
export declare function useSidebarsInfo<T = any>(): {
    sidebars: SidebarInfo<T>[];
    loadingRbac: boolean;
};
