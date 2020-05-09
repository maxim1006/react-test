import {NavLink} from "react-router-dom";
import React from "react";
import "./nav-menu.component.scss";

const NavMenu = () => {
    // TODO make map with NavMenuLink components
    return (
        <div className="nav-menu">
            <NavLink
                strict
                exact
                to="/"
                activeClassName="_active"
                className="nav-menu__link"
            >
                Home
            </NavLink>
            <NavLink
                strict
                exact
                to="/components"
                activeClassName="_active"
                className="nav-menu__link"
            >
                Components
            </NavLink>
            <NavLink
                strict
                exact
                to="/redux"
                activeClassName="_active"
                className="nav-menu__link"
            >
                Redux
            </NavLink>
            <NavLink
                strict
                exact
                to="/hooks"
                activeClassName="_active"
                className="nav-menu__link"
            >
                Hooks
            </NavLink>
        </div>

    );
};

export default NavMenu;
