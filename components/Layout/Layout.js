import React, { useState } from 'react'
import { Affix, Layout, Menu } from 'antd';
import {
  BookOutlined,
  HomeOutlined,
  DownloadOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;


const LayoutWrapper = ({children}) => {
  const [collapsed,setCollapse] =  useState(true);
  const [container, setContainer] = useState(null);
  const collapseHandler = _ => {
    setCollapse(!collapsed);
  }
  return (
          <Sider 
          collapsedWidth={80}
          style={{ minHeight : '100vh' }}
          collapsible 
          collapsed={collapsed} 
          onCollapse={collapseHandler}>
            <div className="logo" />
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
              <Menu.Item key="1" icon={<HomeOutlined />}>
                Home
              </Menu.Item>
              <Menu.Item key="2" icon={<BookOutlined />}>
                Courses
              </Menu.Item>
              <SubMenu key="sub1" icon={<UserOutlined />} title="User">
                <Menu.Item key="3">Tom</Menu.Item>
                <Menu.Item key="4">Bill</Menu.Item>
                <Menu.Item key="5">Alex</Menu.Item>
              </SubMenu>
              <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
                <Menu.Item key="6">Team 1</Menu.Item>
                <Menu.Item key="8">Team 2</Menu.Item>
              </SubMenu>
              <Menu.Item key="9" icon={<DownloadOutlined />}>
                Downloads
              </Menu.Item>
            </Menu>
          </Sider>
  )
}

export default LayoutWrapper

