import styled from 'styled-components';

import { styled as themeStyled } from '@react-tabtab-next/tabtab';

let { TabList, ActionButton, Tab, Panel } = themeStyled;

const primaryColor = '#f73378';

TabList = styled(TabList)`
    background-color: #fff;
    box-shadow: inset 0 -1px 0px 0px #00000022;
    border: 0;
`;

Tab = styled(Tab)`
    & span {
        font-size: 0.9em;
        transition: color 0.18s;
        text-transform: uppercase;
        color: ${primaryColor};
        ${(props) => {
            return props.active ? `color: ${primaryColor};` : null;
        }}
    }

    ${(props) =>
        props.active
            ? `
      border-bottom: 2px solid ${primaryColor};
    `
            : null}
    &:hover {
        background-color: transparent;
        & span {
            color: ${primaryColor};
        }

        border-bottom: 2px solid ${primaryColor};
    }

    /* Ripple effect */

    background-position: center;
    transition: background 0.8s;

    &:hover {
        background: #fff radial-gradient(circle, transparent 1%, #fff 1%) center/15000%;
    }
    &:active {
        background-color: ${primaryColor + '22'};
        background-size: 100%;
        transition: background 0s;
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
    padding: 30px 30px;
`;

export default {
    TabList: TabList,
    ActionButton: ActionButton,
    Tab: Tab,
    Panel: Panel,
};
