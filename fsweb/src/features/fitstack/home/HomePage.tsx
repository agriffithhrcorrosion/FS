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


    return (
        <>
            <HomePageHeader/>
           <Container fluid>
           <Menu  borderless widths='4' style={{marginBottom: '7em', backgroundColor: 'rgb(0,0,0,0)', color: 'rgb(0,0,0,0)'}} fixed='bottom'>
               <Menu.Item>
                   <Statistic>
                       <Statistic.Value style={statisticValue}>Numbers</Statistic.Value>
                       <Statistic.Label style={statisticLabel}>Labels</Statistic.Label>
                   </Statistic>
               </Menu.Item>
               <Menu.Item>
                   <Statistic>
                       <Statistic.Value style={statisticValue}>Numbers</Statistic.Value>
                       <Statistic.Label style={statisticLabel}>The amount of time im Horny</Statistic.Label>
                   </Statistic>
               </Menu.Item>
               <Menu.Item>
                   <Statistic>
                       <Statistic.Value style={statisticValue}>Numbers</Statistic.Value>
                       <Statistic.Label style={statisticLabel}>What the bench say to me on leg days</Statistic.Label>
                   </Statistic>
               </Menu.Item>
               <Menu.Item>
                   <Statistic>
                       <Statistic.Value style={statisticValue}>Numbers</Statistic.Value>
                       <Statistic.Label style={statisticLabel}>Stats</Statistic.Label>
                   </Statistic>
               </Menu.Item>
           </Menu>
           </Container>
        </>
    )
}