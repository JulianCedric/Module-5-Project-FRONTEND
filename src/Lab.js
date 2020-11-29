import React from 'react';
import Create from './Create';
import Read from './Read';
import Update from './Update';
import Delete from './Delete';

const allHabits = ['a','b','c']

class Lab extends React.Component {
    state = {  
        habits: allHabits
    }

    handleNewHabit = newHabit => {
        this.setState({habits: [...this.state.habits, newHabit]})
    }

    render() { 
        console.log(allHabits)
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
                <p>R</p>
                <br></br>

                <Read habits={this.state.habits}/>

                <br></br>
                <p>U</p>
                <br></br>

                <Update />

                <br></br>
                <p>D</p>
                <br></br>

                <Delete />

            </div>
        );
    }
}
 
export default Lab;