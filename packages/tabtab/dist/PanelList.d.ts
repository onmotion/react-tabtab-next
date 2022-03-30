import * as React from 'react';
declare type Props = {
    activeIndex?: number;
    customStyle?: {
        Panel: () => void;
    };
};
export default class PanelList extends React.PureComponent<Props> {
    render(): JSX.Element;
}
export {};
