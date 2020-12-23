import React from 'react';
import './App.css';
import { Checkbox, Grid, Header, Icon, Segment } from 'semantic-ui-react';
import CheckboxExampleDOMComparison from'./CheckboxExampleDOMComparison';
import HumanBehaviorFramework from './HumanBehaviorFramework';

class Lab extends React.Component {
    state = {  
        dailyWins: []
    }

    handleClickCheckbox = e => {
        console.log(' [ EVENT ] : Daily Wins: 1 / 3 ')
        this.setState({dailyWins: [...this.state.dailyWins, 1]})
    }

    handleClickCraving = e => {
        console.log(' [ ACTION ] : Player ')
    }

    handleClickCue = e => {
        console.log(' [ EVENT ] : PLAYER BECOMES AWARE OF HIS DAZED MENTAL STATE.')
    }

    render() { 
        console.log(this.state.dailyWins)
        return (  
            <div style={{color: 'white'}}>
                <Segment style={{height: '140px'}}>
                    <Grid textAlign='center'>
                        <Grid.Row verticalAlign='middle'>
                            <Grid.Column>
                                <Header icon>
                                    <Icon name='lab' />
                                        <h1>Lab</h1>
                                </Header>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>

                <HumanBehaviorFramework />

                <br/>
                <br/>
                <br/>
                <br/>
                <br/>

                <CheckboxExampleDOMComparison />

                <br/>
                <br/>
                <br/>
                <br/>
                <br/>

                <Checkbox 
                    onClick={this.handleClickCheckbox}
                />

                <br/>
                <br/>
                <br/>
                <br/>
                <br/>

            </div>
        );
    }
}
 
export default Lab;