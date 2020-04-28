import React from "react";
import { observer } from 'mobx-react';
import { BindAll } from 'lodash-decorators';
import homeStore from "./store/index"
import { Button, Card, Avatar } from "antd";
import Meta from "antd/lib/card/Meta";
import "./index.css"

@observer
@BindAll()
export default class extends React.Component<any, any> {
    loading = false

    componentWillMount(){
        homeStore.loadVideos()
    }

    render(){
        let renderVideos = ()=>{

            let list = homeStore.videos.map((d, index)=>{
                // console.log(d, index)
                return <Card 
                    key={index}
                    className="contentVideosDom" 
                    loading={this.loading} 
                    hoverable
                    cover={<a href={d.link}><img
                        style={{width: "100%"}}
                        alt="example"
                        src={d.backImg}
                      /></a>}
                    >
                        <Meta
                            avatar={
                            <Avatar src={d.headerImg} />
                            }
                            title={d.title}
                            description={d.content}
                        />
                </Card>
            })   

            return list || null
        }


        return <div>
                <div className="contentVideosPre">
                    {
                        renderVideos()
                    }
                    

                </div>

        </div>
    }
}