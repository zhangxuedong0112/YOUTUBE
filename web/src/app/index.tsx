import React from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import { BrowserRouter } from "react-router-dom";
import router from "./router";
const { Header, Content, Footer } = Layout;

export default class extends React.Component<any, any> {

    render(){

        return (
            <BrowserRouter>
              {router}
            </BrowserRouter>
        );
    }
}