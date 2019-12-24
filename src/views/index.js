import loadable from 'react-loadable'
import { Loading } from '../components'

// 路由懒加载设置
const load = (fn)=>(
    loadable({
        loader: fn,
        loading: Loading
    })
);

// 404
const NotFound = load( ()=>import('./NotFound') );
// 首页
const Home = load( ()=>import('./Home') );
// 公告管理
const NoticeList = load( ()=>import('./Notice') );

export {
    Home,
    NotFound,
    NoticeList
}