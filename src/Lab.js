import React from 'react';
import './App.css';
import CreateHabit from './CreateHabit';

const API_USERS = 'http://localhost:3001/api/v1/users'
const API_HABITS = 'http://localhost:3001/api/v1/habits'
const API_REMINDERS = 'http://localhost:3001/api/v1/reminders'

class Lab extends React.Component {
    state = {  
        users: [],
        habits: [],
        reminders: []
    }

    componentDidMount = () => {
        fetch(API_USERS)
        .then(r => r.json())
        .then(usersData => this.setState({ users: usersData }))

        fetch(API_HABITS)
        .then(r => r.json())
        .then(habitsData => this.setState({ habits: habitsData }))

        fetch(API_REMINDERS)
        .then(r => r.json())
        .then(remindersData => this.setState({ reminders: remindersData }))
      }

    render() { 
        console.log("Users from DB:", this.state.users)
        console.log("Habits from DB:", this.state.habits)
        console.log("Reminders from DB:", this.state.reminders)
        return (  
            <div>
                <div className="ui centered grid">
                    <div className="twelve wide column">
                        <div className="dashboard">
                            <br/>
                                <h1 className="mediumWhiteText">Habits Management Dashboard</h1>
                            <br/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Lab;