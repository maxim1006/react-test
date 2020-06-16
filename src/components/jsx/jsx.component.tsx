import React, { memo, useEffect, useRef } from "react";
import "./jsx.component.scss";

type styledCss = {
    backgroundColor: string;
    color: string;
    marginTop: string;
    marginBottom: string;
};

export default memo(() => {
    const styledCss = {
        backgroundColor: "#e8f3e8",
        color: "#333",
        marginTop: "10px",
        marginBottom: "20px",
    };
    const classModifier: string = "_red";
    const countedId: string = "jsxId";
    const ref: any = useRef();

    useEffect(() => {
        const width: number = ref.current.offsetWidth;

        if (width > 500) {
            requestAnimationFrame(() => {
                ref.current.style.width = width + "px";

                requestAnimationFrame(() => {
                    ref.current.style.width = "300px";
                });
            });
        }
    }, []);

    return (
        <div className="jsx">
            <h3>Inline styling</h3>
            <div style={styledCss}>Inline styled div</div>

            <h3>Class example</h3>
            <div className="jsx__class">Class string example</div>
            <div ref={ref} className={`jsx__class _animated ${classModifier}`}>
                Class string example
            </div>

            <h3>Id example</h3>
            <input type="text" id={countedId} />
        </div>
    );
});
