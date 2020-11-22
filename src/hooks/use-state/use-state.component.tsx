import React, { memo, useState } from 'react';

type UseStateProps = {};

const UseState = memo<UseStateProps>(() => {
    const [value, setValue] = useState<number>(0);

    return (
        <>
            <button onClick={() => setValue(i => ++i)} type="button">
                Increase
            </button>
            <button onClick={() => setValue(i => --i)} type="button">
                Decrease
            </button>
            {value}
        </>
    );
});

export default UseState;
