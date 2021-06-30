import { makeAutoObservable } from "mobx";

export default class fitStackStore {
    homePage = true;



    constructor() {
        makeAutoObservable(this)
    }

    setHomePage = (state: boolean) => {
        this.homePage = state;
    }

}