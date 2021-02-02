import React, { memo, useCallback, useState } from 'react';
import ParentChildComponent from './components/parent-child.component';

// 3 kinds of interactions
/*
 * 1) Parent child interaction
 * 2) Context
 *
 * */
const ParentComponent = () => {
    const [counter, setCounter] = useState(0);

    const clickCb = useCallback(e => {
        // need this console.log for the example to work
        // eslint-disable-next-line no-console
        console.log('clickCb', e);
    }, []);
    // need console.log for the example to make sense
    // eslint-disable-next-line no-console
    const customCb = useCallback(prop => console.log('customCb', prop), []);

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
