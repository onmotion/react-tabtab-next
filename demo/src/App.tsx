import React, { useCallback, useMemo, useState } from 'react';
import { makeData } from './data';
import { Tabs, Panel, DragTabList, PanelList, helpers, Tab, TabList } from '../../packages/tabtab/src';
import { md, bootstrap, bulma } from '../../packages/themes/src';

export default function App() {
    const [activeTab, setActiveTab] = useState(0);
    const [tabs, setTabs] = useState(makeData(73, 'Some Tab'));

    const staticTabItems = useMemo(() => {
        return tabs.map((tab, index) => {
            return (
                <Tab closable key={index}>
                    {tab.title}
                </Tab>
            );
        });
    }, [tabs]);

    const panelItems = useMemo(() => {
        return tabs.map((tab, index) => {
            return <Panel key={index}>{tab.content}</Panel>;
        });
    }, [tabs]);

    const handleOnTabSequenceChange = useCallback(({ oldIndex, newIndex }: { oldIndex: number; newIndex: number }) => {
        console.log({ oldIndex, newIndex });
        setTabs((tabs) => helpers.simpleSwitch(tabs, oldIndex, newIndex));
        setActiveTab(newIndex);
    }, []);

    const handleOnTabChange = useCallback((i) => {
        console.log(i);
        setActiveTab(i);
    }, []);

    return (
        <div className="App">
            <p className="title">Material draggable</p>
            <Tabs
                onTabClose={(i) => {
                    console.log('close', i);
                }}
                customStyle={md}
                activeIndex={activeTab}
                onTabChange={handleOnTabChange}
                onTabSequenceChange={handleOnTabSequenceChange}
            >
                <DragTabList>{staticTabItems}</DragTabList>
                <PanelList>{panelItems}</PanelList>
            </Tabs>
            <br />
            <p className="title">Bootstrap</p>
            <Tabs
                customStyle={bootstrap}
                activeIndex={activeTab}
                onTabChange={handleOnTabChange}
                onTabSequenceChange={handleOnTabSequenceChange}
            >
                <TabList>{staticTabItems}</TabList>
                <PanelList>{panelItems}</PanelList>
            </Tabs>
            <br />
            {/* <p className="title">Bulma draggable</p>
            <Tabs
                customStyle={bulma}
                activeIndex={activeTab}
                onTabChange={handleOnTabChange}
                onTabSequenceChange={handleOnTabSequenceChange}
            >
                <DragTabList>{draggableTabItems}</DragTabList>
                <PanelList>{panelItems}</PanelList>
            </Tabs> */}
        </div>
    );
}
