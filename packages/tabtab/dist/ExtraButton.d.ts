import * as React from 'react';
declare type Props = {
    onClick: (event: any) => void;
    disabled: boolean;
    children: React.ReactNode;
};
export default class ExtraButton extends React.PureComponent<Props> {
    static defaultProps: {
        disabled: boolean;
    };
    render(): JSX.Element;
}
export {};
