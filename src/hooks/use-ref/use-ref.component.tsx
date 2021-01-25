import React, { memo, useEffect, useLayoutEffect, useRef } from 'react';

type UseRefProps = {};

const UseRef = memo<UseRefProps>(() => {
    const ref = useRef<HTMLDivElement>(null!);

    // 2nd way of useRef usage
    // const valueThatIsNotChangedOnRerendering = useRef<object>({});

    useEffect(() => {
        // console.log needed for the example
        // eslint-disable-next-line no-console
        console.log('useEffect ref ', ref.current);
    }, []);

    useLayoutEffect(() => {
        // console.log needed for the example
        // eslint-disable-next-line no-console
        console.log("I'll be rendered before useEffect");
    }, []);

    return (
        // console.log needed for the example
        // eslint-disable-next-line no-console
        <div ref={ref} onClick={() => console.log(ref)}>
            UseRef
        </div>
    );
});

export default UseRef;
