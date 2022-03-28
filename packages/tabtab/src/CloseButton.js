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
var IconSvg_1 = require("./IconSvg");
var styled_components_1 = __importDefault(require("styled-components"));
var CloseWrapper = styled_components_1.default.button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: inline-block;\n  color: #777;\n  margin-left: 5px;\n  padding: 0;\n  vertical-align: middle;\n  border: 0;\n  padding: 2px;\n  outline: 0;\n  &:hover {\n    color: black;\n    background-color: #eee;\n    cursor: pointer;\n    border-radius: 50%;\n  }\n  > svg {\n    vertical-align: middle;\n  }\n"], ["\n  display: inline-block;\n  color: #777;\n  margin-left: 5px;\n  padding: 0;\n  vertical-align: middle;\n  border: 0;\n  padding: 2px;\n  outline: 0;\n  &:hover {\n    color: black;\n    background-color: #eee;\n    cursor: pointer;\n    border-radius: 50%;\n  }\n  > svg {\n    vertical-align: middle;\n  }\n"])));
var CloseButton = (function (_super) {
    __extends(CloseButton, _super);
    function CloseButton() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CloseButton.prototype.render = function () {
        return (React.createElement(CloseWrapper, { onClick: this.props.handleDelete },
            React.createElement(IconSvg_1.CloseIcon, null)));
    };
    return CloseButton;
}(React.PureComponent));
exports.default = CloseButton;
var templateObject_1;
