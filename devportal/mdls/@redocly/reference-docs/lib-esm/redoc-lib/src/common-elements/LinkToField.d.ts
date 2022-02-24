import { PropsWithChildren } from 'react';
import { FieldModel } from '../services';
interface LinkToFieldProps {
    field: FieldModel;
    className?: string;
}
export declare const LinkToField: (props: PropsWithChildren<LinkToFieldProps>) => JSX.Element;
export declare const ShareLinkToField: import("styled-components").StyledComponent<(props: PropsWithChildren<LinkToFieldProps>) => JSX.Element, import("../../../services/extendTheme").ProTheme, {}, never>;
export {};
