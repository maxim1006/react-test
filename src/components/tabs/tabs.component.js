import React, { Component } from 'react';

export default class Tabs extends Component {
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

    onClick = index => {
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
            tabsHeader = currentChildren.map(({ child }, index) => {
                const { activeTab } = this.state;

                return (
                    <div
                        onClick={() => this.onClick(index)}
                        key={index}
                        className={`styles.tabs__header-item${
                            index === activeTab ? ' _active' : ''
                        }`}
                    >
                        {child.props && child.props.tabName}
                    </div>
                );
            });

            // get body
            tabsBody = currentChildren.map((child, index) => {
                const { activeTab } = this.state;
                if (index === activeTab) {
                    return (
                        <div className="styles.tabs__content-item" key={index}>
                            {child.props.children}
                        </div>
                    );
                }
                return '';
            });
        }

        return (
            <div className="styles.tabs">
                <div className="styles.tabs__header">{tabsHeader}</div>
                <div className="styles.tabs__content">{tabsBody}</div>
            </div>
        );
    }
}
