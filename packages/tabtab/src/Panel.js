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
exports.PanelStyle = void 0;
var React = __importStar(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var PanelStyle = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background-color: white;\n  text-align: left;\n  padding: 20px 15px;\n  ", "\n"], ["\n  background-color: white;\n  text-align: left;\n  padding: 20px 15px;\n  ", "\n"])), function (props) { return !props.active ? "display: none;" : null; });
exports.PanelStyle = PanelStyle;
var PanelComponent = (function (_super) {
    __extends(PanelComponent, _super);
    function PanelComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PanelComponent.prototype.render = function () {
        var _a = this.props, active = _a.active, index = _a.index;
        var Panel = this.props.CustomPanelStyle || PanelStyle;
        return (React.createElement(Panel, { role: "tabpanel", id: "react-tabtab-panel-".concat(index), "aria-labelledby": "react-tabtab-".concat(index), "aria-hidden": false, active: active }, active ?
            this.props.children
            : null));
    };
    return PanelComponent;
}(React.PureComponent));
exports.default = PanelComponent;
var templateObject_1;
