import Tabs from './Tabs';
import TabList from './TabList';
import Tab, { TabStyle } from './Tab';
import DragTabList from './DragTabList';
import DragTab from './DragTab';
import PanelList from './PanelList';
import Panel, { PanelStyle } from './Panel';
import AsyncPanel from './AsyncPanel';
import ExtraButton from './ExtraButton';
import { TabListStyle, ActionButtonStyle } from './styledElements';
import simpleSwitch from './helpers/move';
import deleteHelper from './helpers/delete';

export { Tabs, TabList, Tab, DragTabList, DragTab, PanelList, Panel, AsyncPanel, ExtraButton };

export const styled = { TabList: TabListStyle, ActionButton: ActionButtonStyle, Tab: TabStyle, Panel: PanelStyle };

export const helpers = { simpleSwitch, deleteHelper };
