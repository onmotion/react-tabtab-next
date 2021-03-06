// @flow
import * as React from 'react';
import styled from 'styled-components';

const PanelStyle = styled.div<{ active: boolean }>`
    text-align: left;
    padding: 20px 15px;
    ${(props) => (!props.active ? `display: none;` : null)}
`;

export type PanelProps = {
    CustomPanelStyle?: React.FC<Partial<PanelProps>>;
    active?: boolean;
    index?: number;
};

export default class PanelComponent extends React.PureComponent<React.PropsWithChildren<PanelProps>> {
    render() {
        const { active, index } = this.props;
        const Panel = this.props.CustomPanelStyle || PanelStyle;
        return (
            <Panel
                role="tabpanel"
                id={`react-tabtab-panel-${index}`}
                aria-labelledby={`react-tabtab-${index}`}
                aria-hidden={false}
                active={active}
            >
                {active ? this.props.children : null}
            </Panel>
        );
    }
}

export { PanelStyle };
