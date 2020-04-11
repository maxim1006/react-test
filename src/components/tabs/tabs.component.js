import React, {Component} from "react";
import "./tabs.component.scss";

export default class Tabs extends Component {
    state = {
        activeTab: 0
    };

    componentDidMount() {
        const {activeTab} = this.props;

        if (activeTab) {
            this.setState({
                activeTab
            });
        }
    }

    render() {
        const {children} = this.props;

        let tabsHeader;
        let tabsBody;

        if (children) {

            const currentChildren = Array.isArray(children) ? children : [children];

            // get header
            tabsHeader = currentChildren.map((child, index) => {
                return (
                    <div
                        onClick={() => this.onClick(index)}
                        key={index}
                        className={
                            "tabs__header-item" +
                            (index === this.state.activeTab ? ' _active' : '')
                        }
                    >
                        {child.props.tabName}
                    </div>
                );
            });

            // get body
            tabsBody = currentChildren.map((child, index) => {
                if (index === this.state.activeTab) {
                    return (
                        <div
                            className="tabs__content-item"
                            key={index}
                        >
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
                <div className="tabs__header">
                    {tabsHeader}
                </div>
                <div className="tabs__content">
                    {tabsBody}
                </div>
            </div>
        )
    }

    onClick = (index) => {
        this.setState((prevState, prevProps) => ({
            activeTab: index
        }));
    }
}
