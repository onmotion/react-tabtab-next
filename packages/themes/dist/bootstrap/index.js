"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = __importDefault(require("styled-components"));
const tabtab_1 = require("@react-tabtab-next/tabtab");
let { TabListStyle, ActionButtonStyle, TabStyle, PanelStyle } = tabtab_1.styled;
TabListStyle = (0, styled_components_1.default)(TabListStyle) `
  border-bottom: 1px solid #eee;
`;
TabStyle = (0, styled_components_1.default)(TabStyle) `
  border-top-left-radius: .25rem;
  border-top-right-radius: .25rem;
  color: ${(props) => (props.active ? "black" : "#007bff")};
  border: 1px solid transparent;
  ${(props) => props.vertical
    ? `
      border-top: 1px solid transparent;
      border-bottom: 1px solid #efefef;
      border-left: 1px solid #efefef;
      border-right: 1px solid #efefef;
      border-radius: 0;
      &:first-child {
        border-top: 1px solid #efefef;        
      }
    `
    : `
      &:hover {
        border-color: #ddd #ddd #fff;
      }
  `}
  ${(props) => props.active && props.vertical
    ? `
      background-color: #eee;
    `
    : null}
  ${(props) => props.active && !props.vertical
    ? `
      border-color: #ddd #ddd #fff;
    `
    : null}
`;
exports.default = {
    TabList: TabListStyle,
    ActionButton: ActionButtonStyle,
    Tab: TabStyle,
    Panel: PanelStyle
};
