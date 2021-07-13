import firebase from 'firebase';
import { observer } from 'mobx-react-lite';
import React, { ChangeEvent, useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Form, Grid, GridColumn, GridRow, Header, Label, Segment } from 'semantic-ui-react';
import { useStore } from '../../../../app/stores/store';

export default observer(function LoginPage() {

    const [signInInfo, setSignInInfo] = useState({
        email: '',
        password: '',
    })

    async function handleLogIn(): Promise<string> {
        try{
            firebase.auth().signInWithEmailAndPassword(signInInfo.email, signInInfo.password);
            return 'true';
        }catch(e){
            return e;
        }
    }

    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target;
        setSignInInfo({ ...signInInfo, [name]: value })
    }

    return (
                <Grid verticalAlign='middle' textAlign='center' style={{marginTop: '20px', height: '10vh' }} >
                    <GridColumn style={{ maxWidth: 550 }}>
                        <Container fluid textAlign='center' >
                            <Header as='h1' style={{
                                fontSize: '2em',
                                fontWeight: 'bold',
                                marginTop: '3em',
                                marginBottom: '25px',
                                color: '#ffffff'
                            }}>Sign in to FitStack</Header>
                        </Container>

                        <GridRow verticalAlign='middle' >
                            <Form onSubmit={handleLogIn} size='large' style={{backgroundColor: '#2C3458'}} >
                                <Segment stacked>
                                    <Form.Input onChange={handleChange} name='email' focus marginTop='2em' icon='mail' iconPosition='left' placeholder='Email' />
                                    <Form.Input onChange={handleChange} name='password' focus marginTop='2em' icon='key' iconPosition='left' placeholder='Password' type='password' />
                                    <Form.Button type='submit' fluid content='Sign in' style={{ color: 'white', backgroundColor: '#FE6347' }}/>
                                    
                                </Segment>
                            </Form>
                        </GridRow>
                        <GridRow>
                            <Button style={{marginTop: '10px'}} fluid basic animated >
                                <Button.Content visible style={{ color: 'white' }}>Forgot your username or password?</Button.Content>
                                <Button.Content hidden style={{ backgroundcolor: 'rgb(44, 52, 88, 0)' }}>
                                        <Header style={{ color: 'black', fontSize: 14, fontWeight: 'bold' }} content='Click here for account help' />
                                </Button.Content>
                            </Button>
                        </GridRow>
                        <GridRow>
                            <Button style={{marginTop: '10px'}} as={Link} to='/signup'  fluid basic animated >
                                <Button.Content visible style={{ color: 'white' }}>Don't have an account? </Button.Content>
                                <Button.Content hidden style={{ backgroundcolor: 'rgb(44, 52, 88, 0)' }}>
                                        <Header style={{ color: 'black', fontSize: 14, fontWeight: 'bold' }} content='Click here to create one' />
                                </Button.Content>
                            </Button>
                        </GridRow>
                        
                        
                        <Label>{firebase.auth().currentUser?.email}</Label>
                    </GridColumn>
                </Grid>
    )
})