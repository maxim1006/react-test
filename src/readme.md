// action
{
type: string;
payload: any;
}

// action creator
const addTodoAction = ({name}) => ({
type: 'ADD_TODO',
payload: {
name
}
});

// reducer
const reducer = (oldState = [], action) {
switch(action.type): {
case 'ADD_TODO': {
const {payload} = action;
return [...oldState, payload];
}
default:
return oldState;
}
}

const reducer1 = (oldState = [], action) {
switch(action.type) {
case 'ADD_TODO1': {
const {payload} = action;
return [...oldState, payload];
}
default:
return oldState;
}
}

// reducers
const reducers = combineReducers({reducer, reducer1});

// store
const store = createStore(reducers, {});

store.dispatch(addTodoAction({name: "new TODO"}));
store.dispatch(addTodoAction({name: "new TODO1"}));
store.dispatch(addTodoAction({name: "new TODO1"}));

store.subscribe(() => {
console.log(store.getState()) // state
});
