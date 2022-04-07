import React, { FC, memo, useMemo, useState } from 'react';
import {
    DndContext,
    closestCenter,
    KeyboardSensor,
    PointerSensor,
    useSensor,
    useSensors,
    MouseSensor,
} from '@dnd-kit/core';
import {
    arrayMove,
    SortableContext,
    sortableKeyboardCoordinates,
    verticalListSortingStrategy,
    horizontalListSortingStrategy,
} from '@dnd-kit/sortable';
import DragTab from './DragTab';
import { TabList } from '.';

interface IDragTabListProps {}

const DragTabList: FC<IDragTabListProps> = memo((props) => {
    const items = useMemo(() => React.Children.map(props.children, (_, i) => i.toString()), [props.children]);

    const mouseSensor = useSensor(MouseSensor, {
        // Require the mouse to move by 10 pixels before activating
        activationConstraint: {
            distance: 10,
        },
    });

    const sensors = useSensors(mouseSensor);

    return (
        <div style={{ display: 'flex' }}>
            <DndContext sensors={sensors}>
                <SortableContext items={items} strategy={horizontalListSortingStrategy}>
                    <TabList {...props}>
                        {React.Children.map(props.children, (child, i) => (
                            <DragTab id={i.toString()} key={i} index={i} {...props}>
                                {child}
                            </DragTab>
                        ))}
                    </TabList>
                </SortableContext>
            </DndContext>
        </div>
    );
});

export default DragTabList;
