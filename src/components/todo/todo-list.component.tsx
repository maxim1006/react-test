import React, { FC, memo } from 'react';
import TodoListItem from './todo-list-item.component';
import { TodoModel } from '../../models/todo/todo.model';

type TodoListProps = {
    model: TodoModel[];
};

const TodoList: FC<TodoListProps> = ({ model }) => {
    return (
        <ul>
            {model.map((item: TodoModel) => (
                <TodoListItem key={item.id} {...item} />
            ))}
        </ul>
    );
};

export default memo(TodoList);
