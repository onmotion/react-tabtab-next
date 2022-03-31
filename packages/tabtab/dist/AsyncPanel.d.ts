import * as React from 'react';
import { PanelProps } from './Panel';
declare type Props = {
    loadContent: (cb: (err: any, data?: any) => void) => any;
    render: (data: any) => React.ReactNode;
    renderLoading: () => React.ReactNode;
    CustomPanelStyle?: React.FC<Partial<PanelProps>>;
    active?: boolean;
    index?: number;
    cache?: boolean;
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
    componentDidUpdate(prevProps: Props): void;
    loadPanel(): void;
    render(): JSX.Element;
}
export {};
