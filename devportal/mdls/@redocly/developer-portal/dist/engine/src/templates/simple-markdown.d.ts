import * as React from 'react';
import '../fragments';
import { MarkdownRemark } from '../../auto-graphql';
import { Location } from 'history';
export interface SimpleMarkdownProps {
    location: Location;
    pageContext: any;
    data: {
        markdownRemark: MarkdownRemark;
        contentItem: {
            fields: {
                lastModified: string;
            };
            data: {
                enableToc: boolean;
                disableLastModified: boolean;
                tocMaxDepth: number;
                lastModified: string;
            };
        };
        siteConfig: any;
    };
}
export default class SimpleMarkdown extends React.PureComponent<SimpleMarkdownProps> {
    render(): JSX.Element;
}
export declare const q: void;
