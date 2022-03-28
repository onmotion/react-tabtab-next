import * as React from 'react';
declare const TabListStyle: import("styled-components").StyledComponent<"div", any, {}, never>;
declare const ActionButtonStyle: import("styled-components").StyledComponent<"div", any, {}, never>;
declare type Props = {
    customStyle: {
        TabList: React.FC<Partial<Props>>;
        Tab: JSX.Element;
        ActionButton: JSX.Element;
    };
    activeIndex: number;
    showArrowButton: 'auto' | boolean;
    showModalButton: number | boolean;
    handleTabChange: (event: any) => void;
    handleTabSequence: (event: any) => void;
    handleEdit: (event: any) => void;
    ExtraButton: React.ReactElement<'div'>;
    children: React.ReactNode[];
    hasExtraButton?: boolean;
};
declare type State = {
    modalIsOpen: boolean;
    showArrowButton: boolean;
    showModalButton: boolean | number;
};
export default class TabListComponent extends React.Component<Props, State> {
    listContainer: React.ElementRef<'div'>;
    rightArrowNode: React.ElementRef<'div'>;
    leftArrowNode: React.ElementRef<'div'>;
    listScroll: React.ElementRef<'ul'>;
    foldNode: React.ElementRef<'div'>;
    tabRefs: React.ElementRef<'div'>[];
    scrollPosition: number;
    constructor(props: Props);
    componentDidMount(): void;
    componentDidUpdate(prevProps: Props, prevState: State): void;
    getTabNode(tab: any): React.ElementRef<'div'>;
    unifyScrollMax(width: number): number;
    handleScroll(direction: 'right' | 'left'): void;
    scrollToIndex(index: number, rectSide: 'left' | 'right'): void;
    scrollToZero(): void;
    toggleModal(open: boolean): void;
    isShowModalButton(): void;
    isShowArrowButton(): void;
    renderTabs(options?: any, isModal?: boolean): React.DetailedReactHTMLElement<any, HTMLElement>[];
    renderArrowButton(ScrollButton: React.ComponentType<{}>): JSX.Element;
    render(): JSX.Element;
}
export { TabListStyle, ActionButtonStyle };
