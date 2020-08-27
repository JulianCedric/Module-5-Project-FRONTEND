import React from 'react';
import ProgressBar from './ProgressBar';

class ProgressBarsContainer extends React.Component {
    state = {  }
    render() { 
        return (  
            <div className="ui centered grid">
                <h2>Progress Bars Container</h2>
                <div className="twelve wide column">
                    <ProgressBar />
                </div>
            </div>
        );
    }
}
 
export default ProgressBarsContainer;