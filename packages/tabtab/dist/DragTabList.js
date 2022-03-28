"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-nocheck
const react_1 = __importDefault(require("react"));
const SortMethod_1 = __importDefault(require("./SortMethod"));
const react_sortable_hoc_1 = require("react-sortable-hoc");
const TabList_1 = __importDefault(require("./TabList"));
const DragTabContainer = (0, react_sortable_hoc_1.SortableContainer)(({ children, ...props }) => {
    return (react_1.default.createElement(TabList_1.default, { ...props }, children));
});
class DragTabList extends SortMethod_1.default {
    render() {
        const { children, ...props } = this.props;
        return (react_1.default.createElement(DragTabContainer, { onSortEnd: this.onSortEnd, axis: 'x', lockAxis: 'x', 
            // if no pressDelay, close button cannot be triggered,
            // because it would always treat click as dnd action
            pressDelay: 100, ...props }, children));
    }
}
exports.default = DragTabList;
DragTabList.displayName = 'DragTabList';
