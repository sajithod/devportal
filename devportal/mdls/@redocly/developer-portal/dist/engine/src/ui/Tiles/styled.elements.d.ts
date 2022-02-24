export declare type TextAlign = 'left' | 'right' | 'center' | 'justify';
export declare const TileHeader: import("styled-components").StyledComponent<"h3", {
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
}, {
    color?: string;
    align?: TextAlign;
}, never>;
export declare const TileText: import("styled-components").StyledComponent<"span", {
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
}, {
    color?: string;
    align?: TextAlign;
}, never>;
