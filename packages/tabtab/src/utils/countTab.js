"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var isType_1 = require("./isType");
function loopTabList(tabList, cb) {
    react_1.default.Children.forEach(tabList, function (tab) {
        if ((0, isType_1.isTab)(tab)) {
            cb();
        }
    });
}
function deepLoop(children, cb) {
    react_1.default.Children.forEach(children, function (child) {
        if ((0, isType_1.isTabList)(child)) {
            if (child.props && child.props.children) {
                return loopTabList(child.props.children, cb);
            }
            else {
                throw new Error('You need to provide `Tab` children');
            }
        }
        else if (child.props && child.props.children) {
            deepLoop(child.props.children, cb);
        }
    });
}
function countTab(children) {
    var count = 0;
    deepLoop(children, function () { return count++; });
    return count;
}
exports.default = countTab;
