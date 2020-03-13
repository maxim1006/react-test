import React from "react";
import "./Link.css";
import {getWindowCoords} from "../../helpers/dom.helper";

export const Link = ({href, text, ...restProps}) => {
    const {w: windowWidth, h: windowHeight} = getWindowCoords();

    return (
        <>
            Window width: {windowWidth}
            Window height: {windowHeight}
            <a {...restProps} className="link" href={href}>{text}</a>
        </>
    );
};
