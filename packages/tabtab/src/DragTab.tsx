// @flow
import * as React from "react"
import { SortableElement } from "react-sortable-hoc"
import Tab, { TabProps } from "./Tab"

const DragTabElement = SortableElement(
  ({ children, ...props }: Partial<TabProps>) => {
    return (
      // @ts-ignore
      <Tab {...props} index={props.tabIndex}>
        {children}
      </Tab>
    )
  }
)

class DragTab extends React.PureComponent {
  __DRAG_TAB_INTERNAL_NODE: React.ElementRef<any>

  render() {
    const { children, ...props } = this.props
    return (
      <DragTabElement
        index={0}
        ref={(node) => (this.__DRAG_TAB_INTERNAL_NODE = node)}
        {...props}
      >
        {children}
      </DragTabElement>
    )
  }
}

export default DragTab
