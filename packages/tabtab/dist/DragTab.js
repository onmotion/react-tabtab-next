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
// @flow
const React = __importStar(require("react"));
const react_sortable_hoc_1 = require("react-sortable-hoc");
const Tab_1 = __importDefault(require("./Tab"));
const DragTabElement = (0, react_sortable_hoc_1.SortableElement)(({ children, ...props }) => {
    return (
    // @ts-ignore
    React.createElement(Tab_1.default, { ...props, index: props.tabIndex }, children));
});
class DragTab extends React.PureComponent {
    render() {
        const { children, ...props } = this.props;
        return (React.createElement(DragTabElement, { index: 0, ref: node => this.__DRAG_TAB_INTERNAL_NODE = node, ...props }, children));
    }
}
exports.default = DragTab;
