import React from "react";
import { observer } from 'mobx-react';
import { BindAll } from 'lodash-decorators';
import homeStore from "./store/index"
import { Button } from "antd";

@observer
@BindAll()
export default class extends React.Component<any, any> {


    render(){
        return <>
            <span>{homeStore.d}</span>

            <Button onClick={()=>{
                homeStore.d += 1;
            }}>add</Button>
        </>
    }
}