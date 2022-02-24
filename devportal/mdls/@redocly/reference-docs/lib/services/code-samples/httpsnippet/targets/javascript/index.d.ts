declare const _default: {
    info: {
        key: string;
        title: string;
        extname: string;
        default: string;
    };
    fetch: import("../..").LanguageHandler<(import("../../..").BasicLanguageOptions & {
        credentials?: "omit" | "same-origin" | "include" | undefined;
    }) | undefined>;
};
export default _default;
