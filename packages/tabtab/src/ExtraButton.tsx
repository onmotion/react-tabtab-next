// @flow
import * as React from 'react';
import styled from 'styled-components';

const Wrapper = styled.button`
    flex-shrink: 0;
    align-self: center;
    height: 100%;
    width: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2em;
    background: transparent;
    border: none;
    margin-top: 0;
    padding: 3px;
    margin-left: 2px;
    display: inline-block;
    color: #777;
    vertical-align: middle;
    user-select: none;
    ${(props) =>
        props.disabled
            ? `
    pointer-events: none;
    color: #AAA;
    background: #F5F5F5;
  `
            : null}
    &:hover {
        color: black;
        cursor: pointer;
    }
    &:disabled,
    &[disabled] {
        border: 1px solid grey;
        background-color: #e7e7e7;
        cursor: not-allowed;
    }
`;

type Props = {
    onClick: (event: any) => void;
    disabled: boolean;
    children: React.ReactNode;
};

export default class ExtraButton extends React.PureComponent<Props> {
    static defaultProps = {
        disabled: false,
    };

    render() {
        const { disabled, onClick } = this.props;
        return (
            <Wrapper onClick={onClick} disabled={disabled}>
                {this.props.children}
            </Wrapper>
        );
    }
}
