import React from 'react';
import { renderRoutes, RouteConfig } from 'react-router-config';
import Layout from './layout/index';

/**
 *  react-router-config 配置文档  https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
 *  react-router 配置文档 https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/api/Route.md
 *  path 配置文档 https://github.com/pillarjs/path-to-regexp/tree/v1.7.0
 */
let development = process.env.NODE_ENV === "development"

const router:RouteConfig[] = [
    {
        path: "/",
        component: Layout,//有侧边栏

        routes: [
            {
                path: "/",
                exact: true,
                component: React.lazy(() => import("../pages/home/index"))
            },
            {
                path: "/home",
                exact: true,
                component: React.lazy(() => import("../pages/home/index"))
            }
        ]
    }
]

export default renderRoutes(router) 
