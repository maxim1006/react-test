import React, { memo } from "react";
import "./nav-menu.component.scss";
import NavMenuLink from "./link/nav-menu-link.component";

const NavMenu = ({ links, ...rest }) => {
    // TODO make map with NavMenuLink components
    // TODO style NavMenuLink
    return (
        <div className="nav-menu" {...rest}>
            {links.map((link) => (
                <NavMenuLink {...link} />
            ))}
        </div>
    );
};

export default memo(NavMenu);
//memoized
