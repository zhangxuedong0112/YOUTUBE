import React from "react";
import { Button, Drawer } from "antd";
import Register from "./register/index";
import Login from "./login/index";

export default class extends React.Component<any, any> {
  
    // onClose = () => {
    //   this.setState({
    //     loginVisible: false,
    //   });
    // };
  
    render(){
        return <div>
            <Drawer
            title={this.props.loginModule=="register"?"注册":"登录"}
            width={520}
            closable={false}
            onClose={this.props.closeLoginVisible}
            visible={this.props.loginVisible}
            >
                {this.props.loginModule=="register"?<Register/>:<Login />}
            </Drawer>
      </div>
    }
}