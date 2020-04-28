import { computed, observable, action, toJS } from 'mobx';

class homeStore {
    @observable
    private _d = 0;
    @computed
    public get d(){
        return this._d;
    }
    public set d(data){
        this._d = data;
    }


    @observable
    private _videos = [];
    @computed
    public get videos(){
        return toJS(this._videos)
    }
    public set videos(vs){
        this._videos = vs;
    }


    @action
    public loadVideos(){
        let datas = [];

        for(let i = 0; i <= 12; i++){
            datas.push({
                backImg: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
                headerImg: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
                title: "金正恩變植物人?日曝關鍵8分鐘手術失敗",
                content: "台視新聞 TTV NEWS",
                link: "https://www.youtube.com/watch?v=BNOuQ8Akt-I"
            })
        }

        this.videos = datas;
    }


}

export default new homeStore()