import * as React from 'react';
import { Location } from 'history';
export declare function useNavbarHeight(location: Location): number;
export declare function useFullHeight(element: React.MutableRefObject<HTMLElement | null>): void;
export declare function useScrollLock(lock: boolean): void;
