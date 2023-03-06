import { defineStore } from 'pinia'
import { login as loginApi } from '@/api/login'
import router from '@/router'
import { setTokenTime } from '@/utils/auth'

const useAppStore = defineStore("app", {
    state: () => {
        return {
            token: localStorage.getItem('token') || '',
            id: '',
            name: '',
            role: '',
            _id: ''
        }
    },
    getters: {

    },
    actions: {
        setToken(res) {
            // console.log(res);
            this.token = res.token
            this.id = res.id
            this.name = res.name
            this.role = res.role
            this._id = res._id
            localStorage.setItem('token', res.token)
        },
        login(userInfo) {
            return new Promise((resolve, reject) => {
                loginApi(userInfo).then(res => {
                    // console.log(res);
                    if (res) {
                        this.setToken(res)
                        setTokenTime()
                        router.replace('home')
                        resolve()
                    }

                }).catch((error) => {
                    reject(error)
                })
            })
        },
        loginout() {
            this.token = ''
            localStorage.clear()
            router.replace('/login')
        }
    },
    persist: {
        enabled: true
    }
})

export default useAppStore