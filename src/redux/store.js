import { createStore, applyMiddleware } from 'redux';
// import thunkMiddleware from 'redux-thunk';
import combineReducer from 'reduxRouter/reducers.js';

import promiseMiddleware from './middleware/promiseMiddleware';

let  store = createStore(combineReducer,applyMiddleware(promiseMiddleware));

if (module.hot) {
    module.hot.accept("./reducers", () => {
        const nextCombineReducers = require("./reducers").default;
        store.replaceReducer(nextCombineReducers);
    });
}


export default store;