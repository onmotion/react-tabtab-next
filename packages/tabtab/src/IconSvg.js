"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BulletIcon = exports.RightIcon = exports.LeftIcon = exports.CloseIcon = void 0;
var react_1 = __importDefault(require("react"));
var Svg = function (_a) {
    var d = _a.d;
    return (react_1.default.createElement("svg", { viewBox: "0 0 40 40", fill: "currentColor", height: "1em", width: "1em", style: { verticalAlign: 'middle' } },
        react_1.default.createElement("g", null,
            react_1.default.createElement("path", { d: d }))));
};
var CloseIcon = function () { return (react_1.default.createElement(Svg, { d: "m31.6 10.7l-9.3 9.3 9.3 9.3-2.3 2.3-9.3-9.3-9.3 9.3-2.3-2.3 9.3-9.3-9.3-9.3 2.3-2.3 9.3 9.3 9.3-9.3z" })); };
exports.CloseIcon = CloseIcon;
var LeftIcon = function () { return (react_1.default.createElement(Svg, { d: "m25.7 12.3l-7.7 7.7 7.7 7.7-2.3 2.3-10-10 10-10z" })); };
exports.LeftIcon = LeftIcon;
var RightIcon = function () { return (react_1.default.createElement(Svg, { d: "m16.6 10l10 10-10 10-2.3-2.3 7.7-7.7-7.7-7.7z" })); };
exports.RightIcon = RightIcon;
var BulletIcon = function () { return (react_1.default.createElement(Svg, { d: "m31.7 28.3h-23.4c-1.8 0-3.3 1.5-3.3 3.4s1.5 3.3 3.3 3.3h23.4c1.8 0 3.3-1.5 3.3-3.3s-1.5-3.4-3.3-3.4z m0-11.6h-23.4c-1.8 0-3.3 1.5-3.3 3.3s1.5 3.3 3.3 3.3h23.4c1.8 0 3.3-1.5 3.3-3.3s-1.5-3.3-3.3-3.3z m0-11.7h-23.4c-1.8 0-3.3 1.5-3.3 3.3s1.5 3.4 3.3 3.4h23.4c1.8 0 3.3-1.5 3.3-3.4s-1.5-3.3-3.3-3.3z" })); };
exports.BulletIcon = BulletIcon;
