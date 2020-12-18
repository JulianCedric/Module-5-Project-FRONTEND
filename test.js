// 12/17: Lab.js

import React from 'react';
import Create from './Create';
import ReadUpdateDelete from './ReadUpdateDelete';
import { Dropdown, Pagination } from 'semantic-ui-react';

// const HABITS = [
//     { id: 1, name: 'a' },
//     { id: 2, name: 'b' },
//     { id: 3, name: 'c' }    
// ]

const HABITS = ['a','b','c']

class Lab extends React.Component {
    state = {  
        habits: HABITS
    }

    deleteHabit = (id, habitBeingDeleted) => {
        console.log('NAME OF HABIT BEING DELETED:', habitBeingDeleted)
        console.log('ID OF HABIT BEING DELETED:', id)
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

        let updatedObject = this.state.habits.find(habit => habit === updatedHabit)

        let copiedArr = [...this.state.habits]

        let updatedArr = copiedArr.map(habit => {
            if (habit === updatedHabit) {
                return updatedObject
            }
            return habit
        })
        this.setState({habits: updatedArr})
        console.log(this.state.habits)
        console.log(updatedArr)
    }

    render() { 
        console.log(HABITS[0])
        return (  
            <div style={{color: 'white'}}>

                <br></br>
                <p>CRUD PRACTICE</p>
                <br></br>

                <Dropdown inverted
                    placeholder='Select Habit'
                    fluid
                    selection
                    options={this.state.habits.map(habit => console.log(habit))}
                />

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

//

import React from 'react'
import { Pagination } from 'semantic-ui-react'

const PaginationExampleCompact = () => (
  <Pagination
    boundaryRange={0}
    defaultActivePage={1}
    ellipsisItem={null}
    firstItem={null}
    lastItem={null}
    siblingRange={1}
    totalPages={10}
  />
)

export default PaginationExampleCompact

//

import React from 'react';
import './App.css';
import Lab from './Lab';

class Home extends React.Component {
    render() { 
        return (  
            <div className="home-container" >
                
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>

                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>

                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>

                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>

                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>

                <br></br>
                <h2 style={{color:'white'}}>Lab</h2>
                <br></br>
                <Lab/>

                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>

                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>

                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>

                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>

                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>

                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>

                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>

                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>

                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>

            </div>
        );
    };
};
 
export default Home;

// 2020.12.05 - SAT - CRUD PRACTCE:

import React from 'react';
import './App.css';
import Lab from './Lab';

class Home extends React.Component {
    render() { 
        return (  
            <div className="home-container" >
                
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>

                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>

                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>

                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>

                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>

                <br></br>
                <h2 style={{color:'white'}}>Lab</h2>
                <br></br>
                <Lab/>

                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>

                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>

                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>

                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>

                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>

                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>

                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>

                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>

                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>

            </div>
        );
    };
};
 
export default Home;

// 2020.12.04 - FRI - CRUD PRACTICE:    

// USER ACTION:         ELEMENT:                    EVENT:                                                          CALLBACK ACTION:

// CREATE:                   
//                      FORM INPUT FIELD & BUTTON   ONCLICK                                                         NEWLY-CREATED DATA RENDERED ONTO DOM

// READ:                
//                      *COMPONENTDIDMOUNT*         *DATA AUTOMATICALLY RENDERED UPON PAGE LOAD*                    *DATA AUTOMATICALLY RENDERED ONTO DOM UPON PAGE LOAD*

// UPDATE:              
//                      BUTTON                      ONCLICK                                                         EDIT FORM & BUTTON RENDERED ONTO DOM    
//                      FORM INPUT FIELD & BUTTON   ONSUBMIT                                                        EDIT FORM & BUTTON HIDDEN FROM DOM -- AND -- UPDATED USER INPUT RENDERED ONTO DOM 

// DELETE:              
//                      BUTTON                      ONCLICK                                                         DATA DELETED FROM DATABASE 











    
































//














































# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all 
Habit.destroy_all
Reminder.destroy_all

User.create(id: 1, firstName: 'Brendon', lastName: 'Clark', email: 'bclark@email.com', username: 'bclark', password: 'abc123')

Habit.create(
    user_id: 1,
    name: '',
    description: 'Write 1 new thing I learned today in my journal before bedtime',
    quote: "'Practice isn't the thing you do once you're good. It's the thing you do that makes you good.' -Malcolm Gladwell",
    dateCreated: '',
    column: 'A',
    counter: 0,
    percentage: 0,
    dailyWinConfirmation: false
)

Habit.create(
    user_id: 1,
    name: '',
    description: 'Practice piano for at least 20 minutes',
    quote: "'Successful people are simply those with successful habits.' -Brian Tracy",
    dateCreated: '',
    column: 'A',
    counter: 0,
    percentage: 0,
    dailyWinConfirmation: false
)

Habit.create(
    user_id: 1,
    name: '',
    description: 'Read at least 3 pages of a fiction novel',
    quote: "'The world as we have created it is a process of our thinking. It cannot be changed without changing our thinking.' -Albert Einstein",
    dateCreated: '',
    column: 'A',
    counter: 0,
    percentage: 0,
    dailyWinConfirmation: false
)

Habit.create(
    user_id: 1,
    name: '',
    description: 'Water plants in my room!',
    quote: "'Drop by drop is the water pot filled.' -BUDDHA",
    dateCreated: '',
    column: 'A',
    counter: 20,
    percentage: 90.00,
    dailyWinConfirmation: false
)

Habit.create(
    user_id: 1,
    name: '',
    description: 'Drink 1 more glass of water today',
    quote: "'I fear not the man who has practiced 10,000 kicks, but I do fear the man who has practiced one kick 10,000 times.' -BRUCE LEE",
    dateCreated: '',
    column: 'A',
    counter: 7,
    percentage: 33.33,
    dailyWinConfirmation: false
)

Habit.create(
    user_id: 1,
    name: '',
    description: 'Make bed before morning jog',
    quote: "'The chains of habit are too weak to be felt until they are too strong to be broken.'   --Samuel Johnson",
    dateCreated: '',
    column: 'C',
    counter: 21,
    percentage: 100,
    dailyWinConfirmation: false
)

Habit.create(
    user_id: 1,
    name: '',
    description: 'Prep gym clothes next to bed the night before a work-out day',
    quote: "'Let today be the day you give up who you've been for who you can become.' -Hal Elrod",
    dateCreated: '',
    column: 'C',
    counter: 21,
    percentage: 100,
    dailyWinConfirmation: false
)

Habit.create(
    user_id: 1,
    name: '',
    description: 'Study / Practice Algorithms & Data Structures for at least an hour',
    quote: "'It's not what we do once in a while that shapes our lives, but what we do consistently.' -Tony Robbins",
    dateCreated: '',
    column: 'C',
    counter: 21,
    percentage: 100,
    dailyWinConfirmation: false
)

Reminder.create(habit_id: 1, duration: 21, startDate: 2020-8-25, endDate: 2020-9-15, stickifyd: false)

# 