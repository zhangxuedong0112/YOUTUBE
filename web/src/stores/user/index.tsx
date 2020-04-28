import { observable, computed, toJS } from "mobx";

export default class {
    @observable
    private _user = {
        userName: "",
        name: "",
        header: "",
    }

    @computed
    public get user(){
        return toJS(this._user)
    }
    public set user(u){
        this._user = {
            ...this._user,
            ...u
        }
    }
}