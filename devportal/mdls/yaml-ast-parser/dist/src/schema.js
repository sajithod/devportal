'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var common = require("./common");
var YAMLException = require("./exception");
var type_1 = require("./type");
function compileList(schema, name, result) {
    var exclude = [];
    schema.include.forEach(function (includedSchema) {
        result = compileList(includedSchema, name, result);
    });
    schema[name].forEach(function (currentType) {
        result.forEach(function (previousType, previousIndex) {
            if (previousType.tag === currentType.tag) {
                exclude.push(previousIndex);
            }
        });
        result.push(currentType);
    });
    return result.filter(function (type, index) {
        return -1 === exclude.indexOf(index);
    });
}
function compileMap() {
    var result = {}, index, length;
    function collectType(type) {
        result[type.tag] = type;
    }
    for (index = 0, length = arguments.length; index < length; index += 1) {
        arguments[index].forEach(collectType);
    }
    return result;
}
var Schema = (function () {
    function Schema(definition) {
        this.include = definition.include || [];
        this.implicit = definition.implicit || [];
        this.explicit = definition.explicit || [];
        this.implicit.forEach(function (type) {
            if (type.loadKind && 'scalar' !== type.loadKind) {
                throw new YAMLException('There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.');
            }
        });
        this.compiledImplicit = compileList(this, 'implicit', []);
        this.compiledExplicit = compileList(this, 'explicit', []);
        this.compiledTypeMap = compileMap(this.compiledImplicit, this.compiledExplicit);
    }
    Schema.DEFAULT = null;
    Schema.create = function createSchema() {
        var schemas, types;
        switch (arguments.length) {
            case 1:
                schemas = Schema.DEFAULT;
                types = arguments[0];
                break;
            case 2:
                schemas = arguments[0];
                types = arguments[1];
                break;
            default:
                throw new YAMLException('Wrong number of arguments for Schema.create function');
        }
        schemas = common.toArray(schemas);
        types = common.toArray(types);
        if (!schemas.every(function (schema) { return schema instanceof Schema; })) {
            throw new YAMLException('Specified list of super schemas (or a single Schema object) contains a non-Schema object.');
        }
        if (!types.every(function (type) { return type instanceof type_1.Type; })) {
            throw new YAMLException('Specified list of YAML types (or a single Type object) contains a non-Type object.');
        }
        return new Schema({
            include: schemas,
            explicit: types
        });
    };
    return Schema;
}());
exports.Schema = Schema;
//# sourceMappingURL=schema.js.map