import { TabsProps } from '../../../packages/tabtab/src/Tabs';
import React, { FC, memo } from 'react';
import { Tabs, DragTabList, PanelList, Tab, Panel } from '../../../packages/tabtab/src';
import * as customStyle from './tabsTheme';

interface IProps extends Partial<TabsProps> {
    tabItems: React.ReactElement<Tab>[];
    panelItems: React.ReactElement<Panel>[];
}

export const CustomThemeExample: FC<IProps> = memo(({ tabItems, panelItems, ...rest }) => {
    return (
        <>
            <Tabs customStyle={customStyle} {...rest}>
                <DragTabList>{tabItems}</DragTabList>
                <PanelList>{panelItems}</PanelList>
            </Tabs>
        </>
    );
});
