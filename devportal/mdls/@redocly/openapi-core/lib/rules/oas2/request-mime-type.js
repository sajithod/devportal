"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestMimeType = void 0;
const utils_1 = require("../../utils");
const RequestMimeType = ({ allowedValues }) => {
    return {
        DefinitionRoot(root, ctx) {
            utils_1.validateMimeType({ type: 'consumes', value: root }, ctx, allowedValues);
        },
        Operation: {
            leave(operation, ctx) {
                utils_1.validateMimeType({ type: 'consumes', value: operation }, ctx, allowedValues);
            },
        },
    };
};
exports.RequestMimeType = RequestMimeType;
