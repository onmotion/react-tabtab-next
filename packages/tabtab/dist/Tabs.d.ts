import React from 'react';
import { PanelProps } from './Panel';
import { TabElementProps } from './Tab';
import { TabListElementProps } from './TabListElement';
export declare type TabsProps = {
    defaultIndex?: number;
    activeIndex?: number | null;
    showModalButton?: number | boolean;
    showArrowButton?: 'auto' | boolean;
    ExtraButton?: React.ReactNode;
    onTabChange?: (event: any) => void;
    onTabSequenceChange?: (e: {
        oldIndex: number;
        newIndex: number;
    }) => void;
    onTabEdit?: (event: any) => void;
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
