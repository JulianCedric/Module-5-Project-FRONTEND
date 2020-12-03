import React from 'react';
import Create from './Create';
import ReadUpdateDelete from './ReadUpdateDelete';

const HABITS = ['a','b','c']

class Lab extends React.Component {
    state = {  
        habits: HABITS
    }

    deleteHabit = habitBeingDeleted => {
        console.log('HABIT BEING DELETED:', habitBeingDeleted)
        let newArr = this.state.habits.filter(habit => habit !== habitBeingDeleted)
        this.setState({habits: newArr})
    }

    handleEditFormSubmit = (oldHabit, newHabit) => {
        console.log('OLD HABIT:', oldHabit)
        console.log('NEW HABIT:', newHabit)
        let newArr = this.state.habits.filter(habit => habit !== oldHabit)
        this.setState({habits: [...newArr, newHabit]})
    }

    handleNewHabit = newHabit => {
        this.setState({habits: [...this.state.habits, newHabit]})
    }

    render() { 
        return (  
            <div style={{color: 'white'}}>

                <br></br>
                <p>CRUD</p>
                <br></br>

                <br></br>
                <p>C</p>
                <br></br>

                <Create handleNewHabit={this.handleNewHabit} hideCreateForm={this.hideCreateForm}/>

                <br></br>
                <p>R / U / D</p>
                <br></br>

                <ReadUpdateDelete deleteHabit={this.deleteHabit} habits={this.state.habits} handleEditFormSubmit={this.handleEditFormSubmit}/>

                <h1>2020.12.03 Notes: When user clicks Submit Changes button, the Edit Form should be hidden.</h1>

            </div>
        );
    }
}
 
export default Lab;