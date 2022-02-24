import * as React from 'react';
import type { OpenAPIDefinition } from '@redocly/reference-docs';
export declare const PageDataContext: React.Context<{
    referenceDocsStoreJson?: any | null;
    rawApiDefinition?: OpenAPIDefinition | null;
    frontmatter?: object;
    pageId?: string;
}>;
export declare function usePageData(): {
    referenceDocsStoreJson?: any;
    rawApiDefinition?: OpenAPIDefinition;
    frontmatter?: object;
    pageId?: string;
};
