import { FC } from 'react';
import { TabProps } from './Tab';
import { TabsProps } from './Tabs';
interface IDragTabListProps {
    onTabSequenceChange?: TabsProps['onTabSequenceChange'];
}
declare const DragTabList: FC<IDragTabListProps & Partial<TabProps>>;
export default DragTabList;
