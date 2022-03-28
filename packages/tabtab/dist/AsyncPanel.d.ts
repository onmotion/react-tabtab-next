import * as React from 'react';
import { PanelProps } from './Panel';
declare type Props = {
    loadContent: (cb: Function) => any;
    render: (data: any) => React.ReactNode;
    renderLoading: () => React.ReactNode;
    CustomPanelStyle: React.FC<Partial<PanelProps>>;
    active: boolean;
    index: number;
    cache: boolean;
};
declare type State = {
    isLoading: boolean;
    data: any;
};
export default class AsyncPanelComponent extends React.PureComponent<Props, State> {
    static defaultProps: {
        cache: boolean;
    };
    cacheData: any;
    constructor(props: Props);
    componentDidMount(): void;
    componentWillReceiveProps(nextProps: Props): void;
    loadPanel(): void;
    render(): JSX.Element;
}
export {};
