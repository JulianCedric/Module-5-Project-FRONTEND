import React from 'react';
import { Button } from 'semantic-ui-react';

class Lab extends React.Component {
    state = {  
        habits: ['a','b','c']
    }
    render() { 
        return (  
            <div style={{color: 'white'}}>

                <br></br>
                <h2 style={{color:'white'}}>Lab</h2>
                <br></br>

                <p>All Habits:</p>
                <ul>{this.state.habits.map(habit => <li>{habit}</li>)}</ul>

                <Button primary>Add Habit</Button>

            </div>
        );
    }
}
 
export default Lab; 





// Create [[ search ]] functionality. 

// Create [[ sort ]] functionality. 

// Create [[ create new habit ]] form. 





// COMPLETED TASKS:

// Render a list of all habits. 