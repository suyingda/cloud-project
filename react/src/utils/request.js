import axios from 'axios';

axios.defaults.headers.common['Authorization'] = "AUTH_TOKEN";
axios.defaults.headers.areaCode = 1001;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
import {Toast} from 'antd-mobile'

// 使用由库提供的配置的默认值来创建实例
// 此时超时配置的默认值是 `0`
var instance = axios.create();

// 覆写库的超时默认值
// 现在，在超时前，所有请求都会等待 2.5 秒
instance.defaults.timeout = 12500;

export function request({method, url, dispatch, params, data, PENDING, SUCCESS, ERROR}) {
    dispatch({
        types: PENDING,
        data
    });
    let urlData = (method !== 'GET' ? {
        url,
        data
    } : {url: `${url}?${data}`});
    axios({
        method,
        ...urlData,
        timeout: 16000,
    }).then((v) => {
        setTimeout(() => {
            dispatch({
                types: SUCCESS,
                data: v.data
            });
            Toast.success('Request Success', 1);
        }, 100)
        console.log(v, '响应体');

    }).catch((v) => {
        dispatch({
            types: SUCCESS,
            data
        })
        Toast.fail(`Request  ${v} Api :${url}`, 1);
        console.log(v, 'error')
    });
}

export const generate = (string) => {
    return {
        PENDING: string + 'PENDING',
        SUCCESS: string + 'SUCCESS',
        ERROR: string + 'ERROR',
    }
};
