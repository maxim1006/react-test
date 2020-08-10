import React from 'react';
import TodoComponent from '../components/todo/todo.component';
import TodoNamesListComponent from '../components/todo/todo-names-list-component';

const ReduxPage = () => {
    return (
        <>
            <TodoComponent />
            <TodoNamesListComponent />
        </>
    );
};

export default ReduxPage;
