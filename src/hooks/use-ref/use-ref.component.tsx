import React, { memo, useEffect, useLayoutEffect, useRef } from 'react';

type UseRefProps = {};

const UseRef = memo<UseRefProps>(() => {
    const ref = useRef<HTMLDivElement>(null!);

    useEffect(() => {
        console.log('useEffect ref ', ref.current);
    }, []);

    useLayoutEffect(() => {
        console.log("I'll be rendered before useEffect");
    }, []);

    return (
        <div ref={ref} onClick={() => console.log(ref)}>
            UseRef
        </div>
    );
});

export default UseRef;
