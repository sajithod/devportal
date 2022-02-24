declare const targets: {
    javascript: {
        info: {
            key: string;
            title: string;
            extname: string;
            default: string;
        };
        fetch: import("..").LanguageHandler<(import("../..").BasicLanguageOptions & {
            credentials?: "omit" | "same-origin" | "include" | undefined;
        }) | undefined>;
    };
    node: {
        info: {
            key: string;
            title: string;
            extname: string;
            default: string;
        };
        fetch: import("..").LanguageHandler<import("../..").BasicLanguageOptions | undefined>;
    };
    python: {
        info: {
            key: string;
            title: string;
            extname: string;
            default: string;
        };
        requests: import("..").LanguageHandler<import("../..").BasicLanguageOptions | undefined>;
    };
    shell: {
        info: {
            key: string;
            title: string;
            extname: string;
            default: string;
        };
        curl: import("..").LanguageHandler<(import("../..").BasicLanguageOptions & {
            binary?: boolean | undefined;
        }) | undefined>;
    };
    java8: {
        info: {
            key: string;
            title: string;
            extname: string;
            default: string;
        };
        apachehttp: import("..").LanguageHandler<import("../..").BasicLanguageOptions | undefined>;
    };
    java: {
        info: {
            key: string;
            title: string;
            extname: string;
            default: string;
        };
        httpclient: import("..").LanguageHandler<import("../..").BasicLanguageOptions | undefined>;
    };
    csharp: {
        info: {
            key: string;
            title: string;
            extname: string;
            default: string;
        };
        httpclient: import("..").LanguageHandler<import("../..").BasicLanguageOptions | undefined>;
    };
    go: {
        info: {
            key: string;
            title: string;
            extname: string;
            default: string;
        };
        native: import("..").LanguageHandler<import("../..").BasicLanguageOptions | undefined>;
    };
    php: {
        info: {
            key: string;
            title: string;
            extname: string;
            default: string;
        };
        curl: import("..").LanguageHandler<import("../..").BasicLanguageOptions | undefined>;
    };
    ruby: {
        info: {
            key: string;
            title: string;
            extname: string;
            default: string;
        };
        native: import("..").LanguageHandler<import("../..").BasicLanguageOptions | undefined>;
    };
};
export default targets;
