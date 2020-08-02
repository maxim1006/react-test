import React, { memo } from 'react';
import ContextChildComponent from './context-child.component';
import ContextExampleContext from './context-example.context';

const ContextParentComponent = () => {
    return (
        <>
            <ContextExampleContext.Provider value={'en'}>
                <ContextChildComponent />
            </ContextExampleContext.Provider>
        </>
    );
};

export default memo(ContextParentComponent);
