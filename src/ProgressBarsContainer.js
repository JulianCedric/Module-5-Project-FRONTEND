import React from 'react';
import ProgressBar from 'react-customizable-progressbar';
import { Button, Card, Grid, Image, Segment } from 'semantic-ui-react'



class ProgressBarsContainer extends React.Component {
    render() {
        let { stickifiedHabits } = this.props
        return (

            <div className="ui container">
                <hr />
                <div class="ui center aligned three column grid">

                    {this.props.habits.map(habit => {
                        if( habit.progress.counter > 0 && habit.progress.counter < 21 ){
                            return(
                              <div class="column">
                                  <div class="ui segment">



                                  <Card fluid color='green'>
      <Card.Content>
      <h3>DAY { habit.progress.counter } / 21</h3>
      <div class="ui secondary segment" color="green">
      {/* <Segment color='green'></Segment> */}



        <Card.Header>"{ habit.description }"</Card.Header>
        </div>

        <Card.Meta>"What's easy to do is also easy NOT to do." —JRohn</Card.Meta>
        <Card.Description>


        <ProgressBar
                                          className="progress-bar"
                                          progress={ (habit.progress.counter/21)*100 }
                                          radius={100}
                                          strokeColor='violet'
                                          strokeWidth={20}
                                      />        
        
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
         
        <Button className="ui mini blue basic button" onClick={() => this.props.startTimer(habit.id, habit.progress)} basic color='red'>
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
                    })}

                </div>
                </div>

        );
    };
};

export default ProgressBarsContainer;
