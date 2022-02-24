/// <reference types="react" />
import { LicenseInfo } from '../services/check';
export interface LicenseCheckProps {
    l: Promise<LicenseInfo>;
}
export interface LicenseCheckState {
    m: string | null;
    exp: number;
    local: boolean;
}
export declare const Overlay: ({ l }: LicenseCheckProps) => JSX.Element | null;
