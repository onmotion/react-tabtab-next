import * as React from 'react';
import { TabListProps } from './TabList';
export declare type SortMathodComponentProps = {
    handleTabChange?: (event: any) => void;
    handleTabSequence?: (event: any) => void;
    activeIndex?: number;
};
export default class SortMethod extends React.PureComponent<SortMathodComponentProps & TabListProps> {
    constructor(props: SortMathodComponentProps & TabListProps);
    onSortEnd({ oldIndex, newIndex }: {
        oldIndex: number;
        newIndex: number;
    }): void;
}
