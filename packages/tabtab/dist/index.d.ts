import Tabs from './Tabs';
import TabList from './TabList';
import Tab from './Tab';
import DragTabList from './DragTabList';
import DragTab from './DragTab';
import PanelList from './PanelList';
import Panel from './Panel';
import AsyncPanel from './AsyncPanel';
import ExtraButton from './ExtraButton';
import simpleSwitch from './helpers/move';
import deleteHelper from './helpers/delete';
export { Tabs, TabList, Tab, DragTabList, DragTab, PanelList, Panel, AsyncPanel, ExtraButton };
export declare const styled: {
    TabList: import("styled-components").StyledComponent<import("react").FC<import("./TabListElement").TabListElementProps>, any, {}, never>;
    ActionButton: import("styled-components").StyledComponent<"div", any, {}, never>;
    Tab: import("styled-components").StyledComponent<import("react").MemoExoticComponent<import("react").ForwardRefExoticComponent<Pick<import("react").DetailedHTMLProps<import("react").LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>, "key" | keyof import("react").LiHTMLAttributes<HTMLLIElement>> & import("./Tab").TabProps & import("react").RefAttributes<HTMLLIElement>>>, any, {}, never>;
    Panel: import("styled-components").StyledComponent<"div", any, {
        active: boolean;
    }, never>;
};
export declare const helpers: {
    simpleSwitch: typeof simpleSwitch;
    deleteHelper: typeof deleteHelper;
};
