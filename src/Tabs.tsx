
import React from "react";

type TabsProps = {
  defaultIndex?: number,
  activeIndex?: number | null,
  showModalButton?: number | boolean,
  showArrowButton?: 'auto' | boolean ,
  ExtraButton?: React.ReactNode,
  onTabChange?: (event: any) => void,
  onTabSequenceChange?: (event: any) => void,
  onTabEdit?: (event: any) => void,
  customStyle?: {
    TabList?: () => void,
    Tab?: () => void,
    Panel?: () => void,
    ActionButton?: () => void
  },
  children: React.ReactElement
};

type State = {
  activeIndex: number
};

export class Tabs extends React.Component<TabsProps, State> {
  constructor(props: TabsProps) {
    super(props);
    this.handleTabChange = this.handleTabChange.bind(this);
    this.handleTabSequence = this.handleTabSequence.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.state = {
      activeIndex: this.getActiveIndex(props)
    };
  }

  static defaultProps: Partial<TabsProps> = {
    showModalButton: 4,
    showArrowButton: 'auto',
    onTabChange: () => {},
    onTabSequenceChange: () => {},
    customStyle: {
      TabList: null,
      Tab: null,
      Panel: null,
      ActionButton: null
    }
  }

  getActiveIndex(props: TabsProps) {
    const {defaultIndex, activeIndex} = props;
    if (activeIndex)
      return activeIndex;
    if (defaultIndex)
      return defaultIndex;
    return 0;
  }

  componentWillReceiveProps(nextProps: TabsProps) {
    if (nextProps.activeIndex !== this.props.activeIndex) {
      this.setState({activeIndex: this.getActiveIndex(nextProps)});
    }
  }

  handleTabChange(index: number) {
    const {activeIndex, onTabChange} = this.props;
    if (activeIndex !== 0 && !activeIndex) {
      this.setState({activeIndex: index});
    }
    if (onTabChange) {
      onTabChange(index);      
    }
  }

  handleTabSequence({oldIndex, newIndex}: {oldIndex: number, newIndex: number}) {
    const {onTabSequenceChange} = this.props;
    if (onTabSequenceChange) {
      onTabSequenceChange({oldIndex, newIndex});
    }
  }

  handleEdit({type, index}: {type: string, index: number}) {
    const {onTabEdit} = this.props;
    if (onTabEdit) {
      onTabEdit({type, index});
    }
  }

  render() {
    const {children, ...extraProps} = this.props;
    const {activeIndex} = this.state;
    const props = {
      handleTabChange: this.handleTabChange,
      handleTabSequence: this.handleTabSequence,
      handleEdit: this.handleEdit,
      activeIndex,
      ...extraProps
    }

    return (
      <div>
        {React.Children.map(children, (child) => {
          return React.cloneElement(child, props);
        })}
      </div>
    )
  }
}
