import React from 'react';
import ProgressBar from 'react-customizable-progressbar'

class ProgressBarsContainer extends React.Component {
    state = {  }
    render() { 
        return (  

            <div>
                <h2>Progress Bars Container</h2>
                <p></p>
                <br></br>
                
                <div class="ui center aligned three column grid">

                        <div class="column">
                            <div class="ui segment">
                                <h2>Habit 1</h2>
                                <ProgressBar className="progress-bar"
                                    progress={25}
                                    radius={100}
                                    strokeColor='violet'
                                    strokeWidth={20}
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
                        </div>

                </div>

            </div>

        );
    }
}
 
export default ProgressBarsContainer;


