import React, { memo, useCallback, useEffect, useState } from 'react';
import TodoList from './todo-list.component';
import TodoControls from './todo-controls.component';
import TodoFilters from './todo-filters.component';
import { TodoModel } from '../../models/todo/todo.model';
import MaterialLoader from '../loader/MaterialLoader';

type TodoProps = {};

const Todo = memo<TodoProps>(() => {
    const [todoList, setTodoList] = useState<{
        data: TodoModel[];
    }>({
        data: [],
    });

    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        setLoading(true);

        (async () => {
            try {
                const {
                    default: data,
                }: {
                    default: TodoModel[];
                } = await import('./todo.data.json');

                setTodoList({
                    data,
                });

                setLoading(false);
            } catch (e) {
                console.error(e);
                setLoading(false);
            }
        })();
    }, []);

    const onAddTodo = useCallback(
        (todo: TodoModel) => {
            setTodoList(todoList => {
                const data = [...todoList.data, todo];

                return {
                    ...todoList,
                    data,
                };
            });
        },
        [todoList]
    );

    return (
        <>
            <TodoFilters />
            <TodoControls onAddTodo={onAddTodo} />

            {loading ? <MaterialLoader /> : <TodoList model={todoList.data} />}
        </>
    );
});

export default Todo;
