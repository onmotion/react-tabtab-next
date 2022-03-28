import React from "react";
declare type TabsProps = {
    defaultIndex?: number;
    activeIndex?: number | null;
    showModalButton?: number | boolean;
    showArrowButton?: "auto" | boolean;
    ExtraButton?: React.ReactNode;
    onTabChange?: (event: any) => void;
    onTabSequenceChange?: (event: any) => void;
    onTabEdit?: (event: any) => void;
    customStyle?: {
        TabList?: () => void;
        Tab?: () => void;
        Panel?: () => void;
        ActionButton?: () => void;
    };
    children: React.ReactElement;
};
declare type State = {
    activeIndex: number;
};
export default class Tabs extends React.Component<TabsProps, State> {
    constructor(props: TabsProps);
    static defaultProps: Partial<TabsProps>;
    getActiveIndex(props: TabsProps): number;
    componentWillReceiveProps(nextProps: TabsProps): void;
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
