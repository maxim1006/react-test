import React, { FC, memo, useState } from 'react';
import TodoInputComponent from './todo-input.component';
import TodoAddButton from './todo-add-button.component';
import { TodoModel } from '../../models/todo/todo.model';

type TodoControlsProps = {
    onAddTodo: (todo: TodoModel) => void;
};

const TodoControls: FC<TodoControlsProps> = ({ onAddTodo }) => {
    const [inputValue, setInputValue] = useState('');

    const onButtonClick = () => {
        onAddTodo({
            name: inputValue,
            id: `todo_${Date.now()}`,
        });
    };

    return (
        <>
            <TodoInputComponent onChange={e => setInputValue(e.target.value)} />
            <TodoAddButton onClick={onButtonClick} />
        </>
    );
};

export default memo(TodoControls);
