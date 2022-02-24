export declare type MenuItemGroupType = 'group' | 'tag' | 'section';
export declare type MenuItemType = MenuItemGroupType | 'operation';
/** Generic interface for MenuItems */
export interface IMenuItem {
    id: string;
    absoluteIdx?: number;
    name: string;
    description?: string;
    href?: string;
    depth: number;
    active: boolean;
    expanded: boolean;
    items: IMenuItem[];
    parent?: IMenuItem;
    deprecated?: boolean;
    type: MenuItemType;
    deactivate(): void;
    activate(): void;
    collapse(): void;
    expand(): void;
}
