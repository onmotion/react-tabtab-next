"use strict";
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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Tabs = (function (_super) {
    __extends(Tabs, _super);
    function Tabs(props) {
        var _this = _super.call(this, props) || this;
        _this.handleTabChange = _this.handleTabChange.bind(_this);
        _this.handleTabSequence = _this.handleTabSequence.bind(_this);
        _this.handleEdit = _this.handleEdit.bind(_this);
        _this.state = {
            activeIndex: _this.getActiveIndex(props)
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
    Tabs.prototype.componentWillReceiveProps = function (nextProps) {
        if (nextProps.activeIndex !== this.props.activeIndex) {
            this.setState({ activeIndex: this.getActiveIndex(nextProps) });
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
    Tabs.prototype.handleEdit = function (_a) {
        var type = _a.type, index = _a.index;
        var onTabEdit = this.props.onTabEdit;
        if (onTabEdit) {
            onTabEdit({ type: type, index: index });
        }
    };
    Tabs.prototype.render = function () {
        var _a = this.props, children = _a.children, extraProps = __rest(_a, ["children"]);
        var activeIndex = this.state.activeIndex;
        var props = __assign({ handleTabChange: this.handleTabChange, handleTabSequence: this.handleTabSequence, handleEdit: this.handleEdit, activeIndex: activeIndex }, extraProps);
        return (react_1.default.createElement("div", null, react_1.default.Children.map(children, function (child) {
            return react_1.default.cloneElement(child, props);
        })));
    };
    Tabs.defaultProps = {
        showModalButton: 4,
        showArrowButton: "auto",
        onTabChange: function () { },
        onTabSequenceChange: function () { },
        customStyle: {
            TabList: null,
            Tab: null,
            Panel: null,
            ActionButton: null
        }
    };
    return Tabs;
}(react_1.default.Component));
exports.default = Tabs;
