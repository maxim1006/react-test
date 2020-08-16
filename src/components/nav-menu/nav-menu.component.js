import React, { useContext } from 'react';
import NavMenuLink from './link/nav-menu-link.component';
import { NavMenuLinkModel } from '../../models/nav-menu-link.model';
import Title from './nav-menu-title.component';
import Logo from './nav-menu-logo.component';
import styles from './nav-menu.module.scss';
import ThemeContext from '../context/context-theme.component';

const NavMenu = ({ links, ...rest }) => {
    // TODO make map with NavMenuLink components
    // TODO style NavMenuLink
    const theme = useContext(ThemeContext);
    return (
        <ThemeContext.Provider value={theme.dark}>
            <div
                className={styles.navMenu}
                {...rest}
                style={{ background: theme }}
            >
                <Logo />
                <Title />
                {links.map((link, index) => (
                    <NavMenuLink key={index} {...link} />
                ))}
            </div>
        </ThemeContext.Provider>
    );
};

export default NavMenu;
