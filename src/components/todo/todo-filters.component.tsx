import React, { FC, memo, useEffect, useRef } from 'react';

type TodoFiltersProps = {};

const TodoFilters: FC<TodoFiltersProps> = () => {
    const ref = useRef<HTMLInputElement>(null!); // as per the cheatsheet + InputElement
    const ref1 = useRef<HTMLLabelElement>(null!); // as per the cheatsheet + InputElement

    useEffect(() => {
        // ref && ref.current.indeterminate = true;
        ref.current.indeterminate = true;
    }, []);

    return (
        <>
            <label ref={ref1} htmlFor="allTodosFilter">
                All <input id="allTodosFilter" type="checkbox" />
            </label>
            <label htmlFor="inProgressTodosFilter">
                In progress{' '}
                <input ref={ref} id="inProgressTodosFilter" type="checkbox" />
            </label>
            <label htmlFor="completedTodosFilter">
                Completed <input id="completedTodosFilter" type="checkbox" />
            </label>
        </>
    );
};

export default memo(TodoFilters);

// interface ModelWithGeneric<T = number> {
//     prop: T;
// }
//
// const obj: ModelWithGeneric<string> = {
//     prop: '1',
// };
//
// console.log(obj);

// type FuncWithGeneric<T = number> = (arg?: T) => T;
// interface FuncWithGenericModel<T = number> {
//     func: (arg?: T) => T;
// }
//
// const func: FuncWithGeneric = (arg = 1) => arg + 1;
//
// const objWithFunc: FuncWithGenericModel = {
//     func: () => 1,
// };
//
// console.log(func(12));
// console.log(objWithFunc.func());
