import styled from 'styled-components';

import { styled as themeStyled } from '../../../../src';

let { TabList, ActionButton, Tab, Panel } = themeStyled;

TabList = styled(TabList)`
    background-color: #fff;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.07), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.15);
    border: 0;
`;

Tab = styled(Tab)`
    color: rgba(238, 110, 115, 0.7);
    // transition: color 0.28s ease;
    border: 0;
    ${(props) =>
        props.active && !props.vertical
            ? `
      border-bottom: 2px solid #f6b2b5;
    `
            : null}
    &:hover {
        background-color: transparent;
        color: #ee6e73;
        border-bottom: 2px solid #f6b2b5;
    }
`;

ActionButton = styled(ActionButton)`
    background-color: transparent;
    border-radius: 0;
    &:hover {
        background-color: #eee;
    }
`;

Panel = styled(Panel)`
    border-left: 1px solid rgba(0, 0, 0, 0.12);
    border-right: 1px solid rgba(0, 0, 0, 0.12);
    border-bottom: 1px solid rgba(0, 0, 0, 0.12);
    padding: 30px 30px;
    border-radius: 2px;
`;

export default {
    TabList: TabList,
    ActionButton: ActionButton,
    Tab: Tab,
    Panel: Panel,
};
