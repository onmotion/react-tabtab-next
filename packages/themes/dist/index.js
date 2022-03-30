'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var styled = require('styled-components');
var tabtab = require('@react-tabtab-next/tabtab');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);

var TabListStyle$2 = tabtab.styled.TabListStyle, ActionButtonStyle$2 = tabtab.styled.ActionButtonStyle, TabStyle$2 = tabtab.styled.TabStyle, PanelStyle$2 = tabtab.styled.PanelStyle;
TabListStyle$2 = styled__default["default"](TabListStyle$2)(templateObject_1$2 || (templateObject_1$2 = tslib.__makeTemplateObject(["\n    background-color: #fff;\n    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);\n    border: 0;\n"], ["\n    background-color: #fff;\n    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);\n    border: 0;\n"])));
TabStyle$2 = styled__default["default"](TabStyle$2)(templateObject_2$2 || (templateObject_2$2 = tslib.__makeTemplateObject(["\n    color: rgba(238, 110, 115, 0.7);\n    // transition: color 0.28s ease;\n    border: 0;\n    ", "\n    &:hover {\n        background-color: transparent;\n        color: #ee6e73;\n        border-bottom: 2px solid #f6b2b5;\n    }\n"], ["\n    color: rgba(238, 110, 115, 0.7);\n    // transition: color 0.28s ease;\n    border: 0;\n    ", "\n    &:hover {\n        background-color: transparent;\n        color: #ee6e73;\n        border-bottom: 2px solid #f6b2b5;\n    }\n"])), function (props) {
    return props.active && !props.vertical
        ? "\n      border-bottom: 2px solid #f6b2b5;\n    "
        : null;
});
ActionButtonStyle$2 = styled__default["default"](ActionButtonStyle$2)(templateObject_3$1 || (templateObject_3$1 = tslib.__makeTemplateObject(["\n    background-color: transparent;\n    border-radius: 0;\n    &:hover {\n        background-color: #eee;\n    }\n"], ["\n    background-color: transparent;\n    border-radius: 0;\n    &:hover {\n        background-color: #eee;\n    }\n"])));
PanelStyle$2 = styled__default["default"](PanelStyle$2)(templateObject_4$1 || (templateObject_4$1 = tslib.__makeTemplateObject(["\n    border-left: 1px solid rgba(0, 0, 0, 0.12);\n    border-right: 1px solid rgba(0, 0, 0, 0.12);\n    border-bottom: 1px solid rgba(0, 0, 0, 0.12);\n    padding: 30px 30px;\n    border-radius: 2px;\n"], ["\n    border-left: 1px solid rgba(0, 0, 0, 0.12);\n    border-right: 1px solid rgba(0, 0, 0, 0.12);\n    border-bottom: 1px solid rgba(0, 0, 0, 0.12);\n    padding: 30px 30px;\n    border-radius: 2px;\n"])));
var index$2 = {
    TabList: TabListStyle$2,
    ActionButton: ActionButtonStyle$2,
    Tab: TabStyle$2,
    Panel: PanelStyle$2,
};
var templateObject_1$2, templateObject_2$2, templateObject_3$1, templateObject_4$1;

var TabListStyle$1 = tabtab.styled.TabListStyle, ActionButtonStyle$1 = tabtab.styled.ActionButtonStyle, TabStyle$1 = tabtab.styled.TabStyle, PanelStyle$1 = tabtab.styled.PanelStyle;
TabListStyle$1 = styled__default["default"](TabListStyle$1)(templateObject_1$1 || (templateObject_1$1 = tslib.__makeTemplateObject(["\n    background-color: #fff;\n    border-bottom: 1px solid #dbdbdb;\n"], ["\n    background-color: #fff;\n    border-bottom: 1px solid #dbdbdb;\n"])));
TabStyle$1 = styled__default["default"](TabStyle$1)(templateObject_2$1 || (templateObject_2$1 = tslib.__makeTemplateObject(["\n    position: relative;\n    color: #4a4a4a;\n    border: 0;\n    padding: 13px 19px;\n    margin-bottom: -1px;\n    &::after {\n        z-index: 10;\n        content: '';\n        position: absolute;\n        left: 0;\n        bottom: 0;\n        right: 0;\n        height: 2px;\n        background: #dbdbdb;\n    }\n    ", "\n    &:hover::after {\n        background: #3273dc;\n    }\n"], ["\n    position: relative;\n    color: #4a4a4a;\n    border: 0;\n    padding: 13px 19px;\n    margin-bottom: -1px;\n    &::after {\n        z-index: 10;\n        content: '';\n        position: absolute;\n        left: 0;\n        bottom: 0;\n        right: 0;\n        height: 2px;\n        background: #dbdbdb;\n    }\n    ", "\n    &:hover::after {\n        background: #3273dc;\n    }\n"])), function (props) {
    return props.active && !props.vertical
        ? "\n      &::after {\n        background: #3273dc;\n      }\n    "
        : null;
});
ActionButtonStyle$1 = styled__default["default"](ActionButtonStyle$1)(templateObject_3 || (templateObject_3 = tslib.__makeTemplateObject(["\n    background-color: transparent;\n    border-radius: 0;\n    &:hover {\n        background-color: #eee;\n    }\n"], ["\n    background-color: transparent;\n    border-radius: 0;\n    &:hover {\n        background-color: #eee;\n    }\n"])));
PanelStyle$1 = styled__default["default"](PanelStyle$1)(templateObject_4 || (templateObject_4 = tslib.__makeTemplateObject([""], [""])));
var index$1 = {
    TabList: TabListStyle$1,
    ActionButton: ActionButtonStyle$1,
    Tab: TabStyle$1,
    Panel: PanelStyle$1,
};
var templateObject_1$1, templateObject_2$1, templateObject_3, templateObject_4;

var TabListStyle = tabtab.styled.TabListStyle, TabStyle = tabtab.styled.TabStyle;
var ActionButtonStyle = tabtab.styled.ActionButtonStyle, PanelStyle = tabtab.styled.PanelStyle;
TabListStyle = styled__default["default"](TabListStyle)(templateObject_1 || (templateObject_1 = tslib.__makeTemplateObject(["\n    border-bottom: 1px solid #eee;\n"], ["\n    border-bottom: 1px solid #eee;\n"])));
TabStyle = styled__default["default"](TabStyle)(templateObject_2 || (templateObject_2 = tslib.__makeTemplateObject(["\n    border-top-left-radius: 0.25rem;\n    border-top-right-radius: 0.25rem;\n    color: ", ";\n    border: 1px solid transparent;\n    ", "\n    ", "\n  ", "\n"], ["\n    border-top-left-radius: 0.25rem;\n    border-top-right-radius: 0.25rem;\n    color: ", ";\n    border: 1px solid transparent;\n    ", "\n    ", "\n  ", "\n"])), function (props) { return (props.active ? 'black' : '#007bff'); }, function (props) {
    return props.vertical
        ? "\n      border-top: 1px solid transparent;\n      border-bottom: 1px solid #efefef;\n      border-left: 1px solid #efefef;\n      border-right: 1px solid #efefef;\n      border-radius: 0;\n      &:first-child {\n        border-top: 1px solid #efefef;        \n      }\n    "
        : "\n      &:hover {\n        border-color: #ddd #ddd #fff;\n      }\n  ";
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
    TabList: TabListStyle,
    ActionButton: ActionButtonStyle,
    Tab: TabStyle,
    Panel: PanelStyle,
};
var templateObject_1, templateObject_2;

exports.bootstrap = index;
exports.bulma = index$1;
exports.md = index$2;
