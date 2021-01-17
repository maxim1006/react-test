import React, { FC, memo, useEffect, useState } from 'react';

type HookOnStartProps = {};

let intervalId: number;

const HookOnStart: FC<HookOnStartProps> = memo<HookOnStartProps>(() => {
    const [counter, setCounter] = useState(0);

    if (counter === 10) {
        clearInterval(intervalId);
    }

    useEffect(() => {
        return () => clearInterval(intervalId);
    }, []);

    const onClick = () => {
        if (counter !== 0 && counter < 10) return;

        setCounter(0);

        intervalId = window.setInterval(() => {
            setCounter(i => {
                return ++i;
            });
        }, 1000);
    };

    return (
        <div onClick={onClick} style={{ color: '#fff' }}>
            HookOnStart {counter}
        </div>
    );
});

export default HookOnStart;
