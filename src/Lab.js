import React from 'react';
import Create from './Create';
import ReadUpdateDelete from './ReadUpdateDelete';
import { Pagination } from 'semantic-ui-react';

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

    updateArrayWithUpdatedHabit = updatedHabit => {
        console.log('UPDATED HABIT:', updatedHabit)

        let newArr = this.state.habits.filter(habit => habit !== 'c')
        
        this.setState({habits: newArr})

        let newArr2 = [...newArr, updatedHabit]

        this.setState({habits: newArr2})
        
    }

    render() { 
        return (  
            <div style={{color: 'white'}}>

                <br></br>
                <p>CRUD PRACTICE</p>
                <br></br>

                <br></br>
                <p>C</p>
                <br></br>

                <Create handleNewHabit={this.handleNewHabit} hideCreateForm={this.hideCreateForm}/>

                <br></br>
                <p>R / U / D</p>
                <br></br>

                <ReadUpdateDelete deleteHabit={this.deleteHabit} habits={this.state.habits} updateArrayWithUpdatedHabit={this.updateArrayWithUpdatedHabit}/>

                <ul>
                    <li>2020.12.03 Notes: When user clicks Submit Change button, the Edit Form should be hidden.</li>  
                    <li>2020.12.04 Notes: Still haven't figured out how to engineer yesterday's task for today.</li> 
                    <li>2020.12.05 Notes: 'Brute Force' solution found for current problem.</li>
                </ul>

                <Pagination
                    boundaryRange={0}
                    defaultActivePage={1}
                    ellipsisItem={null}
                    firstItem={null}
                    lastItem={null}
                    siblingRange={1}
                    totalPages={10}
                />
        
            </div>
        );
    }
}
 
export default Lab;