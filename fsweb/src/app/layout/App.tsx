import React from 'react';
import NavBar from './NavBar';
import { Container, Segment } from 'semantic-ui-react';
import HomePage from '../../features/fitstack/home/HomePage';
import { Route } from 'react-router-dom';
import LoginPage from '../../features/fitstack/login/signup/LoginPage';
import SignupPage from '../../features/fitstack/login/signup/SignupPage';

function App() {
  return (
    <>
      <Segment inverted style={{ minHeight: '650px' }} >
        <NavBar />
        <Container>
          <Route  exact path='/' component={HomePage}/>
          <Route path='/login' component={LoginPage}/>
          <Route path='/signup' component={SignupPage}/>
        </Container>


      </Segment>

    </>
  );
}

export default App;
