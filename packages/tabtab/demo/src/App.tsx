import React, { useMemo, useState } from 'react';
import { makeData } from './data';
import { Tabs, DragTab, Panel, DragTabList, PanelList, helpers } from '../../src/index';
import { md } from './themes';

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

    return (
        <div className="App">
            <Tabs
                customStyle={md}
                activeIndex={activeTab}
                onTabChange={(i) => {
                    console.log(i);
                    setActiveTab(i);
                }}
                onTabSequenceChange={({ oldIndex, newIndex }: { oldIndex: number; newIndex: number }) => {
                    setTabs(helpers.simpleSwitch(tabs, oldIndex, newIndex));
                }}
            >
                <DragTabList>{tabItems}</DragTabList>
                <PanelList>{panelItems}</PanelList>
            </Tabs>
        </div>
    );
}
