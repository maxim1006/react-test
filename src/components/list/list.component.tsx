import React, { Component } from "react";
import "./list.component.scss";
import arrayData from "./list.data";

type myProps = {
    children?: any[];
    childrenListItems?: string[];
    item?: any;

    name?: React.ReactNode;
};

export default class List extends Component<myProps> {
    render() {
        console.log("list component render");
        const { children } = this.props;

        const childrenListItems =
            children &&
            children.filter(
                (item: { props: { className: string } }) =>
                    item.props && item.props.className === "list__item"
            );

        return (
            <>
                {children}
                <ul className="list">
                    {childrenListItems}

                    {arrayData.map(
                        (
                            listItem: React.ReactNode,
                            index: string | number | undefined
                        ) => (
                            <li key={index} className="list__item">
                                {listItem}
                            </li>
                        )
                    )}
                </ul>
            </>
        );
    }
}
