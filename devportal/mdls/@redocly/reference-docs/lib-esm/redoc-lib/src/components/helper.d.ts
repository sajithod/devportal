/// <reference types="react" />
import { HookConfig } from '../services/RedocNormalizedOptions';
export declare function RenderHook<T>(props: {
    Hook?: HookConfig<T>;
    props: T;
}): JSX.Element | null;
