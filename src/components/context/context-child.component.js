import React, { memo, useContext } from 'react';
import ContextChildChildComponent from './context-child-child.component';
import ContextExampleContext from './context-example.context';

const ContextChildComponent = () => {
    const contextValue = useContext(ContextExampleContext);

    return (
        <>
            <p>ContextChildComponent context value: {contextValue}</p>
            <p>
                <ContextChildChildComponent />
            </p>
        </>
    );
};

export default memo(ContextChildComponent);
