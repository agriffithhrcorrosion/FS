import { makeAutoObservable } from "mobx";

export default class fitStackStore {
    homePage = true;
    loginPage = false;
    signUpPage = false;



    constructor() {
        makeAutoObservable(this)
    }

    setHomePage = (state: boolean) => {
        this.homePage = state;
    }

    setLoginPage = (state: boolean) => {
        this.loginPage = state;
    }
    setSignUpPage = (state: boolean) => {
        this.signUpPage = state;
    }

}