/// <reference types="react" />
import { DropdownOption } from '../redoc-lib';
import { VersionedSpecStore } from '../services/VersionedSpecStore';
export interface VersionSwitcherProps {
    onChange: (o: DropdownOption) => void;
    spec: VersionedSpecStore;
}
export declare const VersionSwitcher: ({ spec, onChange }: VersionSwitcherProps) => JSX.Element;
