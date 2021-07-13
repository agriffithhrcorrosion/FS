import firebase from 'firebase';
import { observer } from 'mobx-react-lite';
import { ChangeEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Form, Grid, GridColumn, GridRow, Header, Message, Segment } from 'semantic-ui-react';



export default observer(function LoginPage() {

    const [userSignup, setUserSignup] = useState({
        email: '',
        password: '',
        confirmPassword: ''
    })

    async function handleTestSignup(): Promise<string> {
        try {
            if (userSignup.password === userSignup.confirmPassword) {

                await firebase.auth().createUserWithEmailAndPassword(userSignup.email, userSignup.password);
            }
            return 'true';
        } catch (e) {
            console.log(e);
            return e;
        }
    }

    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target;
        setUserSignup({ ...userSignup, [name]: value })
    }

    return (
        <Grid verticalAlign='middle' textAlign='center' style={{ marginTop: '8em', height: '10vh' }} >
            <GridColumn style={{ maxWidth: 550 }}>
                <Container fluid textAlign='center' >
                    <Header as='h1' style={{
                        fontSize: '2em',
                        fontWeight: 'bold',
                        marginBottom: '25px',
                        color: '#ffffff'
                    }}>Create a FitStack account</Header>
                </Container>
                <GridRow verticalAlign='middle' >
                    <Form onSubmit={handleTestSignup} size='large' >
                        <Segment stacked>
                            {userSignup.email.includes('@') }

                            <Form.Input onChange={handleChange} name='email' icon='mail' iconPosition='left' focus marginTop='2em' placeholder='Email' type='email' />
                            {/* <Form.Input focus marginTop='2em' icon='user' iconPosition='left' placeholder='Create a username' /> */}
                            <Form.Input onChange={handleChange} name='password' focus marginTop='2em' icon='key' iconPosition='left' placeholder='Create a password' type='password' />
                            <Form.Input onChange={handleChange} name='confirmPassword' focus marginTop='2em' icon='key' iconPosition='left' placeholder='Confirm password' type='password' />

                            {userSignup.password !== userSignup.confirmPassword ? (
                                <Message color='red'>
                                    Passwords must match!
                                </Message>
                            ) : (null)}
                                <Button type='submit' disabled={userSignup.password !== userSignup.confirmPassword} fluid content='Create account' style={{ color: 'white', backgroundColor: '#FE6347' }} />



                        </Segment>
                    </Form>
                </GridRow>
                <GridRow>
                    <Button style={{ marginTop: '10px' }} as={Link} to='/login' fluid basic animated  >
                        <Button.Content visible style={{ color: 'white' }}>Aready have an account?</Button.Content>
                        <Button.Content hidden style={{ backgroundcolor: 'rgb(44, 52, 88, 0)' }}>
                            <Header style={{ color: 'black', fontSize: 14, fontWeight: 'bold' }} content='Sign In Instead' />
                        </Button.Content>
                    </Button>
                </GridRow>
            </GridColumn>
        </Grid>
    )
})