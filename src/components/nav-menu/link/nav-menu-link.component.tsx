import { NavLink } from "react-router-dom";
import React, { memo } from "react";

type NavMenuLinkProps = {
    text: string;
    to: string;
    rest?: any;
};

const NavMenuLink = ({ text, to, ...rest }: NavMenuLinkProps) => {
    return (
        <>
            <NavLink
                {...rest}
                strict
                exact
                to={to}
                activeClassName="_active"
                className="nav-menu__link"
            >
                {text}
            </NavLink>
        </>
    );
};

// export default NavMenuLink;
export default memo(NavMenuLink);
