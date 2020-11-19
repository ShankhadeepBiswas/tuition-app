import React, { useState } from 'react'
import { Layout, Menu } from 'antd';
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
  const collapseHandler = _ => {
    setCollapse(!collapsed);
  }
  return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider 
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
        <Layout className="site-layout" onClick={() => {setCollapse(true)}}>
          {/*<Header className="site-layout-background" style={{ padding: 0 }} /> */}
          <Content style={{ margin: '0 16px' }}>
            { /*<div className="site-layout-background" style={{ padding: 24, minHeight: 360, backgroundColor : 'black' }}>
              Wisdom tutelage
            </div> */}
            {children}
          </Content>
          <Footer style={{ textAlign: 'center' }}>Wisdom Tutelage© {new Date().getFullYear()} Created by Fibocrew</Footer>
        </Layout>
      </Layout>
  )
}

export default LayoutWrapper


