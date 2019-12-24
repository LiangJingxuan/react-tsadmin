import React, {Component} from 'react'
import { withRouter } from 'react-router-dom'

import { Layout, Menu, Icon } from 'antd'

import './index.less'

const { Header, Content, Sider } = Layout;
const { SubMenu } = Menu;

class Navigation extends Component {
    onMenuClick = ({key})=>{
        console.log(key)
        this.props.history.push(key);
    }
    render() {
        const selectedKeysArr = this.props.location.pathname.split('/');
        selectedKeysArr.length=3;
        return (
            <Layout>
                <Sider
                    breakpoint="lg"
                    collapsedWidth="0"
                >
                    <div className="ts-logo">兴商TS系统</div>
                    <Menu
                        theme="dark" 
                        mode="inline"
                        defaultOpenKeys={[selectedKeysArr.join('/')]}
                        selectedKeys={[selectedKeysArr.join('/')]} 
                        onClick={this.onMenuClick}
                    >
                        {
                            this.props.menus.map(item=>{
                                return(
                                    item.sub
                                    ?
                                    <SubMenu
                                        key={item.pathname}
                                        title={
                                        <span>
                                            <Icon type={item.icon} />
                                            {item.name}
                                        </span>
                                        }
                                    >
                                        {
                                            item.sub.map(subitem=>{
                                                return (
                                                    <Menu.Item key={subitem.pathname}>{subitem.name}</Menu.Item>      
                                                )
                                            })
                                        }
                                    </SubMenu>
                                    :
                                    <Menu.Item key={item.pathname}>
                                        <Icon type={item.icon} />
                                        {item.name}
                                    </Menu.Item>                                    
                                )
                            })
                        }
                        </Menu>
                </Sider>
                <Layout>
                    <Header style={{ background: '#fff', padding: 0 }} />
                    <Content style={{ margin: '24px 16px 0' }}>
                        <div style={{ padding: 24, background: '#fff', minHeight: 360, height: '100%' }}>
                            { this.props.children }
                        </div>
                    </Content>
                </Layout>
            </Layout>
        )
    }
}
export default withRouter(Navigation)