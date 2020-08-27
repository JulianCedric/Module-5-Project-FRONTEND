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
                </div>





                <div class="ui three column centered grid">

                        <div class="column">
                            <h2>test_column1</h2>
                            <ProgressBar 
                                progress={50}
                                radius={100}
                                strokeColor='purple'
                                strokeWidth={30}
                            />
                        </div>
                        <div class="column">
                            <h2>test_column2</h2>
                            <ProgressBar 
                                progress={50}
                                radius={100}
                                strokeColor='orange'
                                strokeWidth={30}
                            />
                        </div>
                        <div class="column">
                            <h2>test_column3</h2>
                            <ProgressBar 
                                progress={50}
                                radius={100}
                                strokeColor='orange'
                                strokeWidth={30}
                            />
                        </div>
                    


                </div>

        );
    }
}
 
export default ProgressBarsContainer;


