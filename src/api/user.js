import request from './request'
export const getAllUser = (data) => {
    return request({
        url: "/ad/alluser",
        method: "get",
        params: {
            limit: data.limit,
            skip: data.skip
        }
    })
}

export const getOneUser = (data, query) => {
    return request({
        url: "/ad/oneuser",
        method: "post",
        data,
        params: {
            limit: query.limit,
            skip: query.skip
        }
    })
}