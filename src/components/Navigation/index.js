import React, {Component} from 'react'

import { Layout, Menu, Icon } from 'antd'

import './index.less'

const { Header, Content, Sider } = Layout;

export default class Navigation extends Component {
    render() {
        return (
            <Layout>
                <Sider
                    breakpoint="lg"
                    collapsedWidth="0"
                    onBreakpoint={broken => {
                        console.log(broken);
                    }}
                    onCollapse={(collapsed, type) => {
                        console.log(collapsed, type);
                    }}
                >
                    <div className="ts-logo">兴商TS系统</div>
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
                        <Menu.Item key="1">
                            <Icon type="user" />
                            <span className="nav-text">系统首页</span>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout>
                    <Header style={{ background: '#fff', padding: 0 }} />
                    <Content style={{ margin: '24px 16px 0' }}>
                        <div style={{ padding: 24, background: '#fff', height: '100%' }}>content</div>
                    </Content>
                </Layout>
            </Layout>
        )
    }
}