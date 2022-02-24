"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const attribute_image_1 = __importDefault(require("./attribute-image"));
class WrappedAttributeImage extends attribute_image_1.default {
    constructor(node) {
        super(node);
    }
    get html() {
        const value = this.node.value
            .replace(/<img[^>]*/, `$& ${this.data}`)
            .replace(/title=".*?"/, `title="${this.node.title || ''}"`);
        return `<span class="gatsby-img-attributes" style="display:${this.attributes.inline ? 'inline-block' : 'block'}; ${this.style}">${value}</span>`;
    }
    get mdastNode() {
        this.node.title = this.attributes.dataAttributes.title || this.node.title;
        if (this.attributes.length && this.node.title.startsWith('#')) {
            this.node.title = null;
        }
        this.node.type = 'html';
        this.node.value = this.html;
        return this.node;
    }
}
exports.default = WrappedAttributeImage;
