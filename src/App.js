import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import { adminRouter } from './routes'
import { Navigation } from './components'

const menus = adminRouter.filter(route=>route.isNav)
export default class App extends Component {
    render() {
        return (
            <Navigation menus={menus}>
                <Switch>
                    {
                        adminRouter.map(route=>{
                            return (
                                route.sub
                                ?
                                route.sub.map(subRoute=>{
                                    return (
                                        <Route 
                                            key={subRoute.pathname}
                                            path={subRoute.pathname}    
                                            exact={subRoute.exact}
                                            render={
                                                (routerProps)=>{
                                                    return <subRoute.component {...routerProps} />
                                                }
                                            }
                                        />
                                    )
                                })
                                :
                                <Route 
                                    key={route.pathname}
                                    path={route.pathname}    
                                    exact={route.exact}
                                    render={
                                        (routerProps)=>{
                                            return <route.component {...routerProps} />
                                        }
                                    }
                                />
                            )
                        })
                    }
                    <Redirect to={adminRouter[0].pathname} from='/admin' exact />
                    <Redirect to='/404' />
                </Switch>
            </Navigation>
        )
    }
}