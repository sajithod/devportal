import { IMenuItem, ScrollService, HistoryService, MenuItemType, SchemaModel, SpecStore } from '../redoc-lib';
import { RedocProNormalizedOptions } from './ProStore';
import { VersionedSpecStore } from './VersionedSpecStore';
export declare type ExtendedMenuItem = Omit<IMenuItem, 'type'> & {
    type: MenuItemType | 'spec';
    linkable?: boolean;
    href?: string;
};
/**
 * Stores all side-menu related information
 */
export declare class ProMenu {
    definition: SpecStore | VersionedSpecStore;
    scroll: ScrollService;
    options: RedocProNormalizedOptions;
    history: HistoryService;
    /**
     * Statically try update scroll position
     * Used before hydrating from server-side rendered html to scroll page faster
     */
    static updateOnHistory(id: string | undefined, scroll: ScrollService): void;
    flatItems: (ExtendedMenuItem & IMenuItem)[];
    items: (ExtendedMenuItem & IMenuItem)[];
    activeRenderItemIdx: number;
    renderItems: ExtendedMenuItem[];
    /**
     * active item absolute index (when flattened). -1 means nothing is selected
     */
    activeItemIdx: number;
    /**
     * whether sidebar with menu is opened or not
     */
    sideBarOpened: boolean;
    private _unsubscribe;
    private _hashUnsubscribe;
    /**
     *
     * @param definition [SpecStore](#SpecStore) which contains page content structure
     * @param scroll scroll service instance used by this menu
     * @param options normalized options
     * @param history
     */
    constructor(definition: SpecStore | VersionedSpecStore, scroll: ScrollService, options: RedocProNormalizedOptions, history: HistoryService);
    subscribe(): void;
    toggleSidebar(): void;
    closeSidebar(): void;
    /**
     * get section/operation DOM Node related to the item or null if it doesn't exist
     * @param idx item absolute index
     */
    getElementAt(idx: number): Element | null;
    /**
     * get section/operation DOM Node related to the item or if it is group item, returns first item of the group
     * @param idx item absolute index
     */
    getElementAtOrFirstChild(idx: number): Element | null;
    /**
     * current active item
     */
    get activeItem(): IMenuItem;
    getItemById: (id: string) => (ExtendedMenuItem & IMenuItem) | undefined;
    /**
     * update active items on initial page load
     * @param currentId
     */
    initOnHistory: (currentId?: string) => void;
    /**
     * update active items on hash change
     * @param currentId
     */
    updateOnHistory: (currentId?: string) => void;
    updateVersionOnHistory: (id: string) => void;
    updateItemsByVersionChange(updateLocation?: boolean, currentItemId?: string): void;
    buildRenderItems(idx: number): ExtendedMenuItem[];
    /**
     * activate menu item
     * @param item item to activate
     * @param updateLocation [true] whether to update location
     * @param rewriteHistory [false] whether to rewrite browser history (do not create new entry)
     * @param fieldFullPath
     */
    activateBase(item: IMenuItem | undefined, updateLocation?: boolean, rewriteHistory?: boolean, fieldFullPath?: string): void;
    activate(item: ExtendedMenuItem | undefined, updateLocation?: boolean, rewriteHistory?: boolean, scroll?: boolean, fieldFullPath?: string): void;
    /**
     * update active items on scroll
     * @param isScrolledDown whether last scroll was downside
     */
    updateOnScroll: (isScrolledDown: boolean) => void;
    activateField(pathArr: string[], schema?: SchemaModel): void;
    /**
     * makes item and all the parents not active
     * @param item item to deactivate
     */
    deactivate(item: IMenuItem | undefined): void;
    /**
     * activate menu item and scroll to it
     * @see MenuStore.activate
     */
    activateAndScroll(item?: IMenuItem | ExtendedMenuItem, updateLocation?: boolean, rewriteHistory?: boolean, currentId?: string): void;
    /**
     * scrolls to active section
     */
    scrollToActive(fieldPath?: string): void;
    dispose(): void;
}
