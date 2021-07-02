import React from 'react';
import NavBar from './NavBar';
import { Container, Segment } from 'semantic-ui-react';
import HomePage from '../../features/fitstack/home/HomePage';
import { Route } from 'react-router-dom';
<<<<<<< HEAD
import LoginPage from '../../features/fitstack/login/LoginPage';
import HomePageHeader from '../../features/fitstack/home/HomePageHeader';
import SignUpPage from '../../features/fitstack/login/SignUpPage';
=======
import LoginPage from '../../features/fitstack/login/signup/LoginPage';
import SignupPage from '../../features/fitstack/login/signup/SignupPage';
>>>>>>> b36ea86d37195b40ce7667c6fcf54d2f0c4d5ef1

function App() {
  return (
    <>
<<<<<<< HEAD
    <NavBar/>
    <Container>
      <Route exact path='/' component={HomePage}/>
      <Route exact path='/login' component={LoginPage}/>
      <Route exact path='/signup' component={SignUpPage} />
    </Container>
=======
      <Segment inverted style={{ minHeight: '650px' }} >
        <NavBar />
        <Container>
          <Route  exact path='/' component={HomePage}/>
          <Route path='/login' component={LoginPage}/>
          <Route path='/signup' component={SignupPage}/>
        </Container>


      </Segment>

>>>>>>> b36ea86d37195b40ce7667c6fcf54d2f0c4d5ef1
    </>
  );
}

export default App;
