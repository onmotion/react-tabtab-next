import * as React from 'react';
import { TabList } from '.';
declare const TabListStyle: import("styled-components").StyledComponent<typeof TabList, any, {}, never>;
declare const ActionButtonStyle: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare type TabListProps = {
    customStyle?: {
        TabList: React.FC<Partial<TabListProps>>;
        Tab: React.ElementRef<'div'>;
        ActionButton: React.ReactElement;
    };
    showArrowButton?: 'auto' | boolean;
    showModalButton?: number | boolean;
    handleTabChange?: (event: any) => void;
    handleTabSequence?: (event: any) => void;
    handleEdit?: (event: any) => void;
    ExtraButton?: JSX.Element;
    hasExtraButton?: boolean;
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
export { TabListStyle, ActionButtonStyle };
