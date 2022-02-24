import * as React from 'react';
import type { OpenAPIDefinition } from '@redocly/reference-docs';
import { MarkdownRemark } from '../../auto-graphql';
import { Location } from 'history';
interface MarkdownData {
    contentItem?: {
        data: {
            disableLastModified: boolean;
            enableToc: boolean;
            tocMaxDepth: number;
            lastModified: string;
        };
    };
    markdownRemark: MarkdownRemark;
    siteConfig: {
        enableToc: boolean;
        disableLastModified: boolean;
        tocMaxDepth: number;
    } & {
        [definitionId: string]: {
            redocStore: string;
        };
    };
}
export interface MarkdownLayoutProps {
    pageContext: any;
    lastModified?: string;
    html?: string | null;
    data: MarkdownData;
    location: Location;
}
export declare const RedocStoresContext: React.Context<{}>;
declare class GetStoreInner extends React.Component<{
    definitionId: string;
    children: (store: any) => JSX.Element;
    theme: any;
}> {
    render(): JSX.Element;
}
export declare const GetStore: React.ForwardRefExoticComponent<{
    children: (store: any) => JSX.Element;
    ref?: React.Ref<GetStoreInner>;
    key?: React.Key;
    definitionId: string;
} & {
    theme?: {
        spacing: {
            unit: number;
            sectionHorizontal: number;
            sectionVertical: number;
        };
        components: {
            buttons: {
                borderRadius: any;
                hoverStyle: string;
                fontWeight: any;
                boxShadow: string;
                hoverBoxShadow: string;
                fontFamily: string;
                sizes: {
                    small: {
                        fontSize: string;
                        padding: string;
                        minWidth: string;
                    };
                    medium: {
                        fontSize: string;
                        padding: string;
                        minWidth: string;
                    };
                    large: {
                        fontSize: string;
                        padding: string;
                        minWidth: string;
                    };
                    xlarge: {
                        fontSize: string;
                        padding: string;
                        minWidth: string;
                    };
                };
            };
            search: {
                icon: string;
                iconColor: any;
            };
            alert: {
                marginHorizontal: string;
                marginVertical: string;
                paddingHorizontal: string;
                paddingVertical: string;
                borderRadius: string;
                iconSize: string;
                fontSize: string;
                fontWeight: string;
                lineHeight: string;
                heading: {
                    fontSize: string;
                    fontWeight: string;
                    lineHeight: string;
                    letterSpacing: string;
                    transform: string;
                };
                variants: {
                    info: {
                        backgroundColor: string;
                        textColor: any;
                        headingColor: any;
                        iconColor: any;
                        icon: string;
                    };
                    attention: {
                        backgroundColor: any;
                        textColor: any;
                        headingColor: any;
                        iconColor: any;
                        icon: string;
                    };
                    warning: {
                        backgroundColor: any;
                        textColor: any;
                        headingColor: any;
                        iconColor: any;
                        icon: string;
                    };
                    danger: {
                        backgroundColor: any;
                        textColor: any;
                        headingColor: any;
                        iconColor: any;
                        icon: string;
                    };
                    success: {
                        backgroundColor: any;
                        textColor: any;
                        headingColor: any;
                        iconColor: any;
                        icon: string;
                    };
                };
            };
            panels: {
                borderRadius: string;
            };
            shape: {
                borderRadius: string;
            };
            blockquote: {
                marginHorizontal: string;
                marginVertical: string;
                paddingHorizontal: string;
                paddingVertical: string;
                backgroundColor: string;
                borderRadius: string;
                borderLeft: string;
                color: any;
            };
            contentWrapper: {
                maxWidth: string;
                paddingHorizontal: string;
                paddingVertical: string;
            };
            login: {
                avatarBorderRadius: any;
                avatarBgColor: string;
            };
            layoutControls: {
                top: string;
            };
            httpBadges: {
                borderRadius: string;
                fontFamily: any;
                fontWeight: any;
                color: any;
                sizes: {
                    medium: {
                        fontSize: string;
                        lineHeight: string;
                    };
                    small: {
                        fontSize: string;
                        lineHeight: string;
                    };
                };
            };
            tryItButton: {
                fullWidth: boolean;
            };
            tryItSendButton: {
                fullWidth: boolean;
            };
        };
        breakpoints: {
            small: string;
            medium: string;
            large: string;
        };
        shape: {
            borderRadius: string;
        };
        colors: {
            background: string;
            tonalOffset: number;
            primary: {
                main: string;
                light: string;
                dark: string;
                contrastText: string;
            };
            secondary: {
                main: string;
                light: string;
                dark: string;
                contrastText: string;
            };
            accent: {
                main: string;
                light: string;
                dark: string;
                contrastText: string;
            };
            success: {
                main: string;
                light: string;
                dark: string;
                contrastText: string;
            };
            error: {
                main: string;
                light: string;
                dark: string;
                contrastText: string;
            };
            warning: {
                main: string;
                light: string;
                dark: string;
                contrastText: string;
            };
            info: {
                main: string;
                light: string;
                dark: string;
                contrastText: string;
            };
            text: {
                primary: string;
                secondary: string;
                light: string;
            };
            border: {
                dark: string;
                light: string;
            };
            responses: {
                success: {
                    color: any;
                    backgroundColor: string;
                };
                error: {
                    color: any;
                    backgroundColor: string;
                };
                redirect: {
                    color: any;
                    backgroundColor: string;
                };
                info: {
                    color: any;
                    backgroundColor: string;
                };
            };
            http: {
                get: string;
                post: string;
                put: string;
                options: string;
                patch: string;
                delete: string;
                basic: string;
                link: string;
                head: string;
            };
            navbar: {
                main: any;
                gradient: string;
                contrastText: any;
            };
            footer: {
                main: any;
                contrastText: any;
            };
        };
        sidebar: {
            showAtBreakpoint: string;
            backgroundColor: string;
            width: string;
            textColor: string;
            textColorSecondary: string;
            activeTextColor: any;
            activeBgColor: string;
            separatorLineColor: string;
            rightLineColor: string;
            separatorLabelColor: any;
            caretColor: any;
            caretSize: any;
            spacing: {
                unit: number;
                paddingHorizontal: any;
                paddingVertical: any;
                offsetTop: number;
                offsetLeft: number;
                offsetNesting: number;
            };
            borderRadius: string;
            fontFamily: any;
            fontSize: any;
        };
        navbar: {
            borderRadius: string;
            marginHorizontal: string;
            marginVertical: string;
            activeTextColor: any;
            activeBgColor: string;
            activeTextDecoration: string;
            fontWeight: number;
            fontSize: string;
        };
        tocPanel: {
            width: string;
        };
        logo: {
            maxWidth: string;
            maxHeight: string;
            height: string;
            margin: string;
        };
        typography: {
            fontSize: string;
            lineHeight: string;
            fontWeightRegular: string;
            fontWeightBold: string;
            fontWeightLight: string;
            fontFamily: string;
            headings: {
                fontFamily: string;
                fontWeight: string;
            };
            fieldName: {
                fontSize: any;
                fontFamily: any;
                fontWeight: any;
            };
            heading1: {
                fontSize: string;
                fontWeight: string;
                fontFamily: any;
                lineHeight: any;
                color: any;
                capitalize: boolean;
                marginTop: string;
                marginBottom: string;
            };
            heading2: {
                fontSize: string;
                fontWeight: string;
                color: any;
                fontFamily: any;
                lineHeight: any;
                capitalize: boolean;
                marginTop: string;
                marginBottom: string;
            };
            heading3: {
                fontSize: string;
                fontWeight: string;
                color: any;
                fontFamily: any;
                lineHeight: any;
                capitalize: boolean;
                marginTop: string;
                marginBottom: string;
            };
            heading4: {};
            heading5: {};
            heading6: {};
            rightPanelHeading: {};
            code: {
                fontSize: string;
                fontFamily: string;
                fontWeight: any;
                color: string;
                backgroundColor: string;
                wrap: boolean;
            };
            links: {
                color: any;
                visited: any;
                hover: string;
                textDecoration: string;
            };
        };
        rightPanel: {
            showAtBreakpoint: string;
            backgroundColor: string;
            width: string;
            textColor: string;
            panelBackgroundColor: string;
            panelControlsBackgroundColor: string;
        };
        schema: {
            linesColor: any;
            defaultDetailsWidth: string;
            typeNameColor: any;
            typeTitleColor: any;
            requireLabelColor: string;
            labelsTextSize: string;
            nestingSpacing: string;
            nestedBackground: any;
            caretColor: any;
            caretSize: string;
        };
        codeBlock: {
            backgroundColor: any;
            copyButton: {
                visibleText: string;
                contrastText: string;
                background: string;
            };
            tokens: {};
        };
        layout: {
            showDarkRightPanel: boolean;
            stacked: {
                maxWidth: {
                    _: string;
                    small: string;
                    medium: string;
                    large: string;
                };
            };
            'three-panel': {
                maxWidth: {
                    _: string;
                    small: string;
                    medium: string;
                    large: string;
                };
            };
        };
    };
}>;
export declare function useOasDefinitionStore(definitionId: string): any;
export declare function useOasDefinition(definitionId: string): OpenAPIDefinition | null;
export default function MarkdownLayout(props: React.PropsWithChildren<MarkdownLayoutProps>): JSX.Element;
export declare function isTocEnabled(pageContext: any): any;
export declare function disableLastModified(data: MarkdownData): boolean;
export {};
