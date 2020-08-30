import React from 'react';
import ProgressBar from 'react-customizable-progressbar'

class ProgressBarsContainer extends React.Component {
    render() { 
        let { stickifiedHabits } = this.props

        // console.log(stickifiedHabits)
        // console.log(stickifiedHabits[0])

        return (  

            <div className="ui container">
                <h2 className="mediumWhiteText" >Progress Bars Container</h2>
                    <p></p>
                    <br></br>
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

                        {/* <div class="column">
                            <div class="ui segment">
                                <h2>Habit 1</h2>
                                {stickifiedHabits[0]
                                ? 
                                <p>Description: {stickifiedHabits[0].description}</p>
                                : null
                                }


                                <p>{stickifiedHabits.first}</p>
                                <ProgressBar 
                                    className="progress-bar"
                                    progress={50}
                                    radius={100}
                                    strokeColor='violet'
                                    strokeWidth={20}
                                    // children={stickifiedHabits.first}
                                />
                            </div>
                        </div>
                        <div class="column">
                            <div class="ui segment">
                                <h2>Habit 2</h2>
                                <ProgressBar className="progress-bar"
                                    progress={50}
                                    radius={100}
                                    strokeColor='orange'
                                    strokeWidth={20}
                                    // pointerRadius={5}
                                    // pointerStrokeWidth={15}	
                                    // pointerStrokeColor='white'	
                                />
                            </div>
                        </div>
                        <div class="column">
                            <div class="ui segment">
                                <h2>Habit 3</h2>
                                <ProgressBar className="progress-bar"
                                    progress={75}
                                    radius={100}
                                    strokeColor='blue'
                                    strokeWidth={20}
                                />
                            </div>
                        </div>        */}

                </div>

            </div>

        );
    }
}
 
export default ProgressBarsContainer;


