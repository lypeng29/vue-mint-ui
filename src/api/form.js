import fetch from '../fetch'
// 获取轮播图列表 
export function getcategory(params) {
    return fetch({
        url: '/api/getcategory',
        method: 'get',
        params: params
    });
}
// 用户状态查询
export function queryUserInfo(userinfo) {
    return fetch({
        url: '/Api/Chinapnr/queryUserInfo',
        method: 'post',
        data: userinfo
    });
}