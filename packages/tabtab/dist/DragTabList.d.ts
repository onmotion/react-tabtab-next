import React, { FC } from 'react';
import { TabProps } from './Tab';
import { TabsProps } from './Tabs';
interface IDragTabListProps {
    onTabSequenceChange?: TabsProps['onTabSequenceChange'];
    children: React.ReactNode;
}
declare const DragTabList: FC<IDragTabListProps & Partial<TabProps>>;
export default DragTabList;
