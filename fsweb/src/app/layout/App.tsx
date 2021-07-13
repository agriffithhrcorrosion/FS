import React, { useEffect } from 'react';
import NavBar from './NavBar';
import { Container, Segment } from 'semantic-ui-react';
import HomePage from '../../features/fitstack/home/HomePage';
import { Route } from 'react-router-dom';
import LoginPage from '../../features/fitstack/login/signup/LoginPage';
import SignupPage from '../../features/fitstack/login/signup/SignupPage';
import { auth } from '../../firebase/firebase';
import { useStore } from '../stores/store';
import { observer } from 'mobx-react-lite';
import firebase from 'firebase';
import HomePageHeader from '../../features/fitstack/home/HomePageHeader';

function App() {

  const {fitStackStore} = useStore();
  const {currentUser, setCurrentUser} = fitStackStore;

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(user => {
        setCurrentUser(user);
        
    })
    return unsubscribe
}, [])

  return (
    <>
      <Segment inverted style={{ minHeight: '650px' }} >
        <NavBar />
        <Container>
          <Route path='/' component={HomePage} />
          <Route exact path='/' component={HomePageHeader} />
          {/* <Route  exact path='/' component={HomePage}/> */}
          <Route path='/login' component={LoginPage}/>
          <Route path='/signup' component={SignupPage}/>
        </Container>


      </Segment>

    </>
  );
}

export default observer(App);
