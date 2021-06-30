import React from 'react';
import { Container, Menu, Statistic } from 'semantic-ui-react';

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
           <Container fluid>
           <Menu  borderless widths='4' style={{marginBottom: '7em', backgroundColor: 'rgb(0,0,0,0)', color: 'rgb(0,0,0,0)'}} fixed='bottom'>
               <Menu.Item>
                   <Statistic>
                       <Statistic.Value style={statisticValue}>10/10</Statistic.Value>
                       <Statistic.Label style={statisticLabel}>Stats</Statistic.Label>
                   </Statistic>
               </Menu.Item>
               <Menu.Item>
                   <Statistic>
                       <Statistic.Value style={statisticValue}>100%</Statistic.Value>
                       <Statistic.Label style={statisticLabel}>Stats</Statistic.Label>
                   </Statistic>
               </Menu.Item>
               <Menu.Item>
                   <Statistic>
                       <Statistic.Value style={statisticValue}>Numbers</Statistic.Value>
                       <Statistic.Label style={statisticLabel}>Stats</Statistic.Label>
                   </Statistic>
               </Menu.Item>
               <Menu.Item>
                   <Statistic>
                       <Statistic.Value style={statisticValue}>100</Statistic.Value>
                       <Statistic.Label style={statisticLabel}>Stats</Statistic.Label>
                   </Statistic>
               </Menu.Item>
           </Menu>
           </Container>
        </>
    )
}