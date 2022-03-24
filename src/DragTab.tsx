// @flow
import * as React from 'react';
import {SortableElement} from 'react-sortable-hoc';
import Tab from './Tab';

const DragTabElement = SortableElement(({children, ...props}) => {
  return (
    // @ts-ignore
    <Tab index={props.tabIndex} {...props}>
      {children}
    </Tab>
  )
});



class DragTab extends React.PureComponent {

  __DRAG_TAB_INTERNAL_NODE: React.ElementRef<any>;

  render() {
    const {children, ...props} = this.props;
    return (
      <DragTabElement ref={node => this.__DRAG_TAB_INTERNAL_NODE = node} {...props}>
        {children}
      </DragTabElement>
    )
  }
}

// DragTab.displayName = 'DragTab';

export default DragTab;