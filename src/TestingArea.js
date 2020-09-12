import React from 'react';
import { List, Segment } from 'semantic-ui-react';
import TestingArea2 from './TestingArea2';

class TestingArea extends React.Component {
    state = {  }
    render() { 
        console.log(this.props.reminders)
        return (  
            <div>
                <br></br>
                <h2 className="mediumWhiteText">Testing Area</h2>
                <br></br>
                <h3 className="mediumWhiteText" >2020.09.12</h3>
                <br></br>
                <br></br>                
                <br></br>

                    {this.props.reminders.map(reminder => <TestingArea2 key={reminder.id} reminder={reminder} />)}

                <br></br>
                <br></br>
                <br></br>
                <br></br>                
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>                
                <br></br>
                <br></br>
                <br></br>
            </div>
        );
    }
}
 
export default TestingArea;