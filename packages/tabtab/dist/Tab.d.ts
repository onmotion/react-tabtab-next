import * as React from 'react';
declare const TabStyle: import("styled-components").StyledComponent<React.ForwardRefExoticComponent<React.LiHTMLAttributes<HTMLLIElement> & Partial<TabProps> & React.RefAttributes<HTMLLIElement>>, any, {}, never>;
export declare type TabProps = {
    CustomTabStyle: React.FC<Partial<TabProps>>;
    handleTabChange: (event: any) => void;
    handleEdit: (event: any) => void;
    index: number;
    active: boolean;
    closable: boolean;
    vertical: boolean;
    children: React.ReactNode;
};
export default class Tab extends React.PureComponent<TabProps> {
    __INTERNAL_NODE: React.ElementRef<any>;
    constructor(props: TabProps);
    clickTab(): void;
    clickDelete(event: React.SyntheticEvent<HTMLButtonElement>): void;
    render(): JSX.Element;
}
export { TabStyle };
