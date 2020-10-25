import React, { FC, memo } from 'react';
import { TodoModel } from '../../models/todo/todo.model';

interface TodoListItemProps extends TodoModel {}

const TodoListItem: FC<TodoListItemProps> = ({ name, description }) => {
    return (
        <>
            <h4>{name}</h4>
            <p>{description}</p>
        </>
    );
};

export default memo(TodoListItem);
