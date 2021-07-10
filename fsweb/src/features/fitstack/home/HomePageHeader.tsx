import { observer } from 'mobx-react-lite';
import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Header, Icon } from 'semantic-ui-react';


export default observer(function HomePageHeader() {

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
                rounded='true'
                as={Link} to='/signup'
                size="massive"
                style={{
                    marginTop: '20px',
                    backgroundColor: '#FE6347',
                    color: '#ffffff'
                }}
            >
                Start Your Fitness Journey
                <Icon name='arrow right' style={{color: '#ffffff', brightness:'100%', backgroundcolor: ''}}></Icon>
            </Button>
        </Container>
    )
})