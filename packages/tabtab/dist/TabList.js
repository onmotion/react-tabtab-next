"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActionButtonStyle = exports.TabListStyle = void 0;
// @ts-nocheck
const React = __importStar(require("react"));
const styled_components_1 = __importDefault(require("styled-components"));
const invariant_1 = __importDefault(require("invariant"));
const IconSvg_1 = require("./IconSvg");
const isType_1 = require("./utils/isType");
const TabModal_1 = __importDefault(require("./TabModal"));
const buttonWidth = 35;
const getPadding = ({ showModalButton, showArrowButton }) => {
    let paddingLeft = 0;
    let paddingRight = 0;
    if (showModalButton) {
        paddingLeft += buttonWidth;
    }
    if (showArrowButton) {
        paddingLeft += buttonWidth;
        paddingRight += buttonWidth;
        if (showModalButton) {
            paddingLeft += 2;
        }
    }
    if (paddingLeft > 0) {
        paddingLeft += 3;
    }
    if (paddingRight > 0) {
        paddingRight += 3;
    }
    return `0 ${paddingRight}px 0 ${paddingLeft}px`;
};
const TabListStyle = styled_components_1.default.div `
  background-color: white;
  text-align: left;
  position: relative;
  white-space: nowrap;
  overflow: hidden;
  width: auto;
  padding: ${props => getPadding(props)};
`;
exports.TabListStyle = TabListStyle;
const ListInner = styled_components_1.default.div `
  overflow: hidden;
`;
const ListScroll = styled_components_1.default.ul `
  padding-left: 0;
  position: relative;
  margin: 0;
  list-style: none;
  display: inline-block;
  transition: transform .3s cubic-bezier(.42, 0, .58, 1);
`;
const ActionButtonStyle = styled_components_1.default.div `
  height: 100%;
  width: ${buttonWidth}px;
  text-align: center;
  border: 1px solid #d9d9d9;
  border-bottom: 0;
  border-radius: 4px 4px 0 0;
  background: #f9f9f9;
  > svg {
    padding-top: 11px;
  }
`;
exports.ActionButtonStyle = ActionButtonStyle;
const makeScrollButton = ActionButton => (0, styled_components_1.default)(ActionButton) `
  display: inline-block;
  filter: none;
  position: absolute;
  ${props => props.left ?
    props.showModalButton ? `left: ${buttonWidth + 2}px` : `left: 0`
    : 'right: 0'};
  &:hover {
    cursor: pointer;
  }
`;
const makeFoldButton = ActionButton => (0, styled_components_1.default)(ActionButton) `
  display: inline-block;
  filter: none;
  position: absolute;
  left: 0;
  &:hover {
    cursor: pointer;
  }
`;
class TabListComponent extends React.Component {
    constructor(props) {
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
            showModalButton: false
        };
    }
    componentDidMount() {
        this.isShowArrowButton();
        this.isShowModalButton();
        if (this.props.activeIndex > 0)
            this.scrollToIndex(this.props.activeIndex, 'left');
    }
    componentDidUpdate(prevProps, prevState) {
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
    getTabNode(tab) {
        if (tab.__INTERNAL_NODE) { // normal tab
            return tab.__INTERNAL_NODE;
        }
        else if (tab.__DRAG_TAB_INTERNAL_NODE) { // drag tab
            return tab.__DRAG_TAB_INTERNAL_NODE.node;
        }
    }
    unifyScrollMax(width) {
        return (width / 3) * 2;
    }
    handleScroll(direction) {
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
        }
        else if (direction === 'left') {
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
    scrollToIndex(index, rectSide) {
        const tabOffset = this.getTabNode(this.tabRefs[index]).getBoundingClientRect();
        const containerOffset = this.listContainer.getBoundingClientRect();
        // Cancel scrolling if the tab is visible
        if (tabOffset.right < containerOffset.right &&
            tabOffset.left > containerOffset.left)
            return;
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
    toggleModal(open) {
        this.setState({ modalIsOpen: open }, () => {
            if (!open) {
                // $FlowFixMe
                this.scrollToIndex(this.props.activeIndex, 'right');
            }
        });
    }
    isShowModalButton() {
        let { showModalButton } = this.props;
        if ((0, isType_1.isNumber)(showModalButton)) {
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
    renderTabs(options = {}, isModal) {
        const { children, activeIndex, handleTabChange, handleEdit, customStyle } = this.props;
        const props = {
            handleTabChange,
            handleEdit,
            //$FlowFixMe
            CustomTabStyle: customStyle.Tab
        };
        if (!isModal) {
            this.tabRefs = [];
        }
        return React.Children.map(children, (child, index) => (React.cloneElement(child, {
            key: index,
            active: index === activeIndex,
            index,
            tabIndex: index,
            ref: node => {
                if (!isModal && node) {
                    this.tabRefs.push(node);
                }
            },
            ...props,
            ...options
        })));
    }
    renderArrowButton(ScrollButton) {
        const { showArrowButton } = this.state;
        if (showArrowButton) {
            return (React.createElement("div", null,
                React.createElement(ScrollButton, { left: true, onClick: () => { this.handleScroll('left'); }, ref: node => this.leftArrowNode = node, showModalButton: this.state.showModalButton },
                    React.createElement(IconSvg_1.LeftIcon, null)),
                React.createElement(ScrollButton, { onClick: () => { this.handleScroll('right'); }, ref: node => this.rightArrowNode = node },
                    React.createElement(IconSvg_1.RightIcon, null))));
        }
        return null;
    }
    render() {
        const { customStyle, activeIndex, handleTabChange, handleTabSequence, ExtraButton } = this.props;
        const { modalIsOpen } = this.state;
        const TabList = customStyle.TabList || TabListStyle;
        const ActionButton = customStyle.ActionButton || ActionButtonStyle;
        const ScrollButton = makeScrollButton(ActionButton);
        const FoldButton = makeFoldButton(ActionButton);
        (0, invariant_1.default)(this.props.children, 'React-tabtab Error: You MUST pass at least one tab');
        return (React.createElement("div", null,
            ExtraButton ? ExtraButton : null,
            React.createElement(TabList, { hasExtraButton: !!ExtraButton, showModalButton: this.state.showModalButton, showArrowButton: this.state.showArrowButton },
                this.state.showModalButton ?
                    React.createElement(FoldButton, { ref: node => this.foldNode = node, onClick: this.toggleModal.bind(this, true), showArrowButton: this.state.showArrowButton },
                        React.createElement(IconSvg_1.BulletIcon, null))
                    : null,
                this.renderArrowButton(ScrollButton),
                React.createElement(ListInner, { ref: node => this.listContainer = node },
                    React.createElement(ListScroll, { ref: node => this.listScroll = node, role: "tablist" }, this.renderTabs()))),
            modalIsOpen ?
                React.createElement(TabModal_1.default, { closeModal: this.toggleModal.bind(this, false), handleTabSequence: handleTabSequence, handleTabChange: handleTabChange, activeIndex: activeIndex }, this.renderTabs({ vertical: true }, true))
                : null));
    }
}
exports.default = TabListComponent;
