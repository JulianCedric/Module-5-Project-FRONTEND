import React from 'react';
import './App.css';
import { Checkbox, Grid, Header, Icon, Segment, Table } from 'semantic-ui-react';
import CheckboxExampleDOMComparison from'./CheckboxExampleDOMComparison';
import HumanBehaviorFramework from './HumanBehaviorFramework';
import DailyScore from './DailyScore';
import ScoreCard from './ScoreCard';

class Lab extends React.Component {
    state = {  
        dailyPass: false,
        dailyWins: []
    }

    dayWon() {
        console.log('this.state.dailyWins.length:', this.state.dailyWins.length + 1)
        {
            if (this.state.dailyWins.length + 1 === 3) {
                this.toggle() 
            }
        }
    }

    handleClickCheckbox = e => {
        console.log(' [ EVENT ] : 1 Daily Win Added.')
        this.setState({dailyWins: [...this.state.dailyWins, 1]})
        this.dayWon()
    }

    handleClickCraving = e => {
        console.log(' [ ACTION ] : Player ')
    }

    handleClickCue = e => {
        console.log(' [ EVENT ] : PLAYER BECOMES AWARE OF HIS DAZED MENTAL STATE.')
    }

    toggle() {
        this.setState({dailyPass: !this.state.dailyPass})
    }

    render() { 
        console.log('this.state.dailyScore', this.state.dailyScore)
        console.log('this.state.dailyWins', this.state.dailyWins)
        console.log('this.state.dailyWins.length:', this.state.dailyWins.length)
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

                <ScoreCard handleClickCheckbox={this.handleClickCheckbox}/>
                
                <div>
                    <p>Today's Score:</p>
                    {
                        this.state.dailyPass
                            ? "PASS"
                            : null 
                    }
                </div>
                
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>

                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                
                <CheckboxExampleDOMComparison />

            </div>
        );
    }
}
 
export default Lab;