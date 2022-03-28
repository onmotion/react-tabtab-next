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
var React = __importStar(require("react"));
var react_poppop_1 = __importDefault(require("react-poppop"));
var react_sortable_hoc_1 = require("react-sortable-hoc");
var SortMethod_1 = __importDefault(require("./SortMethod"));
var DragTabContainer = (0, react_sortable_hoc_1.SortableContainer)(function (_a) {
    var children = _a.children;
    return (React.createElement("div", { style: { marginTop: '50px' } }, children));
});
var ModalTabListWrapper = (function (_super) {
    __extends(ModalTabListWrapper, _super);
    function ModalTabListWrapper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ModalTabListWrapper.prototype.render = function () {
        return (React.createElement(DragTabContainer, { onSortEnd: this.onSortEnd, axis: 'y', lockAxis: 'y', pressDelay: 100 }, this.props.children));
    };
    return ModalTabListWrapper;
}(SortMethod_1.default));
var TabModal = (function (_super) {
    __extends(TabModal, _super);
    function TabModal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TabModal.prototype.render = function () {
        return (React.createElement(react_poppop_1.default, { open: true, onClose: this.props.closeModal, closeOnEsc: true, closeBtn: true },
            React.createElement(ModalTabListWrapper, { handleTabSequence: this.props.handleTabSequence, handleTabChange: this.props.handleTabChange, activeIndex: this.props.activeIndex }, this.props.children)));
    };
    return TabModal;
}(React.Component));
exports.default = TabModal;
