import React, { Component, memo, useEffect, useReducer } from 'react';

type UseEffectProps = {};

const UseEffect = memo<UseEffectProps>(() => {
    const [state, forceUpdate] = useReducer(x => x + 1, 0);

    useEffect(() => {
        const cb = () => {
            console.log('click on document');
        };

        document.documentElement.addEventListener('click', cb);
        console.log(state);

        return () => {
            document.documentElement.removeEventListener('click', cb);
            console.log('useEffect cb is triggered');
        };
    }, [state]);

    return <div onClick={forceUpdate}>UseEffect</div>;
});

export default UseEffect;
