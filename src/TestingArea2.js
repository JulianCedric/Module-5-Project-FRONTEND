import React from 'react';
import { List, Segment } from 'semantic-ui-react';

const today = new Date()
const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate()

class TestingArea2 extends React.Component {
    render() { 
        return (  
            <div>
                <h3 className="mediumWhiteText">My Habits</h3>
                <Segment inverted>
                    <List divided inverted relaxed>
                        <List.Item>
                            <List.Header>{this.props.habit}</List.Header>
                        </List.Item>
                    </List>
                </Segment>
            </div>
        );
    };
};
 
export default TestingArea2;