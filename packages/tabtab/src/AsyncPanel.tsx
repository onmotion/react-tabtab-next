import * as React from 'react';
import Panel, { PanelProps } from './Panel';

type Props = {
    loadContent: (cb: (err: any, data?: any) => void) => any;
    render: (data: any) => React.ReactNode;
    renderLoading: () => React.ReactNode;
    CustomPanelStyle?: React.FC<Partial<PanelProps>>;
    active?: boolean;
    index?: number;
    cache?: boolean;
};

type State = {
    isLoading: boolean;
    data: any;
};

export default class AsyncPanelComponent extends React.PureComponent<Props, State> {
    static defaultProps = {
        cache: true,
    };

    cacheData: any;

    constructor(props: Props) {
        super(props);
        this.loadPanel = this.loadPanel.bind(this);
        this.cacheData = undefined;
        this.state = {
            isLoading: false,
            data: undefined,
        };
    }

    componentDidMount() {
        if (this.props.active) this.loadPanel();
    }
    componentDidUpdate(prevProps: Props) {
        this.props.active && !prevProps.active && this.loadPanel();
    }

    loadPanel() {
        console.log('loadPanel');

        const { loadContent, cache } = this.props;
        if (cache && this.cacheData) {
            this.setState({
                isLoading: false,
                data: this.cacheData,
            });
            return;
        }
        const callback = (err: any, data?: any) => {
            if (err) {
                console.log('React-Tabtab async panel error:', err);
            }
            if (cache) {
                this.cacheData = data;
            }
            this.setState({
                isLoading: false,
                data,
            });
        };
        const promise = loadContent(callback);
        if (promise) {
            promise.then(
                (data: any) => callback(null, data),
                (err: any) => callback(err)
            );
        }
        if (!this.state.isLoading) {
            this.setState({ isLoading: true });
        }
    }

    render() {
        const { render, renderLoading, CustomPanelStyle, active, index } = this.props;
        const { isLoading, data } = this.state;
        let content;
        if (isLoading) {
            content = renderLoading();
        } else {
            content = render(data);
        }
        return <Panel {...{ CustomPanelStyle, active, index }}>{content}</Panel>;
    }
}
