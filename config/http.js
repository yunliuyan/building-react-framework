/**
 * 对请求接口的函数进行封装，若进行服务器请求可引用本文件的函数 
 * */
import axios from 'axios';

export function requsetByAxios({
            method='GET', 
            url='',   
            responseType='json', 
            baseURL='', 
            transformRequest=[function(data){
                return data
            }], 
            transformResponse=[function(data){
                return data
            }], 
            headers = {}, 
            params =  {}, 
            timeout=10000,
        }={}){
          return axios({
                method,
                url,
                responseType,
                baseURL,
                transformRequest,
                transformResponse,
                headers,
                params,
                timeout
            }).then(res=>{
                return res.data
            }).catch(res=>{
                console.log(res.data)
            })

        }

