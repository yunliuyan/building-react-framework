import counter from 'reduxRouter/reducers/counter';
import userInfo from 'reduxRouter/reducers/userInfo';
import books from 'reduxRouter/reducers/books';
import login from 'reduxRouter/reducers/login'

import { combineReducers } from 'redux';
// export default function combineReducer(state={},action) {
//     return {
//         counter: counter(state.counter,action),
//         userInfo: userInfo(state.userInfo,action)
//     }
// }
export default combineReducers({
    counter,
    userInfo,
    books,
    login,
})