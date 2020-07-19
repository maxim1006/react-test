import React, { Component } from 'react';
import './tabs.component.scss';

type TabsComponentProps = {
    activeTab?: number;
    tabsHeader?: any;
    index?: number;
};

export default class Tabs extends Component<TabsComponentProps, any> {
    state = {
        activeTab: 0,
    };

    componentDidMount() {
        const { activeTab } = this.props;

        if (activeTab) {
            this.setState({
                activeTab,
            });
        }
    }

    onClick = (index: number) => {
        this.setState(() => ({
            activeTab: index,
        }));
    };

    render() {
        const { children } = this.props;

        let tabsHeader;
        let tabsBody;

        if (children) {
            const currentChildren = Array.isArray(children)
                ? children
                : [children];

            // get header
            tabsHeader = currentChildren.map(
                ({ child }: any, index: number) => {
                    const { activeTab } = this.state;

                    return (
                        <div
                            onClick={() => this.onClick(index)}
                            key={index}
                            className={`tabs__header-item${
                                index === activeTab ? ' _active' : ''
                            }`}
                        >
                            {child.props && child.props.tabName}
                        </div>
                    );
                }
            );

            // get body
            tabsBody = currentChildren.map((child: any, index) => {
                const { activeTab } = this.state;
                if (index === activeTab) {
                    return (
                        <div className="tabs__content-item" key={index}>
                            {child.props.children}
                        </div>
                    );
                }
                return '';
            });
        }

        return (
            <div className="tabs">
                <div className="tabs__header">{tabsHeader}</div>
                <div className="tabs__content">{tabsBody}</div>
            </div>
        );
    }
}
