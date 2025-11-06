import { current } from 'hexo/dist/plugins/helper/is'
import {defineStore} from 'pinia'

import {ref, computed,watch} from 'vue'
function initState() {
    return {
        isCollapse: false, //侧边栏是否收起
        tags:[
            {
                path: '/home',
                name: 'home',
                label: '首页',
                icon: 'home'
            }
        ],
        currentMenu: null,
        menuList: [],
        token: "",
        routeList: []

        
    }
}

export const useAllDataStore = defineStore('allData', () => {
    //refstate属性
    //computed getters
    //function actions

    const state = ref(initState())
    
    watch(state, (newObj) => {
        if (!newObj.token) return;
        localStorage.setItem("store", JSON.stringify(newObj))
    },{deep: true})

    function selectMenu(val) {
        if (val.name === 'home') {
            state.value.currentMenu = null;
        }
        else {
            state.value.currentMenu = val;
            let index = state.value.tags.findIndex(item => item.name === val.name)
            index === -1 ? state.value.tags.push(val) : ""
        }
    }

    function undateTags(tag) {
        let index = state.value.tags.findIndex(item => item.name === tag.name)
        state.value.tags.splice(index, 1)
    }

    function updateMenuList(menu) {
        state.value.menuList = menu
    }

    function addMenu(router, type) {
        if (type === "refresh") {
            if (JSON.parse(localStorage.getItem("store"))) {
                state.value = JSON.parse(localStorage.getItem("store"))
                state.value.routeList = [];
            }
            else {
                return
            }
        }
        const menu = state.value.menuList;
        const module = import.meta.glob('../views/**/*.vue')   
        const routeArr = [];
        menu.forEach((item) => {
            if (item.children) {
                item.children.forEach(val => {
                    let url = `../views/${val.url}.vue`
                    val.component = module[url]
                    routeArr.push(...item.children)
                });
            }
            else {
                let url = `../views/${item.url}.vue`
                item.component = module[url]
                routeArr.push(item)
            }
        })
        state.value.routeList = []

        let routers = router.getRoutes()

        routers.forEach(item => {
            if(item.name === "main" || item.name === "login" || item.name === "404") {
                return
            }
            else {
                router.removeRoute(item.name)
            }
        })
        routeArr.forEach(item => {
            state.value.routeList.push(router.addRoute("main",item))
        })

    }

    function clean() {
        state.value.routeList.forEach((item) => {
            if(item) item()
        })
        
        state.value = initState()

        localStorage.removeItem("store")
    }
    return {
        state,
        selectMenu,
        undateTags,
        updateMenuList,
        clean,
        addMenu
    }

})