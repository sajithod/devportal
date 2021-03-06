"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoUnusedComponents = void 0;
const NoUnusedComponents = () => {
    let components = new Map();
    function registerComponent(location, name) {
        var _a;
        components.set(location.absolutePointer, {
            used: ((_a = components.get(location.absolutePointer)) === null || _a === void 0 ? void 0 : _a.used) || false,
            location,
            name,
        });
    }
    return {
        ref(ref, { type, resolve, key, location }) {
            if (['Schema', 'Header', 'Parameter', 'Response', 'Example', 'RequestBody'].includes(type.name)) {
                const resolvedRef = resolve(ref);
                if (!resolvedRef.location)
                    return;
                components.set(resolvedRef.location.absolutePointer, {
                    used: true,
                    name: key.toString(),
                    location,
                });
            }
        },
        DefinitionRoot: {
            leave(_, { report }) {
                components.forEach((usageInfo) => {
                    if (!usageInfo.used) {
                        report({
                            message: `Component: "${usageInfo.name}" is never used.`,
                            location: usageInfo.location.key(),
                        });
                    }
                });
            },
        },
        NamedSchemas: {
            Schema(schema, { location, key }) {
                if (!schema.allOf) {
                    // FIXME: find a better way to detect possible discriminator
                    registerComponent(location, key.toString());
                }
            },
        },
        NamedParameters: {
            Parameter(_parameter, { location, key }) {
                registerComponent(location, key.toString());
            },
        },
        NamedResponses: {
            Response(_response, { location, key }) {
                registerComponent(location, key.toString());
            },
        },
        NamedExamples: {
            Example(_example, { location, key }) {
                registerComponent(location, key.toString());
            },
        },
        NamedRequestBodies: {
            RequestBody(_requestBody, { location, key }) {
                registerComponent(location, key.toString());
            },
        },
        NamedHeaders: {
            Header(_header, { location, key }) {
                registerComponent(location, key.toString());
            },
        },
    };
};
exports.NoUnusedComponents = NoUnusedComponents;
