import React, { PropsWithChildren } from 'react';
import { PanelProps } from './Panel';
import { TabElementProps } from './Tab';
import { TabListElementProps } from './TabListElement';

export type TabsProps = {
    defaultIndex?: number;
    activeIndex?: number | null;
    showModalButton?: number | boolean;
    showArrowButton?: 'auto' | boolean;
    ExtraButton?: React.ReactNode;
    onTabChange?: (index: number) => void;
    onTabSequenceChange?: (e: { oldIndex: number; newIndex: number }) => void;
    onTabClose?: (index: number) => void;
    customStyle?: {
        TabList?: React.ElementType<TabListElementProps>;
        Tab?: React.ElementType<TabElementProps>;
        Panel?: React.ElementType<PanelProps>;
        ActionButton?: React.ElementType;
    };
};

type State = {
    activeIndex: number;
};

export default class Tabs extends React.PureComponent<PropsWithChildren<TabsProps>, State> {
    constructor(props: TabsProps) {
        super(props);
        this.handleTabChange = this.handleTabChange.bind(this);
        this.handleTabSequence = this.handleTabSequence.bind(this);
        this.handleTabClose = this.handleTabClose.bind(this);
        this.state = {
            activeIndex: this.getActiveIndex(props),
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
            ActionButton: null,
        },
    };

    getActiveIndex(props: TabsProps) {
        const { defaultIndex, activeIndex } = props;
        if (activeIndex) return activeIndex;
        if (defaultIndex) return defaultIndex;
        return 0;
    }
    componentDidUpdate(prevProps: Readonly<TabsProps>, prevState: Readonly<State>, snapshot?: any): void {
        if (prevProps.activeIndex !== this.props.activeIndex) {
            this.setState({ activeIndex: this.getActiveIndex(this.props) });
        }
    }

    handleTabChange(index: number) {
        const { activeIndex, onTabChange } = this.props;
        if (activeIndex !== 0 && !activeIndex) {
            this.setState({ activeIndex: index });
        }
        if (onTabChange) {
            onTabChange(index);
        }
    }

    handleTabSequence({ oldIndex, newIndex }: { oldIndex: number; newIndex: number }) {
        const { onTabSequenceChange } = this.props;
        if (onTabSequenceChange) {
            onTabSequenceChange({ oldIndex, newIndex });
        }
    }

    handleTabClose(index: number) {
        const { onTabClose } = this.props;
        if (onTabClose) {
            onTabClose(index);
        }
    }

    render() {
        const { children, ...extraProps } = this.props;
        const { activeIndex } = this.state;
        console.log('render Tabs');

        const props = {
            handleTabChange: this.handleTabChange,
            handleTabSequence: this.handleTabSequence,
            handleTabClose: this.handleTabClose,
            activeIndex,
            ...extraProps,
        };

        return (
            <div className="tabtab-container">
                {React.Children.map(children, (child) => {
                    return React.cloneElement(child as React.ReactElement, props);
                })}
            </div>
        );
    }
}
