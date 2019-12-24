import React from 'react'
import { render } from 'react-dom'

import { ConfigProvider } from 'antd'
import zhCN from 'antd/es/locale/zh_CN';

import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

import App from './App'
import { mainRouter } from './routes'

render(
    <ConfigProvider locale={zhCN}>
        <Router>
            <Switch>
                <Route path='/admin' component={App} />
                {
                    mainRouter.map(route=>{
                        return (
                            <Route 
                                key={route.pathname}
                                path={route.pathname}
                                component={route.component}    
                            />
                        )
                    })
                }
                <Redirect to='/admin' from='/' exact />
                <Redirect to='/404' />
            </Switch>
        </Router>
    </ConfigProvider>,
    document.getElementById('root')
);