"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isNamedType = exports.normalizeTypes = exports.mapOf = exports.listOf = void 0;
function listOf(typeName) {
    return {
        name: typeName + '_List',
        properties: {},
        items: typeName,
    };
}
exports.listOf = listOf;
function mapOf(typeName) {
    return {
        name: typeName + '_Map',
        properties: {},
        additionalProperties: () => typeName,
    };
}
exports.mapOf = mapOf;
function normalizeTypes(types, options = {}) {
    const normalizedTypes = {};
    for (const typeName of Object.keys(types)) {
        normalizedTypes[typeName] = Object.assign(Object.assign({}, types[typeName]), { name: typeName });
    }
    for (const type of Object.values(normalizedTypes)) {
        normalizeType(type);
    }
    return normalizedTypes;
    function normalizeType(type) {
        if (type.additionalProperties) {
            type.additionalProperties = resolveType(type.additionalProperties);
        }
        if (type.items) {
            type.items = resolveType(type.items);
        }
        if (type.properties) {
            const mappedProps = {};
            for (const [propName, prop] of Object.entries(type.properties)) {
                mappedProps[propName] = resolveType(prop);
                if (options.doNotResolveExamples && prop && prop.isExample) {
                    mappedProps[propName] = Object.assign(Object.assign({}, prop), { resolvable: false });
                }
            }
            type.properties = mappedProps;
        }
    }
    // typings are painful here...
    function resolveType(type) {
        if (typeof type === 'string') {
            if (!normalizedTypes[type]) {
                throw new Error(`Unknown type name found: ${type}`);
            }
            return normalizedTypes[type];
        }
        else if (typeof type === 'function') {
            return (value, key) => {
                return resolveType(type(value, key));
            };
        }
        else if (type && type.name) {
            type = Object.assign({}, type);
            normalizeType(type);
            return type;
        }
        else if (type && type.directResolveAs) {
            return Object.assign(Object.assign({}, type), { directResolveAs: resolveType(type.directResolveAs) });
        }
        else {
            return type;
        }
    }
}
exports.normalizeTypes = normalizeTypes;
function isNamedType(t) {
    return typeof (t === null || t === void 0 ? void 0 : t.name) === 'string';
}
exports.isNamedType = isNamedType;
