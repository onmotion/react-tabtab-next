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
const React = __importStar(require("react"));
// @ts-ignore
const react_poppop_1 = __importDefault(require("react-poppop"));
const react_sortable_hoc_1 = require("react-sortable-hoc");
const SortMethod_1 = __importDefault(require("./SortMethod"));
const DragTabContainer = (0, react_sortable_hoc_1.SortableContainer)(({ children }) => {
    return (React.createElement("div", { style: { marginTop: '50px' } }, children));
});
class ModalTabListWrapper extends SortMethod_1.default {
    render() {
        return (React.createElement(DragTabContainer, { onSortEnd: this.onSortEnd, axis: 'y', lockAxis: 'y', 
            // if no pressDelay, close button cannot be triggered,
            // because it would always treat click as dnd action
            pressDelay: 100 }, this.props.children));
    }
}
class TabModal extends React.Component {
    render() {
        return (React.createElement(react_poppop_1.default, { open: true, onClose: this.props.closeModal, closeOnEsc: true, closeBtn: true },
            React.createElement(ModalTabListWrapper, { handleTabSequence: this.props.handleTabSequence, handleTabChange: this.props.handleTabChange, activeIndex: this.props.activeIndex }, this.props.children)));
    }
}
exports.default = TabModal;
