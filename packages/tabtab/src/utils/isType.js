"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isNumber = exports.isTab = exports.isTabList = void 0;
function isTabList(element) {
    return element.type &&
        (element.type.displayName === 'TabList' || element.type.displayName === 'DragTabList');
}
exports.isTabList = isTabList;
function isTab(element) {
    return element.type &&
        (element.type.displayName === 'Tab' || element.type.displayName === 'DragTab');
}
exports.isTab = isTab;
function isNumber(number) {
    return !isNaN(parseInt(number, 10));
}
exports.isNumber = isNumber;
