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
exports.TabStyle = void 0;
// @flow
const React = __importStar(require("react"));
const styled_components_1 = __importDefault(require("styled-components"));
const CloseButton_1 = __importDefault(require("./CloseButton"));
// const TabLi: React.FC<React.LiHTMLAttributes<HTMLLIElement> & TabProps> = (props: React.LiHTMLAttributes<HTMLLIElement>) => {
//   return <li {...props}></li>
// }
const TabLi = React.forwardRef((props, ref) => {
    return React.createElement("li", { ref: ref, ...props }, props.children);
});
const TabStyle = (0, styled_components_1.default)(TabLi) `
  display: ${props => props.vertical ? 'block' : 'inline-block'};
  ${props => props.vertical ?
    `
      background-color: white;
      color: black;
      padding: 10px 10px;
      z-index: 100000;
    `
    : props => props.closable ? 'padding: 10px 10px 10px 15px;' : 'padding: 10px 15px;'}

  user-select: none;
  &:hover {
    cursor: pointer;
    color: black;
  }
`;
exports.TabStyle = TabStyle;
const TabText = styled_components_1.default.span `
  vertical-align: middle;
`;
class Tab extends React.PureComponent {
    constructor(props) {
        super(props);
        this.clickTab = this.clickTab.bind(this);
        this.clickDelete = this.clickDelete.bind(this);
    }
    clickTab() {
        const { handleTabChange, index } = this.props;
        handleTabChange(index);
    }
    clickDelete(event) {
        event.stopPropagation(); // prevent trigger clickTab event.
        const { handleEdit, index } = this.props;
        handleEdit({ type: 'delete', index });
    }
    render() {
        const { CustomTabStyle, active, closable, vertical, index } = this.props;
        const TabComponent = CustomTabStyle || TabStyle;
        return (React.createElement(TabComponent, { ref: node => this.__INTERNAL_NODE = node, onClick: this.clickTab, active: active, vertical: vertical, closable: closable, role: "tab", id: `react-tabtab-tab-${index}`, "aria-controls": `react-tabtab-panel-${index}`, "aria-selected": active },
            React.createElement(TabText, null, this.props.children),
            closable ?
                React.createElement(CloseButton_1.default, { handleDelete: this.clickDelete })
                : null));
    }
}
exports.default = Tab;
