import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    {
        path: '/login',
        component: () => import('@/views/login/index.vue'),
    },
    {
        path: '/',
        component: () => import('../views/Main.vue'),
        children: [
            {
                path: 'home',
                name: 'zhuye',
                component: () => import('../views/home/Home.vue')
            },
            {
                path: 'yonghuguanli',
                name: 'yonghuguanli',
                component: () => import('@/views/yonghuguanli/YongHuGuanLi.vue')
            },
            {
                path: 'wenzhang',
                name: 'wenzhang',
                component: () => import('@/views/wenzhangguanli/WengZhangGuanLi.vue')
            },
            {
                path: 'shangping',
                name: 'shangping',
                component: () => import('@/views/ershoujiaoyi/shangping/ShangPing.vue')
            },
            {
                path: 'dingdan',
                name: 'dingdan',
                component: () => import('@/views/ershoujiaoyi/dingdan/DingDan.vue')
            }
        ]
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

// if (!router.hasRoute()) {
//     router.addRoute({
//         path: window.location.pathname,
//         name: 'TempRoute',
        
//     })
// }
export default router