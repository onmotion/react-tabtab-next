import React, { FC, memo, useCallback, useEffect, useMemo, useState } from 'react';
import { DndContext, useSensor, useSensors, MouseSensor, DndContextProps } from '@dnd-kit/core';
import { arrayMove, SortableContext } from '@dnd-kit/sortable';
import DragTab from './DragTab';
import { TabList } from '.';
import { TabProps } from './Tab';
import { TabsProps } from './Tabs';

interface IDragTabListProps {
    onTabSequenceChange?: TabsProps['onTabSequenceChange'];
}

const DragTabList: FC<IDragTabListProps & Partial<TabProps>> = memo(({ children, ...props }) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        setItems(React.Children.map(children, (_, i) => i.toString()));
    }, [children]);

    const mouseSensor = useSensor(MouseSensor, {
        // Require the mouse to move by 10 pixels before activating
        activationConstraint: {
            distance: 10,
        },
    });

    const sensors = useSensors(mouseSensor);

    const handleOnDragEnd: DndContextProps['onDragEnd'] = useCallback(
        (event) => {
            const { active, over } = event;
            if (!props.onTabSequenceChange || !over?.id) {
                return;
            }

            if (active.id !== over.id) {
                //arrayMove(children as [], Number(active.id), Number(over.id));
                props.onTabSequenceChange({ newIndex: Number(over.id), oldIndex: Number(active.id) });
            }
        },
        [props.onTabSequenceChange]
    );

    return (
        <div style={{}}>
            <DndContext sensors={sensors} onDragEnd={handleOnDragEnd}>
                <SortableContext items={items}>
                    <TabList {...props}>
                        {React.Children.map(children, (child, i) => (
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
