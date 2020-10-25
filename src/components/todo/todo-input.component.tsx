import React, { FC, memo } from 'react';

type TodoInputProps = {};

const TodoInput: FC<TodoInputProps> = () => {
    return <input type="text" defaultValue="todo-input" />;
};

export default memo(TodoInput);
