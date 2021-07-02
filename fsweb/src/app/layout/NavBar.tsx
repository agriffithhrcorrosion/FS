import { observer } from 'mobx-react-lite';
import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Menu, Segment } from 'semantic-ui-react';
import HomePageHeader from '../../features/fitstack/home/HomePageHeader';
import LoginPage from '../../features/fitstack/login/LoginPage';
import SignUpPage from '../../features/fitstack/login/SignUpPage';
import { useStore } from '../stores/store';


export default observer(function NavBar() {

    const { fitStackStore } = useStore();
<<<<<<< HEAD
    const { setHomePage, homePage, setLoginPage, loginPage, setSignUpPage, signUpPage } = fitStackStore;
=======
    const { homePage } = fitStackStore;
>>>>>>> b36ea86d37195b40ce7667c6fcf54d2f0c4d5ef1

    return (
        
            <Menu activeIndex='2' size="massive" inverted pointing fixed='top' style={{ marginTop: '15px', minHeight: '60px' }} >
                <Container fluid>
                    <Menu.Item
                        style={{
                            fontWeight: 'bold',
                            fontSize: 25
                        }}
                    >FitStack
                    </Menu.Item>
                    <Menu.Item style={{ fontWeight: 'normal' }}>About</Menu.Item>
                    <Menu.Item style={{ fontWeight: 'normal' }}>Test</Menu.Item>
                    <Menu.Item style={{ fontWeight: 'normal' }}>Test</Menu.Item>
                    <Menu.Item position='right'>
                        <Button
<<<<<<< HEAD
                            onClick={() => { setHomePage(!homePage); setLoginPage(!loginPage) }}
=======
                            as={Link} to='/login'
>>>>>>> b36ea86d37195b40ce7667c6fcf54d2f0c4d5ef1
                            style={{
                                marginRight: '10px',
                                fontSize: '5',
                                backgroundColor: '#2C3458',
                                color: '#ffffff'
                            }}
                        >
                            Log In
                        </Button>
                        <Button
<<<<<<< HEAD
                            onClick={() => { setHomePage(!homePage); setSignUpPage(!signUpPage) }}
=======
                            as={Link} to='/signup'
>>>>>>> b36ea86d37195b40ce7667c6fcf54d2f0c4d5ef1
                            style={{
                                backgroundColor: '#2C3458',
                                color: '#ffffff'
                            }}
                        >
                            Sign Up
                        </Button>
                    </Menu.Item>
                </Container>
            </Menu>
<<<<<<< HEAD
            {homePage && <HomePageHeader />}
            {loginPage && <LoginPage />}
            {signUpPage && <SignUpPage />}
        </Segment>
=======
>>>>>>> b36ea86d37195b40ce7667c6fcf54d2f0c4d5ef1


    )
})