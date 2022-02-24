/// <reference types="react" />
export interface PageHeaderProps {
    seo: {
        lang?: string;
        jsonLd?: object;
        title?: string;
        description?: string;
        image?: string;
        keywords?: string;
    };
}
export declare function PageHeader(props: PageHeaderProps): JSX.Element;
