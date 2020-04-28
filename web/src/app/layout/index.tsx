import { Layout, Menu, Spin, Avatar, Popover, Progress } from 'antd';
import { renderRoutes } from "react-router-config";
import { Route, Link } from 'react-router-dom';
import Login from "../../pages/login/index"
import "./index.css"

import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  LoadingOutlined,
  UnorderedListOutlined,
} from '@ant-design/icons';
import React from 'react';
import Search from 'antd/lib/input/Search';
import { bindAll } from 'lodash-decorators';

const { Header, Sider, Content } = Layout;

@bindAll()
export default class extends React.Component<any, any> {
  state = {
    collapsed: false,
    loginVisible: false,
    loginModule: "login"//register
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  renderRoutes = renderRoutes(this.props.route.routes);

  userLoginClick(loginModule){
    this.setState({
        loginVisible: true,
        loginModule: loginModule || "login"
    })
  }

  closeLoginVisible(){
      console.log("@@@@@@@@@@@@@@@@@")
      this.setState({
        loginVisible: false
      })
  }

  render() {

    const text = <span>zhangxd</span>;
    const content = (
    <div className="userLoginPre">
        <p onClick={()=>{
            this.userLoginClick("login")
        }}>登录</p>

        <p onClick={()=>{
            this.userLoginClick("register")
        }}>注册</p>

        <p onClick={()=>{
            // this.userLoginClick("register")
        }}>注销</p>
    </div>
    );

    return (
      <Layout className="components-layout-demo-custom-trigger">
            {/* <Progress className="pageProgressLoading" showInfo={false} percent={30} size="small" /> */}


            <Sider className="MenuSider" trigger={null} collapsible collapsed={this.state.collapsed}>

            <div className="logo" onClick={this.toggle}>
                {/* <UnorderedListOutlined /> */}
                <b ></b>
            </div>

          <Menu theme="light" className="menuList" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
                <UserOutlined />
                <span>
                    <Link to='/home'>
                        首页
                    </Link>
                </span>
                
            </Menu.Item>
            <Menu.Item key="2">
              <VideoCameraOutlined />
                <span>
                    <Link to='/'>
                        时下流行
                    </Link>
                </span>
            </Menu.Item>
            <Menu.Item key="3">
              <UploadOutlined />
                <span>
                    <Link to='/'>
                        订阅内容
                    </Link>
                </span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
            <Header className="site-layout-background menuHeader" style={{ padding: 0 }}>
                {/* {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                    className: 'trigger',
                    onClick: this.toggle,
                })} */}

                <Search className="searchInput" placeholder="搜索" onSearch={value => console.log(value)} enterButton />

                <Popover className="userInfoHeader" placement="bottomRight" title={text} content={content} trigger="click">
                    <Avatar className="" style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />    
                </Popover>
                
            </Header>
            <Content
                className="site-layout-background"
                style={{
                margin: '24px 16px',
                padding: 24,
                minHeight: 280,
                }}
            >
                <React.Suspense fallback={<div className='lenovo-layout-content-spin'><Spin size="large" tip="loading..." indicator={<LoadingOutlined spin />} /></div>}>
                    {this.renderRoutes}
                </React.Suspense>
            </Content>
        </Layout>
        <Login loginVisible={this.state.loginVisible} loginModule={this.state.loginModule} closeLoginVisible={this.closeLoginVisible}></Login>
      </Layout>
    );
  }
}