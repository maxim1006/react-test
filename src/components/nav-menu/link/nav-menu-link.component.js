import { NavLink } from 'react-router-dom';
import React, { memo } from 'react';

const NavMenuLink = ({ text, to, ...rest }) => {
    return (
        <NavLink
            {...rest}
            strict
            exact
            to={to}
            activeClassName="_active"
            className="nav-menu-link"
        >
            {text}
        </NavLink>
    );
};

// export default NavMenuLink;
export default memo(NavMenuLink);
