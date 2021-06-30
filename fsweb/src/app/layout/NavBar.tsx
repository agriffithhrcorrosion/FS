import { observer } from 'mobx-react-lite';
import React from 'react';
import { Button, Container,Menu, Segment } from 'semantic-ui-react';
import HomePageHeader from '../../features/fitstack/home/HomePageHeader';
import { useStore } from '../stores/store';


export default observer(function NavBar() {

    const {fitStackStore} = useStore();
    const {homePage} = fitStackStore;

    return (
        <Segment inverted style={{ minHeight: '650px' }} >
            <Menu size="massive" inverted pointing fixed='top' style={{ marginTop: '15px', minHeight: '60px' }} >
                <Container fluid>
                    <Menu.Item
                        style={{ 
                            fontWeight: 'bold' ,
                            fontSize: 25
                        }}
                    >FitStack
                    </Menu.Item>
                    <Menu.Item as='a' style={{ fontWeight: 'normal' }}>About</Menu.Item>
                    <Menu.Item style={{ fontWeight: 'normal' }}>Test</Menu.Item>
                    <Menu.Item style={{ fontWeight: 'normal' }}>Test</Menu.Item>
                    <Menu.Item position='right'>
                        <Button
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
            { homePage &&
            <HomePageHeader />}
        </Segment>


    )
})