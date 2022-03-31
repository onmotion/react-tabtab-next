import * as React from 'react';
import { TabListElementProps } from './TabListElement';
import Tab from './Tab';
import Panel from './Panel';
export declare type TabListProps = {
    customStyle?: {
        TabList?: React.ElementType<TabListElementProps>;
        Tab?: React.ElementType<Tab>;
        Panel?: React.ElementType<Panel>;
        ActionButton?: React.ElementType;
    };
    showArrowButton?: 'auto' | boolean;
    showModalButton?: number | boolean;
    handleTabChange?: (event: any) => void;
    handleTabSequence?: (event: any) => void;
    handleEdit?: (event: any) => void;
    ExtraButton?: JSX.Element;
    activeIndex?: number;
    children: React.ReactNode[];
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
    constructor(props: TabListProps);
    componentDidMount(): void;
    componentDidUpdate(prevProps: TabListProps, prevState: State): void;
    getTabNode(tab: HTMLDivElement & {
        __INTERNAL_NODE?: any;
        __DRAG_TAB_INTERNAL_NODE?: any;
    }): React.ElementRef<'div'>;
    unifyScrollMax(width: number): number;
    handleScroll(direction: 'right' | 'left'): void;
    scrollToIndex(index: number, rectSide: 'left' | 'right'): void;
    scrollToZero(): void;
    toggleModal(open: boolean): void;
    isShowModalButton(): void;
    isShowArrowButton(): void;
    renderTabs(options?: any, isModal?: boolean): React.ReactElement<any, string | React.JSXElementConstructor<any>>[];
    renderArrowButton(ScrollButton: React.ElementType): JSX.Element;
    render(): JSX.Element;
}
export {};
