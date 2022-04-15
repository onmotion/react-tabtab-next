import * as React from 'react';
export declare type TabElementProps = React.ComponentPropsWithoutRef<'li'> & TabProps;
export declare const TabElement: React.MemoExoticComponent<React.ForwardRefExoticComponent<Pick<React.DetailedHTMLProps<React.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>, "key" | keyof React.LiHTMLAttributes<HTMLLIElement>> & TabProps & React.RefAttributes<HTMLLIElement>>>;
declare const TabStyle: import("styled-components").StyledComponent<React.MemoExoticComponent<React.ForwardRefExoticComponent<Pick<React.DetailedHTMLProps<React.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>, "key" | keyof React.LiHTMLAttributes<HTMLLIElement>> & TabProps & React.RefAttributes<HTMLLIElement>>>, any, {}, never>;
export declare type TabProps = {
    CustomTabStyle?: React.FC<Partial<TabProps>>;
    handleTabChange?: (event: any) => void;
    handleTabClose?: (event: any) => void;
    index?: number;
    active?: boolean;
    closable?: boolean;
    vertical?: boolean;
    tabIndex?: string;
};
export default class Tab extends React.PureComponent<React.PropsWithChildren<TabProps>> {
    __INTERNAL_NODE: React.ElementRef<any>;
    constructor(props: TabProps);
    clickTab(e: React.MouseEvent<HTMLLIElement, MouseEvent>): void;
    clickDelete(event: React.SyntheticEvent<HTMLButtonElement>): void;
    render(): JSX.Element;
}
export { TabStyle };
