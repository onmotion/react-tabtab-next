"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = __importDefault(require("styled-components"));
const tabtab_1 = require("@react-tabtab-next/tabtab");
let { TabListStyle, ActionButtonStyle, TabStyle, PanelStyle } = tabtab_1.styled;
TabListStyle = (0, styled_components_1.default)(TabListStyle) `
  background-color: #fff;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12),
    0 3px 1px -2px rgba(0, 0, 0, 0.2);
  border: 0;
`;
TabStyle = (0, styled_components_1.default)(TabStyle) `
  color: rgba(238, 110, 115, 0.7);
  // transition: color 0.28s ease;
  border: 0;
  ${(props) => props.active && !props.vertical
    ? `
      border-bottom: 2px solid #f6b2b5;
    `
    : null}
  &:hover {
    background-color: transparent;
    color: #ee6e73;
    border-bottom: 2px solid #f6b2b5;
  }
`;
ActionButtonStyle = (0, styled_components_1.default)(ActionButtonStyle) `
  background-color: transparent;
  border-radius: 0;
  &:hover {
    background-color: #eee;
  }
`;
PanelStyle = (0, styled_components_1.default)(PanelStyle) `
  border-left: 1px solid rgba(0, 0, 0, 0.12);
  border-right: 1px solid rgba(0, 0, 0, 0.12);
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
  padding: 30px 30px;
  border-radius: 2px;
`;
exports.default = {
    TabList: TabListStyle,
    ActionButton: ActionButtonStyle,
    Tab: TabStyle,
    Panel: PanelStyle
};
