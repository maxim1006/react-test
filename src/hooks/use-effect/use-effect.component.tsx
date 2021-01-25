import React, { memo, useEffect, useReducer } from 'react';

type UseEffectProps = {};

const UseEffect = memo<UseEffectProps>(() => {
    const [state, forceUpdate] = useReducer(x => x + 1, 0);

    useEffect(() => {
        const cb = () => {
            // need this console.log for the example to make sense
            // eslint-disable-next-line no-console
            console.log('click on document');
        };

        document.documentElement.addEventListener('click', cb);

        return () => {
            document.documentElement.removeEventListener('click', cb);
        };
    }, [state]);

    return <div onClick={forceUpdate}>UseEffect</div>;
});

export default UseEffect;
