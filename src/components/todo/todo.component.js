import React, { memo } from 'react';
import AddButton from './todo-add-button.component';
import TodoControls from './todo-controls.component';
import TodoInput from './todo-input.component';
import TodoFilters from './todo-filters.component';
import TodoText from './todo-text.component';

export default memo(function TodoComponent() {
    return (
        <div>
            <TodoControls />
            <TodoInput />
            <AddButton />
            <TodoFilters />
            <TodoText />
        </div>
    );
});
