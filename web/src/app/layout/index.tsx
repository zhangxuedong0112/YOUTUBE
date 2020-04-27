import React from "react";
import { Layout, Menu, Breadcrumb, Spin } from "antd";
import { renderRoutes } from "react-router-config";
import { LoadingOutlined } from '@ant-design/icons';
const { Header, Content, Footer } = Layout;

export default class extends React.Component<any, any> {

    renderRoutes = renderRoutes(this.props.route.routes);
    render(){

        return <Layout className="layout">
            <Header>
                <div className="logo" />
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                    <Menu.Item key="1">nav 1</Menu.Item>
                    <Menu.Item key="2">nav 2</Menu.Item>
                    <Menu.Item key="3">nav 3</Menu.Item>
                </Menu>
            </Header>

            <Content style={{ padding: '0 50px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>
                <div className="site-layout-content">
                <React.Suspense fallback={<div className='lenovo-layout-content-spin'><Spin size="large" tip="loading..." indicator={<LoadingOutlined spin />} /></div>}>
                    {this.renderRoutes}
                </React.Suspense>
                </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>youtube demo ©2020 Created by zxd</Footer>
      </Layout>
    }
}