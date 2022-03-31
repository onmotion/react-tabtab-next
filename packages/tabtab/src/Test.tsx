import * as React from 'react';
import { FC } from 'react';

import Tab from './Tab';
import { AsyncPanel, Panel, styled, TabList } from '.';
import PanelList from './PanelList';
import Tabs from './Tabs';

const A: FC = () => {
    return (
        <Tabs customStyle={styled}>
            <TabList>
                <Tab>Tab1</Tab>
                <Tab>Tab2</Tab>
            </TabList>
            <PanelList>
                <Panel>Content1</Panel>
                <AsyncPanel
                    loadContent={() => {}}
                    render={(data) => <div>{JSON.stringify(data)}</div>}
                    renderLoading={() => <div>Loading...</div>}
                    cache={false}
                />
            </PanelList>
        </Tabs>
    );
};
