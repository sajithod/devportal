"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const image_attributes_1 = __importDefault(require("../image-attributes"));
class AttributeImage {
    constructor(node) {
        this.node = node;
        this.attributes = new image_attributes_1.default(node);
    }
    get width() {
        const defaultWidth = ['', '100%'];
        const value = this.node.value;
        return (value.match(/width: (\d*(px|%|vw))/) || defaultWidth)[1];
    }
    get data() {
        return Object.keys(this.attributes.dataAttributes).reduce((value, key) => key !== 'title'
            ? `${value} data-${key}="${this.attributes.dataAttributes[key]}"`
            : '', '');
    }
    get style() {
        let styleString = Object.keys(this.attributes.styleAttributes).reduce((style, key) => `${style}${key}: ${this.attributes.styleAttributes[key]};`, '');
        if (this.attributes.inline &&
            !this.attributes.styleAttributes.width &&
            !this.attributes.styleAttributes.height) {
            styleString += `width: ${this.width};`;
        }
        return styleString;
    }
}
exports.default = AttributeImage;
