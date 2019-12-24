import {
    NotFound,
    Home,
    NoticeList
} from '../views'

// 公共路由
export const mainRouter = [
    {
        pathname: '/404',
        component: NotFound,
    }
];

// 页面路由
export const adminRouter = [
    {
        pathname: '/admin/home',
        component: Home,
        name: '系统首页',
        isNav: true,
        icon: 'home',
    },
    {
        pathname: '/admin/notice',
        name: '公告管理',
        isNav: true,
        icon: 'notification',
        sub: [
            {
                pathname: '/admin/notice/list',
                component: NoticeList,
                name: '公告查询',
                isNav: true,
            },
            {
                pathname: '/admin/notice/add',
                component: NoticeList,
                name: '公告新增',
                isNav: true,
            }
        ]
    }
];