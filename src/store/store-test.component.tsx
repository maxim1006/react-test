import React, { memo } from 'react';
import thunk from 'redux-thunk';
import { applyMiddleware, compose, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

interface TodoModel {
    name: string;
    id: string;
    state: 'new' | 'progress' | 'completed';
}

interface RootStateModel {
    todos: TodoModel[];
}

interface AddTodoActionModel {
    type: 'ADD_TODO';
    payload: TodoModel;
}

const addTodoAction = (todo: TodoModel): AddTodoActionModel => ({
    type: 'ADD_TODO',
    payload: todo,
});

const initState: TodoModel[] = [];

function reducer(state = initState, action: AddTodoActionModel) {
    switch (action.type) {
        case 'ADD_TODO': {
            const { payload: todo } = action;
            return [...state, todo];
        }

        default:
            return state;
    }
}

// const middlewares = [thunk];
// const middlewareEnhancer = applyMiddleware(...middlewares);
// const enhancers = [middlewareEnhancer];
// const composedEnhancers =
//     process.env.NODE_ENV !== 'production'
//         ? composeWithDevTools(...enhancers)
//         : compose(applyMiddleware(thunk));

export const store = createStore(reducer);

store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(
    addTodoAction({
        name: 'new Todo 1',
        id: '1',
        state: 'new',
    })
);

store.dispatch(
    addTodoAction({
        name: 'new Todo 2',
        id: '2',
        state: 'completed',
    })
);

const StoreTest = () => {
    return <>StoreTestComponent</>;
};

export default memo(StoreTest);
