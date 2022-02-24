import { RedocNormalizedOptions } from './RedocNormalizedOptions';
export declare class ScrollService {
    private options;
    private readonly _scrollParent;
    private _emitter;
    private _prevOffsetY;
    constructor(options: RedocNormalizedOptions);
    set prevOffsetY(prevOffsetY: number);
    bind(): void;
    dispose(): void;
    scrollY(): number;
    isElementBellow(el: Element | null): boolean | void;
    isElementAbove(el: Element | null): boolean | void;
    subscribe(cb: (...args: any[]) => void): () => void;
    scrollIntoView(element: Element | null, options?: ScrollIntoViewOptions): void;
    scrollIntoViewBySelector(selector: string, options?: ScrollIntoViewOptions): void;
    handleScroll(): void;
}
