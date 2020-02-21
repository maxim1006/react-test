import React from "react";
import "./Link.css";

export default ({href, text, ...restProps}) => {
    return (
        <a {...restProps} className="link" href={href}>{text}</a>
    );
}
