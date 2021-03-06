import React, { PropsWithChildren } from 'react';
import { PanelProps } from './Panel';
import { TabElementProps } from './Tab';
import { TabListElementProps } from './TabListElement';
export declare type TabsProps = {
    defaultIndex?: number;
    activeIndex?: number | null;
    showModalButton?: number | boolean;
    showArrowButton?: 'auto' | boolean;
    ExtraButton?: React.ReactNode;
    onTabChange?: (index: number) => void;
    onTabSequenceChange?: (e: {
        oldIndex: number;
        newIndex: number;
    }) => void;
    onTabClose?: (index: number) => void;
    customStyle?: {
        TabList?: React.ElementType<TabListElementProps>;
        Tab?: React.ElementType<TabElementProps>;
        Panel?: React.ElementType<PanelProps>;
        ActionButton?: React.ElementType;
    };
};
declare type State = {
    activeIndex: number;
};
export default class Tabs extends React.PureComponent<PropsWithChildren<TabsProps>, State> {
    constructor(props: TabsProps);
    static defaultProps: Partial<TabsProps>;
    getActiveIndex(props: TabsProps): number;
    componentDidUpdate(prevProps: Readonly<TabsProps>, prevState: Readonly<State>, snapshot?: any): void;
    handleTabChange(index: number): void;
    handleTabSequence({ oldIndex, newIndex }: {
        oldIndex: number;
        newIndex: number;
    }): void;
    handleTabClose(index: number): void;
    render(): JSX.Element;
}
export {};
