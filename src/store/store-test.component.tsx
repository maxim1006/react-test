import React, { memo } from 'react';
import { createStore } from 'redux';

// state
// interface StateModel {}

// action
// interface ActionModel {
//     type: string;
//     payload: any;
// }

// actionCreator
// type ActionCreatorModel = (arg: any) => ActionModel;

// ReducerModel
// type ReducerModel = (state: StateModel, action: ActionModel) => StateModel;

interface TodoModel {
    name: string;
    id: string;
    state: 'new' | 'progress' | 'completed';
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
    // console.log needed for the example
    // eslint-disable-next-line no-console
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
