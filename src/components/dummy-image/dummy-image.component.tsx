import React from "react";
import "./dummy-image.component.scss";

type DummyImage = { width: number; height: number; bgc: string };

const DummyImage = ({ width = 200, height = 200, bgc = "#000" }) => {
    const styles = {
        width: `${width}px`,
        height: `${height}px`,
        backgroundColor: bgc,
    };

    return <div style={styles} className="dummy-image" />;
};

export default DummyImage;
