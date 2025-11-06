//整个项目api的统一管理

import request from '@/api/request.js'

//请求首页左侧表格数据

export default { 
    getTableData() {
        return request({
            url: '/home/getTableData',
            method: 'get',
            mock: false
        })
    },
    getCountData() {
        return request({
            url: '/home/getCountData',
            method: 'get',
            mock: false
        })
    },

    getChartData() {
        return request({
            url: '/home/getChartData',
            method: 'get',
            mock: false
        })
    },

     getUserData(data) {
        return request({
            url: '/home/getUserData',
            method: 'get',
            mock: false,
            data
        })
    },
     
    deleteUser(data) {
        return request({
            url: '/user/deleteUser',
            method: 'post',
            mock: false,
            data
        })
    },

    addUser(params) {
    return request({
      url: '/user/addUser',
      method: 'post',
      data: params
    })
  },
     
    editUser(params) {
    return request({
      url: '/user/editUser',
      method: 'post',
      data: params
    })
    },
    
    getMenu(params) {
    return request({
      url: '/permission/getMenu',
      method: 'post',
      data: params
    })
}

}