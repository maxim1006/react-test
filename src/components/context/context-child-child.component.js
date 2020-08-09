import React, { memo, useContext, useRef } from 'react';
import ContextExampleContext from './context-example.context';

const ContextChildChildComponent = () => {
    const ref = useRef();
    const contextValue = useContext(ContextExampleContext);

    return (
        <>
            <div>
                <div>Change language</div>
                <input ref={ref} type="text" />
                <button
                    type="button"
                    onClick={() => contextValue.setValue(ref.current.value)}
                >
                    Change language
                </button>
            </div>
            ContextChildChildComponent context value: {contextValue.value}
        </>
    );
};

export default memo(ContextChildChildComponent);
