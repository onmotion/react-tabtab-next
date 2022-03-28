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
var SortMethod_1 = __importDefault(require("./SortMethod"));
var react_sortable_hoc_1 = require("react-sortable-hoc");
var TabList_1 = __importDefault(require("./TabList"));
var DragTabContainer = (0, react_sortable_hoc_1.SortableContainer)(function (_a) {
    var children = _a.children, props = __rest(_a, ["children"]);
    return (react_1.default.createElement(TabList_1.default, __assign({}, props), children));
});
var DragTabList = (function (_super) {
    __extends(DragTabList, _super);
    function DragTabList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DragTabList.prototype.render = function () {
        var _a = this.props, children = _a.children, props = __rest(_a, ["children"]);
        return (react_1.default.createElement(DragTabContainer, __assign({ onSortEnd: this.onSortEnd, axis: 'x', lockAxis: 'x', pressDelay: 100 }, props), children));
    };
    return DragTabList;
}(SortMethod_1.default));
exports.default = DragTabList;
DragTabList.displayName = 'DragTabList';
