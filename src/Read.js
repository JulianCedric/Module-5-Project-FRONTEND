import React from 'react';
import { Segment } from 'semantic-ui-react';

class Read extends React.Component {
    state = {  }
    render() { 
        console.log(this.props.habits)
        return (  
            <div>

                <Segment inverted>

                    <ul>{this.props.habits.map(habit => <li key={habit.id} habit={habit}>{habit}</li>)}</ul>

                </Segment>

            </div>
        );
    }
}
 
export default Read;