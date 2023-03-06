import request from './request'

export const login = (data) => {
    return request({
        url: "/ad/login",
        method: "POST",
        data
    })
}