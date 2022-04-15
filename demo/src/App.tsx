import React, { useCallback, useMemo, useState } from 'react';
import { makeData } from './data';
import {
    Tabs,
    Panel,
    DragTabList,
    PanelList,
    helpers,
    Tab,
    TabList,
    ExtraButton,
    AsyncPanel,
} from '../../packages/tabtab/src';
import { md, bootstrap, bulma } from '../../packages/themes/src';
import { CustomThemeExample } from './Components/CustomThemeExample';

export default function App() {
    const [activeTab, setActiveTab] = useState(0);
    const [tabs, setTabs] = useState(makeData(15, 'Some Tab'));

    const closableTabItems = useMemo(() => {
        return tabs.map((tab, index) => {
            return (
                <Tab closable key={index}>
                    {tab.title}
                </Tab>
            );
        });
    }, [tabs]);

    const tabItems = useMemo(() => {
        return tabs.map((tab, index) => {
            return <Tab key={index}>{tab.title}</Tab>;
        });
    }, [tabs]);

    const shortTabItems = useMemo(() => {
        return makeData(3, 'Tab').map((tab, index) => {
            return <Tab key={index}>{tab.title}</Tab>;
        });
    }, []);

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

    const handleOnTabChange = useCallback((i: number) => {
        console.log('select tab', i);
        setActiveTab(i);
    }, []);

    function loadContentFunc(callback: (err: any, data: any) => void) {
        setTimeout(() => {
            callback(null, 'some async content');
        }, 1000);
    }

    return (
        <div className="App">
            <div className="container">
                <div className="example">
                    <p className="title">Material draggable</p>
                    <Tabs
                        customStyle={md}
                        activeIndex={activeTab}
                        onTabChange={handleOnTabChange}
                        onTabSequenceChange={handleOnTabSequenceChange}
                        ExtraButton={
                            <ExtraButton
                                onClick={(e) => {
                                    setTabs((prev) => {
                                        const newTabs = [...prev];
                                        const newItem = makeData(1, 'New Tab ' + (newTabs.length + 1), false)[0];
                                        newTabs.push(newItem);
                                        return newTabs;
                                    });
                                    setActiveTab(tabs.length);
                                }}
                            >
                                +
                            </ExtraButton>
                        }
                    >
                        <DragTabList>{tabItems}</DragTabList>
                        <PanelList>{panelItems}</PanelList>
                    </Tabs>
                </div>
                <div className="example">
                    <p className="title">Bootstrap closable</p>
                    <Tabs
                        onTabClose={(i) => {
                            console.log('close', i);
                            setTabs((prev) => prev.filter((_, idx) => idx !== i));
                        }}
                        showModalButton={false}
                        customStyle={bootstrap}
                        activeIndex={activeTab}
                        onTabChange={handleOnTabChange}
                        onTabSequenceChange={handleOnTabSequenceChange}
                    >
                        <TabList>{closableTabItems}</TabList>
                        <PanelList>{panelItems}</PanelList>
                    </Tabs>
                </div>
                <div className="example">
                    <p className="title">Async data loading</p>
                    <Tabs defaultIndex={0}>
                        <TabList>
                            <Tab>Static Tab</Tab>
                            <Tab>Async Tab</Tab>
                            <Tab>Async Tab Cache</Tab>
                        </TabList>
                        <PanelList>
                            <Panel>Static content</Panel>
                            <AsyncPanel
                                loadContent={loadContentFunc}
                                render={(data) => <div>{JSON.stringify(data)}</div>}
                                renderLoading={() => <div>Loading...</div>}
                                cache={false}
                            />
                            <AsyncPanel
                                loadContent={loadContentFunc}
                                render={(data) => <div>{JSON.stringify(data)}</div>}
                                renderLoading={() => <div>Loading...</div>}
                                cache={true}
                            />
                        </PanelList>
                    </Tabs>
                </div>
                <div className="example">
                    <p className="title">Custom theme example</p>
                    <CustomThemeExample
                        activeIndex={activeTab > tabItems.length - 1 ? tabItems.length - 1 : activeTab}
                        onTabChange={handleOnTabChange}
                        panelItems={panelItems}
                        tabItems={tabItems}
                        onTabSequenceChange={handleOnTabSequenceChange}
                    ></CustomThemeExample>
                </div>
                <div className="example">
                    <p className="title">Bulma minimal</p>
                    <Tabs
                        customStyle={bulma}
                        activeIndex={activeTab > shortTabItems.length - 1 ? shortTabItems.length - 1 : activeTab}
                        onTabChange={handleOnTabChange}
                    >
                        <TabList>{shortTabItems}</TabList>
                        <PanelList>{panelItems}</PanelList>
                    </Tabs>
                </div>
            </div>
        </div>
    );
}
