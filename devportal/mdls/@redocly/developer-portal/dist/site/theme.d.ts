export declare const theme: {
    spacing: {
        unit: number;
        sectionHorizontal: ({ spacing }: {
            spacing: any;
        }) => number;
        sectionVertical: ({ spacing }: {
            spacing: any;
        }) => number;
    };
    navbar: {
        fontSize: string;
    };
    sidebar: {
        spacing: {};
        topOffset: number;
        leftOffset: number;
    };
    breakpoints: {
        small: string;
        medium: string;
        large: string;
    };
    colors: {
        background: string;
        navbar: {
            gradient: ({ colors }: {
                colors: any;
            }) => string;
        };
        primary: {
            main: string;
            contrastText: ({ colors }: {
                colors: any;
            }) => string;
        };
        text: {};
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
        };
    };
    rightPanel: {
        backgroundColor: string;
        width: string;
    };
    schema: {
        nestedBackground: string;
    };
};
