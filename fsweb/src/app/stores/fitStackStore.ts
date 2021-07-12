import firebase from "firebase";
import { makeAutoObservable, runInAction } from "mobx";
import { ChangeEvent, useState } from "react";
import { collapseTextChangeRangesAcrossMultipleVersions } from "typescript";

export default class fitStackStore {
    currentUser = {} || null; 
    testBool = true;

    userSignUp = {
        email: '',
        password: '',
        confirmPassword: '',
    }

    userSignIn = {
        email: '',
        password: '',
    }


    constructor() {
        makeAutoObservable(this)
    }

    setCurrentUser = (user: {} | null) => {
        this.currentUser = user
    }

    setUserSignUp(event: ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target;
        this.userSignUp = ({ ...this.userSignUp, [name]: value })
    }

    setUserSignIn(event: ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target;
        this.userSignIn = ({ ...this.userSignIn, [name]: value })
    }

    signUp = async () => {
        try {
            if (this.userSignUp.password === this.userSignUp.confirmPassword) {
                await firebase.auth().createUserWithEmailAndPassword(this.userSignUp.email, this.userSignUp.password);
            }
            return 'true';
        } catch (e) {
            return e;
        }

    }

    signIn = async () => {
        try {

            await firebase.auth().signInWithEmailAndPassword(this.userSignIn.email, this.userSignIn.password);
            return 'true';

        } catch (e) {
            return e;
        }

    }

    setTestBool = (state: boolean) => {
        this.testBool = state;
    }


}