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
const styled_components_1 = __importDefault(require("styled-components"));
const Wrapper = styled_components_1.default.button `
  float: right;
  border: 1px solid #eee;
  border-radius: 2px;
  padding: 3px;
  margin-top: 10px;
  margin-left: 2px;
  display: inline-block;
  color: #777;
  vertical-align: middle;
  /* ${props => props.disabled ? `
    pointer-events: none;
    color: #AAA;
    background: #F5F5F5;
  `
    : null} */
  &:hover {
    color: black;
    cursor: pointer;
  }
  &:disabled,
  &[disabled]{
    border: 1px solid grey;
    background-color: #e7e7e7;
    cursor: not-allowed;
  }
`;
class ExtraButton extends React.PureComponent {
    render() {
        const { disabled, onClick } = this.props;
        return (React.createElement(Wrapper, { onClick: onClick, disabled: disabled }, this.props.children));
    }
}
exports.default = ExtraButton;
ExtraButton.defaultProps = {
    disabled: false
};
