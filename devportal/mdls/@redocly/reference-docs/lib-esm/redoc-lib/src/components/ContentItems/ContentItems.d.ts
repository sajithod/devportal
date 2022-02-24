import * as React from 'react';
import { ContentItemModel } from '../../services/MenuBuilder';
import { OperationModel } from '../../services/models';
import type { LayoutVariant } from '../../../../services/';
import { ProStore } from '../../../../services/ProStore';
interface ContentItemsProps {
    items: ContentItemModel[];
    store: ProStore;
}
export declare const ContentItems: ({ items, store }: ContentItemsProps) => JSX.Element | null;
export interface ContentItemProps {
    item: ContentItemModel;
    store: ProStore;
    layout?: LayoutVariant;
}
export declare class ContentItem extends React.Component<ContentItemProps> {
    render(): JSX.Element;
}
export declare class SectionItem extends React.Component<ContentItemProps> {
    render(): JSX.Element;
}
export declare class OperationItem extends React.Component<{
    item: OperationModel;
    layout?: LayoutVariant;
}> {
    render(): JSX.Element;
}
export {};
