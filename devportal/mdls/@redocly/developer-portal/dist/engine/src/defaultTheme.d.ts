export declare const defaultTheme: {
    spacing: {
        unit: number;
        sectionHorizontal: ({ spacing }: {
            spacing: any;
        }) => number;
        sectionVertical: ({ spacing }: {
            spacing: any;
        }) => number;
    };
    components: {
        buttons: {
            borderRadius: ({ shape }: {
                shape: any;
            }) => any;
            hoverStyle: string;
            fontWeight: ({ typography }: {
                typography: any;
            }) => any;
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
            iconColor: ({ colors }: {
                colors: any;
            }) => any;
        };
        alert: {
            marginHorizontal: string;
            marginVertical: ({ spacing }: {
                spacing: any;
            }) => string;
            paddingHorizontal: ({ spacing }: {
                spacing: any;
            }) => string;
            paddingVertical: ({ spacing }: {
                spacing: any;
            }) => string;
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
                    textColor: ({ colors }: {
                        colors: any;
                    }) => any;
                    headingColor: ({ colors }: {
                        colors: any;
                    }) => any;
                    iconColor: ({ colors }: {
                        colors: any;
                    }) => any;
                    icon: string;
                };
                attention: {
                    backgroundColor: ({ colors }: {
                        colors: any;
                    }) => any;
                    textColor: ({ colors }: {
                        colors: any;
                    }) => any;
                    headingColor: ({ colors }: {
                        colors: any;
                    }) => any;
                    iconColor: ({ colors }: {
                        colors: any;
                    }) => any;
                    icon: string;
                };
                warning: {
                    backgroundColor: ({ colors }: {
                        colors: any;
                    }) => any;
                    textColor: ({ colors }: {
                        colors: any;
                    }) => any;
                    headingColor: ({ colors }: {
                        colors: any;
                    }) => any;
                    iconColor: ({ colors }: {
                        colors: any;
                    }) => any;
                    icon: string;
                };
                danger: {
                    backgroundColor: ({ colors }: {
                        colors: any;
                    }) => any;
                    textColor: ({ colors }: {
                        colors: any;
                    }) => any;
                    headingColor: ({ colors }: {
                        colors: any;
                    }) => any;
                    iconColor: ({ colors }: {
                        colors: any;
                    }) => any;
                    icon: string;
                };
                success: {
                    backgroundColor: ({ colors }: {
                        colors: any;
                    }) => any;
                    textColor: ({ colors }: {
                        colors: any;
                    }) => any;
                    headingColor: ({ colors }: {
                        colors: any;
                    }) => any;
                    iconColor: ({ colors }: {
                        colors: any;
                    }) => any;
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
            paddingHorizontal: ({ spacing }: {
                spacing: any;
            }) => string;
            paddingVertical: string;
            backgroundColor: string;
            borderRadius: string;
            borderLeft: ({ colors }: {
                colors: any;
            }) => string;
            color: ({ colors }: {
                colors: any;
            }) => any;
        };
        contentWrapper: {
            maxWidth: string;
            paddingHorizontal: string;
            paddingVertical: string;
        };
        login: {
            avatarBorderRadius: ({ navbar }: {
                navbar: any;
            }) => any;
            avatarBgColor: string;
        };
        layoutControls: {
            top: string;
        };
        httpBadges: {
            borderRadius: string;
            fontFamily: ({ typography }: {
                typography: any;
            }) => any;
            fontWeight: ({ typography }: {
                typography: any;
            }) => any;
            color: ({ colors }: {
                colors: any;
            }) => any;
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
            light: ({ colors }: {
                colors: any;
            }) => string;
            dark: ({ colors }: {
                colors: any;
            }) => string;
            contrastText: ({ colors }: {
                colors: any;
            }) => string;
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
            light: ({ colors }: {
                colors: any;
            }) => string;
            dark: ({ colors }: {
                colors: any;
            }) => string;
            contrastText: ({ colors }: {
                colors: any;
            }) => string;
        };
        error: {
            main: string;
            light: ({ colors }: {
                colors: any;
            }) => string;
            dark: ({ colors }: {
                colors: any;
            }) => string;
            contrastText: ({ colors }: {
                colors: any;
            }) => string;
        };
        warning: {
            main: string;
            light: ({ colors }: {
                colors: any;
            }) => string;
            dark: ({ colors }: {
                colors: any;
            }) => string;
            contrastText: ({ colors }: {
                colors: any;
            }) => string;
        };
        info: {
            main: string;
            light: ({ colors }: {
                colors: any;
            }) => string;
            dark: ({ colors }: {
                colors: any;
            }) => string;
            contrastText: ({ colors }: {
                colors: any;
            }) => string;
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
                color: ({ colors }: {
                    colors: any;
                }) => any;
                backgroundColor: ({ colors }: {
                    colors: any;
                }) => string;
            };
            error: {
                color: ({ colors }: {
                    colors: any;
                }) => any;
                backgroundColor: ({ colors }: {
                    colors: any;
                }) => string;
            };
            redirect: {
                color: ({ colors }: {
                    colors: any;
                }) => any;
                backgroundColor: ({ colors }: {
                    colors: any;
                }) => string;
            };
            info: {
                color: ({ colors }: {
                    colors: any;
                }) => any;
                backgroundColor: ({ colors }: {
                    colors: any;
                }) => string;
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
            main: ({ colors }: {
                colors: any;
            }) => any;
            gradient: ({ colors }: {
                colors: any;
            }) => string;
            contrastText: ({ colors }: {
                colors: any;
            }) => any;
        };
        footer: {
            main: ({ colors }: {
                colors: any;
            }) => any;
            contrastText: ({ colors }: {
                colors: any;
            }) => any;
        };
    };
    sidebar: {
        showAtBreakpoint: string;
        backgroundColor: string;
        width: string;
        textColor: string;
        textColorSecondary: string;
        activeTextColor: ({ sidebar }: {
            sidebar: any;
        }) => any;
        activeBgColor: string;
        separatorLineColor: string;
        rightLineColor: string;
        separatorLabelColor: ({ sidebar }: {
            sidebar: any;
        }) => any;
        caretColor: ({ sidebar }: {
            sidebar: any;
        }) => any;
        caretSize: ({ sidebar }: {
            sidebar: any;
        }) => any;
        spacing: {
            unit: number;
            paddingHorizontal: ({ sidebar }: {
                sidebar: any;
            }) => any;
            paddingVertical: ({ sidebar }: {
                sidebar: any;
            }) => any;
            offsetTop: ({ sidebar }: {
                sidebar: any;
            }) => number;
            offsetLeft: ({ sidebar }: {
                sidebar: any;
            }) => number;
            offsetNesting: ({ sidebar }: {
                sidebar: any;
            }) => number;
        };
        borderRadius: string;
        fontFamily: ({ typography }: {
            typography: any;
        }) => any;
        fontSize: ({ typography }: {
            typography: any;
        }) => any;
    };
    navbar: {
        borderRadius: string;
        marginHorizontal: string;
        marginVertical: string;
        activeTextColor: ({ colors }: {
            colors: any;
        }) => any;
        activeBgColor: ({ colors }: {
            colors: any;
        }) => string;
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
            fontSize: ({ typography }: {
                typography: any;
            }) => any;
            fontFamily: ({ typography }: {
                typography: any;
            }) => any;
            fontWeight: ({ typography }: {
                typography: any;
            }) => any;
        };
        heading1: {
            fontSize: string;
            fontWeight: string;
            fontFamily: ({ typography }: {
                typography: any;
            }) => any;
            lineHeight: ({ typography }: {
                typography: any;
            }) => any;
            color: ({ colors }: {
                colors: any;
            }) => any;
            capitalize: boolean;
            marginTop: string;
            marginBottom: string;
        };
        heading2: {
            fontSize: string;
            fontWeight: string;
            color: ({ colors }: {
                colors: any;
            }) => any;
            fontFamily: ({ typography }: {
                typography: any;
            }) => any;
            lineHeight: ({ typography }: {
                typography: any;
            }) => any;
            capitalize: boolean;
            marginTop: string;
            marginBottom: string;
        };
        heading3: {
            fontSize: string;
            fontWeight: string;
            color: ({ colors }: {
                colors: any;
            }) => any;
            fontFamily: ({ typography }: {
                typography: any;
            }) => any;
            lineHeight: ({ typography }: {
                typography: any;
            }) => any;
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
            fontWeight: ({ typography }: {
                typography: any;
            }) => any;
            color: string;
            backgroundColor: string;
            wrap: boolean;
        };
        links: {
            color: ({ colors }: {
                colors: any;
            }) => any;
            visited: ({ typography }: {
                typography: any;
            }) => any;
            hover: ({ typography }: {
                typography: any;
            }) => string;
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
        linesColor: (theme: any) => any;
        defaultDetailsWidth: string;
        typeNameColor: (theme: any) => any;
        typeTitleColor: (theme: any) => any;
        requireLabelColor: string;
        labelsTextSize: string;
        nestingSpacing: string;
        nestedBackground: (theme: any) => any;
        caretColor: ({ colors }: {
            colors: any;
        }) => any;
        caretSize: string;
    };
    codeBlock: {
        backgroundColor: ({ rightPanel }: {
            rightPanel: any;
        }) => any;
        copyButton: {
            visibleText: ({ codeBlock }: {
                codeBlock: any;
            }) => string;
            contrastText: ({ codeBlock }: {
                codeBlock: any;
            }) => string;
            background: ({ codeBlock }: {
                codeBlock: any;
            }) => string;
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
