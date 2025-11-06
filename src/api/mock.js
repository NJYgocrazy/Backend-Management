import Mock from 'mockjs';
import homeApi from './mockData/home.js';
import userApi from './mockData/user.js';
import permissionApi from './mockData/permission'

//1.拦截的路径 2.拦截的方法 3.制造出的假数据
Mock.mock(/api\/home\/getTableData/, "get", homeApi.getTableData)

Mock.mock(/api\/home\/getCountData/, "get", homeApi.getCountData)

Mock.mock(/api\/home\/getChartData/, "get", homeApi.getChartData)

Mock.mock(/api\/home\/getUserData/, "get", userApi.getUserList)

Mock.mock(/api\/user\/deleteUser/, "post", userApi.deleteUser)

Mock.mock(/user\/addUser/, "post", userApi.createUser)

Mock.mock(/user\/editUser/, "post", userApi.updateUser)

Mock.mock(/api\/permission\/getMenu/, "post",permissionApi.getMenu)