import React from 'react';
import { isTab, isTabList } from './isType';

function loopTabList(tabList: React.ReactElement[], cb: () => void) {
    React.Children.forEach(tabList, (tab) => {
        if (isTab(tab)) {
            cb();
        }
    });
}

function deepLoop(children: React.ReactElement[], cb: () => void) {
    React.Children.forEach(children, (child) => {
        if (isTabList(child)) {
            if (child.props && child.props.children) {
                return loopTabList(child.props.children, cb);
            } else {
                throw new Error('You need to provide `Tab` children');
            }
        } else if (child.props && child.props.children) {
            deepLoop(child.props.children, cb);
        }
    });
}

export default function countTab(children: React.ReactElement[]) {
    let count = 0;
    deepLoop(children, () => count++);
    return count;
}
