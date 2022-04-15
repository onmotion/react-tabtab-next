// @flow
import React, { FC, forwardRef, memo } from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

interface Props {
    id: string;
    activeIndex?: number;
    index?: number;
    children: React.ReactNode;
}
const DragTab: FC<Props> = memo(
    forwardRef<HTMLElement, Props>(({ children, id, index, activeIndex, ...rest }, ref) => {
        const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: id });

        const style = {
            transform: CSS.Transform.toString(transform),
            transition,
            // cursor: 'default',
        };

        return (
            <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
                {React.cloneElement(children as React.ReactElement, {
                    ...rest,
                    key: id,
                    active: index === activeIndex,
                    index,
                    tabIndex: id,
                    ref: ref,
                })}
            </div>
        );
    })
);

export default DragTab;
