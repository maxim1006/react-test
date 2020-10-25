import React, { FC, memo, useEffect, useState } from 'react';
import TodoList from './todo-list.component';
import TodoControls from './todo-controls.component';
import TodoFilters from './todo-filters.component';
import { TodoModel } from '../../models/todo/todo.model';
import MaterialLoader from '../loader/MaterialLoader';

type TodoProps = {};

const Todo: FC<TodoProps> = () => {
    const [todoListData, setTodoListData] = useState<{
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

                setTodoListData({
                    data,
                });

                setLoading(false);
            } catch (e) {
                console.error(e);
                setLoading(false);
            }
        })();
    }, []);

    return (
        <>
            <TodoFilters />
            <TodoControls />

            {loading ? (
                <MaterialLoader />
            ) : (
                <TodoList model={todoListData.data} />
            )}
        </>
    );
};

export default memo(Todo);
