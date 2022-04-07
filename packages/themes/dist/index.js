'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var styled = require('styled-components');
var tabtab = require('@react-tabtab-next/tabtab');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);

var TabList$2 = tabtab.styled.TabList, ActionButton$2 = tabtab.styled.ActionButton, Tab$2 = tabtab.styled.Tab, Panel$2 = tabtab.styled.Panel;
TabList$2 = styled__default["default"](TabList$2)(templateObject_1$2 || (templateObject_1$2 = tslib.__makeTemplateObject(["\n    background-color: #fff;\n    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.07), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.15);\n    border: 0;\n"], ["\n    background-color: #fff;\n    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.07), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.15);\n    border: 0;\n"])));
Tab$2 = styled__default["default"](Tab$2)(templateObject_2$2 || (templateObject_2$2 = tslib.__makeTemplateObject(["\n    & span {\n        transition: color 0.18s;\n        color: rgba(238, 110, 115, 0.7);\n        ", "\n    }\n\n    ", "\n    &:hover {\n        background-color: transparent;\n        & span {\n            color: #ee6e73;\n        }\n\n        border-bottom: 2px solid #f6b2b5;\n    }\n"], ["\n    & span {\n        transition: color 0.18s;\n        color: rgba(238, 110, 115, 0.7);\n        ", "\n    }\n\n    ", "\n    &:hover {\n        background-color: transparent;\n        & span {\n            color: #ee6e73;\n        }\n\n        border-bottom: 2px solid #f6b2b5;\n    }\n"])), function (props) {
    return props.active ? "color: #ee6e73;" : null;
}, function (props) {
    return props.active && !props.vertical
        ? "\n      border-bottom: 2px solid #f6b2b5;\n    "
        : null;
});
ActionButton$2 = styled__default["default"](ActionButton$2)(templateObject_3$1 || (templateObject_3$1 = tslib.__makeTemplateObject(["\n    background-color: transparent;\n    border-radius: 0;\n    &:hover {\n        background-color: #eee;\n    }\n"], ["\n    background-color: transparent;\n    border-radius: 0;\n    &:hover {\n        background-color: #eee;\n    }\n"])));
Panel$2 = styled__default["default"](Panel$2)(templateObject_4$1 || (templateObject_4$1 = tslib.__makeTemplateObject(["\n    border-left: 1px solid rgba(0, 0, 0, 0.12);\n    border-right: 1px solid rgba(0, 0, 0, 0.12);\n    border-bottom: 1px solid rgba(0, 0, 0, 0.12);\n    padding: 30px 30px;\n    border-radius: 2px;\n"], ["\n    border-left: 1px solid rgba(0, 0, 0, 0.12);\n    border-right: 1px solid rgba(0, 0, 0, 0.12);\n    border-bottom: 1px solid rgba(0, 0, 0, 0.12);\n    padding: 30px 30px;\n    border-radius: 2px;\n"])));
var index$2 = {
    TabList: TabList$2,
    ActionButton: ActionButton$2,
    Tab: Tab$2,
    Panel: Panel$2,
};
var templateObject_1$2, templateObject_2$2, templateObject_3$1, templateObject_4$1;

var TabList$1 = tabtab.styled.TabList, ActionButton$1 = tabtab.styled.ActionButton, Tab$1 = tabtab.styled.Tab, Panel$1 = tabtab.styled.Panel;
TabList$1 = styled__default["default"](TabList$1)(templateObject_1$1 || (templateObject_1$1 = tslib.__makeTemplateObject(["\n    background-color: #fff;\n    border-bottom: 1px solid #dbdbdb;\n"], ["\n    background-color: #fff;\n    border-bottom: 1px solid #dbdbdb;\n"])));
Tab$1 = styled__default["default"](Tab$1)(templateObject_2$1 || (templateObject_2$1 = tslib.__makeTemplateObject(["\n    position: relative;\n    color: #4a4a4a;\n    border: 0;\n    padding: 13px 19px;\n    margin-bottom: -1px;\n    &::after {\n        z-index: 10;\n        content: '';\n        position: absolute;\n        left: 0;\n        bottom: 0;\n        right: 0;\n        height: 2px;\n        background: #dbdbdb;\n    }\n    ", "\n    &:hover::after {\n        background: #3273dc;\n    }\n"], ["\n    position: relative;\n    color: #4a4a4a;\n    border: 0;\n    padding: 13px 19px;\n    margin-bottom: -1px;\n    &::after {\n        z-index: 10;\n        content: '';\n        position: absolute;\n        left: 0;\n        bottom: 0;\n        right: 0;\n        height: 2px;\n        background: #dbdbdb;\n    }\n    ", "\n    &:hover::after {\n        background: #3273dc;\n    }\n"])), function (props) {
    return props.active && !props.vertical
        ? "\n      &::after {\n        background: #3273dc;\n      }\n    "
        : null;
});
ActionButton$1 = styled__default["default"](ActionButton$1)(templateObject_3 || (templateObject_3 = tslib.__makeTemplateObject(["\n    background-color: transparent;\n    border-radius: 0;\n    &:hover {\n        background-color: #eee;\n    }\n"], ["\n    background-color: transparent;\n    border-radius: 0;\n    &:hover {\n        background-color: #eee;\n    }\n"])));
Panel$1 = styled__default["default"](Panel$1)(templateObject_4 || (templateObject_4 = tslib.__makeTemplateObject([""], [""])));
var index$1 = {
    TabList: TabList$1,
    ActionButton: ActionButton$1,
    Tab: Tab$1,
    Panel: Panel$1,
};
var templateObject_1$1, templateObject_2$1, templateObject_3, templateObject_4;

var TabList = tabtab.styled.TabList, Tab = tabtab.styled.Tab;
var ActionButton = tabtab.styled.ActionButton, Panel = tabtab.styled.Panel;
TabList = styled__default["default"](TabList)(templateObject_1 || (templateObject_1 = tslib.__makeTemplateObject(["\n    border-bottom: 1px solid #eee;\n"], ["\n    border-bottom: 1px solid #eee;\n"])));
Tab = styled__default["default"](Tab)(templateObject_2 || (templateObject_2 = tslib.__makeTemplateObject(["\n    & span {\n        transition: color 0.18s;\n        color: ", ";\n    }\n    border-top-left-radius: 0.25rem;\n    border-top-right-radius: 0.25rem;\n\n    border: 1px solid transparent;\n    &:hover {\n        & span {\n            color: #000;\n        }\n    }\n    ", "\n    ", "\n  ", "\n"], ["\n    & span {\n        transition: color 0.18s;\n        color: ", ";\n    }\n    border-top-left-radius: 0.25rem;\n    border-top-right-radius: 0.25rem;\n\n    border: 1px solid transparent;\n    &:hover {\n        & span {\n            color: #000;\n        }\n    }\n    ", "\n    ", "\n  ", "\n"])), function (props) { return (props.active ? 'black' : '#007bff'); }, function (props) {
    return props.vertical
        ? "\n      border-top: 1px solid transparent;\n      border-bottom: 1px solid #efefef;\n      border-left: 1px solid #efefef;\n      border-right: 1px solid #efefef;\n      border-radius: 0;\n      &:first-child {\n        border-top: 1px solid #efefef;        \n      }\n    "
        : "\n     \n  ";
}, function (props) {
    return props.active && props.vertical
        ? "\n      background-color: #eee;\n    "
        : null;
}, function (props) {
    return props.active && !props.vertical
        ? "\n      border-color: #ddd #ddd #fff;\n    "
        : null;
});
var index = {
    TabList: TabList,
    ActionButton: ActionButton,
    Tab: Tab,
    Panel: Panel,
};
var templateObject_1, templateObject_2;

exports.bootstrap = index;
exports.bulma = index$1;
exports.md = index$2;
