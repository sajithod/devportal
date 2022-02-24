declare const defaultTheme: ThemeInterface;
export default defaultTheme;
export declare function resolveTheme(theme: ThemeInterface): ResolvedThemeInterface;
export interface ColorSetting {
    main: string;
    light: string;
    dark: string;
    contrastText: string;
}
export interface ButtonSizeSetting {
    padding: string;
    fontSize: string;
    minWidth: string;
}
export interface HTTPResponseColors {
    color: string;
    borderColor: string;
    backgroundColor: string;
    tabTextColor: string;
}
export declare type MediaValue<T = string> = T | {
    [size: string]: T;
};
export interface FontSettings {
    fontSize: MediaValue;
    fontWeight: string;
    fontFamily: MediaValue;
    lineHeight: MediaValue;
    color: string;
}
export interface ResolvedThemeInterface {
    spacing: {
        unit: number;
        sectionHorizontal: number;
        sectionVertical: number;
    };
    breakpoints: {
        small: string;
        medium: string;
        large: string;
    } & {
        [size: string]: string;
    };
    mediaQueries: {
        print: string;
        small?: string;
        medium?: string;
        large?: string;
    };
    colors: {
        tonalOffset: number;
        primary: ColorSetting;
        secondary: ColorSetting;
        accent: ColorSetting;
        success: ColorSetting;
        warning: ColorSetting;
        error: ColorSetting;
        border: {
            light: string;
            dark: string;
        };
        text: {
            primary: string;
            secondary: string;
            light: string;
        };
        responses: {
            success: HTTPResponseColors;
            error: HTTPResponseColors;
            redirect: HTTPResponseColors;
            info: HTTPResponseColors;
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
    };
    schema: {
        caretSize: string;
        caretColor: string;
        linesColor: string;
        defaultDetailsWidth: string;
        typeNameColor: string;
        typeTitleColor: string;
        requireLabelColor: string;
        labelsTextSize: string;
        nestingSpacing: string;
        nestedBackground: string;
    };
    typography: {
        fontSize: MediaValue;
        lineHeight: MediaValue;
        fontWeightLight: string;
        fontWeightRegular: string;
        fontWeightBold: string;
        fontFamily: MediaValue;
        fieldName: {
            fontSize: string;
            fontFamily: string;
            fontWeight: string;
        };
        smoothing: string;
        optimizeSpeed: boolean;
        code: FontSettings & {
            backgroundColor: string;
            wrap: boolean;
        };
        headings: {
            fontFamily: MediaValue;
            fontWeight: string;
            lineHeight: MediaValue;
        };
        links: {
            color: string;
            visited: string;
            hover: string;
            textDecoration: string;
        };
    };
    sidebar: {
        showAtBreakpoint: string;
        width: string;
        backgroundColor: string;
        rightLineColor: string;
        textColor: string;
        activeTextColor: string;
        borderRadius: string;
        activeBgColor: string;
        separatorLabelColor: string;
        separatorLineColor: string;
        fontFamily: string;
        fontSize: string;
        caretSize: number;
        caretColor: string;
        spacing: {
            unit: number;
            paddingHorizontal: number;
            paddingVertical: number;
            offsetTop: number;
            offsetLeft: number;
            offsetNesting: number;
        };
    };
    logo: {
        maxHeight: string;
        maxWidth: string;
        gutter: string;
    };
    components: {
        buttons: {
            borderRadius: string;
            hoverStyle: string;
            fontWeight: string;
            boxShadow: string;
            hoverBoxShadow: string;
            fontFamily: string;
            sizes: {
                small: ButtonSizeSetting;
                medium: ButtonSizeSetting;
                large: ButtonSizeSetting;
                xlarge: ButtonSizeSetting;
                [k: string]: ButtonSizeSetting;
            };
        };
        panels: {
            borderRadius: string;
            backgroundColor: string;
        };
        layoutControls: {
            top: string;
            width: string;
            height: string;
        };
        httpBadges: {
            borderRadius: string;
            fontWeight: string;
            fontFamily: MediaValue;
            color: string;
            sizes: {
                small: {
                    fontSize: MediaValue;
                    lineHeight: MediaValue;
                };
                medium: {
                    fontSize: MediaValue;
                    lineHeight: MediaValue;
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
    rightPanel: {
        showAtBreakpoint: string;
        backgroundColor: string;
        panelBackgroundColor: string;
        panelControlsBackgroundColor: string;
        textColor: string;
        width: MediaValue;
    };
    codeBlock: {
        backgroundColor: string;
    };
    layout: {
        showDarkRightPanel?: boolean;
        'three-panel': {
            middlePanelMaxWidth: MediaValue;
            maxWidth: MediaValue;
        };
        stacked: {
            maxWidth: MediaValue;
        };
    };
    shape: {
        borderRadius: string;
    };
    extensionsHook?: (name: string, props: any) => string;
}
export declare type primitive = string | number | boolean | undefined | null;
export declare type AdvancedThemeDeep<T> = T extends primitive ? T | ((theme: ResolvedThemeInterface) => MediaValue<T>) : AdvancedThemeObject<T>;
export declare type AdvancedThemeObject<T> = {
    [P in keyof T]?: AdvancedThemeDeep<T[P]>;
};
export declare type ThemeInterface = AdvancedThemeObject<ResolvedThemeInterface>;
