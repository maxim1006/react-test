import React, { Component } from "react";
import "./list.component.scss";
import arrayData from "./list.data";

type myProps = {
    children?: any[];
    childrenListItems?: React.ReactChild[];
    item?: any;
    name?: React.ReactNode;
};

export default class List extends Component<myProps, any> {
    render() {
        const { children = [] }: { children: React.ReactChild[] } = this.props;

        const childrenListItems = children.filter(
            ({ props }: React.ReactChild) => {
                return props && props.className === "list__item";
            }
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
