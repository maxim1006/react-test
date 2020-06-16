import React, { Component } from "react";
import "./link.component.scss";
type MyProps = {
    text: string;
    href: string;
    target: any;
};

export default class Link extends Component<MyProps> {
    render() {
        let { text, href, ...rest } = this.props;

        text = `The link goes to ${text}`;

        return (
            <a {...rest} className="link" href={href}>
                {text}
            </a>
        );
    }
}
