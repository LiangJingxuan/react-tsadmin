import {
    Home
} from '../views'

// 公共路由
export const mainRouter = [
    {

    }
];

// 页面路由
export const adminRouter = [
    {
        pathname: '/admin/home',
        component: Home,
        title: '首页',
        isNav: true,
        icon: 'home',
    }
];