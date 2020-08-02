import React, { memo, useContext } from 'react';
import ContextExampleContext from './context-example.context';

const ContextChildChildComponent = () => {
    const contextValue = useContext(ContextExampleContext);

    return <>ContextChildChildComponent context value: {contextValue}</>;
};

export default memo(ContextChildChildComponent);
