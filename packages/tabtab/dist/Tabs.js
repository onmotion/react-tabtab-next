"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
class Tabs extends react_1.default.Component {
    constructor(props) {
        super(props);
        this.handleTabChange = this.handleTabChange.bind(this);
        this.handleTabSequence = this.handleTabSequence.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.state = {
            activeIndex: this.getActiveIndex(props)
        };
    }
    getActiveIndex(props) {
        const { defaultIndex, activeIndex } = props;
        if (activeIndex)
            return activeIndex;
        if (defaultIndex)
            return defaultIndex;
        return 0;
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.activeIndex !== this.props.activeIndex) {
            this.setState({ activeIndex: this.getActiveIndex(nextProps) });
        }
    }
    handleTabChange(index) {
        const { activeIndex, onTabChange } = this.props;
        if (activeIndex !== 0 && !activeIndex) {
            this.setState({ activeIndex: index });
        }
        if (onTabChange) {
            onTabChange(index);
        }
    }
    handleTabSequence({ oldIndex, newIndex }) {
        const { onTabSequenceChange } = this.props;
        if (onTabSequenceChange) {
            onTabSequenceChange({ oldIndex, newIndex });
        }
    }
    handleEdit({ type, index }) {
        const { onTabEdit } = this.props;
        if (onTabEdit) {
            onTabEdit({ type, index });
        }
    }
    render() {
        const { children, ...extraProps } = this.props;
        const { activeIndex } = this.state;
        const props = {
            handleTabChange: this.handleTabChange,
            handleTabSequence: this.handleTabSequence,
            handleEdit: this.handleEdit,
            activeIndex,
            ...extraProps
        };
        return (react_1.default.createElement("div", null, react_1.default.Children.map(children, (child) => {
            return react_1.default.cloneElement(child, props);
        })));
    }
}
exports.default = Tabs;
Tabs.defaultProps = {
    showModalButton: 4,
    showArrowButton: "auto",
    onTabChange: () => { },
    onTabSequenceChange: () => { },
    customStyle: {
        TabList: null,
        Tab: null,
        Panel: null,
        ActionButton: null
    }
};
