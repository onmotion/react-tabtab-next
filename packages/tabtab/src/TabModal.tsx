import * as React from 'react';
import { SortableContainer } from 'react-sortable-hoc';
import SortMethod from './SortMethod';
import ReactModal from 'react-modal';
import styled from 'styled-components';

ReactModal.setAppElement('#root');

type Props = {
    closeModal: (event: any) => void;
    handleTabSequence: (event: any) => void;
    handleTabChange: (event: any) => void;
    activeIndex: number;
    children: React.ReactNode[];
};

const DragTabContainer = SortableContainer(({ children }: { children: React.ReactNode }) => {
    return <div>{children}</div>;
});

class ModalTabListWrapper extends SortMethod {
    render() {
        return (
            <DragTabContainer
                onSortEnd={this.onSortEnd}
                axis="y"
                lockAxis="y"
                // if no pressDelay, close button cannot be triggered,
                // because it would always treat click as dnd action
                pressDelay={100}
            >
                {this.props.children}
            </DragTabContainer>
        );
    }
}

const Modal = styled(ReactModal)`
    margin: auto;
    background-color: #fff;
    width: 200px;
    padding: 20px;
    margin-top: 40px;
    border: 1px solid #00000022;
`;
export default class TabModal extends React.Component<Props> {
    render() {
        return (
            <Modal isOpen={true} contentLabel="Modal" onRequestClose={this.props.closeModal} className="tabtab-modal">
                <ModalTabListWrapper
                    handleTabSequence={this.props.handleTabSequence}
                    handleTabChange={this.props.handleTabChange}
                    activeIndex={this.props.activeIndex}
                >
                    {this.props.children}
                </ModalTabListWrapper>
            </Modal>
        );
    }
}
