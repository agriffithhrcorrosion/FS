import firebase from 'firebase';
import React from 'react';
import { Container, Menu, Statistic } from 'semantic-ui-react';
import HomePageHeader from './HomePageHeader';

export default function HomePage() {

    const statisticValue = {
        color: 'white',
        fontWeight: 'bold'
    }
    const statisticLabel = {
        color: 'white',
        marginTop: '10px',
    }

    var userInfoCollection = firebase.firestore().collection('UserInfo')
    var documents = Array(userInfoCollection.get());

    return (
        <>
       {/* <HomePageHeader /> */}
            <Container fluid >
                <Menu fluid widths='4' style={{ marginBottom: '5em', backgroundColor: '#272C33', color: '#CECECE' }} fixed='bottom'>
                    <Menu.Item>
                        <Statistic>
                            <Statistic.Value style={statisticValue}></Statistic.Value>
                            <Statistic.Label style={statisticLabel}>Labels</Statistic.Label>
                        </Statistic>
                    </Menu.Item>
                    <Menu.Item>
                        <Statistic>
                            <Statistic.Value style={statisticValue}>Numbers</Statistic.Value>
                            <Statistic.Label style={statisticLabel}>Labels</Statistic.Label>
                        </Statistic>
                    </Menu.Item>
                    <Menu.Item>
                        <Statistic>
                            <Statistic.Value style={statisticValue}>Numbers</Statistic.Value>
                            <Statistic.Label style={statisticLabel}>Labels</Statistic.Label>
                        </Statistic>
                    </Menu.Item>
                    <Menu.Item>
                        <Statistic>
                            <Statistic.Value style={statisticValue}>Numbers</Statistic.Value>
                            <Statistic.Label style={statisticLabel}>Labels</Statistic.Label>
                        </Statistic>
                    </Menu.Item>
                </Menu>
            </Container>

        </>
    )
}