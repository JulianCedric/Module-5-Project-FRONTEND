import React from 'react';
import ProgressBar from 'react-customizable-progressbar';

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
                                      <h3>{ habit.description }</h3>
                                      <h4>Day { habit.progress.counter } of 21 </h4>
                                      <ProgressBar
                                          className="progress-bar"
                                          progress={ (habit.progress.counter/21)*100 }
                                          radius={100}
                                          strokeColor='violet'
                                          strokeWidth={20}
                                      />
                                  </div>
                                      <button className="ui mini green basic button" onClick={() => this.props.onFFClick(habit.id)}>>></button>
                                      <button className="ui mini blue basic button" onClick={() => this.props.startTimer(habit.id, habit.progress)}>^^</button>
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
