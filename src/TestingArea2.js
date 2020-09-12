import React from 'react';
import { List, Segment } from 'semantic-ui-react';

const today = new Date()
const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate()

class TestingArea2 extends React.Component {
    render() { 
        let { habit_id, duration, startDate, endDate, active, stickified } = this.props.reminder
        return (  
            <div>
                <h3 className="mediumWhiteText">My Reminders</h3>
                <Segment inverted>
                    <List divided inverted relaxed>
                        <List.Item>
                            <List.Header>Habit ID: {habit_id}</List.Header>
                            <List.Content>Duration in Days: {duration}</List.Content>
                            <List.Content>Start Date: UNDER CONSTRUCTION | {date}</List.Content>
                            <List.Content>End Date: UNDER CONSTRUCTION | {date}</List.Content>
                        </List.Item>
                    </List>
                </Segment>
            </div>
        );
    };
};
 
export default TestingArea2;