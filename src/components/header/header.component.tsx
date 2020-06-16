import React, { PureComponent } from "react";
import Link from "../link/link.component";
import "./header.component.scss";

type HeaderProps = { target: any; text: string; href: string };

export default class Header extends PureComponent<HeaderProps, any> {
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
