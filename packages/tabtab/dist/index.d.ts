import Tabs from "./Tabs";
import TabList from "./TabList";
import Tab from "./Tab";
import DragTabList from "./DragTabList";
import DragTab from "./DragTab";
import PanelList from "./PanelList";
import Panel from "./Panel";
import AsyncPanel from "./AsyncPanel";
import ExtraButton from "./ExtraButton";
export { Tabs, TabList, Tab, DragTabList, DragTab, PanelList, Panel, AsyncPanel, ExtraButton };
export declare const styled: {
    TabListStyle: import("styled-components").StyledComponent<"div", any, {}, never>;
    ActionButtonStyle: import("styled-components").StyledComponent<"div", any, {}, never>;
    TabStyle: import("styled-components").StyledComponent<import("react").ForwardRefExoticComponent<import("react").LiHTMLAttributes<HTMLLIElement> & Partial<import("./Tab").TabProps> & import("react").RefAttributes<HTMLLIElement>>, any, {}, never>;
    PanelStyle: import("styled-components").StyledComponent<"div", any, {
        active: boolean;
    }, never>;
};
