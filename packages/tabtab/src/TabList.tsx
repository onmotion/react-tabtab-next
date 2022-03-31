import * as React from 'react';
import styled from 'styled-components';
import invariant from 'invariant';
import { LeftIcon, RightIcon, BulletIcon } from './IconSvg';
import { isNumber } from './utils/isType';
import TabModal from './TabModal';
import { ActionButtonStyle, buttonWidth, ListInner, ListScroll, TabListStyle } from './styledElements';
import { TabListElement, TabListElementProps } from './TabListElement';
import Tab from './Tab';
import Panel from './Panel';

const makeScrollButton = (ActionButton: React.ElementType) => styled(ActionButton)`
    display: inline-block;
    filter: none;
    position: absolute;
    ${(props) => (props.left ? (props.showModalButton ? `left: ${buttonWidth + 2}px` : `left: 0`) : 'right: 0')};
    &:hover {
        cursor: pointer;
    }
`;

const makeFoldButton = (ActionButton: React.ElementType) => styled(ActionButton)`
    display: inline-block;
    filter: none;
    position: absolute;
    left: 0;
    &:hover {
        cursor: pointer;
    }
`;

export type TabListProps = {
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

    constructor(props: TabListProps) {
        super(props);
        this.handleScroll = this.handleScroll.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.renderTabs = this.renderTabs.bind(this);
        this.renderArrowButton = this.renderArrowButton.bind(this);
        this.isShowModalButton = this.isShowModalButton.bind(this);
        this.isShowArrowButton = this.isShowArrowButton.bind(this);
        this.scrollPosition = 0;
        this.tabRefs = [];
        this.state = {
            modalIsOpen: false,
            showArrowButton: false,
            showModalButton: false,
        };
    }

    componentDidMount() {
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
    }

    getTabNode(
        tab: HTMLDivElement & { __INTERNAL_NODE?: any; __DRAG_TAB_INTERNAL_NODE?: any }
    ): React.ElementRef<'div'> {
        if (tab.__INTERNAL_NODE) {
            // normal tab
            return tab.__INTERNAL_NODE;
        } else if (tab.__DRAG_TAB_INTERNAL_NODE) {
            // drag tab
            return tab.__DRAG_TAB_INTERNAL_NODE.node;
        }
    }

    unifyScrollMax(width: number) {
        return (width / 3) * 2;
    }

    handleScroll(direction: 'right' | 'left') {
        let leftMove = 0;
        const containerOffset = this.listContainer.getBoundingClientRect();
        const containerWidth = this.listContainer.offsetWidth;
        const tabFirstOffset = this.getTabNode(this.tabRefs[0]).getBoundingClientRect();
        const tabLastOffset = this.getTabNode(this.tabRefs[this.tabRefs.length - 1]).getBoundingClientRect();

        if (direction === 'right') {
            leftMove = tabLastOffset.right - containerOffset.right;
            if (leftMove > containerWidth) {
                leftMove = this.unifyScrollMax(containerWidth);
            }
        } else if (direction === 'left') {
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

    // $FlowFixMe
    scrollToIndex(index: number, rectSide: 'left' | 'right') {
        const tabOffset = this.getTabNode(this.tabRefs[index]).getBoundingClientRect();
        const containerOffset = this.listContainer.getBoundingClientRect();
        // Cancel scrolling if the tab is visible
        if (tabOffset.right < containerOffset.right && tabOffset.left > containerOffset.left) return;
        const leftMove = tabOffset[rectSide] - containerOffset[rectSide];
        this.scrollPosition += leftMove;
        if (this.scrollPosition < 0) {
            this.scrollPosition = 0;
        }
        this.listScroll.style.transform = `translate3d(-${this.scrollPosition}px, 0, 0)`;
    }

    scrollToZero() {
        this.listScroll.style.transform = `translate3d(0, 0, 0)`;
    }

    toggleModal(open: boolean) {
        this.setState({ modalIsOpen: open }, () => {
            if (!open) {
                // $FlowFixMe
                this.scrollToIndex(this.props.activeIndex, 'right');
            }
        });
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
        // $FlowFixMe: flow will show 'auto' is not bool, but with this logic, showArrowButton will never be 'auto'
        this.setState({ showArrowButton });
    }

    renderTabs(options: any = {}, isModal?: boolean) {
        const { children, activeIndex, handleTabChange, handleEdit, customStyle } = this.props;
        const props = {
            handleTabChange,
            handleEdit,
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

    renderArrowButton(ScrollButton: React.ElementType) {
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
                    >
                        <LeftIcon />
                    </ScrollButton>
                    <ScrollButton
                        onClick={() => {
                            this.handleScroll('right');
                        }}
                        ref={(node: React.ReactElement) => (this.rightArrowNode = node)}
                    >
                        <RightIcon />
                    </ScrollButton>
                </div>
            );
        }
        return null;
    }

    render() {
        const { customStyle, activeIndex, handleTabChange, handleTabSequence, ExtraButton } = this.props;
        const { modalIsOpen } = this.state;
        const TabList = customStyle.TabList || TabListStyle;
        const ActionButton = customStyle.ActionButton || ActionButtonStyle;
        const ScrollButton = makeScrollButton(ActionButton as React.ElementType);
        const FoldButton = makeFoldButton(ActionButton as React.ElementType);
        invariant(this.props.children, 'React-tabtab Error: You MUST pass at least one tab');
        return (
            <div>
                {ExtraButton ? ExtraButton : null}
                <TabList showModalButton={this.state.showModalButton} showArrowButton={this.state.showArrowButton}>
                    {this.state.showModalButton ? (
                        <FoldButton
                            ref={(node: React.ReactElement) => (this.foldNode = node)}
                            onClick={this.toggleModal.bind(this, true)}
                            showArrowButton={this.state.showArrowButton}
                        >
                            <BulletIcon />
                        </FoldButton>
                    ) : null}
                    {this.renderArrowButton(ScrollButton)}
                    <ListInner ref={(node) => (this.listContainer = node)}>
                        <ListScroll ref={(node) => (this.listScroll = node)} role="tablist">
                            {this.renderTabs()}
                        </ListScroll>
                    </ListInner>
                </TabList>
                {modalIsOpen ? (
                    <TabModal
                        closeModal={this.toggleModal.bind(this, false)}
                        handleTabSequence={handleTabSequence}
                        handleTabChange={handleTabChange}
                        activeIndex={activeIndex}
                    >
                        {this.renderTabs({ vertical: true }, true)}
                    </TabModal>
                ) : null}
            </div>
        );
    }
}
