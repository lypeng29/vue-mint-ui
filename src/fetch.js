import axios from 'axios';
// import Cookies from 'js-cookie';
// 创建axios实例
const service = axios.create({
    baseURL: 'http://www.test2.com',
    timeout: 5000 // 请求超时时间
});
export default service;