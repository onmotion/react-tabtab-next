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
const IconSvg_1 = require("./IconSvg");
const styled_components_1 = __importDefault(require("styled-components"));
const CloseWrapper = styled_components_1.default.button `
  display: inline-block;
  color: #777;
  margin-left: 5px;
  padding: 0;
  vertical-align: middle;
  border: 0;
  padding: 2px;
  outline: 0;
  &:hover {
    color: black;
    background-color: #eee;
    cursor: pointer;
    border-radius: 50%;
  }
  > svg {
    vertical-align: middle;
  }
`;
class CloseButton extends React.PureComponent {
    render() {
        return (React.createElement(CloseWrapper, { onClick: this.props.handleDelete },
            React.createElement(IconSvg_1.CloseIcon, null)));
    }
}
exports.default = CloseButton;
