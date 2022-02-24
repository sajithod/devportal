/// <reference types="react" />
import { DropdownProps } from '../../common-elements/dropdown';
import { MediaContentModel, MediaTypeModel, SchemaModel } from '../../services/models';
export interface MediaTypeChildProps {
    schema: SchemaModel;
    mime?: string;
}
export interface MediaTypesSwitchProps {
    content?: MediaContentModel;
    withLabel?: boolean;
    renderDropdown: (props: DropdownProps) => JSX.Element | null;
    children: (activeMime: MediaTypeModel) => JSX.Element;
}
export declare const MediaTypesSwitch: (props: MediaTypesSwitchProps) => JSX.Element | null;
