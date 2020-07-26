import React, { memo } from 'react';
import ParentChildComponent from './components/parent-child.component';

// 3 kinds of interactions
/*
 *
 *
 * */

const ParentComponent = () => {
    return (
        <>
            <ParentChildComponent
                onClick={e => {
                    console.log(e.target);
                }}
                prop={'prop'}
                booleanProp
                customCb={prop => console.log(prop)}
            />
        </>
    );
};

export default memo(ParentComponent);
