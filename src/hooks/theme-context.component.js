import React, { Component } from 'react';

export class ThemeContextComponent extends Component {
    componentDidMount() {
        document.body.classList.add(`_dark`);
    }

    render() {
        return <>Hello world</>;
    }
}
