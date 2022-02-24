export declare class ClipboardService {
    static isSupported(): boolean;
    static selectElement(element: HTMLDivElement | null): void;
    static deselect(): void;
    static copySelected(): boolean;
    static copyElement(element: HTMLDivElement | null): boolean;
    static copyCustom(text: string): boolean;
}
