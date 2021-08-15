import { configureStore } from '@reduxjs/toolkit';
import reducers from './features';
import rootSage from './saga';
import middleware from 'redux-saga';

const sagaMiddleware = middleware();

const store = configureStore({
    reducer: reducers,
    middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSage);

export default store;