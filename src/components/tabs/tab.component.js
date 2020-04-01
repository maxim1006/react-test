import React from "react";
import "./tab.component.scss";
class Tabs extends React.Component {
    //initial state (setting either to the defaultIndex in app.component.js or to zero)
    state = {
        activeIndex: this.props.defaultIndex || 0
    };

    render() {
        //why do we need to run Children on React, though?
        //the label is in app.component.js
        let tabs = React.Children.map(this.props.children, (child, index) => {
            return (
                <button onClick={() => this.setState({ activeIndex: index })}>
                    {child.props.label}
                </button>
            );
        });
        return (
            <div>
                <div>{tabs}</div>
                {this.props.children[this.state.activeIndex]}
            </div>
        );
    }
}
const Tab = ({ children }) => <div>{children}</div>;
export { Tab, Tabs };
