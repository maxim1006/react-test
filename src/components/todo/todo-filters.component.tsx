import React, { memo, useEffect, useRef } from 'react';

interface TodoFiltersComponent {
    current: any;
}

const TodoFiltersComponent = () => {
    const ref = useRef<HTMLInputElement>(null!); // as per the cheatsheet + InputElement

    useEffect(() => {
        ref.current.indeterminate = true;
    }, []);

    return (
        <>
            <label htmlFor="allTodosFilter">
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

export default memo(TodoFiltersComponent);
