"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const unist_util_visit_1 = __importDefault(require("unist-util-visit"));
const root_1 = __importDefault(require("./attribute-image/root"));
const wrapped_1 = __importDefault(require("./attribute-image/wrapped"));
const options = {
    styleAttributes: [],
    dataAttributes: false
};
const logMsg = (strings, ...expressions) => {
    const message = strings.reduce((msg, str, idx) => `${msg}${str}${expressions[idx] || ''}`, '');
    return `[gatsby-remark-image-attributes] ${message}`;
};
const applyOptions = ({ styleAttributes, dataAttributes = false }, reporter) => {
    if (styleAttributes) {
        reporter.warn(logMsg `The styleAttributes option is deprecated. The plugin uses all CSS properties.`);
    }
    options.dataAttributes = dataAttributes === true;
};
const isImageHtml = (node) => !!node.url && /<img/.test(node.value);
exports.default = ({ markdownAST, reporter }, userOptions) => {
    applyOptions(userOptions, reporter);
    const attributeImages = {
        root: [],
        wrapped: []
    };
    unist_util_visit_1.default(markdownAST, 'image', (node) => {
        const aimg = new root_1.default(node);
        if (aimg.attributes.length) {
            attributeImages.root.push(aimg);
        }
    });
    unist_util_visit_1.default(markdownAST, 'html', (node) => {
        if (isImageHtml(node)) {
            attributeImages.wrapped.push(new wrapped_1.default(node));
        }
    });
    return Promise.all([
        new Promise(resolve => resolve(attributeImages.root.map(attributeImage => attributeImage.mdastNode))),
        new Promise(resolve => resolve(attributeImages.wrapped.map(attributeImage => attributeImage.mdastNode)))
    ]);
};
