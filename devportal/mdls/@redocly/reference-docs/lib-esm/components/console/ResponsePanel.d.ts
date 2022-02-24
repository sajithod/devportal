import * as React from 'react';
import { FileInfo } from '../../redoc-lib/src/common-elements/Download';
export interface OpenApiResponseData extends FileInfo {
    body?: GenericObject;
    data: string;
    ok: boolean;
    status: number;
    statusText: string;
    headers: Record<string, string>;
    parseError?: Error;
}
export interface ResponsePanelProps {
    response?: OpenApiResponseData;
    error?: Error & {
        response?: OpenApiResponseData;
    };
    time?: number;
}
export declare const ResponseHeader: import("styled-components").StyledComponent<"div", import("../../services/extendTheme").ProTheme, {}, never>;
export declare const PanelStyledPre: import("styled-components").StyledComponent<"pre", import("../../services/extendTheme").ProTheme, {}, never>;
export declare class ResponsePanel extends React.PureComponent<ResponsePanelProps> {
    render(): JSX.Element;
}
