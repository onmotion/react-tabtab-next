import { DndContext, DndContextProps } from '@dnd-kit/core';
import { SortableContext, SortableContextProps } from '@dnd-kit/sortable';
import React, { FC, memo } from 'react';
import ReactModal from 'react-modal';
import './styles/modal.css';

interface ITabListModalProps extends ReactModal.Props {
    dndContextProps?: DndContextProps;
    sortableContextProps?: Omit<SortableContextProps, 'children'>;
    isOpen: boolean;
    onRequestClose: ReactModal.Props['onRequestClose'];
}

export const TabListModal: FC<ITabListModalProps> = memo(
    ({ children, isOpen, dndContextProps, sortableContextProps, ...props }) => {
        console.log('render TabListModal');

        return (
            <>
                {dndContextProps ? (
                    <DndContext {...dndContextProps}>
                        <SortableContext {...sortableContextProps}>
                            <ReactModal
                                isOpen={isOpen}
                                closeTimeoutMS={300}
                                {...props}
                                contentLabel="Modal"
                                className="tabtab-modal"
                            >
                                {children}
                            </ReactModal>
                        </SortableContext>
                    </DndContext>
                ) : (
                    <ReactModal
                        isOpen={isOpen}
                        closeTimeoutMS={300}
                        {...props}
                        contentLabel="Modal"
                        className="tabtab-modal"
                    >
                        {children}
                    </ReactModal>
                )}
            </>
        );
    }
);
