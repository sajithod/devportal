import * as React from 'react';
import type { SchemaModel } from '../../../redoc-lib/src/services/models/Schema';
export interface FileUploadProps {
    schema: SchemaModel | GenericObject;
    contentName: string;
    onChange(string: any, UploadFileType: any): void;
    name: string;
}
export declare const FileUpload: React.ForwardRefExoticComponent<React.InputHTMLAttributes<HTMLInputElement> & FileUploadProps & React.RefAttributes<HTMLInputElement>>;
