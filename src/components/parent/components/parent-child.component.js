import React, { memo } from 'react';

const ParentChildComponent = ({ prop, onClick, booleanProp, customCb }) => {
    return (
        <>
            Prop: {prop} <br />
            Prop: {booleanProp}
            <div onClick={onClick}>Click me</div>
            <div
                onClick={() => {
                    customCb('Hello from custom function cb');
                }}
            >
                Custom function trigger
            </div>
        </>
    );
};

export default memo(ParentChildComponent);
