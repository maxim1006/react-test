import React, { PureComponent } from 'react';
import Link from '../link/link.component';
import styles from './header.module.scss';

export default class Header extends PureComponent {
    render() {
        return (
            <header className="styles.header">
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
