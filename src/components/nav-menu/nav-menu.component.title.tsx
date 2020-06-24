// styled component
// had to use 'flex' instead of 'flexGrow (flex-grow)'
// transform does not do anything

import React from "react";

type logo = {
    transform: string;
    fontSize: number;
    flex: number;
};

const Title = ({ transformY = 8, fontSize = 24, flex = 1 }) => {
    const styles = {
        transform: `translateY(-${transformY})}px`,
        fontSize: `${fontSize}px`,
        flex: `${flex}`,
    };
    return (
        <span className="reactTitle" style={styles}>
            {" "}
            REACT PROJECT
        </span>
    );
};

export default Title;
