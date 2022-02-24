/// <reference types="react" />
import { UserMenuProps } from '../Menu/types';
export declare type VersionSwitcherProps = Required<Pick<UserMenuProps, 'apiVersionId' | 'apiVersions'>> & Pick<UserMenuProps, 'onVersionChange'>;
export default function VersionSwitcher(props: VersionSwitcherProps): JSX.Element;
