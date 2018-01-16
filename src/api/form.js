import fetch from '../fetch'
import Qs from 'qs'
// 获取轮播图列表 
export function getcategory(params) {
    return fetch({
        url: '/api/getcategory/'+params,
        method: 'get',
    });
}
export function addfinance(postData) {
    return fetch({
        url: '/api/addfinance',
        method: 'post',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        },
        data: Qs.stringify(postData)
    });
}
export function getinfo() {
    return fetch({
        url: '/api/getinfo',
        method: 'get',
    });
}
export function getsum() {
    return fetch({
        url: '/api/getsum',
        method: 'get',
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