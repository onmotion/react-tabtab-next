// @flow
import * as React from 'react';
import { SortableElement, SortableElementProps } from 'react-sortable-hoc';
import Tab, { TabProps } from './Tab';

const DragTabElement = SortableElement(({ ...props }: Partial<TabProps>) => {
    return <Tab {...props} index={Number(props.tabIndex)}></Tab>;
});

class DragTab extends React.PureComponent {
    __DRAG_TAB_INTERNAL_NODE: React.Component<Partial<TabProps> & SortableElementProps, any, any>;

    render() {
        const { ...props } = this.props;
        return (
            <DragTabElement
                index={0}
                ref={(node) => (this.__DRAG_TAB_INTERNAL_NODE = node)}
                {...props}
            ></DragTabElement>
        );
    }
}

export default DragTab;
