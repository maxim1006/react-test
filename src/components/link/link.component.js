import React, { Component } from 'react';
import './link.component.scss';

export default class Link extends Component {
    render() {
        const { href, ...rest } = this.props;
        let { text } = this.props;

        text = `The link goes to ${text}`;

        return (
            <a {...rest} className="link" href={href}>
                {text}
            </a>
        );
    }
}
