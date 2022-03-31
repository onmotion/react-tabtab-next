import * as React from 'react';
import { memo } from 'react';
import { FC } from 'react';

export interface TabListElementProps {
    showArrowButton?: 'auto' | boolean;
    showModalButton?: number | boolean;
}

export const TabListElement: FC<TabListElementProps> = memo(({ showArrowButton, showModalButton, ...props }) => {
    return <div {...props}></div>;
});
