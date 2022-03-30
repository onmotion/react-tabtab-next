import React from 'react';
import SortMethod, { SortMathodComponentProps } from './SortMethod';
import { SortableContainer } from 'react-sortable-hoc';
import TabList, { TabListProps } from './TabList';

const DragTabContainer = SortableContainer(({ ...props }: TabListProps) => {
    return <TabList {...props}></TabList>;
});

export default class DragTabListComponent extends SortMethod {
    render() {
        const { ...props } = this.props;
        return (
            <DragTabContainer
                onSortEnd={this.onSortEnd}
                axis="x"
                lockAxis="x"
                // if no pressDelay, close button cannot be triggered,
                // because it would always treat click as dnd action
                pressDelay={100}
                {...props}
            ></DragTabContainer>
        );
    }
}
