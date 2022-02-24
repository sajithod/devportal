"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decorators = exports.preprocessors = exports.rules = void 0;
const spec_1 = require("../common/spec");
const operation_2xx_response_1 = require("../common/operation-2xx-response");
const operation_4xx_response_1 = require("../common/operation-4xx-response");
const operation_operationId_unique_1 = require("../common/operation-operationId-unique");
const operation_parameters_unique_1 = require("../common/operation-parameters-unique");
const path_params_defined_1 = require("../common/path-params-defined");
const operation_tag_defined_1 = require("../common/operation-tag-defined");
const no_example_value_and_externalValue_1 = require("./no-example-value-and-externalValue");
const no_enum_type_mismatch_1 = require("../common/no-enum-type-mismatch");
const no_path_trailing_slash_1 = require("../common/no-path-trailing-slash");
const path_declaration_must_exist_1 = require("../common/path-declaration-must-exist");
const operation_operationId_url_safe_1 = require("../common/operation-operationId-url-safe");
const tags_alphabetical_1 = require("../common/tags-alphabetical");
const no_server_example_com_1 = require("./no-server-example.com");
const no_server_trailing_slash_1 = require("./no-server-trailing-slash");
const info_description_1 = require("../common/info-description");
const tag_description_1 = require("../common/tag-description");
const info_contact_1 = require("../common/info-contact");
const info_license_url_1 = require("../common/info-license-url");
const operation_description_1 = require("../common/operation-description");
const no_unused_components_1 = require("./no-unused-components");
const path_not_include_query_1 = require("../common/path-not-include-query");
const parameter_description_1 = require("../common/parameter-description");
const operation_singular_tag_1 = require("../common/operation-singular-tag");
const license_url_1 = require("../common/license-url");
const operation_security_defined_1 = require("../common/operation-security-defined");
const no_unresolved_refs_1 = require("../no-unresolved-refs");
const boolean_parameter_prefixes_1 = require("./boolean-parameter-prefixes");
const paths_kebab_case_1 = require("../common/paths-kebab-case");
const path_http_verbs_order_1 = require("../common/path-http-verbs-order");
const no_empty_servers_1 = require("./no-empty-servers");
const no_invalid_media_type_examples_1 = require("./no-invalid-media-type-examples");
const registry_dependencies_1 = require("../common/registry-dependencies");
const no_identical_paths_1 = require("../common/no-identical-paths");
const no_undefined_server_variable_1 = require("./no-undefined-server-variable");
const operation_operationId_1 = require("../common/operation-operationId");
const operation_summary_1 = require("../common/operation-summary");
const no_ambiguous_paths_1 = require("../common/no-ambiguous-paths");
const no_servers_empty_enum_1 = require("./no-servers-empty-enum");
const no_http_verbs_in_paths_1 = require("../common/no-http-verbs-in-paths");
const request_mime_type_1 = require("./request-mime-type");
const response_mime_type_1 = require("./response-mime-type");
const path_segment_plural_1 = require("../common/path-segment-plural");
const operation_description_override_1 = require("../common/operation-description-override");
const tag_description_override_1 = require("../common/tag-description-override");
const info_description_override_1 = require("../common/info-description-override");
const path_excludes_patterns_1 = require("../common/path-excludes-patterns");
exports.rules = {
    spec: spec_1.OasSpec,
    'info-description': info_description_1.InfoDescription,
    'info-contact': info_contact_1.InfoContact,
    'info-license': info_license_url_1.InfoLicense,
    'info-license-url': license_url_1.InfoLicenseUrl,
    'operation-2xx-response': operation_2xx_response_1.Operation2xxResponse,
    'operation-4xx-response': operation_4xx_response_1.Operation4xxResponse,
    'operation-operationId-unique': operation_operationId_unique_1.OperationIdUnique,
    'operation-parameters-unique': operation_parameters_unique_1.OperationParametersUnique,
    'path-parameters-defined': path_params_defined_1.PathParamsDefined,
    'operation-tag-defined': operation_tag_defined_1.OperationTagDefined,
    'no-example-value-and-externalValue': no_example_value_and_externalValue_1.NoExampleValueAndExternalValue,
    'no-enum-type-mismatch': no_enum_type_mismatch_1.NoEnumTypeMismatch,
    'no-path-trailing-slash': no_path_trailing_slash_1.NoPathTrailingSlash,
    'no-empty-servers': no_empty_servers_1.NoEmptyServers,
    'path-declaration-must-exist': path_declaration_must_exist_1.PathDeclarationMustExist,
    'operation-operationId-url-safe': operation_operationId_url_safe_1.OperationIdUrlSafe,
    'operation-operationId': operation_operationId_1.OperationOperationId,
    'operation-summary': operation_summary_1.OperationSummary,
    'tags-alphabetical': tags_alphabetical_1.TagsAlphabetical,
    'no-server-example.com': no_server_example_com_1.NoServerExample,
    'no-server-trailing-slash': no_server_trailing_slash_1.NoServerTrailingSlash,
    'tag-description': tag_description_1.TagDescription,
    'operation-description': operation_description_1.OperationDescription,
    'no-unused-components': no_unused_components_1.NoUnusedComponents,
    'path-not-include-query': path_not_include_query_1.PathNotIncludeQuery,
    'path-params-defined': path_params_defined_1.PathParamsDefined,
    'parameter-description': parameter_description_1.ParameterDescription,
    'operation-singular-tag': operation_singular_tag_1.OperationSingularTag,
    'operation-security-defined': operation_security_defined_1.OperationSecurityDefined,
    'no-unresolved-refs': no_unresolved_refs_1.NoUnresolvedRefs,
    'paths-kebab-case': paths_kebab_case_1.PathsKebabCase,
    'boolean-parameter-prefixes': boolean_parameter_prefixes_1.BooleanParameterPrefixes,
    'path-http-verbs-order': path_http_verbs_order_1.PathHttpVerbsOrder,
    'no-invalid-media-type-examples': no_invalid_media_type_examples_1.ValidContentExamples,
    'no-identical-paths': no_identical_paths_1.NoIdenticalPaths,
    'no-ambiguous-paths': no_ambiguous_paths_1.NoAmbiguousPaths,
    'no-undefined-server-variable': no_undefined_server_variable_1.NoUndefinedServerVariable,
    'no-servers-empty-enum': no_servers_empty_enum_1.NoEmptyEnumServers,
    'no-http-verbs-in-paths': no_http_verbs_in_paths_1.NoHttpVerbsInPaths,
    'path-excludes-patterns': path_excludes_patterns_1.PathExcludesPatterns,
    'request-mime-type': request_mime_type_1.RequestMimeType,
    'response-mime-type': response_mime_type_1.ResponseMimeType,
    'path-segment-plural': path_segment_plural_1.PathSegmentPlural,
};
exports.preprocessors = {};
exports.decorators = {
    'registry-dependencies': registry_dependencies_1.RegistryDependencies,
    'operation-description-override': operation_description_override_1.OperationDescriptionOverride,
    'tag-description-override': tag_description_override_1.TagDescriptionOverride,
    'info-description-override': info_description_override_1.InfoDescriptionOverride,
};
