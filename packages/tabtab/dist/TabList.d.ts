import * as React from 'react';
import { TabListElementProps } from './TabListElement';
import { TabElementProps } from './Tab';
import { PanelProps } from './Panel';
import { SortableContextProps } from '@dnd-kit/sortable';
import { DndContextProps } from '@dnd-kit/core';
export declare type TabListProps = {
    customStyle?: {
        TabList?: React.ElementType<TabListElementProps>;
        Tab?: React.ElementType<TabElementProps>;
        Panel?: React.ElementType<PanelProps>;
        ActionButton?: React.ElementType;
    };
    showArrowButton?: 'auto' | boolean;
    showModalButton?: number | boolean;
    handleTabChange?: (event: any) => void;
    handleTabSequence?: (event: any) => void;
    handleTabClose?: (index: number) => void;
    ExtraButton?: JSX.Element;
    activeIndex?: number;
    children: React.ReactNode[];
    sortableContextProps?: Omit<SortableContextProps, 'children'>;
    dndContextProps?: DndContextProps;
};
declare type State = {
    modalIsOpen: boolean;
    showArrowButton: 'auto' | boolean;
    showModalButton: boolean | number;
};
export default class TabListComponent extends React.PureComponent<TabListProps, State> {
    listContainer: React.ElementRef<'div'>;
    rightArrowNode: React.ReactElement;
    leftArrowNode: React.ReactElement;
    listScroll: React.ElementRef<'ul'>;
    foldNode: React.ReactElement;
    tabRefs: React.ElementRef<'div'>[];
    scrollPosition: number;
    FoldButton: React.ElementType;
    ScrollButton: React.ElementType;
    TabList: React.ElementType;
    constructor(props: TabListProps);
    chackActiveIndexRange(): boolean;
    componentDidMount(): void;
    componentDidUpdate(prevProps: TabListProps, prevState: State): void;
    getTabNode(tab: HTMLDivElement & {
        __INTERNAL_NODE?: any;
    }): React.ElementRef<'div'>;
    unifyScrollMax(width: number): number;
    handleScroll(direction: 'right' | 'left'): void;
    scrollToIndex(index: number, rectSide: 'left' | 'right'): void;
    scrollToZero(): void;
    toggleModal(): void;
    isShowModalButton(): void;
    isShowArrowButton(): void;
    renderTabs(options?: any, isModal?: boolean): React.ReactElement<any, string | React.JSXElementConstructor<any>>[];
    renderArrowButtons(ScrollButton: React.ElementType): JSX.Element;
    render(): JSX.Element;
}
export {};
