"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoEnumTypeMismatch = void 0;
const utils_1 = require("../utils");
const NoEnumTypeMismatch = () => {
    return {
        Schema(schema, { report, location }) {
            if (schema.enum && schema.type && !Array.isArray(schema.type)) {
                const typeMismatchedValues = schema.enum.filter((item) => !utils_1.matchesJsonSchemaType(item, schema.type, schema.nullable));
                for (const mismatchedValue of typeMismatchedValues) {
                    report({
                        message: `All values of \`enum\` field must be of the same type as the \`type\` field: expected "${schema.type}" but received "${utils_1.oasTypeOf(mismatchedValue)}".`,
                        location: location.child(['enum', schema.enum.indexOf(mismatchedValue)]),
                    });
                }
            }
            if (schema.enum && schema.type && Array.isArray(schema.type)) {
                const mismatchedResults = {};
                for (const enumValue of schema.enum) {
                    mismatchedResults[enumValue] = [];
                    for (const type of schema.type) {
                        const valid = utils_1.matchesJsonSchemaType(enumValue, type, schema.nullable);
                        if (!valid)
                            mismatchedResults[enumValue].push(type);
                    }
                    if (mismatchedResults[enumValue].length !== schema.type.length)
                        delete mismatchedResults[enumValue];
                }
                ;
                for (const mismatchedKey of Object.keys(mismatchedResults)) {
                    report({
                        message: `Enum value \`${mismatchedKey}\` must be of one type. Allowed types: \`${schema.type}\`.`,
                        location: location.child(['enum', schema.enum.indexOf(mismatchedKey)]),
                    });
                }
                ;
            }
        },
    };
};
exports.NoEnumTypeMismatch = NoEnumTypeMismatch;
