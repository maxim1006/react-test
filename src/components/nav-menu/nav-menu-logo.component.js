import React, { memo } from 'react';
import { ReactComponent as LogoIcon } from '../../assets/icons/logo.svg';
import './nav-menu-logo.component.scss';

const Logo = ({ width = 40, height = 40, transform = 10, fontSize = 10 }) => {
    const styles = {
        width: `${width}px`,
        height: `${height}px`,
        transform: `translateY(-${transform}px)}`,
        fontSize: `${fontSize}px`,
    };

    return <LogoIcon style={styles} className="nav-menu-logo" />;
};

export default memo(Logo);
