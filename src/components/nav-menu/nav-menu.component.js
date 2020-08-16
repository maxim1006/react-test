import React from 'react';
import NavMenuLink from './link/nav-menu-link.component';
import Title from './nav-menu-title.component';
import Logo from './nav-menu-logo.component';
import styles from './nav-menu.module.scss';

const NavMenu = ({ links, ...rest }) => {
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
