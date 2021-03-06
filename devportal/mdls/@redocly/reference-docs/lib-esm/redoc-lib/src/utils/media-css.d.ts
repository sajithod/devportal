import { MediaValue } from '../theme';
export declare const ZERO_BREAKPOINT = "_";
export declare function mediaMap<T extends string | number>(breakpoints: {
    [size: string]: string;
}, values: MediaValue<T>[], mediaMapper: MediaValue<(...values: T[]) => T>): MediaValue<T>;
export declare const mediaCSS: (args: GenericObject) => (props?: GenericObject) => GenericObject;
