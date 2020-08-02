import React from 'react';
import NavMenuLink from './link/nav-menu-link.component';
import { NavMenuLinkModel } from '../../models/nav-menu-link.model';
import Title from './nav-menu-title.component';
import Logo from './nav-menu-logo.component';
import styles from './nav-menu.module.scss';

const NavMenu = ({ links, ...rest }) => {
    // TODO make map with NavMenuLink components
    // TODO style NavMenuLink
    return (
        <div className={styles.navMenu} {...rest}>
            <Logo />
            <Title />
            {links.map((link, index) => (
                <NavMenuLink key={index} {...link} />
            ))}
        </div>
    );
};

export default NavMenu;
