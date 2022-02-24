import * as React from 'react';
import { Location } from 'history';
import { MarkdownRemark } from '../../auto-graphql';
export interface DefaultLayoutProps {
    location: Location;
    children: any;
    pageContext: {
        sidebarName?: string;
        title: string;
        description: string;
        image?: string;
        keywords?: string;
        type: string;
        id: string;
        pageId: string;
        isLanding: boolean;
        showPrevButton?: boolean;
        showNextButton?: boolean;
        apiVersionId?: string;
        apiVersions: any[];
        toc?: object;
        data: Record<string, unknown>;
        seo: Record<string, unknown>;
    };
    data: {
        contentItem?: {
            data: {
                requestLogin?: boolean;
                redocStoreStr?: string;
                lastModified?: string;
            };
        };
        markdownRemark: MarkdownRemark;
        siteConfig: {
            enableToc: boolean;
            disableLastModified: boolean;
        };
    };
}
export default function DefaultLayout(props: React.PropsWithChildren<DefaultLayoutProps>): JSX.Element | "Development mode is only allowed in localhost";
