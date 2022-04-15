import * as React from 'react';
import styled from 'styled-components';
import invariant from 'invariant';
import { LeftIcon, RightIcon, BulletIcon } from './IconSvg';
import { isNumber } from './utils/isType';
import { ActionButtonStyle, buttonWidth, ListInner, ListScroll, TabListStyle } from './styledElements';
import { TabListElementProps } from './TabListElement';
import { TabElementProps } from './Tab';
import { PanelProps } from './Panel';
import { SortableContextProps } from '@dnd-kit/sortable';
import { DndContextProps } from '@dnd-kit/core';
import { TabListModal } from './TabListModal';

const makeScrollButton = (ActionButton: React.ElementType) => styled(ActionButton)`
    display: inline-block;
    filter: none;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    user-select: none;
    ${(props) => (props.left ? (props.showModalButton ? `left: ${buttonWidth + 2}px` : `left: 0`) : 'right: 0')};
    &:hover {
        cursor: pointer;
    }
`;

const makeFoldButton = (ActionButton: React.ElementType) => styled(ActionButton)`
    display: inline-block;
    filter: none;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    user-select: none;
    left: 0;
    &:hover {
        cursor: pointer;
    }
`;

export type TabListProps = {
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

type State = {
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

    constructor(props: TabListProps) {
        super(props);
        this.handleScroll = this.handleScroll.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.renderTabs = this.renderTabs.bind(this);
        this.renderArrowButtons = this.renderArrowButtons.bind(this);
        this.isShowModalButton = this.isShowModalButton.bind(this);
        this.isShowArrowButton = this.isShowArrowButton.bind(this);
        this.chackActiveIndexRange = this.chackActiveIndexRange.bind(this);
        this.scrollPosition = 0;
        this.tabRefs = [];
        this.TabList = this.props.customStyle?.TabList || TabListStyle;
        this.FoldButton = makeFoldButton(this.props.customStyle?.ActionButton || ActionButtonStyle);
        this.ScrollButton = makeScrollButton(this.props.customStyle?.ActionButton || ActionButtonStyle);

        this.state = {
            modalIsOpen: false,
            showArrowButton: false,
            showModalButton: false,
        };
    }

    chackActiveIndexRange() {
        if (this.props.activeIndex >= this.props.children.length) {
            console.error('activeIndex is out of range 0-' + (this.props.children.length - 1));
            return false;
        }
        return true;
    }

    componentDidMount() {
        console.log('TabList componentDidMount');

        if (!this.chackActiveIndexRange()) return;
        this.isShowArrowButton();
        this.isShowModalButton();

        if (this.props.activeIndex > 0) this.scrollToIndex(this.props.activeIndex, 'left');
    }

    componentDidUpdate(prevProps: TabListProps, prevState: State) {
        if (prevProps.children.length !== this.props.children.length) {
            this.isShowArrowButton();
            this.isShowModalButton();
        }

        if (prevProps.activeIndex !== this.props.activeIndex) {
            //if we scroll to the last tab, alignment is set to the right side of the tab
            if (!this.chackActiveIndexRange()) return;
            const rectSide = this.props.activeIndex === this.props.children.length - 1 ? 'right' : 'left';
            this.scrollToIndex(this.props.activeIndex, rectSide);
        }
        // if prev state show arrow button, and current state doesn't show
        // need to reset the scroll position, or some tabs will be hided by container.
        if (prevState.showArrowButton && !this.state.showArrowButton) {
            this.scrollToZero();
        }

        if (prevProps.showModalButton !== this.props.showModalButton) {
            this.isShowModalButton();
        }

        if (prevProps.showArrowButton !== this.props.showArrowButton) {
            this.isShowArrowButton();
        }
        if (
            this.props.customStyle?.ActionButton &&
            prevProps.customStyle?.ActionButton !== this.props.customStyle?.ActionButton
        ) {
            this.FoldButton = makeFoldButton(this.props.customStyle?.ActionButton);
            this.ScrollButton = makeScrollButton(this.props.customStyle?.ActionButton);
        }
    }

    getTabNode(tab: HTMLDivElement & { __INTERNAL_NODE?: any }): React.ElementRef<'div'> {
        return tab.__INTERNAL_NODE;
    }

    unifyScrollMax(width: number) {
        return (width / 3) * 2;
    }

    handleScroll(direction: 'right' | 'left') {
        let leftMove = 0;
        const containerOffset = this.listContainer.getBoundingClientRect();
        const containerWidth = this.listContainer.offsetWidth;

        if (direction === 'right') {
            const tabLastOffset = this.getTabNode(this.tabRefs[this.tabRefs.length - 1]).getBoundingClientRect();

            leftMove = tabLastOffset.right - containerOffset.right;
            if (leftMove > containerWidth) {
                leftMove = this.unifyScrollMax(containerWidth);
            }
        } else if (direction === 'left') {
            const tabFirstOffset = this.getTabNode(this.tabRefs[0]).getBoundingClientRect();

            leftMove = tabFirstOffset.left - containerOffset.left;
            if (-leftMove > containerWidth) {
                leftMove = -this.unifyScrollMax(containerWidth);
            }
        }
        this.scrollPosition += leftMove;
        if (this.scrollPosition < 0) {
            this.scrollPosition = 0;
        }

        this.listScroll.style.transform = `translate3d(-${this.scrollPosition}px, 0, 0)`;
    }

    scrollToIndex(index: number, rectSide: 'left' | 'right') {
        const tabOffset = this.getTabNode(this.tabRefs[index]).getBoundingClientRect();
        const containerOffset = this.listContainer.getBoundingClientRect();
        console.log({ tabOffset, containerOffset });

        // Cancel scrolling if the tab is visible
        if (tabOffset.right < containerOffset.right && tabOffset.left > containerOffset.left) return;

        const leftMove = tabOffset['right'] + (rectSide === 'left' ? tabOffset['width'] : 0) - containerOffset['right'];
        console.log({ leftMove });

        this.scrollPosition += leftMove;
        if (this.scrollPosition < 0) {
            this.scrollPosition = 0;
        }
        console.log('this.scrollPosition', this.scrollPosition);

        this.listScroll.style.transform = `translate3d(-${this.scrollPosition}px, 0, 0)`;
    }

    scrollToZero() {
        this.listScroll.style.transform = `translate3d(0, 0, 0)`;
    }

    toggleModal() {
        this.setState({ modalIsOpen: !this.state.modalIsOpen });
    }

    isShowModalButton() {
        let { showModalButton } = this.props;
        if (isNumber(showModalButton)) {
            // $FlowFixMe, weired. currently set showModalButton as number | bool, but don't know why flow only can recognize it as bool
            showModalButton = this.props.children.length >= showModalButton;
        }
        this.setState({ showModalButton });
    }

    isShowArrowButton() {
        let { showArrowButton } = this.props;

        if (showArrowButton === 'auto') {
            let tabWidth = 0;
            const containerWidth = this.listContainer.offsetWidth;
            showArrowButton = false;
            for (let index = 0; index < this.tabRefs.length; index++) {
                const tab = this.getTabNode(this.tabRefs[index]);
                tabWidth += tab.offsetWidth;
                if (tabWidth >= containerWidth) {
                    showArrowButton = true;
                    break;
                }
            }
        }
        this.setState({ showArrowButton });
    }

    renderTabs(options: any = {}, isModal?: boolean) {
        const { children, activeIndex, handleTabChange, handleTabClose, customStyle } = this.props;
        const props = {
            handleTabChange,
            handleTabClose,
            CustomTabStyle: customStyle.Tab,
        };
        if (!isModal) {
            this.tabRefs = [];
        }
        return React.Children.map(children, (child, index) =>
            React.cloneElement(child as React.ReactElement, {
                key: index,
                active: index === activeIndex,
                index,
                tabIndex: index,
                ref: (node: HTMLDivElement) => {
                    if (!isModal && node) {
                        this.tabRefs.push(node);
                    }
                },
                ...props,
                ...options,
            })
        );
    }

    renderArrowButtons(ScrollButton: React.ElementType) {
        const { showArrowButton } = this.state;
        if (showArrowButton) {
            return (
                <div>
                    <ScrollButton
                        left
                        onClick={() => {
                            this.handleScroll('left');
                        }}
                        ref={(node: React.ReactElement) => (this.leftArrowNode = node)}
                        showModalButton={this.state.showModalButton}
                        className={'tabtab-arrow-button_left'}
                    >
                        <LeftIcon />
                    </ScrollButton>
                    <ScrollButton
                        onClick={() => {
                            this.handleScroll('right');
                        }}
                        ref={(node: React.ReactElement) => (this.rightArrowNode = node)}
                        className={'tabtab-arrow-button_right'}
                    >
                        <RightIcon />
                    </ScrollButton>
                </div>
            );
        }
        return null;
    }

    render() {
        const { ExtraButton } = this.props;
        const { modalIsOpen } = this.state;

        const TabList = this.TabList;
        const ScrollButton = this.ScrollButton;
        const FoldButton = this.FoldButton;

        invariant(this.props.children, 'React-tabtab Error: You MUST pass at least one tab');

        return (
            <div style={{ display: 'flex' }}>
                <TabList showModalButton={this.state.showModalButton} showArrowButton={this.state.showArrowButton}>
                    {this.state.showModalButton ? (
                        <FoldButton
                            ref={(node: React.ReactElement) => (this.foldNode = node)}
                            onClick={this.toggleModal}
                            showArrowButton={this.state.showArrowButton}
                        >
                            <BulletIcon />
                        </FoldButton>
                    ) : null}
                    {this.renderArrowButtons(ScrollButton)}
                    <ListInner ref={(node) => (this.listContainer = node)} className="tabtab-list-container">
                        <ListScroll ref={(node) => (this.listScroll = node)} role="tablist">
                            {this.renderTabs()}
                        </ListScroll>
                    </ListInner>
                </TabList>
                {!!ExtraButton && ExtraButton}
                {this.isShowModalButton && (
                    <TabListModal
                        isOpen={modalIsOpen}
                        onRequestClose={this.toggleModal}
                        dndContextProps={this.props.dndContextProps}
                        sortableContextProps={this.props.sortableContextProps}
                    >
                        {this.renderTabs({ vertical: true }, true)}
                    </TabListModal>
                )}
            </div>
        );
    }
}
