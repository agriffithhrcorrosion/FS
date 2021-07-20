import firebase from "firebase";
import { keys, makeAutoObservable, runInAction } from "mobx";
import { ChangeEvent, Key, useState } from "react";
import { collapseTextChangeRangesAcrossMultipleVersions, IndexedAccessType, PropertyName } from "typescript";
import { user } from "../models/user";



export default class fitStackStore {
    currentUser!: firebase.User | null;
    testBool = true;
    userDetailKeys!: 'email' | 'firstName' | 'lastName' | 'dailyCalories' | 'workoutFrequency' | 'workoutGoal' | 'howExperienced' | 'height' | 'weight' | 'age' | 'nationality' | 'dailyCalories' 
    signUpInfoState = 0;
    signedInUserDetails!: firebase.firestore.DocumentData | null



    userDetails = {
        email: '',
        firstName: '',
        lastName: '',
        dailyCalories: 0,
        workoutFrequency: '',
        workoutGoal: '',
        howExperienced: '',
        height: 0,
        weight: 0,
        age: 0,
        nationality: '',
    }




    setValues<T, K extends keyof T>(obj: T, propName: K, value: any) {
        obj[propName] = value;
    }

    userSignIn = {
        email: '',
        password: '',
    }

    setSignUpState = () => {
        this.signUpInfoState++
    } 


    constructor() {
        makeAutoObservable(this)
    }

    setSignedInUserDetails = (info: firebase.firestore.DocumentData | null) => {
        this.signedInUserDetails = info;
    }

    setCurrentUser = (user: firebase.User | null) => {
        this.currentUser = user
    }

    /*     setUserSignUp(event: ChangeEvent<HTMLInputElement>) {
            const { name, value } = event.target;
            this.userSignUp = ({ ...this.userSignUp, [name]: value })
        } */

    setUserSignIn(event: ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target;
        this.userSignIn = ({ ...this.userSignIn, [name]: value })
    }

    /*     signUp = async () => {
            try {
                if (this.userSignUp.password === this.userSignUp.confirmPassword) {
                    await firebase.auth().createUserWithEmailAndPassword(this.userSignUp.email, this.userSignUp.password);
                }
                return 'true';
            } catch (e) {
                return e;
            }
    
        }
     */
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
