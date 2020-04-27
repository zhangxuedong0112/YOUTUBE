import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/index';
import * as serviceWorker from './serviceWorker';
import "@/index.css"
import 'antd/dist/antd.css';
import { ConfigProvider } from 'antd';
import en_US from 'antd/lib/locale-provider/en_US';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

ReactDOM.render(<ConfigProvider locale={en_US}><App /></ConfigProvider>, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
