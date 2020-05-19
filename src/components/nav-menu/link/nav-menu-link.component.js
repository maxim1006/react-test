import { NavLink } from "react-router-dom";
import React, { memo } from "react";

const NavMenuLink = ({ objectProp, text, to, ...rest }) => {
    return (
        <NavLink
            {...rest}
            strict
            exact
            to={to}
            activeClassName="_active"
            className="nav-menu__link"
        >
            {text}
            {JSON.stringify(objectProp)}
        </NavLink>
    );
};

// export default NavMenuLink;
export default memo(NavMenuLink);

//memoized
