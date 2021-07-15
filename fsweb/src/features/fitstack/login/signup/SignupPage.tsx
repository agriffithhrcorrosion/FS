import firebase from 'firebase';
import { observer } from 'mobx-react-lite';
import { stringifyKey } from 'mobx/dist/internal';
import { ChangeEvent, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Form, Grid, GridColumn, GridRow, Header, Label, Message, Segment } from 'semantic-ui-react';
import { useStore } from '../../../../app/stores/store';



export default observer(function LoginPage() {

    const [signUpInfo, setSignUpInfo] = useState({
        email: '',
        password: '',
        confirmPassword: '',
    });

    const {fitStackStore} = useStore();
    const {setValues, userDetails, userDetailKeys} = fitStackStore;

    
    async function  handleSignUp(): Promise<string> {
        try {
            if (signUpInfo.password === signUpInfo.confirmPassword) {
                await firebase.auth().createUserWithEmailAndPassword(signUpInfo.email, signUpInfo.password);
            }
            return 'true';
        } catch (e) {
            return e;
        }
    }

    function handleChangeInput(event: ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target;
        setSignUpInfo({ ...signUpInfo, [name]: value })
        setValues(userDetails, name as typeof userDetailKeys, value);
    }

    function handleButtonPress(event: React.MouseEvent<HTMLButtonElement> ){
        const {id, value} = event.currentTarget;
        setValues(userDetails, id as typeof userDetailKeys, value)
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
                    <Form  size='large' >
                        <Segment stacked>
                        <Form.Input onChange={handleChangeInput} name='firstName' icon='user' iconPosition='left' focus marginTop='2em' placeholder='First Name' />
                        <Form.Input onChange={handleChangeInput} name='lastName' icon='user' iconPosition='left' focus marginTop='2em' placeholder='Last Name' />
                            <Form.Input onChange={handleChangeInput} name='email' icon='mail' iconPosition='left' focus marginTop='2em' placeholder='Email' />
                            <Form.Input onChange={handleChangeInput} name='password' focus marginTop='2em' icon='key' iconPosition='left' placeholder='Create a password' type='password' />
                            <Form.Input onChange={handleChangeInput} name='confirmPassword' focus marginTop='2em' icon='key' iconPosition='left' placeholder='Confirm password' type='password' />

                            {signUpInfo.password !== signUpInfo.confirmPassword ? (
                                <Message color='red'>
                                    Passwords must match!
                                </Message>
                            ) : (null)}
                                <Button type='submit' 
                                disabled={signUpInfo.password !== signUpInfo.confirmPassword} 
                                fluid content='Create account' style={{ color: 'white', backgroundColor: '#FE6347' }} />

                        </Segment>
                    </Form>
                </GridRow>
                <GridRow>
                    <Button as={Link} to='/login' fluid basic animated style={{marginTop: '10px'}} >
                        <Button.Content visible style={{ color: 'white' }}>Aready have an account?</Button.Content>
                        <Button.Content hidden style={{ backgroundcolor: 'rgb(44, 52, 88, 0)' }}>
                            <Header style={{ color: 'black', fontSize: 14, fontWeight: 'bold' }} content='Sign In Instead' />
                        </Button.Content>
                    </Button>
                </GridRow>
                <Label content={[firebase.auth().currentUser?.email]} />
                <Label content={userDetails.email} />
                <Label content={userDetails.firstName} />
                <Label content={userDetails.lastName} />
                <Label content={signUpInfo.email} />
            </GridColumn>
        </Grid>
    )
})