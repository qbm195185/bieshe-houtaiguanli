import request from './request'

export const getAllArticle = function (data) {
    return request({
        url: "/article",
        method: "get",
        params: {
            limit: data.limit,
            skip: data.skip,
            // tag: 
        }
    })
}