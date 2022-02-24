import type { SchemaModel } from '../../../redoc-lib';
import { UploadFileType } from '../../../models';
/**
 * Convert request body mime-type to accept value for file upload input in browser
 */
export declare function mimeTypeToAccept(mimeType: string): string | undefined;
export declare function isFileUploadMime(mimeType: string): boolean;
export declare function isMultipartFileUploadProperty(schema: SchemaModel): boolean;
export declare function isRootFileUpload(schema: SchemaModel | GenericObject, mimeType: string): boolean;
export declare function fileToBase64(file: File): Promise<string>;
export declare function getIsBase64({ format, contentEncoding, contentMediaType, }: SchemaModel | GenericObject): boolean;
export declare function getFileToUpload(rawFiles: FileList, schema: SchemaModel | GenericObject): Promise<UploadFileType>;
