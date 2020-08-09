import React, { memo, useState } from 'react';
import ContextChildComponent from './context-child.component';
import ContextExampleContext from './context-example.context';

const ContextParentComponent = () => {
    const [languageState, setLanguageState] = useState('en');

    return (
        <>
            <ContextExampleContext.Provider
                value={{ value: languageState, setValue: setLanguageState }}
            >
                <ContextChildComponent />
            </ContextExampleContext.Provider>
        </>
    );
};

export default memo(ContextParentComponent);
