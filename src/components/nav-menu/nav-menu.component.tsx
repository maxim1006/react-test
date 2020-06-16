import React from "react";
import "./nav-menu.component.scss";
import NavMenuLink from "./link/nav-menu-link.component";

type NavMenuProps = { links: any };

const NavMenu = ({ links, ...rest }: NavMenuProps) => {
    // TODO make map with NavMenuLink components
    // TODO style NavMenuLink
    return (
        <div className="nav-menu" {...rest}>
            {links.map(
                (
                    link: JSX.IntrinsicAttributes & {
                        text: string;
                        to: string;
                        rest?: any;
                    }
                ) => (
                    <NavMenuLink {...link} />
                )
            )}
        </div>
    );
};

export default NavMenu;
