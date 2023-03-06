import axios from 'axios'
import { ElMessage } from 'element-plus'
import { diffTokenTime } from '@/utils/auth'
import router from '@/router'


// import pinia from '@/store/store'
// import app from '@/store/modules/app'
// let store = app(pinia)
// console.log(store);

const service = axios.create({
    baseURL: process.env.BASE_API,
    timeout: 5000,
})

service.interceptors.request.use((config) => {
    // console.log(store);
    if (localStorage.getItem('token')) {
        if(diffTokenTime()){
            localStorage.clear()
            router.replace('/login')
            return Promise.reject(new Error('token失效'))
        }
        // console.log(localStorage.getItem('token'));
        config.headers.authorization = 'Bearer '+localStorage.getItem('token')
    }
    return config
}, (error) => {
    return Promise.reject(new Error(error))
})

service.interceptors.response.use((res) => {
    // console.log("errorrrrr");
    if (res.status === 202) {
        for (let item in res.data.errors) {
            ElMessage.error(res.data.errors[item].msg)
        }
        // return Promise.reject(new Error('error'))
    } else {
        return res.data
    }
}, (error) => {
    // console.log(error.response.data);
    ElMessage.error("error")
    return Promise.reject(new Error('super error'))
})


export default service