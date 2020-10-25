import React, { memo } from 'react';
import TodoInputComponent from './todo-input.component';
import AddButton from './todo-add-button.component';

const TodoControlsComponent = () => {
    return (
        <>
            <TodoInputComponent />
            <AddButton />
        </>
    );
};

export default memo(TodoControlsComponent);
