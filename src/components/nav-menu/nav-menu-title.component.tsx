// styled component
// had to use 'flex' instead of 'flexGrow (flex-grow)'
// transform does not do anything

import React from 'react';
import './nav-menu-title.component.scss';

type Title = {
    transform: string;
    fontSize: number;
    flex: number;
    margin: number;
};

const Title = ({ transformY = 8, fontSize = 24, flex = 1, margin = 10 }) => {
    const styles = {
        transform: `translateY(-${transformY})}px`,
        fontSize: `${fontSize}px`,
        flex: `${flex}`,
        margin: `${margin}px`,
    };
    return (
        <span className="nav-menu__title" style={styles}>
            {' '}
            REACT PROJECT
        </span>
    );
};

export default Title;
