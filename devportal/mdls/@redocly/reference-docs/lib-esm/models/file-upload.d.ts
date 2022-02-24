export declare enum DefinitionTypes {
    STRING = "string",
    ARRAY = "array",
    OBJECT = "object"
}
export declare enum FileUploadFormats {
    BYTE = "byte",
    BASE64 = "base64",
    BINARY = "binary"
}
export declare enum MediaTypes {
    OCTET_STREAM = "application/octet-stream",
    MULTIPART = "multipart/form-data",
    URL_ENCODED = "application/x-www-form-urlencoded"
}
export declare type UploadFileType = File | File[] | string | string[];
