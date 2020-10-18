import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';
import { reduxBatch } from '@manaflair/redux-batch';
import {
    Action,
    combineReducers,
    configureStore,
    getDefaultMiddleware,
    ThunkAction,
} from '@reduxjs/toolkit';
import {
    FLUSH,
    PAUSE,
    PERSIST,
    persistReducer,
    persistStore,
    PURGE,
    REGISTER,
    REHYDRATE,
} from 'redux-persist';

const preloadedState = {};

const persistConfig = {
    key: 'root',
    version: 1,
    storage,
    whitelist: ['todos'],
};

const rootReducer = combineReducers({});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const Store = configureStore({
    reducer: persistedReducer,
    middleware: [
        ...getDefaultMiddleware({
            // Only for typescript
            serializableCheck: {
                ignoredActions: [
                    FLUSH,
                    REHYDRATE,
                    PAUSE,
                    PERSIST,
                    PURGE,
                    REGISTER,
                ],
            },
        }),
        logger,
    ],
    preloadedState,
    devTools: process.env.NODE_ENV !== 'production',
    enhancers: [reduxBatch],
});

export const Persistor = persistStore(Store);

export type RootState = ReturnType<typeof rootReducer>;

// its a model (interface) not actual code
export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;

export default Store;
