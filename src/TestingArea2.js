import React from 'react';
import { List, Segment } from 'semantic-ui-react';

class TestingArea2 extends React.Component {
    render() { 
        let { habit_id, duration, startDate, endDate, active, stickified } = this.props.reminder
        return (  
            <div>
                <h4 className="mediumWhiteText" >Reminders</h4>
                <Segment inverted>

                    <List divided inverted relaxed>

                        <List.Item>
                            <List.Header>Habit ID: {habit_id}</List.Header>

                            <List.Content>Duration: {duration} Days</List.Content>
                            <List.Content>Start Date: {startDate}</List.Content>
                            <List.Content>End Date: {endDate}</List.Content>

                        </List.Item>

                    </List>

                </Segment>
            </div>
        );
    }
}
 
export default TestingArea2;