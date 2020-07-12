import React from 'react';
import { ReactComponent as LogoIcon } from '../../assets/icons/logo.svg';
import './nav-menu-logo.component.scss';

type Logo = {
    width: number;
    height: number;
    transform: string;
    fontSize: number;
};

const Logo = ({ width = 40, height = 40, transform = 10, fontSize = 10 }) => {
    const styles = {
        width: `${width}px`,
        height: `${height}px`,
        transform: `translateY(-${transform}px)}`,
        fontSize: `${fontSize}px`,
    };

    return <LogoIcon style={styles} className="nav-menu__logo" />;
};

export default Logo;
