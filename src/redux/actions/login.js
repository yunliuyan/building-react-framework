import {GET_LOGIN_INFO_REQUEST,GET_LOGIN_INFO_SUCCESS,GET_LOGIN_INFO_FAIL} from 'config/constant';

import { LOGIN_INFO } from 'config/api';
console.log()
export function getLogin(data){
    return {
        types: [GET_LOGIN_INFO_REQUEST,GET_LOGIN_INFO_SUCCESS,GET_LOGIN_INFO_FAIL],
        promise: client => client.post(LOGIN_INFO,data)
    }
}