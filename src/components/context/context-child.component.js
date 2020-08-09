import React, { memo, useContext } from 'react';
import ContextChildChildComponent from './context-child-child.component';
import ContextExampleContext from './context-example.context';

const ContextChildComponent = () => {
    const contextValue = useContext(ContextExampleContext);

    console.log(contextValue);

    return (
        <>
            <p>ContextChildComponent context value: {contextValue.value}</p>
            <div>
                <ContextChildChildComponent />
            </div>
        </>
    );
};

export default memo(ContextChildComponent);
