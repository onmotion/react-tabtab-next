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
  border-bottom: 1px solid #dbdbdb;
`;
TabStyle = (0, styled_components_1.default)(TabStyle) `
  position: relative;
  color: #4a4a4a;
  border: 0;
  padding: 13px 19px;
  margin-bottom: -1px;
  &::after {
    z-index: 10;
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    height: 2px;
    background: #dbdbdb;
  }
  ${(props) => props.active && !props.vertical
    ? `
      &::after {
        background: #3273dc;
      }
    `
    : null}
  &:hover::after {
    background: #3273dc;
  }
`;
ActionButtonStyle = (0, styled_components_1.default)(ActionButtonStyle) `
  background-color: transparent;
  border-radius: 0;
  &:hover {
    background-color: #eee;
  }
`;
PanelStyle = (0, styled_components_1.default)(PanelStyle) ``;
exports.default = {
    TabList: TabListStyle,
    ActionButton: ActionButtonStyle,
    Tab: TabStyle,
    Panel: PanelStyle
};
