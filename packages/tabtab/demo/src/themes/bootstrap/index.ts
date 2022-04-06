import styled from 'styled-components';
import { styled as themeStyled } from '@react-tabtab-next/tabtab';

let { TabList, Tab } = themeStyled;
const { ActionButton, Panel } = themeStyled;

TabList = styled(TabList)`
    border-bottom: 1px solid #eee;
`;

Tab = styled(Tab)`
    border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem;
    color: ${(props) => (props.active ? 'black' : '#007bff')};
    border: 1px solid transparent;
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
      &:hover {
        border-color: #ddd #ddd #fff;
      }
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
