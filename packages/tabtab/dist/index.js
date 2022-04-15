'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var React = require('react');
var styled$1 = require('styled-components');
var invariant = require('invariant');
var core = require('@dnd-kit/core');
var sortable = require('@dnd-kit/sortable');
var ReactModal = require('react-modal');
var utilities = require('@dnd-kit/utilities');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

function _interopNamespace(e) {
    if (e && e.__esModule) return e;
    var n = Object.create(null);
    if (e) {
        Object.keys(e).forEach(function (k) {
            if (k !== 'default') {
                var d = Object.getOwnPropertyDescriptor(e, k);
                Object.defineProperty(n, k, d.get ? d : {
                    enumerable: true,
                    get: function () { return e[k]; }
                });
            }
        });
    }
    n["default"] = e;
    return Object.freeze(n);
}

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var React__namespace = /*#__PURE__*/_interopNamespace(React);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled$1);
var invariant__default = /*#__PURE__*/_interopDefaultLegacy(invariant);
var ReactModal__default = /*#__PURE__*/_interopDefaultLegacy(ReactModal);

var Tabs = /** @class */ (function (_super) {
    tslib.__extends(Tabs, _super);
    function Tabs(props) {
        var _this = _super.call(this, props) || this;
        _this.handleTabChange = _this.handleTabChange.bind(_this);
        _this.handleTabSequence = _this.handleTabSequence.bind(_this);
        _this.handleTabClose = _this.handleTabClose.bind(_this);
        _this.state = {
            activeIndex: _this.getActiveIndex(props),
        };
        return _this;
    }
    Tabs.prototype.getActiveIndex = function (props) {
        var defaultIndex = props.defaultIndex, activeIndex = props.activeIndex;
        if (activeIndex)
            return activeIndex;
        if (defaultIndex)
            return defaultIndex;
        return 0;
    };
    Tabs.prototype.componentDidUpdate = function (prevProps, prevState, snapshot) {
        if (prevProps.activeIndex !== this.props.activeIndex) {
            this.setState({ activeIndex: this.getActiveIndex(this.props) });
        }
    };
    Tabs.prototype.handleTabChange = function (index) {
        var _a = this.props, activeIndex = _a.activeIndex, onTabChange = _a.onTabChange;
        if (activeIndex !== 0 && !activeIndex) {
            this.setState({ activeIndex: index });
        }
        if (onTabChange) {
            onTabChange(index);
        }
    };
    Tabs.prototype.handleTabSequence = function (_a) {
        var oldIndex = _a.oldIndex, newIndex = _a.newIndex;
        var onTabSequenceChange = this.props.onTabSequenceChange;
        if (onTabSequenceChange) {
            onTabSequenceChange({ oldIndex: oldIndex, newIndex: newIndex });
        }
    };
    Tabs.prototype.handleTabClose = function (index) {
        var onTabClose = this.props.onTabClose;
        if (onTabClose) {
            onTabClose(index);
        }
    };
    Tabs.prototype.render = function () {
        var _a = this.props, children = _a.children, extraProps = tslib.__rest(_a, ["children"]);
        var activeIndex = this.state.activeIndex;
        var props = tslib.__assign({ handleTabChange: this.handleTabChange, handleTabSequence: this.handleTabSequence, handleTabClose: this.handleTabClose, activeIndex: activeIndex }, extraProps);
        return (React__default["default"].createElement("div", { className: "tabtab-container" }, React__default["default"].Children.map(children, function (child) {
            return React__default["default"].cloneElement(child, props);
        })));
    };
    Tabs.defaultProps = {
        showModalButton: 4,
        showArrowButton: 'auto',
        onTabChange: function () { },
        onTabSequenceChange: function () { },
        customStyle: {
            TabList: null,
            Tab: null,
            Panel: null,
            ActionButton: null,
        },
    };
    return Tabs;
}(React__default["default"].PureComponent));

// The svg path is from react-icons: https://github.com/gorangajic/react-icons/
var Svg = function (_a) {
    var d = _a.d;
    return (React__default["default"].createElement("svg", { viewBox: "0 0 40 40", fill: "currentColor", height: "1em", width: "1em", style: { verticalAlign: "middle" } },
        React__default["default"].createElement("g", null,
            React__default["default"].createElement("path", { d: d }))));
};
var CloseIcon = function () { return (React__default["default"].createElement(Svg, { d: "m31.6 10.7l-9.3 9.3 9.3 9.3-2.3 2.3-9.3-9.3-9.3 9.3-2.3-2.3 9.3-9.3-9.3-9.3 2.3-2.3 9.3 9.3 9.3-9.3z" })); };
var LeftIcon = function () { return (React__default["default"].createElement(Svg, { d: "m25.7 12.3l-7.7 7.7 7.7 7.7-2.3 2.3-10-10 10-10z" })); };
var RightIcon = function () { return (React__default["default"].createElement(Svg, { d: "m16.6 10l10 10-10 10-2.3-2.3 7.7-7.7-7.7-7.7z" })); };
var BulletIcon = function () { return (React__default["default"].createElement(Svg, { d: "m31.7 28.3h-23.4c-1.8 0-3.3 1.5-3.3 3.4s1.5 3.3 3.3 3.3h23.4c1.8 0 3.3-1.5 3.3-3.3s-1.5-3.4-3.3-3.4z m0-11.6h-23.4c-1.8 0-3.3 1.5-3.3 3.3s1.5 3.3 3.3 3.3h23.4c1.8 0 3.3-1.5 3.3-3.3s-1.5-3.3-3.3-3.3z m0-11.7h-23.4c-1.8 0-3.3 1.5-3.3 3.3s1.5 3.4 3.3 3.4h23.4c1.8 0 3.3-1.5 3.3-3.4s-1.5-3.3-3.3-3.3z" })); };

function isNumber(number) {
    return !isNaN(parseInt(number, 10));
}

var TabListElement = React.memo(function (_a) {
    _a.showArrowButton; _a.showModalButton; var props = tslib.__rest(_a, ["showArrowButton", "showModalButton"]);
    return React__namespace.createElement("div", tslib.__assign({}, props));
});

var buttonWidth = 35;
var getPadding = function (_a) {
    var showModalButton = _a.showModalButton, showArrowButton = _a.showArrowButton;
    var paddingLeft = 0;
    var paddingRight = 0;
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
    return "0 ".concat(paddingRight, "px 0 ").concat(paddingLeft, "px");
};
var TabListStyle = styled__default["default"](TabListElement)(templateObject_1$5 || (templateObject_1$5 = tslib.__makeTemplateObject(["\n    background-color: white;\n    text-align: left;\n    position: relative;\n    white-space: nowrap;\n    overflow: hidden;\n    width: 100%;\n    padding: ", ";\n"], ["\n    background-color: white;\n    text-align: left;\n    position: relative;\n    white-space: nowrap;\n    overflow: hidden;\n    width: 100%;\n    padding: ", ";\n"])), function (props) { return getPadding(props); });
var ListInner = styled__default["default"].div(templateObject_2$2 || (templateObject_2$2 = tslib.__makeTemplateObject(["\n    overflow: hidden;\n"], ["\n    overflow: hidden;\n"])));
var ListScroll = styled__default["default"].ul(templateObject_3 || (templateObject_3 = tslib.__makeTemplateObject(["\n    padding-left: 0;\n    position: relative;\n    margin: 0;\n    list-style: none;\n    display: inline-block;\n    transition: transform 0.3s cubic-bezier(0.42, 0, 0.58, 1);\n    display: flex;\n"], ["\n    padding-left: 0;\n    position: relative;\n    margin: 0;\n    list-style: none;\n    display: inline-block;\n    transition: transform 0.3s cubic-bezier(0.42, 0, 0.58, 1);\n    display: flex;\n"])));
var ActionButtonStyle = styled__default["default"].div(templateObject_4 || (templateObject_4 = tslib.__makeTemplateObject(["\n    height: 100%;\n    width: ", "px;\n    text-align: center;\n    background: #f9f9f9;\n    color: #555;\n    :hover {\n        color: #000;\n    }\n"], ["\n    height: 100%;\n    width: ", "px;\n    text-align: center;\n    background: #f9f9f9;\n    color: #555;\n    :hover {\n        color: #000;\n    }\n"])), buttonWidth);
var templateObject_1$5, templateObject_2$2, templateObject_3, templateObject_4;

var e=[],t=[];function n(n,r){if(n&&"undefined"!=typeof document){var a,s=!0===r.prepend?"prepend":"append",d=!0===r.singleTag,i="string"==typeof r.container?document.querySelector(r.container):document.getElementsByTagName("head")[0];if(d){var u=e.indexOf(i);-1===u&&(u=e.push(i)-1,t[u]={}),a=t[u]&&t[u][s]?t[u][s]:t[u][s]=c();}else a=c();65279===n.charCodeAt(0)&&(n=n.substring(1)),a.styleSheet?a.styleSheet.cssText+=n:a.appendChild(document.createTextNode(n));}function c(){var e=document.createElement("style");if(e.setAttribute("type","text/css"),r.attributes)for(var t=Object.keys(r.attributes),n=0;n<t.length;n++)e.setAttribute(t[n],r.attributes[t[n]]);var a="prepend"===s?"afterbegin":"beforeend";return i.insertAdjacentElement(a,e),e}}

var css = ".ReactModal__Overlay {\n    opacity: 0;\n    transition: opacity .3s ease-in-out;\n}\n\n.ReactModal__Overlay--after-open {\n    opacity: 1;\n}\n\n.ReactModal__Overlay--before-close {\n    opacity: 0;\n}\n\n.ReactModal__Content {\n    margin: auto;\n    background-color: #fff;\n    width: 200px;\n    padding: 20px;\n    margin-top: 40px;\n    overflow: auto;\n    max-height: calc(100vh - 120px);\n    outline: none;\n    border-radius: 10px;\n    box-shadow: 0 0 35px #0000001c;\n}";
n(css,{});

ReactModal__default["default"].setAppElement(document.querySelector('body'));
var TabListModal = React.memo(function (_a) {
    var children = _a.children, isOpen = _a.isOpen, dndContextProps = _a.dndContextProps, sortableContextProps = _a.sortableContextProps, props = tslib.__rest(_a, ["children", "isOpen", "dndContextProps", "sortableContextProps"]);
    return (React__default["default"].createElement(React__default["default"].Fragment, null, dndContextProps ? (React__default["default"].createElement(core.DndContext, tslib.__assign({}, dndContextProps),
        React__default["default"].createElement(sortable.SortableContext, tslib.__assign({}, sortableContextProps),
            React__default["default"].createElement(ReactModal__default["default"], tslib.__assign({ isOpen: isOpen, closeTimeoutMS: 300 }, props, { contentLabel: "Modal", className: "tabtab-modal" }), children)))) : (React__default["default"].createElement(ReactModal__default["default"], tslib.__assign({ isOpen: isOpen, closeTimeoutMS: 300 }, props, { contentLabel: "Modal", className: "tabtab-modal" }), children))));
});

var makeScrollButton = function (ActionButton) { return styled__default["default"](ActionButton)(templateObject_1$4 || (templateObject_1$4 = tslib.__makeTemplateObject(["\n    display: inline-block;\n    filter: none;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    position: absolute;\n    user-select: none;\n    ", ";\n    &:hover {\n        cursor: pointer;\n    }\n"], ["\n    display: inline-block;\n    filter: none;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    position: absolute;\n    user-select: none;\n    ", ";\n    &:hover {\n        cursor: pointer;\n    }\n"])), function (props) { return (props.left ? (props.showModalButton ? "left: ".concat(buttonWidth + 2, "px") : "left: 0") : 'right: 0'); }); };
var makeFoldButton = function (ActionButton) { return styled__default["default"](ActionButton)(templateObject_2$1 || (templateObject_2$1 = tslib.__makeTemplateObject(["\n    display: inline-block;\n    filter: none;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    position: absolute;\n    user-select: none;\n    left: 0;\n    &:hover {\n        cursor: pointer;\n    }\n"], ["\n    display: inline-block;\n    filter: none;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    position: absolute;\n    user-select: none;\n    left: 0;\n    &:hover {\n        cursor: pointer;\n    }\n"]))); };
var TabListComponent = /** @class */ (function (_super) {
    tslib.__extends(TabListComponent, _super);
    function TabListComponent(props) {
        var _this = this;
        var _a, _b, _c;
        _this = _super.call(this, props) || this;
        _this.handleScroll = _this.handleScroll.bind(_this);
        _this.toggleModal = _this.toggleModal.bind(_this);
        _this.renderTabs = _this.renderTabs.bind(_this);
        _this.renderArrowButtons = _this.renderArrowButtons.bind(_this);
        _this.isShowModalButton = _this.isShowModalButton.bind(_this);
        _this.isShowArrowButton = _this.isShowArrowButton.bind(_this);
        _this.chackActiveIndexRange = _this.chackActiveIndexRange.bind(_this);
        _this.scrollPosition = 0;
        _this.tabRefs = [];
        _this.TabList = ((_a = _this.props.customStyle) === null || _a === void 0 ? void 0 : _a.TabList) || TabListStyle;
        _this.FoldButton = makeFoldButton(((_b = _this.props.customStyle) === null || _b === void 0 ? void 0 : _b.ActionButton) || ActionButtonStyle);
        _this.ScrollButton = makeScrollButton(((_c = _this.props.customStyle) === null || _c === void 0 ? void 0 : _c.ActionButton) || ActionButtonStyle);
        _this.state = {
            modalIsOpen: false,
            showArrowButton: false,
            showModalButton: false,
        };
        return _this;
    }
    TabListComponent.prototype.chackActiveIndexRange = function () {
        if (this.props.activeIndex >= this.props.children.length) {
            console.error('activeIndex is out of range 0-' + (this.props.children.length - 1));
            return false;
        }
        return true;
    };
    TabListComponent.prototype.componentDidMount = function () {
        var _this = this;
        if (!this.chackActiveIndexRange())
            return;
        this.isShowArrowButton();
        this.isShowModalButton();
        setTimeout(function () {
            if (_this.props.activeIndex > 0)
                _this.scrollToIndex(_this.props.activeIndex, 'left');
        }, 100);
    };
    TabListComponent.prototype.componentDidUpdate = function (prevProps, prevState) {
        var _a, _b, _c, _d, _e;
        if (prevProps.children.length !== this.props.children.length) {
            this.isShowArrowButton();
            this.isShowModalButton();
        }
        if (prevProps.activeIndex !== this.props.activeIndex) {
            //if we scroll to the last tab, alignment is set to the right side of the tab
            if (!this.chackActiveIndexRange())
                return;
            var rectSide = this.props.activeIndex === this.props.children.length - 1 ? 'right' : 'left';
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
        if (((_a = this.props.customStyle) === null || _a === void 0 ? void 0 : _a.ActionButton) &&
            ((_b = prevProps.customStyle) === null || _b === void 0 ? void 0 : _b.ActionButton) !== ((_c = this.props.customStyle) === null || _c === void 0 ? void 0 : _c.ActionButton)) {
            this.FoldButton = makeFoldButton((_d = this.props.customStyle) === null || _d === void 0 ? void 0 : _d.ActionButton);
            this.ScrollButton = makeScrollButton((_e = this.props.customStyle) === null || _e === void 0 ? void 0 : _e.ActionButton);
        }
    };
    TabListComponent.prototype.getTabNode = function (tab) {
        return tab.__INTERNAL_NODE;
    };
    TabListComponent.prototype.unifyScrollMax = function (width) {
        return (width / 3) * 2;
    };
    TabListComponent.prototype.handleScroll = function (direction) {
        var leftMove = 0;
        var containerOffset = this.listContainer.getBoundingClientRect();
        var containerWidth = this.listContainer.offsetWidth;
        if (direction === 'right') {
            var tabLastOffset = this.getTabNode(this.tabRefs[this.tabRefs.length - 1]).getBoundingClientRect();
            leftMove = tabLastOffset.right - containerOffset.right;
            if (leftMove > containerWidth) {
                leftMove = this.unifyScrollMax(containerWidth);
            }
        }
        else if (direction === 'left') {
            var tabFirstOffset = this.getTabNode(this.tabRefs[0]).getBoundingClientRect();
            leftMove = tabFirstOffset.left - containerOffset.left;
            if (-leftMove > containerWidth) {
                leftMove = -this.unifyScrollMax(containerWidth);
            }
        }
        this.scrollPosition += leftMove;
        if (this.scrollPosition < 0) {
            this.scrollPosition = 0;
        }
        this.listScroll.style.transform = "translate3d(-".concat(this.scrollPosition, "px, 0, 0)");
    };
    TabListComponent.prototype.scrollToIndex = function (index, rectSide) {
        var tabOffset = this.getTabNode(this.tabRefs[index]).getBoundingClientRect();
        var containerOffset = this.listContainer.getBoundingClientRect();
        console.log({ tabOffset: tabOffset, containerOffset: containerOffset });
        // Cancel scrolling if the tab is visible
        if (tabOffset.right < containerOffset.right && tabOffset.left > containerOffset.left)
            return;
        var leftMove = tabOffset['right'] + (rectSide === 'left' ? tabOffset['width'] : 0) - containerOffset['right'];
        console.log({ leftMove: leftMove });
        this.scrollPosition += leftMove;
        if (this.scrollPosition < 0) {
            this.scrollPosition = 0;
        }
        console.log('this.scrollPosition', this.scrollPosition);
        this.listScroll.style.transform = "translate3d(-".concat(this.scrollPosition, "px, 0, 0)");
    };
    TabListComponent.prototype.scrollToZero = function () {
        this.listScroll.style.transform = "translate3d(0, 0, 0)";
    };
    TabListComponent.prototype.toggleModal = function () {
        this.setState({ modalIsOpen: !this.state.modalIsOpen });
    };
    TabListComponent.prototype.isShowModalButton = function () {
        var showModalButton = this.props.showModalButton;
        if (isNumber(showModalButton)) {
            // $FlowFixMe, weired. currently set showModalButton as number | bool, but don't know why flow only can recognize it as bool
            showModalButton = this.props.children.length >= showModalButton;
        }
        this.setState({ showModalButton: showModalButton });
    };
    TabListComponent.prototype.isShowArrowButton = function () {
        var showArrowButton = this.props.showArrowButton;
        if (showArrowButton === 'auto') {
            var tabWidth = 0;
            var containerWidth = this.listContainer.offsetWidth;
            showArrowButton = false;
            for (var index = 0; index < this.tabRefs.length; index++) {
                var tab = this.getTabNode(this.tabRefs[index]);
                tabWidth += tab.offsetWidth;
                if (tabWidth >= containerWidth) {
                    showArrowButton = true;
                    break;
                }
            }
        }
        this.setState({ showArrowButton: showArrowButton });
    };
    TabListComponent.prototype.renderTabs = function (options, isModal) {
        var _this = this;
        if (options === void 0) { options = {}; }
        var _a = this.props, children = _a.children, activeIndex = _a.activeIndex, handleTabChange = _a.handleTabChange, handleTabClose = _a.handleTabClose, customStyle = _a.customStyle;
        var props = {
            handleTabChange: handleTabChange,
            handleTabClose: handleTabClose,
            CustomTabStyle: customStyle.Tab,
        };
        if (!isModal) {
            this.tabRefs = [];
        }
        return React__namespace.Children.map(children, function (child, index) {
            return React__namespace.cloneElement(child, tslib.__assign(tslib.__assign({ key: index, active: index === activeIndex, index: index, tabIndex: index, ref: function (node) {
                    if (!isModal && node) {
                        _this.tabRefs.push(node);
                    }
                } }, props), options));
        });
    };
    TabListComponent.prototype.renderArrowButtons = function (ScrollButton) {
        var _this = this;
        var showArrowButton = this.state.showArrowButton;
        if (showArrowButton) {
            return (React__namespace.createElement("div", null,
                React__namespace.createElement(ScrollButton, { left: true, onClick: function () {
                        _this.handleScroll('left');
                    }, ref: function (node) { return (_this.leftArrowNode = node); }, showModalButton: this.state.showModalButton, className: 'tabtab-arrow-button_left' },
                    React__namespace.createElement(LeftIcon, null)),
                React__namespace.createElement(ScrollButton, { onClick: function () {
                        _this.handleScroll('right');
                    }, ref: function (node) { return (_this.rightArrowNode = node); }, className: 'tabtab-arrow-button_right' },
                    React__namespace.createElement(RightIcon, null))));
        }
        return null;
    };
    TabListComponent.prototype.render = function () {
        var _this = this;
        var ExtraButton = this.props.ExtraButton;
        var modalIsOpen = this.state.modalIsOpen;
        var TabList = this.TabList;
        var ScrollButton = this.ScrollButton;
        var FoldButton = this.FoldButton;
        invariant__default["default"](this.props.children, 'React-tabtab Error: You MUST pass at least one tab');
        return (React__namespace.createElement("div", { style: { display: 'flex' } },
            React__namespace.createElement(TabList, { showModalButton: this.state.showModalButton, showArrowButton: this.state.showArrowButton },
                this.state.showModalButton ? (React__namespace.createElement(FoldButton, { ref: function (node) { return (_this.foldNode = node); }, onClick: this.toggleModal, showArrowButton: this.state.showArrowButton },
                    React__namespace.createElement(BulletIcon, null))) : null,
                this.renderArrowButtons(ScrollButton),
                React__namespace.createElement(ListInner, { ref: function (node) { return (_this.listContainer = node); }, className: "tabtab-list-container" },
                    React__namespace.createElement(ListScroll, { ref: function (node) { return (_this.listScroll = node); }, role: "tablist" }, this.renderTabs()))),
            !!ExtraButton && ExtraButton,
            this.isShowModalButton && (React__namespace.createElement(TabListModal, { isOpen: modalIsOpen, onRequestClose: this.toggleModal, dndContextProps: this.props.dndContextProps, sortableContextProps: this.props.sortableContextProps }, this.renderTabs({ vertical: true }, true)))));
    };
    return TabListComponent;
}(React__namespace.PureComponent));
var templateObject_1$4, templateObject_2$1;

var CloseWrapper = styled__default["default"].button(templateObject_1$3 || (templateObject_1$3 = tslib.__makeTemplateObject(["\n    display: inline-block;\n    color: #777;\n    line-height: 0;\n    margin-left: 5px;\n    padding: 0;\n    vertical-align: middle;\n    background-color: transparent;\n    border: 0;\n    padding: 2px;\n    outline: 0;\n    &:hover {\n        color: black;\n        background-color: #eee;\n        cursor: pointer;\n        border-radius: 50%;\n    }\n    > svg {\n        vertical-align: middle;\n    }\n"], ["\n    display: inline-block;\n    color: #777;\n    line-height: 0;\n    margin-left: 5px;\n    padding: 0;\n    vertical-align: middle;\n    background-color: transparent;\n    border: 0;\n    padding: 2px;\n    outline: 0;\n    &:hover {\n        color: black;\n        background-color: #eee;\n        cursor: pointer;\n        border-radius: 50%;\n    }\n    > svg {\n        vertical-align: middle;\n    }\n"])));
var CloseButton = /** @class */ (function (_super) {
    tslib.__extends(CloseButton, _super);
    function CloseButton() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CloseButton.prototype.render = function () {
        return (React__namespace.createElement(CloseWrapper, { onClick: this.props.handleTabClose },
            React__namespace.createElement(CloseIcon, null)));
    };
    return CloseButton;
}(React__namespace.PureComponent));
var templateObject_1$3;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
var TabElement = React__namespace.memo(React__namespace.forwardRef(function (_a, ref) {
    _a.active; _a.closable; _a.vertical; var props = tslib.__rest(_a, ["active", "closable", "vertical"]);
    return (React__namespace.createElement("li", tslib.__assign({ ref: ref }, props), props.children));
}));
var TabStyle = styled__default["default"](TabElement)(templateObject_1$2 || (templateObject_1$2 = tslib.__makeTemplateObject(["\n    display: ", ";\n    justify-content: space-between;\n    touch-action: auto;\n    color: #000000bb;\n    border-bottom: 2px solid transparent;\n    white-space: nowrap;\n    ", "\n\n    user-select: none;\n    &:hover,\n    &:active {\n        cursor: pointer;\n        color: black;\n    }\n    ", "\n"], ["\n    display: ", ";\n    justify-content: space-between;\n    touch-action: auto;\n    color: #000000bb;\n    border-bottom: 2px solid transparent;\n    white-space: nowrap;\n    ", "\n\n    user-select: none;\n    &:hover,\n    &:active {\n        cursor: pointer;\n        color: black;\n    }\n    ", "\n"])), function (props) { return (props.vertical ? 'flex' : 'inline-block'); }, function (props) {
    return props.vertical
        ? "\n      background-color: white;\n      color: black;\n      padding: 10px 10px;\n      z-index: 1;\n    "
        : function (props) { return (props.closable ? 'padding: 10px 10px 8px 15px;' : 'padding: 10px 15px 8px 15px;'); };
}, function (props) {
    return props.active
        ? "\n      color: black;\n      border-bottom: 2px solid; \n    "
        : null;
});
var TabText = styled__default["default"].span(templateObject_2 || (templateObject_2 = tslib.__makeTemplateObject(["\n    vertical-align: middle;\n"], ["\n    vertical-align: middle;\n"])));
var Tab = /** @class */ (function (_super) {
    tslib.__extends(Tab, _super);
    function Tab(props) {
        var _this = _super.call(this, props) || this;
        _this.clickTab = _this.clickTab.bind(_this);
        _this.clickDelete = _this.clickDelete.bind(_this);
        return _this;
    }
    Tab.prototype.clickTab = function (e) {
        var _a = this.props, handleTabChange = _a.handleTabChange, index = _a.index;
        handleTabChange(index);
    };
    Tab.prototype.clickDelete = function (event) {
        event.stopPropagation(); // prevent trigger clickTab event.
        var _a = this.props, handleTabClose = _a.handleTabClose, index = _a.index;
        handleTabClose(index);
    };
    Tab.prototype.render = function () {
        var _this = this;
        var _a = this.props, CustomTabStyle = _a.CustomTabStyle, active = _a.active, closable = _a.closable, vertical = _a.vertical, index = _a.index;
        var TabComponent = CustomTabStyle || TabStyle;
        return (React__namespace.createElement(TabComponent, { ref: function (node) { return (_this.__INTERNAL_NODE = node); }, style: { touchAction: 'auto' }, onClick: this.clickTab, active: active, vertical: vertical, closable: closable, role: "tab", id: "react-tabtab-tab-".concat(index), "aria-controls": "react-tabtab-panel-".concat(index), "aria-selected": active },
            React__namespace.createElement(TabText, null, this.props.children),
            closable ? React__namespace.createElement(CloseButton, { handleTabClose: this.clickDelete }) : null));
    };
    return Tab;
}(React__namespace.PureComponent));
var templateObject_1$2, templateObject_2;

var DragTab = React.memo(React.forwardRef(function (_a, ref) {
    var children = _a.children, id = _a.id, index = _a.index, activeIndex = _a.activeIndex, rest = tslib.__rest(_a, ["children", "id", "index", "activeIndex"]);
    var _b = sortable.useSortable({ id: id }), attributes = _b.attributes, listeners = _b.listeners, setNodeRef = _b.setNodeRef, transform = _b.transform, transition = _b.transition;
    var style = {
        transform: utilities.CSS.Transform.toString(transform),
        transition: transition,
        // cursor: 'default',
    };
    return (React__default["default"].createElement("div", tslib.__assign({ ref: setNodeRef, style: style }, attributes, listeners), React__default["default"].cloneElement(children, tslib.__assign(tslib.__assign({}, rest), { key: id, active: index === activeIndex, index: index, tabIndex: id, ref: ref }))));
}));

var DragTabList = React.memo(function (_a) {
    var children = _a.children, props = tslib.__rest(_a, ["children"]);
    var _b = React.useState([]), items = _b[0], setItems = _b[1];
    React.useEffect(function () {
        setItems(React__default["default"].Children.map(children, function (_, i) { return i.toString(); }));
    }, [children]);
    var mouseSensor = core.useSensor(core.MouseSensor, {
        // Require the mouse to move by 10 pixels before activating
        activationConstraint: {
            distance: 10,
        },
    });
    var touchSensor = core.useSensor(core.TouchSensor, {
        activationConstraint: {
            delay: 200,
            tolerance: 0,
        },
    });
    var sensors = core.useSensors(mouseSensor, touchSensor);
    var handleOnDragEnd = React.useCallback(function (event) {
        var active = event.active, over = event.over;
        if (!props.onTabSequenceChange || !(over === null || over === void 0 ? void 0 : over.id)) {
            return;
        }
        if (active.id !== over.id) {
            props.onTabSequenceChange({ newIndex: Number(over.id), oldIndex: Number(active.id) });
        }
    }, [props.onTabSequenceChange]);
    return (React__default["default"].createElement(React__default["default"].Fragment, null,
        React__default["default"].createElement(core.DndContext, { sensors: sensors, onDragEnd: handleOnDragEnd },
            React__default["default"].createElement(sortable.SortableContext, { items: items },
                React__default["default"].createElement(TabListComponent, tslib.__assign({}, props, { sortableContextProps: { items: items }, dndContextProps: { onDragEnd: handleOnDragEnd, sensors: sensors } }), React__default["default"].Children.map(children, function (child, i) { return (React__default["default"].createElement(DragTab, tslib.__assign({ id: i.toString(), key: i, index: i }, props), child)); }))))));
});

var PanelList = /** @class */ (function (_super) {
    tslib.__extends(PanelList, _super);
    function PanelList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PanelList.prototype.render = function () {
        var _a = this.props, children = _a.children, activeIndex = _a.activeIndex, customStyle = _a.customStyle;
        if (!children || activeIndex === undefined) {
            return null;
        }
        var props = {};
        if (customStyle && customStyle.Panel) {
            props = tslib.__assign(tslib.__assign({}, props), { CustomPanelStyle: customStyle.Panel });
        }
        // to prevent the type of one children is object type
        var result = React__namespace.Children.toArray(children).map(function (child, index) {
            return React__namespace.cloneElement(child, tslib.__assign({ key: index, active: index === activeIndex, index: index }, props));
        });
        return React__namespace.createElement("div", null, result);
    };
    return PanelList;
}(React__namespace.PureComponent));

var PanelStyle = styled__default["default"].div(templateObject_1$1 || (templateObject_1$1 = tslib.__makeTemplateObject(["\n    text-align: left;\n    padding: 20px 15px;\n    ", "\n"], ["\n    text-align: left;\n    padding: 20px 15px;\n    ", "\n"])), function (props) { return (!props.active ? "display: none;" : null); });
var PanelComponent = /** @class */ (function (_super) {
    tslib.__extends(PanelComponent, _super);
    function PanelComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PanelComponent.prototype.render = function () {
        var _a = this.props, active = _a.active, index = _a.index;
        var Panel = this.props.CustomPanelStyle || PanelStyle;
        return (React__namespace.createElement(Panel, { role: "tabpanel", id: "react-tabtab-panel-".concat(index), "aria-labelledby": "react-tabtab-".concat(index), "aria-hidden": false, active: active }, active ? this.props.children : null));
    };
    return PanelComponent;
}(React__namespace.PureComponent));
var templateObject_1$1;

var AsyncPanelComponent = /** @class */ (function (_super) {
    tslib.__extends(AsyncPanelComponent, _super);
    function AsyncPanelComponent(props) {
        var _this = _super.call(this, props) || this;
        _this.loadPanel = _this.loadPanel.bind(_this);
        _this.cacheData = undefined;
        _this.state = {
            isLoading: false,
            data: undefined,
        };
        return _this;
    }
    AsyncPanelComponent.prototype.componentDidMount = function () {
        if (this.props.active)
            this.loadPanel();
    };
    AsyncPanelComponent.prototype.componentDidUpdate = function (prevProps) {
        this.props.active && !prevProps.active && this.loadPanel();
    };
    AsyncPanelComponent.prototype.loadPanel = function () {
        var _this = this;
        var _a = this.props, loadContent = _a.loadContent, cache = _a.cache;
        if (cache && this.cacheData) {
            this.setState({
                isLoading: false,
                data: this.cacheData,
            });
            return;
        }
        var callback = function (err, data) {
            if (err) {
                console.error('React-Tabtab async panel error:', err);
            }
            if (cache) {
                _this.cacheData = data;
            }
            _this.setState({
                isLoading: false,
                data: data,
            });
        };
        var promise = loadContent(callback);
        if (promise) {
            promise.then(function (data) { return callback(null, data); }, function (err) { return callback(err); });
        }
        if (!this.state.isLoading) {
            this.setState({ isLoading: true });
        }
    };
    AsyncPanelComponent.prototype.render = function () {
        var _a = this.props, render = _a.render, renderLoading = _a.renderLoading, CustomPanelStyle = _a.CustomPanelStyle, active = _a.active, index = _a.index;
        var _b = this.state, isLoading = _b.isLoading, data = _b.data;
        var content;
        if (isLoading) {
            content = renderLoading();
        }
        else {
            content = render(data);
        }
        return React__namespace.createElement(PanelComponent, tslib.__assign({}, { CustomPanelStyle: CustomPanelStyle, active: active, index: index }), content);
    };
    AsyncPanelComponent.defaultProps = {
        cache: true,
    };
    return AsyncPanelComponent;
}(React__namespace.PureComponent));

var Wrapper = styled__default["default"].button(templateObject_1 || (templateObject_1 = tslib.__makeTemplateObject(["\n    flex-shrink: 0;\n    align-self: center;\n    height: 100%;\n    width: 30px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 1.2em;\n    background: transparent;\n    border: none;\n    margin-top: 0;\n    padding: 3px;\n    margin-left: 2px;\n    display: inline-block;\n    color: #777;\n    vertical-align: middle;\n    user-select: none;\n    ", "\n    &:hover {\n        color: black;\n        cursor: pointer;\n    }\n    &:disabled,\n    &[disabled] {\n        border: 1px solid grey;\n        background-color: #e7e7e7;\n        cursor: not-allowed;\n    }\n"], ["\n    flex-shrink: 0;\n    align-self: center;\n    height: 100%;\n    width: 30px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 1.2em;\n    background: transparent;\n    border: none;\n    margin-top: 0;\n    padding: 3px;\n    margin-left: 2px;\n    display: inline-block;\n    color: #777;\n    vertical-align: middle;\n    user-select: none;\n    ", "\n    &:hover {\n        color: black;\n        cursor: pointer;\n    }\n    &:disabled,\n    &[disabled] {\n        border: 1px solid grey;\n        background-color: #e7e7e7;\n        cursor: not-allowed;\n    }\n"])), function (props) {
    return props.disabled
        ? "\n    pointer-events: none;\n    color: #AAA;\n    background: #F5F5F5;\n  "
        : null;
});
var ExtraButton = /** @class */ (function (_super) {
    tslib.__extends(ExtraButton, _super);
    function ExtraButton() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ExtraButton.prototype.render = function () {
        var _a = this.props, disabled = _a.disabled, onClick = _a.onClick;
        return (React__namespace.createElement(Wrapper, { onClick: onClick, disabled: disabled }, this.props.children));
    };
    ExtraButton.defaultProps = {
        disabled: false,
    };
    return ExtraButton;
}(React__namespace.PureComponent));
var templateObject_1;

function deleteHelper(sequence, deleteIndex) {
    return sequence.filter(function (_, i) { return i !== deleteIndex; });
}

var styled = { TabList: TabListStyle, ActionButton: ActionButtonStyle, Tab: TabStyle, Panel: PanelStyle };
var helpers = { simpleSwitch: sortable.arrayMove, deleteHelper: deleteHelper };

exports.AsyncPanel = AsyncPanelComponent;
exports.DragTab = DragTab;
exports.DragTabList = DragTabList;
exports.ExtraButton = ExtraButton;
exports.Panel = PanelComponent;
exports.PanelList = PanelList;
exports.Tab = Tab;
exports.TabList = TabListComponent;
exports.Tabs = Tabs;
exports.helpers = helpers;
exports.styled = styled;
