"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const css_props_json_1 = __importDefault(require("./css-props.json"));
class ImageAttributes {
    constructor(node) {
        var _a, _b;
        this.attributes = {};
        this.styleAttributes = {};
        this.dataAttributes = {};
        this.parse(node);
        this.categorizeAttributes();
        this.inline = (((_b = (_a = node.position) === null || _a === void 0 ? void 0 : _a.start) === null || _b === void 0 ? void 0 : _b.column) || 0) > 1;
    }
    categorizeAttributes() {
        this.dataAttributes = {};
        this.styleAttributes = {};
        for (const attributeKey in this.attributes) {
            if (css_props_json_1.default.includes(attributeKey)) {
                this.styleAttributes[attributeKey] = this.attributes[attributeKey];
            }
            else {
                this.dataAttributes[attributeKey] = this.attributes[attributeKey];
            }
        }
        return this;
    }
    parse(node) {
        const rxp = /^#(.*?)=(.*?);?/;
        const title = node.title ? node.title.trim() : null;
        if (!title || !rxp.test(title)) {
            return this;
        }
        this.attributes = node.title
            .slice(1)
            .split(';')
            .reduce((attrs, attr) => {
            const [key, val] = attr.split('=');
            if (!val || !key)
                return attrs;
            return {
                ...attrs,
                [key]: val
            };
        }, {});
        return this;
    }
    get length() {
        return Object.keys(this.attributes).length;
    }
}
exports.default = ImageAttributes;
