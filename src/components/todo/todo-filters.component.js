import React, { memo, useEffect, useRef } from 'react';

const TodoFiltersComponent = () => {
    const ref = useRef();

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
