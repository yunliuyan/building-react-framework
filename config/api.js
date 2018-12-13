/**
 * 将所有的api接口写在本文件，便于统一管理API
 */

module.exports = {
    LOGIN_INFO: `/api/login`, //获取登录的用户名和密码
    USER_INFO: `/api/user`, //获取用户基本信息
    BOOKS_INFO: `/api/books`,  //获取书籍基本信息
    CHECK_TOKEN: `api/check/token`, //验证本地token是否是真的token
}