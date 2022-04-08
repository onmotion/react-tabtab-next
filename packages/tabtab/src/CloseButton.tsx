// @flow
import * as React from 'react';
import { CloseIcon } from './IconSvg';
import styled from 'styled-components';

const CloseWrapper = styled.button`
    display: inline-block;
    color: #777;
    line-height: 0;
    margin-left: 5px;
    padding: 0;
    vertical-align: middle;
    background-color: transparent;
    border: 0;
    padding: 2px;
    outline: 0;
    &:hover {
        color: black;
        background-color: #eee;
        cursor: pointer;
        border-radius: 50%;
    }
    > svg {
        vertical-align: middle;
    }
`;

type Props = {
    handleTabClose: (event: any) => void;
};

export default class CloseButton extends React.PureComponent<Props> {
    render() {
        return (
            <CloseWrapper onClick={this.props.handleTabClose}>
                <CloseIcon />
            </CloseWrapper>
        );
    }
}
