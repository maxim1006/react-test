import { NavLink } from 'react-router-dom';
import React, { memo } from 'react';
import styles from './nav-menu-link.module.scss';

const NavMenuLink = ({ text, to, ...rest }) => {
    const active = true;

    return (
        <NavLink
            {...rest}
            strict
            exact
            to={to}
            activeClassName="_active"
            className={styles.navMenuLink}
        >
            {text}
        </NavLink>
    );
};

// export default NavMenuLink;
export default memo(NavMenuLink);
