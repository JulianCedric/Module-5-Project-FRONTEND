import React from 'react';
import Create from './Create';
import ReadUpdateDelete from './ReadUpdateDelete';

const HABITS = ['a','b','c']

class Lab extends React.Component {
    state = {  
        habits: HABITS
    }

    handleNewHabit = newHabit => {
        this.setState({habits: [...this.state.habits, newHabit]})
    }

    render() { 
        console.log(this.state.habits)
        return (  
            <div style={{color: 'white'}}>

                <br></br>
                <p>CRUD</p>
                <br></br>

                <br></br>
                <p>C</p>
                <br></br>

                <Create handleNewHabit={this.handleNewHabit}/>

                <br></br>
                <p>R / U / D</p>
                <br></br>

                <ReadUpdateDelete habits={this.state.habits}/>

            </div>
        );
    }
}
 
export default Lab;