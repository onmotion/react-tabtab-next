import * as React from 'react';
import styled from 'styled-components';
import CloseButton from './CloseButton';

export type TabElementProps = React.ComponentPropsWithoutRef<'li'> & TabProps;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const TabElement = React.memo(
    React.forwardRef<HTMLLIElement, TabElementProps>(({ active, closable, vertical, ...props }, ref) => (
        <li ref={ref} {...props}>
            {props.children}
        </li>
    ))
);

const TabStyle = styled(TabElement)`
    display: ${(props) => (props.vertical ? 'block' : 'inline-block')};
    touch-action: auto;
    color: #000000bb;
    border-bottom: 2px solid transparent;
    white-space: nowrap;
    ${(props) =>
        props.vertical
            ? `
      background-color: white;
      color: black;
      padding: 10px 10px;
      z-index: 1;
    `
            : (props) => (props.closable ? 'padding: 10px 10px 8px 15px;' : 'padding: 10px 15px 8px 15px;')}

    user-select: none;
    &:hover,
    &:active {
        cursor: pointer;
        color: black;
    }
    ${(props) =>
        props.active
            ? `
      color: black;
      border-bottom: 2px solid; 
    `
            : null}
`;

const TabText = styled.span`
    vertical-align: middle;
`;

export type TabProps = {
    CustomTabStyle?: React.FC<Partial<TabProps>>;
    handleTabChange?: (event: any) => void;
    handleTabClose?: (event: any) => void;
    index?: number;
    active?: boolean;
    closable?: boolean;
    vertical?: boolean;
    tabIndex?: string;
};

export default class Tab extends React.PureComponent<TabProps> {
    __INTERNAL_NODE: React.ElementRef<any>;

    constructor(props: TabProps) {
        super(props);
        this.clickTab = this.clickTab.bind(this);
        this.clickDelete = this.clickDelete.bind(this);
    }

    clickTab(e: React.MouseEvent<HTMLLIElement, MouseEvent>) {
        e.stopPropagation();
        const { handleTabChange, index } = this.props;
        handleTabChange(index);
    }

    clickDelete(event: React.SyntheticEvent<HTMLButtonElement>) {
        event.stopPropagation(); // prevent trigger clickTab event.
        const { handleTabClose, index } = this.props;
        handleTabClose(index);
    }

    render() {
        const { CustomTabStyle, active, closable, vertical, index } = this.props;
        const TabComponent = CustomTabStyle || TabStyle;

        return (
            <TabComponent
                ref={(node) => (this.__INTERNAL_NODE = node)}
                style={{ touchAction: 'auto' }}
                onClick={this.clickTab}
                active={active}
                vertical={vertical}
                closable={closable}
                role="tab"
                id={`react-tabtab-tab-${index}`}
                aria-controls={`react-tabtab-panel-${index}`}
                aria-selected={active}
            >
                <TabText>{this.props.children}</TabText>
                {closable ? <CloseButton handleTabClose={this.clickDelete} /> : null}
            </TabComponent>
        );
    }
}

export { TabStyle };
