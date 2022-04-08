import styled from 'styled-components';
import { styled as themeStyled } from '@react-tabtab-next/tabtab';

let { TabList, Tab } = themeStyled;
const { ActionButton, Panel } = themeStyled;

TabList = styled(TabList)`
    box-shadow: inset 0 -1px 0px 0px #00000022;
`;

Tab = styled(Tab)`
    & span {
        transition: color 0.18s;
        color: ${(props) => (props.active ? 'black' : '#007bff')};
    }
    border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem;

    border: 1px solid transparent;
    &:hover {
        & span {
            color: #000;
        }
    }
    ${(props) =>
        props.vertical
            ? `
      border-top: 1px solid transparent;
      border-bottom: 1px solid #efefef;
      border-left: 1px solid #efefef;
      border-right: 1px solid #efefef;
      border-radius: 0;
      &:first-child {
        border-top: 1px solid #efefef;        
      }
    `
            : `
     
  `}
    ${(props) =>
        props.active && props.vertical
            ? `
      background-color: #eee;
    `
            : null}
  ${(props) =>
        props.active && !props.vertical
            ? `
      border-color: #ddd #ddd #fff;
    `
            : null}
`;

export default {
    TabList,
    ActionButton: ActionButton,
    Tab,
    Panel: Panel,
};
