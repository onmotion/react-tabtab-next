import React, { useCallback, useMemo, useState } from 'react';
import { makeData } from './data';
import { Tabs, DragTab, Panel, DragTabList, PanelList, helpers } from '../../packages/tabtab/src';
import { md, bootstrap, bulma } from '../../packages/themes/src';

export default function App() {
    const [activeTab, setActiveTab] = useState(0);
    const [tabs, setTabs] = useState(makeData(10, 'DragTab'));

    const tabItems = useMemo(() => {
        return tabs.map((tab, index) => {
            return <DragTab key={index}>{tab.title}</DragTab>;
        });
    }, [tabs]);

    const panelItems = useMemo(() => {
        return tabs.map((tab, index) => {
            return <Panel key={index}>{tab.content}</Panel>;
        });
    }, [tabs]);

    const handleOnTabSequenceChange = useCallback(
        ({ oldIndex, newIndex }: { oldIndex: number; newIndex: number }) => {
            setTabs(helpers.simpleSwitch(tabs, oldIndex, newIndex));
            setActiveTab(newIndex);
        },
        [tabs]
    );

    const handleOnTabChange = useCallback((i) => {
        console.log(i);
        setActiveTab(i);
    }, []);

    return (
        <div className="App">
            <Tabs
                customStyle={md}
                activeIndex={activeTab}
                onTabChange={handleOnTabChange}
                onTabSequenceChange={handleOnTabSequenceChange}
            >
                <DragTabList>{tabItems}</DragTabList>
                <PanelList>{panelItems}</PanelList>
            </Tabs>
            <br />
            <Tabs
                customStyle={bootstrap}
                activeIndex={activeTab}
                onTabChange={handleOnTabChange}
                onTabSequenceChange={handleOnTabSequenceChange}
            >
                <DragTabList>{tabItems}</DragTabList>
                <PanelList>{panelItems}</PanelList>
            </Tabs>
            <br />
            <Tabs
                customStyle={bulma}
                activeIndex={activeTab}
                onTabChange={handleOnTabChange}
                onTabSequenceChange={handleOnTabSequenceChange}
            >
                <DragTabList>{tabItems}</DragTabList>
                <PanelList>{panelItems}</PanelList>
            </Tabs>
        </div>
    );
}
