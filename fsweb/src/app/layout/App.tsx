import React from 'react';
import NavBar from './NavBar';
import { Container } from 'semantic-ui-react';
import HomePage from '../../features/fitstack/home/HomePage';
import { Route } from 'react-router-dom';
import LoginPage from '../../features/fitstack/login/LoginPage';
import HomePageHeader from '../../features/fitstack/home/HomePageHeader';
import SignUpPage from '../../features/fitstack/login/SignUpPage';

function App() {
  return (
    <>
    <NavBar/>
    <Container>
      <Route exact path='/' component={HomePage}/>
      <Route exact path='/login' component={LoginPage}/>
      <Route exact path='/signup' component={SignUpPage} />
    </Container>
    </>
  );
}

export default App;
