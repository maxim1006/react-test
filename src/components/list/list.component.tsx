import React, { Component } from "react";
import "./list.component.scss";
import arrayData from "./list.data";
import { StyledList, StyledListItem } from "./list.styled-component";

type myProps = {
    children?: React.ReactNode;
    childrenListItems?: React.ReactChild[];
    item?: any;
    name?: React.ReactNode;
};

export default class List extends Component<myProps, any> {
    render() {
        const { children = [] } = this.props;

        const childrenListItems = (children as React.ReactChild[]).filter(
            child => {
                const { props }: any = child;

                return props && props.className === "list__item";
            }
        );

        return (
            <>
                {children}
                <StyledList>
                    {childrenListItems}

                    {arrayData.map(
                        (
                            listItem: React.ReactNode,
                            index: string | number | undefined
                        ) => (
                            <StyledListItem key={index}>
                                {listItem}
                            </StyledListItem>
                        )
                    )}
                </StyledList>
            </>
        );
    }
}
