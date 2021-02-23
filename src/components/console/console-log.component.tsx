import React, { memo } from 'react';

type ConsoleLogProps = {};

const ConsoleLog = memo<ConsoleLogProps>(() => {
    // how to console log stuff
    const foo = { foo: 1 };
    const bar = { bar: 1 };
    const baz = { baz: 1 };

    console.log({ foo, bar, baz });

    // how to highlight smth
    console.log(`%c My console.log`, 'color: green; font-weight: 700');

    // trace smth
    // console.trace("I'm traced message");

    // performance, option 1
    const performanceStart = performance.now();
    console.log('loop start ', performanceStart);

    loop(1000000);

    // if hot code replacement wolnt work use
    // debugger;

    const performanceEnd = performance.now();
    console.log('loop end ', performanceEnd);
    console.log('loop time ', performanceEnd - performanceStart);

    // performance, option 2
    console.time('loop1');
    loop(1000000);
    console.timeEnd('loop1');

    return <>ConsoleLog</>;
});

export default ConsoleLog;

// helpers
function loop(amount: number): void {
    let i = 0;

    while (i < amount) {
        i++;
    }
}
