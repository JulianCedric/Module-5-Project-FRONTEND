import React from 'react';
import ProgressBar from 'react-customizable-progressbar';
import { Button, Card, Progress } from 'semantic-ui-react';

class ProgressBarsContainer extends React.Component {
    render() {
        return (

            <div className="ui container">
                <hr /><br></br>
                <div class="ui three column grid">

                    {this.props.habits.map(habit => {
                        if( habit.counter > 0 && habit.counter < 21 ){
                            return(
                              <div class="column">
                                  <div class="ui segment">



<Card fluid color='green'>
  <Progress color='blue' value='3' total='5' progress='ratio' />
      <Card.Content textAlign='center'>
      <h3>DAY { habit.counter } / 21</h3>
      <div style={{ height: '75px' }} class="ui secondary segment" color="green">
      {/* <Segment color='green'></Segment> */}



        <Card.Header  >
          <h4>"{ habit.description }"</h4>
        </Card.Header>
        </div>

        <Card.Meta  style={{ height: '75px' }} >{ habit.quote }</Card.Meta>
        <Card.Description>


        <ProgressBar
                                          className="progress-bar"
                                          progress={ (habit.counter/21)*100 }
                                          radius={100}
                                          strokeColor='violet'
                                          strokeWidth={20}
                                      />        
        
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
                    })}

                </div>
                </div>

        );
    };
};

export default ProgressBarsContainer;
