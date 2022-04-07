import React, { useCallback, useMemo, useState } from 'react';
import { makeData } from './data';
import { Tabs, DragTab, Panel, DragTabList, PanelList, helpers } from '../../packages/tabtab/src';
import { md, bootstrap, bulma } from '../../packages/themes/src';
import { Tab, TabList } from '@react-tabtab-next/tabtab';

export default function App() {
    const [activeTab, setActiveTab] = useState(0);
    const [tabs, setTabs] = useState(makeData(10, 'DragTab'));

    const draggableTabItems = useMemo(() => {
        return tabs.map((tab, index) => {
            return <DragTab key={index}>{tab.title}</DragTab>;
        });
    }, [tabs]);

    const staticTabItems = useMemo(() => {
        return tabs.map((tab, index) => {
            return <Tab key={index}>{tab.title}</Tab>;
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
            <p className="title">Material draggable</p>
            <Tabs
                customStyle={md}
                activeIndex={activeTab}
                onTabChange={handleOnTabChange}
                onTabSequenceChange={handleOnTabSequenceChange}
            >
                <DragTabList>{draggableTabItems}</DragTabList>
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
            <p className="title">Bulma draggable</p>
            <Tabs
                customStyle={bulma}
                activeIndex={activeTab}
                onTabChange={handleOnTabChange}
                onTabSequenceChange={handleOnTabSequenceChange}
            >
                <DragTabList>{draggableTabItems}</DragTabList>
                <PanelList>{panelItems}</PanelList>
            </Tabs>
        </div>
    );
}
