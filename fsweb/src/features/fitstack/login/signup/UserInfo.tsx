import firebase from 'firebase';
import { observer } from 'mobx-react-lite';
import { stringifyKey } from 'mobx/dist/internal';
import { ChangeEvent, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Form, Grid, GridColumn, GridRow, Header, Label, ListProps, Segment } from 'semantic-ui-react';
import { StringLiteral } from 'typescript';
import fitStackStore from '../../../../app/stores/fitStackStore';
import { useStore } from '../../../../app/stores/store';



export default observer(function LoginPage() {

    const {fitStackStore} = useStore();
    const {setValues, userDetails, userDetailKeys} = fitStackStore;

    
    /* async function  handleSignUp(): Promise<string> {
        try {
            if (signUpInfo.password === signUpInfo.confirmPassword) {
                await firebase.auth().createUserWithEmailAndPassword(signUpInfo.email, signUpInfo.password);
            }
            return 'true';
        } catch (e) {
            return e;
        }
    } */

     function handleChange(event: ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target;
        setValues(userDetails, name as typeof userDetailKeys , value)
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
                    }}>Let's Gather Some Additional Info</Header>
                </Container>
                <GridRow verticalAlign='middle' >
                    <Form  size='large' >
                        <Segment stacked>
                            <Form.Input onChange={handleChange}  name='firstName' icon='mail' iconPosition='left' focus marginTop='2em' placeholder='Age' />
                            <Form.Input onChange={handleChange}   name='lastName' icon='arrows alternate vertical' iconPosition='left' focus marginTop='2em' placeholder='Age' />
                            <Button as={Link} to='/setupinfo' type='submit' fluid content='Create account' style={{ color: 'white', backgroundColor: '#FE6347' }} />
                        </Segment>
                    </Form>
                </GridRow>
                <GridRow>
                    <Button as={Link} to='/login' fluid basic animated  >
                        <Button.Content visible style={{ color: 'white' }}>Aready have an account?</Button.Content>
                        <Button.Content hidden style={{ backgroundcolor: 'rgb(44, 52, 88, 0)' }}>
                            <Header style={{ color: 'black', fontSize: 14, fontWeight: 'bold' }} content='Sign In Instead' />
                        </Button.Content>
                    </Button>
                </GridRow>
                <Label content={userDetails.firstName} />
                <Label content={userDetails.lastName} />
            </GridColumn>
        </Grid>
    )
})