import firebase from 'firebase';
import { observer } from 'mobx-react-lite';
import { stringifyKey } from 'mobx/dist/internal';
import { ChangeEvent, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Form, Grid, GridColumn, GridRow, Header, Icon, Label, List, ListProps, Rail, Segment } from 'semantic-ui-react';
import { StringLiteral } from 'typescript';
import fitStackStore from '../../../../app/stores/fitStackStore';
import { useStore } from '../../../../app/stores/store';



export default observer(function LoginPage() {

    const { fitStackStore } = useStore();
    const { setValues, userDetails, userDetailKeys, signUpInfoState, setSignUpState } = fitStackStore;

    const buttonStyle = {
        color: '#FE6347',
        backgroundColor: '#ffffff',
        minWidth: '20em',
    }


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
        setValues(userDetails, name as typeof userDetailKeys, value)
    }

    function handleButtonPress(event: React.MouseEvent<HTMLButtonElement>) {
        const { id, value } = event.currentTarget;
        setValues(userDetails, id as typeof userDetailKeys, value)
    }

    function submitUserInfo() {
        var uid = firebase.auth().currentUser?.uid
        firebase.firestore().collection('UserInfo').doc(uid).set({
            admin: false,
            age: userDetails.age,
            email: userDetails.email,
            firstName: userDetails.firstName,
            height: userDetails.height,
            lastName: userDetails.lastName,
            mainWorkoutGoal: userDetails.workoutGoal,
            nationality: userDetails.nationality,
            weight: userDetails.weight,
            workoutExperienceLevel: userDetails.howExperienced,
            workoutFrequency: userDetails.workoutFrequency
        })
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
                    <Form size='large' >
                        <Segment stacked>
                            {signUpInfoState === 0 &&
                                <Container>
                                    <Header content='Daily Caloric Intake' style={{ color: '#272C33' }} />
                                    <Form.Input onChange={handleChange} name='dailyCalories' icon='fire' iconPosition='left' focus marginTop='2em' placeholder='Daily Calories' />
                                    <Container style={{ minHeight: '1em' }} />
                                </Container>
                            }
                            {signUpInfoState === 1 &&
                                <Container>
                                    <Header content='Workout Frequency' style={{ color: '#000000' }} />
                                    <Form.Button inverted onClick={handleButtonPress} value='Daily' id='workoutFrequency' content='Daily' style={buttonStyle} />
                                    <Form.Button inverted onClick={handleButtonPress} value='1-2 days a week' id='workoutFrequency' content='1-2 days a week' style={buttonStyle} />
                                    <Form.Button invertedonClick={handleButtonPress} value='3-4 days a week' id='workoutFrequency' content='3-4 days a week' style={buttonStyle} />
                                    <Form.Button inverted onClick={handleButtonPress} value='5-6 days a week' id='workoutFrequency' content='5-6 days a week' style={buttonStyle} />
                                    <Container style={{ minHeight: '1em' }} />
                                </Container>
                            }
                            {signUpInfoState === 2 &&
                                <Container>
                                    <Header content='Workout Goal' style={{ color: '#000000' }} />
                                    <Form.Button inverted onClick={handleButtonPress} value='I want to get stronger' id='workoutGoal' content='I want to get stronger' style={buttonStyle} />
                                    <Form.Button inverted onClick={handleButtonPress} value='I want to lose weight' id='workoutGoal' content='I want to lose weight' style={buttonStyle} />
                                    <Form.Button inverted onClick={handleButtonPress} value='I want to gain more muscle' id='workoutGoal' content='I want to gain more muscle' style={buttonStyle} />
                                    <Form.Button inverted onClick={handleButtonPress} value='Just to improve my health' id='workoutGoal' content='Just to improve my health' style={buttonStyle} />
                                    <Container style={{ minHeight: '1em' }} />
                                </Container>
                            }
                            {signUpInfoState === 3 &&
                                <Container>
                                    <Header content='Lifting Experience' style={{ color: '#000000' }} />
                                    <Form.Button inverted onClick={handleButtonPress} value='Beginner' id='howExperienced' content='Beginner' style={buttonStyle} />
                                    <Form.Button inverted onClick={handleButtonPress} value='Moderate' id='howExperienced' content='Moderate' style={buttonStyle} />
                                    <Form.Button inverted onClick={handleButtonPress} value='Experienced' id='howExperienced' content='Experienced' style={buttonStyle} />
                                    <Form.Button inverted onClick={handleButtonPress} value='Professional' id='howExperienced' content='Professional' style={buttonStyle} />
                                    <Container style={{ minHeight: '1em' }} />
                                </Container>
                            }
                            {signUpInfoState === 4 &&
                                <Container>
                                    <Header content='About You' style={{ color: '#272C33' }} />
                                    <Form.Input onChange={handleChange} name='height' icon='arrows alternate vertical' iconPosition='left' focus marginTop='2em' placeholder='height' />
                                    <Form.Input onChange={handleChange} name='weight' icon='weight' iconPosition='left' focus marginTop='2em' placeholder='weight' />
                                    <Form.Input onChange={handleChange} name='age' icon='user' iconPosition='left' focus marginTop='2em' placeholder='age' />
                                    <Form.Input onChange={handleChange} name='nationality' icon='flag' iconPosition='left' focus marginTop='2em' placeholder='nationality' />
                                    <Container style={{ minHeight: '1em' }} />
                                </Container>
                            }
                            {signUpInfoState !== 4 &&
                                <Container>
                                    <Button onClick={setSignUpState} fluid style={{ color: 'white', backgroundColor: '#FE6347' }} >
                                        Continue
                                        <Icon name='arrow right' />
                                    </Button>
                                </Container>
                            }
                            {signUpInfoState === 4 &&
                                <Container>
                                    <Button onClick={submitUserInfo} as={Link} to='/' fluid style={{ color: 'white', backgroundColor: '#FE6347' }} >
                                        Continue
                                        <Icon name='arrow right' />
                                    </Button>
                                </Container>
                            }

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
            </GridColumn>
        </Grid>
    )
}
)