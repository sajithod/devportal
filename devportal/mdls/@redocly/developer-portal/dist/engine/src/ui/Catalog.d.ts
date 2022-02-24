import * as React from 'react';
export interface APICatalogItem {
    id: string;
    definitionId: string;
    link: string;
    sourcePath: string;
    permission: string;
    info: {
        version: string;
        title: string;
        description: string;
        [key: string]: unknown;
    };
    data: {
        title: string;
        label: string;
        definitionId: string;
        settings?: any;
        [key: string]: unknown;
    };
    versions: {
        definitionId: string;
        isDefault?: boolean;
        id?: string;
        title?: string;
        link?: string;
    }[];
    definitionProperties: Record<string, unknown>;
}
export declare function useAPICatalog(): {
    apis: APICatalogItem[];
    loadingRbac: boolean;
};
export declare function APICatalog(props: React.ConsumerProps<{
    apis: APICatalogItem[];
    loadingRbac: boolean;
}>): JSX.Element;
