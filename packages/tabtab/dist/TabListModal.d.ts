import { DndContextProps } from '@dnd-kit/core';
import { SortableContextProps } from '@dnd-kit/sortable';
import { FC } from 'react';
import ReactModal from 'react-modal';
import './styles/modal.css';
interface ITabListModalProps extends ReactModal.Props {
    dndContextProps?: DndContextProps;
    sortableContextProps?: Omit<SortableContextProps, 'children'>;
    isOpen: boolean;
    onRequestClose: ReactModal.Props['onRequestClose'];
}
export declare const TabListModal: FC<ITabListModalProps>;
export {};
