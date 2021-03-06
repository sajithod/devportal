"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestMimeType = void 0;
const utils_1 = require("../../utils");
const RequestMimeType = ({ allowedValues }) => {
    return {
        PathMap: {
            RequestBody: {
                leave(requestBody, ctx) {
                    utils_1.validateMimeTypeOAS3({ type: 'consumes', value: requestBody }, ctx, allowedValues);
                },
            },
            Callback: {
                RequestBody() { },
                Response: {
                    leave(response, ctx) {
                        utils_1.validateMimeTypeOAS3({ type: 'consumes', value: response }, ctx, allowedValues);
                    },
                },
            },
        },
        WebhooksMap: {
            Response: {
                leave(response, ctx) {
                    utils_1.validateMimeTypeOAS3({ type: 'consumes', value: response }, ctx, allowedValues);
                },
            },
        },
    };
};
exports.RequestMimeType = RequestMimeType;
