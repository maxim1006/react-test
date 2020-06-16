import React, { Component, ReactNode } from "react";
import "./tabs.component.scss";

type TabsComponentProps = {
    activeTab: number;
    tabsHeader: any;

    index: number;
};

export default class Tabs extends Component<TabsComponentProps> {
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
                    return (
                        <div
                            onClick={() => this.onClick(index)}
                            key={index}
                            className={
                                "tabs__header-item" +
                                (index === this.state.activeTab
                                    ? " _active"
                                    : "")
                            }
                        >
                            {child.props && child.props.tabName}
                        </div>
                    );
                }
            );

            // get body
            tabsBody = currentChildren.map((child: any, index) => {
                if (index === this.state.activeTab) {
                    return (
                        <div className="tabs__content-item" key={index}>
                            {child.props.children}
                        </div>
                    );
                } else {
                    return "";
                }
            });
        }

        return (
            <div className="tabs">
                <div className="tabs__header">{tabsHeader}</div>
                <div className="tabs__content">{tabsBody}</div>
            </div>
        );
    }

    onClick = (index: number) => {
        this.setState((prevState, prevProps) => ({
            activeTab: index,
        }));
    };
}
