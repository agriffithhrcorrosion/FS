import { observer } from 'mobx-react-lite';
import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Form, Grid, GridColumn, GridRow, Header, Icon, Input, Label, Menu, Segment } from 'semantic-ui-react';
import { useStore } from '../../../app/stores/store';

export default observer(function LoginPage() {

    const { fitStackStore } = useStore();
    const { setHomePage, homePage, loginPage, setLoginPage, setSignUpPage, signUpPage } = fitStackStore;

    return (
        <>
            <div style={{ marginTop: '30px' }} >
                <Grid verticalAlign='middle' textAlign='center' style={{ height: '10vh' }} >
                    <GridColumn style={{ maxWidth: 550 }}>
                        <Container fluid textAlign='center' >
                            <Header as='h1' style={{
                                fontSize: '2em',
                                fontWeight: 'bold',
                                marginTop: '3em',
                                marginBottom: '25px',
                                color: '#ffffff'
                            }}>Create a fitstack account</Header>
                        </Container>

                        <GridRow verticalAlign='middle' >

                            <Form size='large' style={{ color: 'rgb(0,0,0,0)', }} >
                                <Segment stacked>
                                    <Form.Input focus marginTop='2em' placeholder='First name' />
                                    <Form.Input focus marginTop='2em' placeholder='Last name' />
                                    <Form.Input focus marginTop='2em' placeholder='Email' />

                                    <Form.Input focus marginTop='2em' icon='user' iconPosition='left' placeholder='Create a username' />
                                    <Form.Input focus marginTop='2em' icon='key' iconPosition='left' placeholder='Create a password' type='password' />
                                    <Form.Input focus marginTop='2em' icon='key' iconPosition='left' placeholder='Confirm password' type='password'/>
                                    <Form.Button fluid content='Create account' style={{ color: 'white' }} onClick={() => { setHomePage(!homePage); setSignUpPage(!signUpPage) }}/>
                                </Segment>
                            </Form>
                        </GridRow>
                        <br />
                        <GridRow>
                            <Button fluid basic animated  onClick={() => { setLoginPage(!loginPage); setSignUpPage(!signUpPage)}}>
                                <Button.Content visible style={{ color: 'white' }}>Aready have an account?</Button.Content>
                                <Button.Content hidden style={{ backgroundcolor: 'rgb(44, 52, 88, 1)' }}>
                                    <div>
                                        <Header style={{ color: 'black', fontSize: 14, fontWeight: 'bold' }} content='Sign in instead' />

                                    </div>
                                </Button.Content>
                            </Button>
                        </GridRow>
                    </GridColumn>

                </Grid>
            </div>

        </>

    )


})