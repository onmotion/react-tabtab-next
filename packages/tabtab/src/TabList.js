"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var React = __importStar(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var invariant_1 = __importDefault(require("invariant"));
var IconSvg_1 = require("./IconSvg");
var isType_1 = require("./utils/isType");
var TabModal_1 = __importDefault(require("./TabModal"));
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
var TabListStyle = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background-color: white;\n  text-align: left;\n  position: relative;\n  white-space: nowrap;\n  overflow: hidden;\n  width: auto;\n  padding: ", ";\n"], ["\n  background-color: white;\n  text-align: left;\n  position: relative;\n  white-space: nowrap;\n  overflow: hidden;\n  width: auto;\n  padding: ", ";\n"])), function (props) { return getPadding(props); });
exports.TabListStyle = TabListStyle;
var ListInner = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  overflow: hidden;\n"], ["\n  overflow: hidden;\n"])));
var ListScroll = styled_components_1.default.ul(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  padding-left: 0;\n  position: relative;\n  margin: 0;\n  list-style: none;\n  display: inline-block;\n  transition: transform .3s cubic-bezier(.42, 0, .58, 1);\n"], ["\n  padding-left: 0;\n  position: relative;\n  margin: 0;\n  list-style: none;\n  display: inline-block;\n  transition: transform .3s cubic-bezier(.42, 0, .58, 1);\n"])));
var ActionButtonStyle = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  height: 100%;\n  width: ", "px;\n  text-align: center;\n  border: 1px solid #d9d9d9;\n  border-bottom: 0;\n  border-radius: 4px 4px 0 0;\n  background: #f9f9f9;\n  > svg {\n    padding-top: 11px;\n  }\n"], ["\n  height: 100%;\n  width: ", "px;\n  text-align: center;\n  border: 1px solid #d9d9d9;\n  border-bottom: 0;\n  border-radius: 4px 4px 0 0;\n  background: #f9f9f9;\n  > svg {\n    padding-top: 11px;\n  }\n"])), buttonWidth);
exports.ActionButtonStyle = ActionButtonStyle;
var makeScrollButton = function (ActionButton) { return (0, styled_components_1.default)(ActionButton)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  display: inline-block;\n  filter: none;\n  position: absolute;\n  ", ";\n  &:hover {\n    cursor: pointer;\n  }\n"], ["\n  display: inline-block;\n  filter: none;\n  position: absolute;\n  ", ";\n  &:hover {\n    cursor: pointer;\n  }\n"])), function (props) { return props.left ?
    props.showModalButton ? "left: ".concat(buttonWidth + 2, "px") : "left: 0"
    : 'right: 0'; }); };
var makeFoldButton = function (ActionButton) { return (0, styled_components_1.default)(ActionButton)(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  display: inline-block;\n  filter: none;\n  position: absolute;\n  left: 0;\n  &:hover {\n    cursor: pointer;\n  }\n"], ["\n  display: inline-block;\n  filter: none;\n  position: absolute;\n  left: 0;\n  &:hover {\n    cursor: pointer;\n  }\n"]))); };
var TabListComponent = (function (_super) {
    __extends(TabListComponent, _super);
    function TabListComponent(props) {
        var _this = _super.call(this, props) || this;
        _this.handleScroll = _this.handleScroll.bind(_this);
        _this.toggleModal = _this.toggleModal.bind(_this);
        _this.renderTabs = _this.renderTabs.bind(_this);
        _this.renderArrowButton = _this.renderArrowButton.bind(_this);
        _this.isShowModalButton = _this.isShowModalButton.bind(_this);
        _this.isShowArrowButton = _this.isShowArrowButton.bind(_this);
        _this.scrollPosition = 0;
        _this.tabRefs = [];
        _this.state = {
            modalIsOpen: false,
            showArrowButton: false,
            showModalButton: false
        };
        return _this;
    }
    TabListComponent.prototype.componentDidMount = function () {
        this.isShowArrowButton();
        this.isShowModalButton();
        if (this.props.activeIndex > 0)
            this.scrollToIndex(this.props.activeIndex, 'left');
    };
    TabListComponent.prototype.componentDidUpdate = function (prevProps, prevState) {
        if (prevProps.children.length !== this.props.children.length) {
            this.isShowArrowButton();
            this.isShowModalButton();
        }
        if (prevProps.activeIndex !== this.props.activeIndex) {
            var rectSide = this.props.activeIndex === this.props.children.length - 1 ? 'right' : 'left';
            this.scrollToIndex(this.props.activeIndex, rectSide);
        }
        if (prevState.showArrowButton && !this.state.showArrowButton) {
            this.scrollToZero();
        }
        if (prevProps.showModalButton !== this.props.showModalButton) {
            this.isShowModalButton();
        }
        if (prevProps.showArrowButton !== this.props.showArrowButton) {
            this.isShowArrowButton();
        }
    };
    TabListComponent.prototype.getTabNode = function (tab) {
        if (tab.__INTERNAL_NODE) {
            return tab.__INTERNAL_NODE;
        }
        else if (tab.__DRAG_TAB_INTERNAL_NODE) {
            return tab.__DRAG_TAB_INTERNAL_NODE.node;
        }
    };
    TabListComponent.prototype.unifyScrollMax = function (width) {
        return (width / 3) * 2;
    };
    TabListComponent.prototype.handleScroll = function (direction) {
        var leftMove = 0;
        var containerOffset = this.listContainer.getBoundingClientRect();
        var containerWidth = this.listContainer.offsetWidth;
        var tabFirstOffset = this.getTabNode(this.tabRefs[0]).getBoundingClientRect();
        var tabLastOffset = this.getTabNode(this.tabRefs[this.tabRefs.length - 1]).getBoundingClientRect();
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
        this.listScroll.style.transform = "translate3d(-".concat(this.scrollPosition, "px, 0, 0)");
    };
    TabListComponent.prototype.scrollToIndex = function (index, rectSide) {
        var tabOffset = this.getTabNode(this.tabRefs[index]).getBoundingClientRect();
        var containerOffset = this.listContainer.getBoundingClientRect();
        if (tabOffset.right < containerOffset.right &&
            tabOffset.left > containerOffset.left)
            return;
        var leftMove = tabOffset[rectSide] - containerOffset[rectSide];
        this.scrollPosition += leftMove;
        if (this.scrollPosition < 0) {
            this.scrollPosition = 0;
        }
        this.listScroll.style.transform = "translate3d(-".concat(this.scrollPosition, "px, 0, 0)");
    };
    TabListComponent.prototype.scrollToZero = function () {
        this.listScroll.style.transform = "translate3d(0, 0, 0)";
    };
    TabListComponent.prototype.toggleModal = function (open) {
        var _this = this;
        this.setState({ modalIsOpen: open }, function () {
            if (!open) {
                _this.scrollToIndex(_this.props.activeIndex, 'right');
            }
        });
    };
    TabListComponent.prototype.isShowModalButton = function () {
        var showModalButton = this.props.showModalButton;
        if ((0, isType_1.isNumber)(showModalButton)) {
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
        var _a = this.props, children = _a.children, activeIndex = _a.activeIndex, handleTabChange = _a.handleTabChange, handleEdit = _a.handleEdit, customStyle = _a.customStyle;
        var props = {
            handleTabChange: handleTabChange,
            handleEdit: handleEdit,
            CustomTabStyle: customStyle.Tab
        };
        if (!isModal) {
            this.tabRefs = [];
        }
        return React.Children.map(children, function (child, index) { return (React.cloneElement(child, __assign(__assign({ key: index, active: index === activeIndex, index: index, tabIndex: index, ref: function (node) {
                if (!isModal && node) {
                    _this.tabRefs.push(node);
                }
            } }, props), options))); });
    };
    TabListComponent.prototype.renderArrowButton = function (ScrollButton) {
        var _this = this;
        var showArrowButton = this.state.showArrowButton;
        if (showArrowButton) {
            return (React.createElement("div", null,
                React.createElement(ScrollButton, { left: true, onClick: function () { _this.handleScroll('left'); }, ref: function (node) { return _this.leftArrowNode = node; }, showModalButton: this.state.showModalButton },
                    React.createElement(IconSvg_1.LeftIcon, null)),
                React.createElement(ScrollButton, { onClick: function () { _this.handleScroll('right'); }, ref: function (node) { return _this.rightArrowNode = node; } },
                    React.createElement(IconSvg_1.RightIcon, null))));
        }
        return null;
    };
    TabListComponent.prototype.render = function () {
        var _this = this;
        var _a = this.props, customStyle = _a.customStyle, activeIndex = _a.activeIndex, handleTabChange = _a.handleTabChange, handleTabSequence = _a.handleTabSequence, ExtraButton = _a.ExtraButton;
        var modalIsOpen = this.state.modalIsOpen;
        var TabList = customStyle.TabList || TabListStyle;
        var ActionButton = customStyle.ActionButton || ActionButtonStyle;
        var ScrollButton = makeScrollButton(ActionButton);
        var FoldButton = makeFoldButton(ActionButton);
        (0, invariant_1.default)(this.props.children, 'React-tabtab Error: You MUST pass at least one tab');
        return (React.createElement("div", null,
            ExtraButton ? ExtraButton : null,
            React.createElement(TabList, { hasExtraButton: !!ExtraButton, showModalButton: this.state.showModalButton, showArrowButton: this.state.showArrowButton },
                this.state.showModalButton ?
                    React.createElement(FoldButton, { ref: function (node) { return _this.foldNode = node; }, onClick: this.toggleModal.bind(this, true), showArrowButton: this.state.showArrowButton },
                        React.createElement(IconSvg_1.BulletIcon, null))
                    : null,
                this.renderArrowButton(ScrollButton),
                React.createElement(ListInner, { ref: function (node) { return _this.listContainer = node; } },
                    React.createElement(ListScroll, { ref: function (node) { return _this.listScroll = node; }, role: "tablist" }, this.renderTabs()))),
            modalIsOpen ?
                React.createElement(TabModal_1.default, { closeModal: this.toggleModal.bind(this, false), handleTabSequence: handleTabSequence, handleTabChange: handleTabChange, activeIndex: activeIndex }, this.renderTabs({ vertical: true }, true))
                : null));
    };
    return TabListComponent;
}(React.Component));
exports.default = TabListComponent;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
