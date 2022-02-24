"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const attribute_image_1 = __importDefault(require("./attribute-image"));
class RootAttributeImage extends attribute_image_1.default {
    constructor(node) {
        super(node);
    }
    get html() {
        return `<img src="${this.node.url}" class="gatsby-img-attributes" style="${this.style || 'width: 100%;'}" alt="${this.node.alt}" title="${this.node.title || ''}"${this.data}/>`;
    }
    get mdastNode() {
        this.node.title =
            this.attributes.dataAttributes.title || this.node.title || '';
        if (this.attributes.length && this.node.title.startsWith('#')) {
            this.node.title = null;
        }
        this.node.type = 'html';
        this.node.value = this.html;
        return this.node;
    }
}
exports.default = RootAttributeImage;
