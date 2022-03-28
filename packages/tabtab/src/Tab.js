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
exports.TabStyle = void 0;
var React = __importStar(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var CloseButton_1 = __importDefault(require("./CloseButton"));
var TabLi = React.forwardRef(function (props, ref) {
    return React.createElement("li", __assign({ ref: ref }, props), props.children);
});
var TabStyle = (0, styled_components_1.default)(TabLi)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: ", ";\n  ", "\n\n  user-select: none;\n  &:hover {\n    cursor: pointer;\n    color: black;\n  }\n"], ["\n  display: ", ";\n  ", "\n\n  user-select: none;\n  &:hover {\n    cursor: pointer;\n    color: black;\n  }\n"])), function (props) { return props.vertical ? 'block' : 'inline-block'; }, function (props) { return props.vertical ?
    "\n      background-color: white;\n      color: black;\n      padding: 10px 10px;\n      z-index: 100000;\n    "
    : function (props) { return props.closable ? 'padding: 10px 10px 10px 15px;' : 'padding: 10px 15px;'; }; });
exports.TabStyle = TabStyle;
var TabText = styled_components_1.default.span(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  vertical-align: middle;\n"], ["\n  vertical-align: middle;\n"])));
var Tab = (function (_super) {
    __extends(Tab, _super);
    function Tab(props) {
        var _this = _super.call(this, props) || this;
        _this.clickTab = _this.clickTab.bind(_this);
        _this.clickDelete = _this.clickDelete.bind(_this);
        return _this;
    }
    Tab.prototype.clickTab = function () {
        var _a = this.props, handleTabChange = _a.handleTabChange, index = _a.index;
        handleTabChange(index);
    };
    Tab.prototype.clickDelete = function (event) {
        event.stopPropagation();
        var _a = this.props, handleEdit = _a.handleEdit, index = _a.index;
        handleEdit({ type: 'delete', index: index });
    };
    Tab.prototype.render = function () {
        var _this = this;
        var _a = this.props, CustomTabStyle = _a.CustomTabStyle, active = _a.active, closable = _a.closable, vertical = _a.vertical, index = _a.index;
        var TabComponent = CustomTabStyle || TabStyle;
        return (React.createElement(TabComponent, { ref: function (node) { return _this.__INTERNAL_NODE = node; }, onClick: this.clickTab, active: active, vertical: vertical, closable: closable, role: "tab", id: "react-tabtab-tab-".concat(index), "aria-controls": "react-tabtab-panel-".concat(index), "aria-selected": active },
            React.createElement(TabText, null, this.props.children),
            closable ?
                React.createElement(CloseButton_1.default, { handleDelete: this.clickDelete })
                : null));
    };
    return Tab;
}(React.PureComponent));
exports.default = Tab;
var templateObject_1, templateObject_2;
