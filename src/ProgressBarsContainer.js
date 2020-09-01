import React from 'react';
import ProgressBar from 'react-customizable-progressbar';

class ProgressBarsContainer extends React.Component {
    render() { 
        let { stickifiedHabits } = this.props
        return (  

            <div className="ui container">
                <h2 className="mediumWhiteText" >Progress Bars Container</h2><p></p><br></br>
                <div class="ui center aligned three column grid">
                    {this.props.habits.map(habit => 
                        <div class="column">
                            <div class="ui segment">
                                <h2>{ habit.description }</h2>
                                <h3>Day { habit.progress.counter } of 21 </h3>
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
                    )}
                </div>
            </div>
        );
    };
};
 
export default ProgressBarsContainer;


