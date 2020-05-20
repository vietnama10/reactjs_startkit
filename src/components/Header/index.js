import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import {
  SettingOutlined,
} from '@ant-design/icons';

const { Header } = Layout;
const { SubMenu } = Menu;

function LayoutHeader() {
  return (
    <React.Fragment>
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <Link to="/home">Home</Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/not-found">Not Found</Link>
            </Menu.Item>
            <SubMenu
              title={
                <span className="submenu-title-wrapper">
                  <SettingOutlined />
              Option - Submenu
            </span>
              }
            >
              <Menu.ItemGroup title="Item 1">
                <Menu.Item key="setting:1">Option 1</Menu.Item>
                <Menu.Item key="setting:2">Option 2</Menu.Item>
              </Menu.ItemGroup>
              <Menu.ItemGroup title="Item 2">
                <Menu.Item key="setting:3">Option 3</Menu.Item>
                <Menu.Item key="setting:4">Option 4</Menu.Item>
              </Menu.ItemGroup>
            </SubMenu>
          </Menu>
        </Header>
      </Layout>
    </React.Fragment>
  )
}

export default LayoutHeader;