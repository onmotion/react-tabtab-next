// @flow
import * as React from 'react';
import styled from 'styled-components';
import CloseButton from './CloseButton';

const TabStyle = styled.li`
  display: ${props => props.vertical ? 'block': 'inline-block'};
  ${props => props.vertical ?
    `
      background-color: white;
      color: black;
      padding: 10px 10px;
      z-index: 100000;
    `
  : props => props.closable ? 'padding: 10px 10px 10px 15px;' : 'padding: 10px 15px;'
  }

  user-select: none;
  &:hover {
    cursor: pointer;
    color: black;
  }
`;

const TabText = styled.span`
  vertical-align: middle;
`;

export type TabProps = {
  CustomTabStyle: () => void,
  handleTabChange: (event: any) => void,
  handleEdit: (event: any) => void,
  index: number,
  active: boolean,
  closable: boolean,
  vertical: boolean,
  children: React.ReactNode
};

export default class Tab extends React.PureComponent<TabProps> {

  __INTERNAL_NODE: React.ElementRef<any>;

  constructor(props: TabProps) {
    super(props);
    this.clickTab = this.clickTab.bind(this);
    this.clickDelete = this.clickDelete.bind(this);
  }

  clickTab() {
    const {handleTabChange, index} = this.props;
    handleTabChange(index);
  }

  clickDelete(event: SyntheticEvent<HTMLButtonElement>) {
    event.stopPropagation(); // prevent trigger clickTab event.
    const {handleEdit, index} = this.props;
    handleEdit({type: 'delete', index});
  }

  render() {
    const {CustomTabStyle, active, closable, vertical, index} = this.props;
    const TabComponent = CustomTabStyle || TabStyle;
    return (
      <TabComponent ref={node => this.__INTERNAL_NODE = node}
                    onClick={this.clickTab}
                    active={active}
                    vertical={vertical}
                    closable={closable}
                    role="tab"
                    id={`react-tabtab-tab-${index}`}
                    aria-controls={`react-tabtab-panel-${index}`}
                    aria-selected={active}>
        <TabText>{this.props.children}</TabText>
        {closable ?
          <CloseButton handleDelete={this.clickDelete}/>
        : null}
      </TabComponent>
    )
  }
}

export {
  TabStyle
};