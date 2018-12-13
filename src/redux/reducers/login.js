import {GET_LOGIN_INFO_REQUEST,GET_LOGIN_INFO_SUCCESS,GET_LOGIN_INFO_FAIL} from 'config/constant';
import { Cookies } from 'react-cookie';

const initState = {
    isLoading: false,
    login: {},
    errorMsg: ''
};

export default function reducer(state = initState, action) {
    switch (action.type) {
        case GET_LOGIN_INFO_REQUEST:
            return {
                ...state,
                isLoading: true,
                login: {},
                errorMsg: '',
            };
        case GET_LOGIN_INFO_SUCCESS:
            return {
                ...state,
                isLoading: false,
                login: action.result.data,
                errorMsg: ''
            };
        case GET_LOGIN_INFO_FAIL: 
            return {
                ...state,
                isLoading: false,
                login: {},
                errorMsg: '请求错误'
            };
        default: 
            return state
    }
}