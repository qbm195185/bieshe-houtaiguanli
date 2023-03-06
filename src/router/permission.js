import router from "./index";
import { diffTokenTime } from '@/utils/auth'

// import pinia from '@/store/store'
// import app from '@/store/modules/app'
// let store = app(pinia)
// console.log(store);


const whiteList = ['/login']
router.beforeEach((to, form, next) => {
    if (localStorage.getItem('token')) {
        if(diffTokenTime()){
            localStorage.clear()
            router.replace('/login')
            return Promise.reject(new Error('token失效'))
        }
    }
    if (localStorage.token) {
        if (to.path === '/login') {
            next('/home')
        } else {
            next()
        }
    } else {
        if (whiteList.includes(to.path)) {
            next()
        } else {
            next('/login')
        }
    }
})