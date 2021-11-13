import React from 'react';
import { Button, Card, Progress } from 'semantic-ui-react';
import ProgressBar from 'react-customizable-progressbar';

class ProgressBarsContainer extends React.Component {
  state = {
    todaysDate: ''
  }

  // 2021.11.10: Updates to ProgressBarsContainer component.

  render() {
    console.log("Date: ", this.props.date)
    console.log(this.props.habits.map(habit => habit.dateCreated))
      return (
          <div className="ui container">
            <hr/><br/>
              <div>
                {this.props.habits.map(habit => {
                  if(habit.counter > 0 && habit.counter < 21){
                    return(
                      <div class="column">
                        <br/>
                          <div>
                            <Card fluid color='green'>
                                  <Card.Content textAlign='center'>
                                    <h3>DAY { habit.counter } / 21</h3>
                                    <hr/>
                                    <h3>Habit:</h3>  
                                    <div style={{ height: '100px' }} class="ui secondary segment" color="green">
                                      <Card.Header>
                                        <h2>"{ habit.description }"</h2>
                                      </Card.Header>
                                    </div>
                                  <Card.Meta  style={{ height: '5px' }}>{ habit.quote }</Card.Meta>
                                    <Card.Description>
                                      <ProgressBar
                                        className="progress-bar"
                                        progress={ (habit.counter/21)*100 }
                                        radius={100}
                                        strokeColor='violet'
                                        strokeWidth={20}
                                      />
                                      <h4>Date Created: {this.props.created_at}</h4>
                                    </Card.Description>
                                  </Card.Content>
                                  <Card.Content extra>
                                    <div className='ui two buttons'>
                                      <Button className="ui mini blue basic button" onClick={() => this.props.startTimer(habit.id, habit)} basic color='red'>
                                        PROcrastinate
                                      </Button>
                                      <Button className="ui mini green basic button" onClick={() => this.props.onFFClick(habit.id)} basic color='green'>
                                        PROceed
                                      </Button>
                                    </div>
                                  </Card.Content>
                            </Card>
                          </div>
                      </div>
                    )
                  } else {
                      return null
                    }
                  })
                }
              </div>
          </div>
      );
  };
};

export default ProgressBarsContainer;

// 2021.06.13 - SUN: Confirmed final tests passing for all CRUD User Actions