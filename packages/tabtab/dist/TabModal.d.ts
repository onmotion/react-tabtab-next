import * as React from 'react';
declare type Props = {
    closeModal: (event: any) => void;
    handleTabSequence: (event: any) => void;
    handleTabChange: (event: any) => void;
    activeIndex: number;
    children: React.ReactNode;
};
export default class TabModal extends React.Component<Props> {
    render(): JSX.Element;
}
export {};
