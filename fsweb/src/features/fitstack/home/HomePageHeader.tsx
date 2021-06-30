import { observer } from 'mobx-react-lite';
import React from 'react';
import { Button, Container, Header, Icon } from 'semantic-ui-react';
import { useStore } from '../../../app/stores/store';


export default observer(function HomePageHeader() {

    const {fitStackStore} = useStore();
    const {homePage, setHomePage} = fitStackStore;

    return (
        <Container fluid textAlign='center' text>
            <Header
                as='h1'
                style={{
                    fontSize: '4em',
                    fontWeight: 'bold',
                    marginTop: '3em',
                    color: '#ffffff'
                }}
                content='FitStack'

            />
            <Button
                size="massive"
                style={{
                    marginTop: '20px',
                    backgroundColor: '#2C3458',
                    color: '#ffffff'
                }}
                onClick={() => setHomePage(!homePage)}
            >
                Start Your Fitness Journey
                <Icon name='arrow right' style={{color: '#ffffff', brightness:'100%'}}></Icon>
            </Button>
        </Container>
    )
})