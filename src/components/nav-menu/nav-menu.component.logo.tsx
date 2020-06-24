// styled component
import React from "react";
import twitterlogo from "../../assets/images/twitter-logo.png";

type logo = {
    width: number;
    height: number;
    transform: string;
    fontSize: number;
};

const logo = ({ width = 50, height = 50, transform = 5, fontSize = 10 }) => {
    const styles = {
        width: `${width}px`,
        height: `${height}px`,
        transform: `translateY(-${transform}px)}`,
        fontSize: `${fontSize}px`,
    };
    return (
        <img style={styles} className="reactLogo" src={twitterlogo} alt="123" />
    );
};

export default logo;
