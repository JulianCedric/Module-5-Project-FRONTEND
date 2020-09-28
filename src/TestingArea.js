import React from 'react';
import { List, Segment } from 'semantic-ui-react';
import TestingArea2 from './TestingArea2';

const today = new Date()
const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate()

class TestingArea extends React.Component {
    state = {  }
    render() { 
        // console.log(this.props.reminders)
        return (  
            <div>
                <br></br>
                <h2 className="mediumWhiteText">Testing Area | {date}</h2>
                <br></br>

                    {this.props.reminders.map(reminder => <TestingArea2 key={reminder.id} reminder={reminder} />)}

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