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
}

export default new homeStore()