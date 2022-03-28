"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
const Panel_1 = __importDefault(require("./Panel"));
class AsyncPanelComponent extends React.PureComponent {
    constructor(props) {
        super(props);
        this.loadPanel = this.loadPanel.bind(this);
        this.cacheData = undefined;
        this.state = {
            isLoading: false,
            data: undefined
        };
    }
    componentDidMount() {
        if (this.props.active)
            this.loadPanel();
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.active)
            this.loadPanel();
    }
    loadPanel() {
        const { loadContent, cache } = this.props;
        if (cache && this.cacheData) {
            this.setState({
                isLoading: false,
                data: this.cacheData
            });
            return;
        }
        const callback = (err, data) => {
            if (err) {
                console.log('React-Tabtab async panel error:', err);
            }
            if (cache) {
                this.cacheData = data;
            }
            this.setState({
                isLoading: false,
                data
            });
        };
        const promise = loadContent(callback);
        if (promise) {
            promise.then((data) => callback(null, data), (err) => callback(err));
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
        }
        else {
            content = render(data);
        }
        return (React.createElement(Panel_1.default, { ...{ CustomPanelStyle, active, index } }, content));
    }
}
exports.default = AsyncPanelComponent;
AsyncPanelComponent.defaultProps = {
    cache: true
};
