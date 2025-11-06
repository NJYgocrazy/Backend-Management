import { createApp } from 'vue'

import App from './App.vue'
import "@/assets/less/index.less"
import router from './router'
import {createPinia} from 'pinia'

import "@/api/mock.js"

import api from '@/api/api.js'

import ElementPlus from 'element-plus'

import 'element-plus/dist/index.css'

import * as ElementPlusIconsVue from '@element-plus/icons-vue'

import {useAllDataStore} from '@/store'

function isRoute(to:any) {
    let res = router.getRoutes()
    
    let resFil = res.filter((item) => item.path === to.path);

    return resFil.length > 0;

}

router.beforeEach((to, from) => { 
    if (to.path !== '/login' && !store.state.token) { return { name: "login" } };
    if(!isRoute(to)) return {name: "404"}
})

const app = createApp(App)

const pinia = createPinia()



app.config.globalProperties.$api = api; 

app.use(router).mount('#app')

//注册element-plus
app.use(ElementPlus)

app.use(pinia)

const store = useAllDataStore()

store.addMenu(router,"refresh")


//注册图标组件
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
 