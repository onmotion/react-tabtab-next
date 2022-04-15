import React, { FC } from 'react';
interface Props {
    id: string;
    activeIndex?: number;
    index?: number;
    children: React.ReactNode;
}
declare const DragTab: FC<Props>;
export default DragTab;
