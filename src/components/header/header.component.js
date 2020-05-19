import React, { Component } from "react";
import Link from "../link/link.component";
import "./header.component.scss";

export default class Header extends React.PureComponent {
    render() {
        return (
            <header className="header">
                <p className="header__text">
                    Hello my app! <br />
                    Edit <code>src/App.ajs</code> and save to reload.
                </p>
                <Link
                    href="http://google.com"
                    text="google.com"
                    target="_blank"
                />
            </header>
        );
    }
}

//changed to PureComponent as it's a class component
