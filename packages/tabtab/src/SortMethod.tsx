// @flow
import * as React from 'react';
import { TabListProps } from './TabList';

export type SortMathodComponentProps = {
    handleTabChange?: (event: any) => void;
    handleTabSequence?: (event: any) => void;
    activeIndex?: number;
};

export default class SortMethod extends React.PureComponent<SortMathodComponentProps & TabListProps> {
    constructor(props: SortMathodComponentProps & TabListProps) {
        super(props);
        this.onSortEnd = this.onSortEnd.bind(this);
    }

    onSortEnd({ oldIndex, newIndex }: { oldIndex: number; newIndex: number }) {
        const { activeIndex, handleTabChange, handleTabSequence } = this.props;
        if (activeIndex === undefined) {
            return;
        }
        if (oldIndex === newIndex) {
            if (activeIndex !== oldIndex) {
                handleTabChange && handleTabChange(oldIndex);
            }
        } else {
            handleTabSequence && handleTabSequence({ oldIndex, newIndex });
        }
    }
}
