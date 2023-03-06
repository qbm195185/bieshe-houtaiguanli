import './assets/less/index.less';

import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App)

import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import 'element-plus/dist/index.css'
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

import pinia from '@/store/store'
app.use(pinia)

import router from './router'
app.use(router)

import '@/router/permission'

app.mount('#app')
