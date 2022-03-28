"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var React = __importStar(require("react"));
var Panel_1 = __importDefault(require("./Panel"));
var AsyncPanelComponent = (function (_super) {
    __extends(AsyncPanelComponent, _super);
    function AsyncPanelComponent(props) {
        var _this = _super.call(this, props) || this;
        _this.loadPanel = _this.loadPanel.bind(_this);
        _this.cacheData = undefined;
        _this.state = {
            isLoading: false,
            data: undefined
        };
        return _this;
    }
    AsyncPanelComponent.prototype.componentDidMount = function () {
        if (this.props.active)
            this.loadPanel();
    };
    AsyncPanelComponent.prototype.componentWillReceiveProps = function (nextProps) {
        if (nextProps.active)
            this.loadPanel();
    };
    AsyncPanelComponent.prototype.loadPanel = function () {
        var _this = this;
        var _a = this.props, loadContent = _a.loadContent, cache = _a.cache;
        if (cache && this.cacheData) {
            this.setState({
                isLoading: false,
                data: this.cacheData
            });
            return;
        }
        var callback = function (err, data) {
            if (err) {
                console.log('React-Tabtab async panel error:', err);
            }
            if (cache) {
                _this.cacheData = data;
            }
            _this.setState({
                isLoading: false,
                data: data
            });
        };
        var promise = loadContent(callback);
        if (promise) {
            promise.then(function (data) { return callback(null, data); }, function (err) { return callback(err); });
        }
        if (!this.state.isLoading) {
            this.setState({ isLoading: true });
        }
    };
    AsyncPanelComponent.prototype.render = function () {
        var _a = this.props, render = _a.render, renderLoading = _a.renderLoading, CustomPanelStyle = _a.CustomPanelStyle, active = _a.active, index = _a.index;
        var _b = this.state, isLoading = _b.isLoading, data = _b.data;
        var content;
        if (isLoading) {
            content = renderLoading();
        }
        else {
            content = render(data);
        }
        return (React.createElement(Panel_1.default, __assign({}, { CustomPanelStyle: CustomPanelStyle, active: active, index: index }), content));
    };
    AsyncPanelComponent.defaultProps = {
        cache: true
    };
    return AsyncPanelComponent;
}(React.PureComponent));
exports.default = AsyncPanelComponent;
