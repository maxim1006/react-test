import React, { Component, memo, useCallback, useState } from 'react';
import ParentChildComponent from './components/parent-child.component';

// 3 kinds of interactions
/*
 * 1) Parent child interaction
 * 2) Context
 *
 * */
const ParentComponent = () => {
    console.log('ParentComponent rerender');
    const [counter, setCounter] = useState(0);

    const clickCb = useCallback(e => {
        console.log('clickCb');
    }, []);

    const customCb = useCallback(prop => console.log('customCb'), []);

    return (
        <>
            <div onClick={() => setCounter(v => ++v)}>
                Counter click {counter}
            </div>
            <ParentChildComponent
                onClick={clickCb}
                customCb={customCb}
                prop="prop"
                booleanProp
            />
        </>
    );
};

export default memo(ParentComponent);
