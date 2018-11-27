import counter from 'reduxRouter/reducers/counter';
import userInfo from 'reduxRouter/reducers/userInfo';

import { combineReducers } from 'redux';
// export default function combineReducer(state={},action) {
//     return {
//         counter: counter(state.counter,action),
//         userInfo: userInfo(state.userInfo,action)
//     }
// }
export default combineReducers({
    counter,
    userInfo
})