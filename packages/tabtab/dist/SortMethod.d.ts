import * as React from 'react';
declare type Props = {
    handleTabChange: (event: any) => void;
    handleTabSequence: (event: any) => void;
    activeIndex: number;
    children: React.ReactNode;
};
export default class SortMethod extends React.PureComponent<Props> {
    constructor(props: Props);
    onSortEnd({ oldIndex, newIndex }: {
        oldIndex: number;
        newIndex: number;
    }): void;
}
export {};
