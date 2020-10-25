import React, { FC, memo } from 'react';
import TodoInputComponent from './todo-input.component';
import TodoAddButton from './todo-add-button.component';

type TodoControlsProps = {};

const TodoControls: FC<TodoControlsProps> = () => {
    return (
        <>
            <TodoInputComponent />
            <TodoAddButton />
        </>
    );
};

export default memo(TodoControls);
