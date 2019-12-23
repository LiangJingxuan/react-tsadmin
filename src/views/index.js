import loadable from 'react-loadable'
import { Loading } from '../components'

// 路由懒加载设置
const load = (fn, component)=>(
    loadable({
        loader: fn,
        loading: component
    })
);

// 首页
const Home = load( ()=>import('./Home'), Loading );

export {
    Home
}