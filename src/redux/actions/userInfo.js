export const GET_USER_INFO_REQUEST = 'userInfo/GET_USER_INFO_REQUEST';
export const GET_USER_INFO_SUCCESS = 'userinfo/GET_USER_INFO_SUCCESS';
export const GET_USER_INFO_FAIL = 'userinfo/GET_USER_INFO_FAIL';

// function getUserInfoRequest(){
//     return {
//         type: GET_USER_INFO_REQUEST
//     }
// };

// function getUserInfoSuccess(userInfo) {
//     return {
//         type: GET_USER_INFO_SUCCESS,
//         userInfo:userInfo
//     }
// }
// function getUserInfoFail() {
//     return {
//         type: GET_USER_INFO_FAIL,
//     }
// }
// export function getUserInfo() {
//     return function(dispatch) {
//         dispatch(getUserInfoRequest());
//         return fetch('http://localhost:8000/api/user.json').then((response=>{
//             return response.json()
//         })).then(json=>{
//             dispatch(getUserInfoSuccess(json))
//         }).catch(()=>{
//             dispatch(getUserInfoFail())
//         })
//     }
// }

//运用middleware 与 axios发起异步action

export function getUserInfo() {
    return {
        types: [GET_USER_INFO_REQUEST,GET_USER_INFO_SUCCESS,GET_USER_INFO_FAIL],
        promise: client => client.get(`/api/user`)
    }
}