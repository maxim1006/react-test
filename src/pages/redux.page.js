import React from 'react';
import TodoComponent from '../components/todo/todo.component';

import StoreTest from '../store/store-test.component';

const ReduxPage = () => {
    return (
        <>
            <StoreTest />
            <TodoComponent />
        </>
    );
};

export default ReduxPage;
