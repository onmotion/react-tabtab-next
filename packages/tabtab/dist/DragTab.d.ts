import * as React from 'react';
import { SortableElementProps } from 'react-sortable-hoc';
import { TabProps } from './Tab';
declare class DragTab extends React.PureComponent {
    __DRAG_TAB_INTERNAL_NODE: React.Component<Partial<TabProps> & SortableElementProps, any, any>;
    render(): JSX.Element;
}
export default DragTab;
