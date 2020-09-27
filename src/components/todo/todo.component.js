import React, { memo } from 'react';
import TodoFiltersComponent from './todo-filters.component';
import TodoList from './todo-list.component';
import TodoControlsComponent from './todo-controls.component';

const TodoComponent = () => {
    return (
        <>
            <TodoControlsComponent />
            <TodoFiltersComponent />
            <TodoList />
        </>
    );
};

export default memo(TodoComponent);
