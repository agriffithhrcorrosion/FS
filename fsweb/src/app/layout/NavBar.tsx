import { observer } from 'mobx-react-lite';
import React from 'react';
import logo from './logo.svg'
import { Link } from 'react-router-dom';
import { Button, Container,  Menu} from 'semantic-ui-react';


export default observer(function NavBar() {

    return (
        
            <Menu activeIndex='2' size="massive" inverted pointing fixed='top' style={{ minHeight: '60px' }} >
                <Container fluid>
                    <Menu.Item
                        as={Link} to='/'
                        style={{
                            fontWeight: 'bold',
                            fontSize: 18,
                            marginLeft: '5px'
                        }}
                    >
                       <img src={logo} className="App-logo" alt="logo"/>  
                    </Menu.Item>
                    <Menu.Item style={{ fontWeight: 'normal' }}>About</Menu.Item>
                    <Menu.Item style={{ fontWeight: 'normal' }}>Test</Menu.Item>
                    <Menu.Item style={{ fontWeight: 'normal' }}>Test</Menu.Item>
                    <Menu.Item position='right'>
                        <Button
                            as={Link} to='/login'
                            style={{
                                marginRight: '10px',
                                fontSize: '5',
                                backgroundColor: '#FE6347',
                                color: '#ffffff'
                            }}
                        >
                            Log In
                        </Button>
                        <Button
                            as={Link} to='/signup'
                            style={{
                                backgroundColor: '#FE6347',
                                color: '#ffffff'
                            }}
                        >
                            Sign Up
                        </Button>
                    </Menu.Item>
                </Container>
            </Menu>


    )
})