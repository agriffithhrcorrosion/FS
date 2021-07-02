import { observer } from 'mobx-react-lite';
import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Form, Grid, GridColumn, GridRow, Header, Icon, Input, Label, Menu, Segment } from 'semantic-ui-react';

export default observer(function LoginPage() {


    return (
        <>
            <div style={{ marginTop: '100px' }} >
                <Grid verticalAlign='middle' textAlign='center' style={{ height: '10vh' }} >
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

                            <Form size='large' style={{backgroundColor: '#2C3458'}} >
                                <Segment stacked>
                                    <Form.Input focus marginTop='2em' icon='user' iconPosition='left' placeholder='Username' />
                                    <Form.Input  focus marginTop='2em' icon='key' iconPosition='left' placeholder='Password' type='password' />
                                    <Form.Button fluid content='Sign in' style={{ color: 'white' }}
                                    />
                                </Segment>
                            </Form>
                        </GridRow>
                        <br />
                        <GridRow>
                            <Button fluid basic animated >
                                <Button.Content visible style={{ color: 'white' }}>Forgot your username or password?</Button.Content>
                                <Button.Content hidden style={{ backgroundcolor: 'rgb(44, 52, 88, 1)' }}>
                                    <div>
                                        <Header style={{ color: 'black', fontSize: 14, fontWeight: 'bold' }} content='click here for account help' />

                                    </div>
                                </Button.Content>
                            </Button>

                        </GridRow>
                        <br />
                        <GridRow>
                            <Button as={Link} to='/signup'  fluid basic animated >
                                <Button.Content visible style={{ color: 'white' }}>Don't have an account? </Button.Content>
                                <Button.Content hidden style={{ backgroundcolor: 'rgb(44, 52, 88, 1)' }}>
                                    <div>
                                        <Header style={{ color: 'black', fontSize: 14, fontWeight: 'bold' }} content='Click Here To Create One' />

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