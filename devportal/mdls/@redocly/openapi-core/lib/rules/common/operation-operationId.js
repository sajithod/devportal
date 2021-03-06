"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OperationOperationId = void 0;
const utils_1 = require("../utils");
const OperationOperationId = () => {
    return {
        DefinitionRoot: {
            PathItem: {
                Operation(operation, ctx) {
                    utils_1.validateDefinedAndNonEmpty('operationId', operation, ctx);
                },
            },
        }
    };
};
exports.OperationOperationId = OperationOperationId;
