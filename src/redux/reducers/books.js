import {GET_USER_INFO_REQUEST,GET_USER_INFO_SUCCESS,GET_USER_INFO_FAIL} from 'reduxRouter/actions/userInfo';

const initState = {
    isLoading: false,
    books: {},
    errorMsg: ''
};

export default function reducer(state = initState, action) {
    switch (action.type) {
        case GET_USER_INFO_REQUEST:
            return {
                ...state,
                isLoading: true,
                books: {},
                errorMsg: '',
            };
        case GET_USER_INFO_SUCCESS:
            return {
                ...state,
                isLoading: false,
                books: action.result.data,
                errorMsg: ''
            };
        case GET_USER_INFO_FAIL: 
            return {
                ...state,
                isLoading: false,
                books: {},
                errorMsg: '请求错误'
            };
        default: 
            return state
    }
}