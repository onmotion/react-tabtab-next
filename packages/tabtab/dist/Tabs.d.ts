import React from 'react';
import { Panel, TabList } from '.';
import Tab from './Tab';
declare type TabsProps = {
    defaultIndex?: number;
    activeIndex?: number | null;
    showModalButton?: number | boolean;
    showArrowButton?: 'auto' | boolean;
    ExtraButton?: React.ReactNode;
    onTabChange?: (event: any) => void;
    onTabSequenceChange?: (event: any) => void;
    onTabEdit?: (event: any) => void;
    customStyle?: {
        TabList?: React.ElementType<TabList>;
        Tab?: React.ElementType<Tab>;
        Panel?: React.ElementType<Panel>;
        ActionButton?: JSX.Element;
    };
};
declare type State = {
    activeIndex: number;
};
export default class Tabs extends React.PureComponent<TabsProps, State> {
    constructor(props: TabsProps);
    static defaultProps: Partial<TabsProps>;
    getActiveIndex(props: TabsProps): number;
    componentDidUpdate(prevProps: Readonly<TabsProps>, prevState: Readonly<State>, snapshot?: any): void;
    handleTabChange(index: number): void;
    handleTabSequence({ oldIndex, newIndex }: {
        oldIndex: number;
        newIndex: number;
    }): void;
    handleEdit({ type, index }: {
        type: string;
        index: number;
    }): void;
    render(): JSX.Element;
}
export {};
