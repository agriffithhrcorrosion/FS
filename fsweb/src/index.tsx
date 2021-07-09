import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import './app/layout/styles.css';
import App from './app/layout/App';
import reportWebVitals from './reportWebVitals';
import { store, StoreContext } from './app/stores/store';
import { BrowserRouter } from 'react-router-dom';
import firebase from 'firebase';

 var firebaseConfig = {
  apiKey: "AIzaSyAHFPwUloEUJUwCZy2WqotE7Dr9itPbyoI",
  authDomain: "fitkit-a5310.firebaseapp.com",
  projectId: "fitkit-a5310",
  storageBucket: "fitkit-a5310.appspot.com",
  messagingSenderId: "950746999580",
  appId: "1:950746999580:web:0e45d5cc8c651e30e068d9",
  measurementId: "G-P3ZHRD90HY"
};

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <StoreContext.Provider value={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StoreContext.Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
