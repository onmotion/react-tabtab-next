import styled from 'styled-components';
import { TabListElement, TabListElementProps } from './TabListElement';

export const buttonWidth = 35;
const getPadding = ({ showModalButton, showArrowButton }: TabListElementProps) => {
    let paddingLeft = 0;
    let paddingRight = 0;
    if (showModalButton) {
        paddingLeft += buttonWidth;
    }
    if (showArrowButton) {
        paddingLeft += buttonWidth;
        paddingRight += buttonWidth;
        if (showModalButton) {
            paddingLeft += 2;
        }
    }
    if (paddingLeft > 0) {
        paddingLeft += 3;
    }
    if (paddingRight > 0) {
        paddingRight += 3;
    }
    return `0 ${paddingRight}px 0 ${paddingLeft}px`;
};

export const TabListStyle = styled(TabListElement)`
    background-color: white;
    text-align: left;
    position: relative;
    white-space: nowrap;
    overflow: hidden;
    width: auto;
    padding: ${(props) => getPadding(props)};
`;

export const ListInner = styled.div`
    overflow: hidden;
`;

export const ListScroll = styled.ul`
    padding-left: 0;
    position: relative;
    margin: 0;
    list-style: none;
    display: inline-block;
    transition: transform 0.3s cubic-bezier(0.42, 0, 0.58, 1);
`;

export const ActionButtonStyle = styled.div`
    height: 100%;
    width: ${buttonWidth}px;
    text-align: center;
    border-radius: 4px 4px 0 0;
    background: #f9f9f9;
    color: #555;
    :hover {
        color: #000;
    }
    > svg {
        padding-top: 11px;
    }
`;
