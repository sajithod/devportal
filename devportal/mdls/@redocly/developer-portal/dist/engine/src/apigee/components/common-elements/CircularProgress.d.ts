/// <reference types="react" />
interface CircularProgressProps {
    size?: number;
    color?: 'contrast' | 'primary';
}
export default function CircularProgress(props: CircularProgressProps): JSX.Element;
export declare const StyledSpinner: import("styled-components").StyledComponent<"div", any, CircularProgressProps, never>;
export {};
