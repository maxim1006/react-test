import React from "react";
import "./nav-menu.component.scss";
import NavMenuLink from "./link/nav-menu-link.component";
import { NavMenuLinkModel } from "../../models/nav-menu-link.model";

type NavMenuProps = { links: NavMenuLinkModel[] };

const NavMenu = ({ links, ...rest }: NavMenuProps) => {
    // TODO make map with NavMenuLink components
    // TODO style NavMenuLink
    return (
        <div className="nav-menu" {...rest}>
            {links.map((link: NavMenuLinkModel, index: number) => (
                <NavMenuLink key={index} {...link} />
            ))}
        </div>
    );
};

export default NavMenu;
