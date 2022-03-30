import * as React from 'react';
declare const PanelStyle: import("styled-components").StyledComponent<"div", any, {
    active: boolean;
}, never>;
export declare type PanelProps = {
    CustomPanelStyle?: React.FC<Partial<PanelProps>>;
    active?: boolean;
    index?: number;
};
export default class PanelComponent extends React.PureComponent<PanelProps> {
    render(): JSX.Element;
}
export { PanelStyle };
